import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Whole Home Remodel Marin County | ConstruBay | CSLB #1106798",
  description:
    "Complete whole-home remodeling in Marin County. Structural, mechanical & aesthetic systems rebuilt to modern luxury standards. CSLB #1106798, based in Mill Valley.",
  alternates: {
    canonical: "https://www.construbay.com/services/whole-house-remodel-marin-county",
  },
  openGraph: {
    title: "Whole Home Remodel Marin County | ConstruBay | CSLB #1106798",
    description:
      "Complete whole-home remodeling in Marin County. Structural, mechanical & aesthetic systems rebuilt to modern luxury standards. CSLB #1106798, based in Mill Valley.",
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
