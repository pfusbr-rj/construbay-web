import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Bathroom Remodel Marin County | ConstruBay | CSLB #1106798",
  description:
    "Spa-grade luxury bathroom remodeling in Marin County. Heated stone floors, custom steam showers, architectural lighting. ConstruBay — CSLB #1106798, Mill Valley.",
  alternates: {
    canonical: "https://www.construbay.com/services/bathroom-remodel-marin-county",
  },
  openGraph: {
    title: "Luxury Bathroom Remodel Marin County | ConstruBay | CSLB #1106798",
    description:
      "Spa-grade luxury bathroom remodeling in Marin County. Heated stone floors, custom steam showers, architectural lighting. ConstruBay — CSLB #1106798, Mill Valley.",
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
