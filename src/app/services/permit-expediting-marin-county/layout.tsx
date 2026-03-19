import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Permit Expediting Marin County | PlanPass.ai + ConstruBay | CSLB #1106798",
  description:
    "Speed up your Marin County construction permits. AI-powered plan review by PlanPass.ai. Avoid 3-6 month delays. ConstruBay CSLB #1106798.",
  alternates: {
    canonical: "https://www.construbay.com/services/permit-expediting-marin-county",
  },
  openGraph: {
    title: "Permit Expediting Marin County | PlanPass.ai + ConstruBay | CSLB #1106798",
    description:
      "Speed up your Marin County construction permits. AI-powered plan review by PlanPass.ai. Avoid 3-6 month delays. ConstruBay CSLB #1106798.",
    url: "https://www.construbay.com/services/permit-expediting-marin-county",
    type: "website",
  },
};

export default function PermitExpeditingMarinLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
