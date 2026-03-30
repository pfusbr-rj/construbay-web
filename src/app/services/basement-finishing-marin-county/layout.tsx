import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Basement Finishing Marin County | ConstruBay | CSLB #1106798",
  description:
    "Custom basement finishing in Marin County — wine cellars, home theaters & wellness retreats. ConstruBay, CSLB #1106798, based in Mill Valley, CA.",
  alternates: { canonical: "https://www.construbay.com/services/basement-finishing-marin-county" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
