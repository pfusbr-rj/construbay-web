import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kitchen Remodel Mill Valley CA | ConstruBay | CSLB #1106798",
  description:
    "Kitchen remodeling in Mill Valley. Indoor-outdoor designs, hillside home expertise, custom cabinetry, open concept layouts. Licensed GC CSLB #1106798.",
  alternates: {
    canonical: "https://www.construbay.com/kitchen-remodel/mill-valley",
  },
  openGraph: {
    title: "Kitchen Remodel Mill Valley CA | ConstruBay | CSLB #1106798",
    description:
      "Kitchen remodeling in Mill Valley. Indoor-outdoor designs, hillside home expertise, custom cabinetry, open concept layouts. Licensed GC CSLB #1106798.",
    url: "https://www.construbay.com/kitchen-remodel/mill-valley",
    type: "website",
  },
};

export default function KitchenRemodelMillValleyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
