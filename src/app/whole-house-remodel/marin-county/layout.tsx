import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Whole House Remodel Marin County | ConstruBay | CSLB #1106798",
  description:
    "Whole house remodeling across Marin County. Seismic upgrades, WUI compliance, luxury finishes. Mill Valley, Tiburon, Sausalito. CSLB #1106798.",
  alternates: {
    canonical: "https://www.construbay.com/whole-house-remodel/marin-county",
  },
  openGraph: {
    title: "Whole House Remodel Marin County | ConstruBay | CSLB #1106798",
    description:
      "Whole house remodeling across Marin County. Seismic upgrades, WUI compliance, luxury finishes. Mill Valley, Tiburon, Sausalito. CSLB #1106798.",
    url: "https://www.construbay.com/whole-house-remodel/marin-county",
    type: "website",
  },
};

export default function WholeHouseRemodelMarinLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
