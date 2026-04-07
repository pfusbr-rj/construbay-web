/**
 * Shared Google Service Account JWT auth helper for Supabase Edge Functions.
 * Uses the Web Crypto API (available in Deno) to sign JWTs with RS256.
 */

interface ServiceAccount {
  client_email: string;
  private_key: string;
  token_uri: string;
}

interface TokenCache {
  accessToken: string;
  expiresAt: number;
}

// In-memory cache scoped to the function invocation
const tokenCache = new Map<string, TokenCache>();

/**
 * Converts a PEM-encoded private key string to a CryptoKey for RS256 signing.
 */
async function importPrivateKey(pem: string): Promise<CryptoKey> {
  // Strip PEM header/footer and whitespace
  const pemContents = pem
    .replace(/-----BEGIN PRIVATE KEY-----/, "")
    .replace(/-----END PRIVATE KEY-----/, "")
    .replace(/\s/g, "");

  const binaryDer = Uint8Array.from(atob(pemContents), (c) => c.charCodeAt(0));

  return await crypto.subtle.importKey(
    "pkcs8",
    binaryDer.buffer,
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["sign"]
  );
}

/**
 * Base64url-encodes a string or Uint8Array.
 */
function base64url(input: string | Uint8Array): string {
  let bytes: Uint8Array;
  if (typeof input === "string") {
    bytes = new TextEncoder().encode(input);
  } else {
    bytes = input;
  }
  const base64 = btoa(String.fromCharCode(...Array.from(bytes)));
  return base64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}

/**
 * Creates and signs a Google Service Account JWT for the given scopes.
 */
async function createJWT(
  serviceAccount: ServiceAccount,
  scopes: string[]
): Promise<string> {
  const now = Math.floor(Date.now() / 1000);
  const expiry = now + 3600; // 1 hour

  const header = { alg: "RS256", typ: "JWT" };
  const payload = {
    iss: serviceAccount.client_email,
    sub: serviceAccount.client_email,
    scope: scopes.join(" "),
    aud: serviceAccount.token_uri,
    iat: now,
    exp: expiry,
  };

  const headerB64 = base64url(JSON.stringify(header));
  const payloadB64 = base64url(JSON.stringify(payload));
  const signingInput = `${headerB64}.${payloadB64}`;

  const privateKey = await importPrivateKey(serviceAccount.private_key);
  const signature = await crypto.subtle.sign(
    "RSASSA-PKCS1-v1_5",
    privateKey,
    new TextEncoder().encode(signingInput)
  );

  const signatureB64 = base64url(new Uint8Array(signature));
  return `${signingInput}.${signatureB64}`;
}

/**
 * Exchanges a signed JWT assertion for a Google OAuth2 access token.
 */
async function exchangeJWTForToken(
  jwt: string,
  tokenUri: string
): Promise<{ access_token: string; expires_in: number }> {
  const body = new URLSearchParams({
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: jwt,
  });

  const response = await fetch(tokenUri, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to exchange JWT for token: ${response.status} ${error}`);
  }

  return await response.json();
}

/**
 * Returns a valid Google OAuth2 access token for the given scopes.
 * Uses the GOOGLE_SERVICE_ACCOUNT_JSON environment variable.
 * Caches the token for reuse within the same function invocation.
 */
export async function getGoogleAccessToken(scopes: string[]): Promise<string> {
  const cacheKey = scopes.sort().join(",");
  const cached = tokenCache.get(cacheKey);

  // Return cached token if still valid (with 60s buffer)
  if (cached && cached.expiresAt > Date.now() / 1000 + 60) {
    console.log("Using cached Google access token");
    return cached.accessToken;
  }

  const serviceAccountJson = Deno.env.get("GOOGLE_SERVICE_ACCOUNT_JSON");
  if (!serviceAccountJson) {
    throw new Error("GOOGLE_SERVICE_ACCOUNT_JSON environment variable is not set");
  }

  let serviceAccount: ServiceAccount;
  try {
    serviceAccount = JSON.parse(serviceAccountJson);
  } catch {
    throw new Error("GOOGLE_SERVICE_ACCOUNT_JSON is not valid JSON");
  }

  if (!serviceAccount.client_email || !serviceAccount.private_key || !serviceAccount.token_uri) {
    throw new Error("GOOGLE_SERVICE_ACCOUNT_JSON is missing required fields: client_email, private_key, token_uri");
  }

  console.log(`Requesting Google access token for: ${serviceAccount.client_email}`);

  const jwt = await createJWT(serviceAccount, scopes);
  const tokenResponse = await exchangeJWTForToken(jwt, serviceAccount.token_uri);

  const expiresAt = Math.floor(Date.now() / 1000) + tokenResponse.expires_in;
  tokenCache.set(cacheKey, {
    accessToken: tokenResponse.access_token,
    expiresAt,
  });

  console.log("Successfully obtained Google access token");
  return tokenResponse.access_token;
}
