import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "General Contractor Novato CA | ConstruBay | CSLB #1106798",
  description:
    "Licensed general contractor in Novato, CA. ADUs, home additions, and remodels across Marin County's largest city. Atendimento em Português. CSLB #1106798.",
  alternates: {
    canonical: "https://www.construbay.com/novato",
  },
  openGraph: {
    title: "General Contractor Novato CA | ConstruBay | CSLB #1106798",
    description:
      "Licensed general contractor in Novato, CA. ADUs, home additions, and remodels across Marin County's largest city. Atendimento em Português. CSLB #1106798.",
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
