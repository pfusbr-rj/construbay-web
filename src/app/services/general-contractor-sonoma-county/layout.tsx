import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "General Contractor Sonoma County | ConstruBay | CSLB #1106798",
  description:
    "ConstruBay serves Sonoma County — Petaluma, Santa Rosa, Sebastopol, Sonoma. Remodels, ADUs, pools. CSLB #1106798.",
  alternates: {
    canonical: "https://www.construbay.com/services/general-contractor-sonoma-county",
  },
  openGraph: {
    title: "General Contractor Sonoma County | ConstruBay | CSLB #1106798",
    description:
      "ConstruBay serves Sonoma County — Petaluma, Santa Rosa, Sebastopol, Sonoma. Remodels, ADUs, pools. CSLB #1106798.",
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
