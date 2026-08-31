/**
 * Shared lead validation. Used by both the client forms and the API routes so
 * the rules cannot drift apart. Bots post straight to the API and skip the
 * browser entirely, so the server-side checks are the ones that actually matter.
 */

export const LOCATION_MIN_LENGTH = 3;

export const LOCATION_ERROR_MESSAGE =
  "Please enter the city or area where the project is located.";

/** True when the supplied location is present and long enough to be real. */
export function isValidLocation(value: unknown): value is string {
  return typeof value === "string" && value.trim().length >= LOCATION_MIN_LENGTH;
}

/** Returns an error message when the location is missing/too short, else null. */
export function getLocationError(value: unknown): string | null {
  return isValidLocation(value) ? null : LOCATION_ERROR_MESSAGE;
}
