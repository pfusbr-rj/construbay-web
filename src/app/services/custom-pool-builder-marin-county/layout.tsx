import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Pool Builder Marin County | ConstruBay | CSLB #1106798",
  description:
    "Custom pool design and construction in Marin and Sonoma County. Vanishing edges, natural stone, full engineering and permits included. CSLB #1106798.",
  alternates: {
    canonical: "https://www.construbay.com/services/custom-pool-builder-marin-county",
  },
  openGraph: {
    title: "Custom Pool Builder Marin County | ConstruBay | CSLB #1106798",
    description:
      "Custom pool design and construction in Marin and Sonoma County. Vanishing edges, natural stone, full engineering and permits included. CSLB #1106798.",
    url: "https://www.construbay.com/services/custom-pool-builder-marin-county",
    type: "website",
  },
};

export default function CustomPoolBuilderMarinLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
