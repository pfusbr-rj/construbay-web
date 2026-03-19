import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kitchen Remodel Marin County | ConstruBay | CSLB #1106798",
  description:
    "Custom kitchen remodeling in Marin County. Full design-build, custom cabinets, permits handled. CSLB #1106798. Free estimate — (415) 968-9494.",
  alternates: {
    canonical: "https://www.construbay.com/services/kitchen-remodel-marin-county",
  },
  openGraph: {
    title: "Kitchen Remodel Marin County | ConstruBay | CSLB #1106798",
    description:
      "Custom kitchen remodeling in Marin County. Full design-build, custom cabinets, permits handled. CSLB #1106798. Free estimate — (415) 968-9494.",
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
