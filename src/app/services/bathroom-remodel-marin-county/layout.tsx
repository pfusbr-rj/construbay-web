import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bathroom Remodel Marin County | ConstruBay | CSLB #1106798",
  description:
    "Custom bathroom remodeling in Marin County. Luxury finishes, walk-in showers, freestanding tubs, fully permitted. CSLB #1106798. Free estimate.",
  alternates: {
    canonical: "https://www.construbay.com/services/bathroom-remodel-marin-county",
  },
  openGraph: {
    title: "Bathroom Remodel Marin County | ConstruBay | CSLB #1106798",
    description:
      "Custom bathroom remodeling in Marin County. Luxury finishes, walk-in showers, freestanding tubs, fully permitted. CSLB #1106798. Free estimate.",
    url: "https://www.construbay.com/services/bathroom-remodel-marin-county",
    type: "website",
  },
};

export default function BathroomRemodelMarinLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
