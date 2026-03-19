import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "General Contractor Sebastopol CA | ConstruBay | CSLB #1106798",
  description:
    "Licensed general contractor in Sebastopol. Eco-friendly builds, rural construction, well and septic expertise. West Sonoma County. CSLB #1106798.",
  alternates: {
    canonical: "https://www.construbay.com/general-contractor/sebastopol",
  },
  openGraph: {
    title: "General Contractor Sebastopol CA | ConstruBay | CSLB #1106798",
    description:
      "Licensed general contractor in Sebastopol. Eco-friendly builds, rural construction, well and septic expertise. West Sonoma County. CSLB #1106798.",
    url: "https://www.construbay.com/general-contractor/sebastopol",
    type: "website",
  },
};

export default function GeneralContractorSebastopolLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
