import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "General Contractor Mill Valley CA | ConstruBay | CSLB #1106798",
  description:
    "Licensed general contractor in Mill Valley with 10+ years experience. ADUs, kitchens, whole house remodels, additions. CSLB #1106798.",
  alternates: {
    canonical: "https://www.construbay.com/general-contractor/mill-valley",
  },
  openGraph: {
    title: "General Contractor Mill Valley CA | ConstruBay | CSLB #1106798",
    description:
      "Licensed general contractor in Mill Valley with 10+ years experience. ADUs, kitchens, whole house remodels, additions. CSLB #1106798.",
    url: "https://www.construbay.com/general-contractor/mill-valley",
    type: "website",
  },
};

export default function GeneralContractorMillValleyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
