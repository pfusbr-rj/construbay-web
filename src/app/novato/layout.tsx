import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "General Contractor Novato CA | ConstruBay | CSLB #1106798",
  description:
    "Licensed general contractor in Novato, CA. ADUs, home additions, and remodels. Most affordable city in Marin County. Atendimento em Portugues. CSLB #1106798. Serving Hamilton, Bel Marin Keys, and all Novato neighborhoods.",
  alternates: {
    canonical: "https://www.construbay.com/novato",
  },
  openGraph: {
    title: "General Contractor Novato CA | ConstruBay | CSLB #1106798",
    description:
      "Licensed general contractor in Novato, CA. ADUs, home additions, and remodels. Atendimento em Portugues. CSLB #1106798.",
    url: "https://www.construbay.com/novato",
    type: "website",
  },
};

export default function NovatoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
