/**
 * Shared Supabase admin client for Edge Functions.
 * Uses the service role key for full database access (bypasses RLS).
 */

import { createClient, SupabaseClient } from "https://esm.sh/@supabase/supabase-js@2";

let _client: SupabaseClient | null = null;

/**
 * Returns a Supabase admin client initialized from environment variables.
 * Reuses the same client instance within a function invocation.
 */
export function getSupabaseClient(): SupabaseClient {
  if (_client) return _client;

  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

  if (!supabaseUrl) {
    throw new Error("SUPABASE_URL environment variable is not set");
  }
  if (!serviceRoleKey) {
    throw new Error("SUPABASE_SERVICE_ROLE_KEY environment variable is not set");
  }

  _client = createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });

  return _client;
}
