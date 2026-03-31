import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "General Contractor Sebastopol CA | ConstruBay | CSLB #1106798",
  description:
    "Licensed general contractor in Sebastopol, CA. Eco-friendly builds, ADUs, whole house remodels, and rural construction in West Sonoma County. CSLB #1106798.",
  alternates: {
    canonical: "https://www.construbay.com/sebastopol",
  },
  openGraph: {
    title: "General Contractor Sebastopol CA | ConstruBay | CSLB #1106798",
    description:
      "Licensed general contractor in Sebastopol, CA. Eco-friendly builds, ADUs, whole house remodels, and rural construction. CSLB #1106798.",
    url: "https://www.construbay.com/sebastopol",
    type: "website",
  },
};

export default function SebastopolLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
