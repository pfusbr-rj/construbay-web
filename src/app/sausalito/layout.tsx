import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "General Contractor Sausalito CA | ConstruBay | CSLB #1106798",
  description:
    "Licensed general contractor in Sausalito, CA. Historic home renovations, waterfront properties, kitchen and bathroom remodels, and permit expediting. CSLB #1106798.",
  alternates: {
    canonical: "https://www.construbay.com/sausalito",
  },
  openGraph: {
    title: "General Contractor Sausalito CA | ConstruBay | CSLB #1106798",
    description:
      "Licensed general contractor in Sausalito, CA. Historic home renovations, waterfront properties, bathroom and kitchen remodels. CSLB #1106798.",
    url: "https://www.construbay.com/sausalito",
    type: "website",
  },
};

export default function SausalitoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
