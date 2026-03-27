import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kitchen Remodel Tiburon CA | ConstruBay | CSLB #1106798",
  description:
    "Luxury kitchen remodeling in Tiburon and Belvedere Island. Waterfront views, bay windows, estate-level finishes. Licensed GC CSLB #1106798.",
  alternates: {
    canonical: "https://www.construbay.com/kitchen-remodel/tiburon",
  },
  openGraph: {
    title: "Kitchen Remodel Tiburon CA | ConstruBay | CSLB #1106798",
    description:
      "Luxury kitchen remodeling in Tiburon and Belvedere Island. Waterfront views, bay windows, estate-level finishes. Licensed GC CSLB #1106798.",
    url: "https://www.construbay.com/kitchen-remodel/tiburon",
    type: "website",
  },
};

export default function KitchenRemodelTiburonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
