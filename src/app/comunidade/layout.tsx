import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Empreiteiro em Marin County | ConstruBay | CSLB #1106798",
  description:
    "ConstruBay atende a comunidade brasileira em Marin e Sonoma County. Reformas, ADUs, piscinas, cozinhas. Fale conosco em Português — (415) 968-9494. CSLB #1106798.",
  alternates: {
    canonical: "https://www.construbay.com/comunidade",
  },
  openGraph: {
    title: "Empreiteiro em Marin County | ConstruBay | CSLB #1106798",
    description:
      "Atendimento em Português para a comunidade brasileira. Reformas residenciais, ADUs, piscinas. CSLB #1106798.",
  },
};

export default function ComunidadeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
