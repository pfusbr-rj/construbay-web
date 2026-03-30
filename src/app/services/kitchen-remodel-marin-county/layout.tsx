import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Kitchen Remodel Marin County | ConstruBay | CSLB #1106798",
  description:
    "Bespoke luxury kitchen remodeling in Marin County. Custom millwork, imported stone, professional appliances. ConstruBay — CSLB #1106798, based in Mill Valley.",
  alternates: {
    canonical: "https://www.construbay.com/services/kitchen-remodel-marin-county",
  },
  openGraph: {
    title: "Luxury Kitchen Remodel Marin County | ConstruBay | CSLB #1106798",
    description:
      "Bespoke luxury kitchen remodeling in Marin County. Custom millwork, imported stone, professional appliances. ConstruBay — CSLB #1106798, based in Mill Valley.",
    url: "https://www.construbay.com/services/kitchen-remodel-marin-county",
    type: "website",
  },
};

export default function KitchenRemodelMarinLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
