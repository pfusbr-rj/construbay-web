import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "General Contractor Santa Rosa CA | ConstruBay | CSLB #1106798",
  description:
    "Licensed general contractor in Santa Rosa, CA. Post-fire rebuilding, whole house remodels, ADUs, and fire-resistant construction across Sonoma County. CSLB #1106798.",
  alternates: {
    canonical: "https://www.construbay.com/santa-rosa",
  },
  openGraph: {
    title: "General Contractor Santa Rosa CA | ConstruBay | CSLB #1106798",
    description:
      "Licensed general contractor in Santa Rosa, CA. Post-fire rebuilding, whole house remodels, ADUs, and fire-resistant construction. CSLB #1106798.",
    url: "https://www.construbay.com/santa-rosa",
    type: "website",
  },
};

export default function SantaRosaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
