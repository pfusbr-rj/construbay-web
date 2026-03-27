import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "General Contractor Petaluma CA | ConstruBay | CSLB #1106798",
  description:
    "Licensed general contractor in Petaluma, CA. ADUs, custom pools, farmhouse modern remodels, and new construction. CSLB #1106798. Serving Downtown, Westside, East Petaluma, and all Petaluma neighborhoods.",
  alternates: {
    canonical: "https://www.construbay.com/petaluma",
  },
  openGraph: {
    title: "General Contractor Petaluma CA | ConstruBay | CSLB #1106798",
    description:
      "Licensed general contractor in Petaluma, CA. ADUs, custom pools, farmhouse modern remodels. CSLB #1106798.",
    url: "https://www.construbay.com/petaluma",
    type: "website",
  },
};

export default function PetalumaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
