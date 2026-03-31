import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "General Contractor San Rafael CA | ConstruBay | CSLB #1106798",
  description:
    "Licensed general contractor in San Rafael, CA. ADUs, home additions, remodels, and new construction. Streamlined permitting at Marin County's seat. CSLB #1106798.",
  alternates: {
    canonical: "https://www.construbay.com/san-rafael",
  },
  openGraph: {
    title: "General Contractor San Rafael CA | ConstruBay | CSLB #1106798",
    description:
      "Licensed general contractor in San Rafael, CA. ADUs, home additions, remodels, and new construction. Streamlined permitting at Marin County's seat. CSLB #1106798.",
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
