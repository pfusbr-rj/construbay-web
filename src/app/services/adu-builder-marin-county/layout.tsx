import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ADU Builder Marin County | ConstruBay | CSLB #1106798",
  description:
    "Build an ADU in Marin County with ConstruBay. Garage conversions, detached ADUs, hillside units. AI permit planning via PlanPass.ai. CSLB #1106798.",
  alternates: {
    canonical: "https://www.construbay.com/services/adu-builder-marin-county",
  },
  openGraph: {
    title: "ADU Builder Marin County | ConstruBay | CSLB #1106798",
    description:
      "Build an ADU in Marin County with ConstruBay. Garage conversions, detached ADUs, hillside units. AI permit planning via PlanPass.ai. CSLB #1106798.",
    url: "https://www.construbay.com/services/adu-builder-marin-county",
    type: "website",
  },
};

export default function AduMarinLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
