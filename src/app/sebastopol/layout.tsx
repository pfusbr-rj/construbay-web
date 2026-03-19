import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "General Contractor Sebastopol CA | ConstruBay | CSLB #1106798",
  description:
    "Licensed general contractor in Sebastopol, CA. Eco-friendly builds, ADUs, whole house remodels, and rural construction. CSLB #1106798. Serving Downtown Sebastopol, Graton, Freestone, and all West Sonoma County.",
  alternates: {
    canonical: "https://www.construbay.com/sebastopol",
  },
  openGraph: {
    title: "General Contractor Sebastopol CA | ConstruBay | CSLB #1106798",
    description:
      "Licensed general contractor in Sebastopol, CA. Eco-friendly builds, ADUs, whole house remodels. CSLB #1106798.",
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
