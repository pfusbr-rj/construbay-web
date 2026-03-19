import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Whole House Remodel Marin County | ConstruBay | CSLB #1106798",
  description:
    "Full home remodels in Marin County. Structural, design-build, permits, luxury finishes. CSLB #1106798. Free consultation.",
  alternates: {
    canonical: "https://www.construbay.com/services/whole-house-remodel-marin-county",
  },
  openGraph: {
    title: "Whole House Remodel Marin County | ConstruBay | CSLB #1106798",
    description:
      "Full home remodels in Marin County. Structural, design-build, permits, luxury finishes. CSLB #1106798. Free consultation.",
    url: "https://www.construbay.com/services/whole-house-remodel-marin-county",
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
