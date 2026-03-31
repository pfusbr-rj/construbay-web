import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ADU Builder Sonoma County | ConstruBay | CSLB #1106798",
  description:
    "Build a fully permitted ADU in Sonoma County. Petaluma, Santa Rosa, and Sebastopol. Full design, permit navigation, and expert ADU construction. CSLB #1106798.",
  alternates: {
    canonical: "https://www.construbay.com/services/adu-builder-sonoma-county",
  },
  openGraph: {
    title: "ADU Builder Sonoma County | ConstruBay | CSLB #1106798",
    description:
      "Build a fully permitted ADU in Sonoma County. Petaluma, Santa Rosa, and Sebastopol. Full design, permit navigation, and expert ADU construction. CSLB #1106798.",
    url: "https://www.construbay.com/services/adu-builder-sonoma-county",
    type: "website",
  },
};

export default function AduSonomaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
