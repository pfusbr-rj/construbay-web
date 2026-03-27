import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "General Contractor San Rafael CA | ConstruBay | CSLB #1106798",
  description:
    "Licensed general contractor in San Rafael, CA. ADUs, home additions, remodels, and new construction. Marin County seat with streamlined permitting. CSLB #1106798. Serving Dominican, Terra Linda, and all San Rafael neighborhoods.",
  alternates: {
    canonical: "https://www.construbay.com/san-rafael",
  },
  openGraph: {
    title: "General Contractor San Rafael CA | ConstruBay | CSLB #1106798",
    description:
      "Licensed general contractor in San Rafael, CA. ADUs, home additions, remodels, and new construction. CSLB #1106798.",
    url: "https://www.construbay.com/san-rafael",
    type: "website",
  },
};

export default function SanRafaelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
