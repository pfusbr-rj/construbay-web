"use client";

import { useEffect } from "react";
import { firePhoneClickConversion } from "@/lib/gtag";

/**
 * Attaches a single delegated click listener to the document that fires the
 * Google Ads phone-click conversion whenever a visitor clicks any
 * tel:4159689494 link — header, footer, mobile CTA bar, blog posts, etc.
 *
 * Mount once in the root layout. Zero per-component changes needed.
 */
export default function PhoneClickTracker() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = (e.target as Element).closest("a");
      if (target?.href?.replace(/\s/g, "").toLowerCase() === "tel:4159689494") {
        firePhoneClickConversion();
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
