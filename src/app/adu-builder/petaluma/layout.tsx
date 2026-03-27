import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ADU Builder Petaluma CA | ConstruBay | CSLB #1106798",
  description:
    "Affordable ADU construction in Petaluma. Farmhouse aesthetics, septic-compatible designs, rental income optimization. Licensed GC CSLB #1106798.",
  alternates: {
    canonical: "https://www.construbay.com/adu-builder/petaluma",
  },
  openGraph: {
    title: "ADU Builder Petaluma CA | ConstruBay | CSLB #1106798",
    description:
      "Affordable ADU construction in Petaluma. Farmhouse aesthetics, septic-compatible designs, rental income optimization. Licensed GC CSLB #1106798.",
    url: "https://www.construbay.com/adu-builder/petaluma",
    type: "website",
  },
};

export default function AduBuilderPetalumaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
