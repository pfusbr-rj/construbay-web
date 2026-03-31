import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "General Contractor Sonoma County | ConstruBay | CSLB #1106798",
  description:
    "Licensed general contractor serving Sonoma County. Petaluma, Santa Rosa, Sebastopol, and Sonoma. Full home remodels, ADUs, and outdoor living. CSLB #1106798.",
  alternates: {
    canonical: "https://www.construbay.com/services/general-contractor-sonoma-county",
  },
  openGraph: {
    title: "General Contractor Sonoma County | ConstruBay | CSLB #1106798",
    description:
      "Licensed general contractor serving Sonoma County. Petaluma, Santa Rosa, Sebastopol, and Sonoma. Full home remodels, ADUs, and outdoor living. CSLB #1106798.",
    url: "https://www.construbay.com/services/general-contractor-sonoma-county",
    type: "website",
  },
};

export default function GeneralContractorSonomaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
