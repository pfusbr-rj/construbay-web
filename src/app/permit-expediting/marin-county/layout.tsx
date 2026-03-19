import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Permit Expediting Marin County | PlanPass.ai + ConstruBay",
  description:
    "AI-powered permit expediting for all Marin County cities. PlanPass.ai technology reduces timelines by weeks. Architect partnerships. ConstruBay CSLB #1106798.",
  alternates: {
    canonical: "https://www.construbay.com/permit-expediting/marin-county",
  },
  openGraph: {
    title: "Permit Expediting Marin County | PlanPass.ai + ConstruBay",
    description:
      "AI-powered permit expediting for all Marin County cities. PlanPass.ai technology reduces timelines by weeks. Architect partnerships. ConstruBay CSLB #1106798.",
    url: "https://www.construbay.com/permit-expediting/marin-county",
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
