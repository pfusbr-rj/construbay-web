import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "General Contractor Sonoma CA | ConstruBay | CSLB #1106798",
  description:
    "Licensed general contractor in Sonoma, CA. Wine country homes, custom pools, outdoor kitchens, ADUs, and guest houses. CSLB #1106798. Serving Sonoma Plaza, Glen Ellen, Boyes Hot Springs, and all Sonoma Valley.",
  alternates: {
    canonical: "https://www.construbay.com/sonoma",
  },
  openGraph: {
    title: "General Contractor Sonoma CA | ConstruBay | CSLB #1106798",
    description:
      "Licensed general contractor in Sonoma, CA. Wine country homes, custom pools, outdoor kitchens, ADUs, and guest houses. CSLB #1106798.",
    url: "https://www.construbay.com/sonoma",
    type: "website",
  },
};

export default function SonomaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
