import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "General Contractor Marin County | ConstruBay | CSLB #1106798",
  description:
    "Licensed general contractor in Marin County. Whole home remodels, ADUs, custom pools, and additions. Fixed-scope contracts. CSLB #1106798. Call (415) 968-9494.",
  alternates: {
    canonical: "https://www.construbay.com/services/general-contractor-marin-county",
  },
  openGraph: {
    title: "General Contractor Marin County | ConstruBay | CSLB #1106798",
    description:
      "Licensed general contractor in Marin County. Whole home remodels, ADUs, custom pools, and additions. Fixed-scope contracts. CSLB #1106798. Call (415) 968-9494.",
    url: "https://www.construbay.com/services/general-contractor-marin-county",
    type: "website",
  },
};

export default function GeneralContractorMarinLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
