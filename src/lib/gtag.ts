/**
 * Google Ads Conversion Tracking
 *
 * After completing Google Ads setup (Phases 0–7), paste your conversion labels here:
 *
 *   Option A — .env.local (recommended):
 *     NEXT_PUBLIC_GADS_FORM_CONVERSION=AW-6807667762/XXXXXXXXXXXX
 *     NEXT_PUBLIC_GADS_PHONE_CLICK_CONVERSION=AW-6807667762/XXXXXXXXXXXX
 *
 *   Option B — hardcode directly in GADS_CONVERSION below.
 *
 * Find labels in Google Ads → Tools → Conversions → click a conversion action → Tag setup.
 */

export const GADS_CONVERSION = {
  // Conversion Action 1: Contact Form Submission ($500 value)
  formSubmit:
    process.env.NEXT_PUBLIC_GADS_FORM_CONVERSION ?? "AW-REPLACE_ME/REPLACE_ME",

  // Conversion Action 3: Website Phone Number Click ($400 value)
  // Note: Conversion Action 2 (Phone Call from Ad) fires automatically via the
  // call extension — no code needed for that one.
  phoneClick:
    process.env.NEXT_PUBLIC_GADS_PHONE_CLICK_CONVERSION ?? "AW-REPLACE_ME/REPLACE_ME",
} as const;

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag: (...args: any[]) => void;
  }
}

/** Fire when the /request-a-bid form submits successfully. */
export function fireFormSubmitConversion(): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", "conversion", {
    send_to: GADS_CONVERSION.formSubmit,
    value: 500.0,
    currency: "USD",
  });
}

/** Fire when a visitor clicks any tel:4159689494 link. */
export function firePhoneClickConversion(): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", "conversion", {
    send_to: GADS_CONVERSION.phoneClick,
    value: 400.0,
    currency: "USD",
  });
}
