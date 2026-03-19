import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "General Contractor Tiburon CA | ConstruBay | CSLB #1106798",
  description:
    "Licensed general contractor in Tiburon, CA. Waterfront estates, bay view remodels, custom pools, and luxury kitchen renovations. CSLB #1106798. Serving Belvedere Island, Paradise Cay, and all Tiburon neighborhoods.",
  alternates: {
    canonical: "https://www.construbay.com/tiburon",
  },
  openGraph: {
    title: "General Contractor Tiburon CA | ConstruBay | CSLB #1106798",
    description:
      "Licensed general contractor in Tiburon, CA. Waterfront estates, bay view remodels, custom pools, and luxury kitchen renovations. CSLB #1106798.",
    url: "https://www.construbay.com/tiburon",
    type: "website",
  },
};

export default function TiburonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
