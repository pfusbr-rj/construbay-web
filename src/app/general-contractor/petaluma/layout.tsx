import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "General Contractor Petaluma CA | ConstruBay | CSLB #1106798",
  description:
    "Licensed general contractor in Petaluma. Farmhouse-modern remodels, ADUs, new construction, and outdoor living. Sonoma County permit expertise. CSLB #1106798.",
  alternates: {
    canonical: "https://www.construbay.com/general-contractor/petaluma",
  },
  openGraph: {
    title: "General Contractor Petaluma CA | ConstruBay | CSLB #1106798",
    description:
      "Licensed general contractor in Petaluma. Farmhouse-modern remodels, ADUs, new construction, and outdoor living. Sonoma County permit expertise. CSLB #1106798.",
    url: "https://www.construbay.com/general-contractor/petaluma",
    type: "website",
  },
};

export default function GeneralContractorPetalumaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
