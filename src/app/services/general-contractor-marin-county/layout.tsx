import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "General Contractor Marin County | ConstruBay | CSLB #1106798",
  description:
    "ConstruBay is a licensed general contractor serving Marin County. Remodels, ADUs, pools, custom homes. CSLB #1106798. Free consultation — (415) 968-9494.",
  alternates: {
    canonical: "https://www.construbay.com/services/general-contractor-marin-county",
  },
  openGraph: {
    title: "General Contractor Marin County | ConstruBay | CSLB #1106798",
    description:
      "ConstruBay is a licensed general contractor serving Marin County. Remodels, ADUs, pools, custom homes. CSLB #1106798. Free consultation — (415) 968-9494.",
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
