import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Permit Risk Report Marin County | PlanPass.ai + ConstruBay",
  description:
    "AI-powered permit risk analysis for Marin and Sonoma County projects. Avoid 3 to 6 month delays. Free report. ConstruBay CSLB #1106798.",
  alternates: {
    canonical: "https://www.construbay.com/permit-risk-report",
  },
  openGraph: {
    title: "Permit Risk Report Marin County | PlanPass.ai + ConstruBay",
    description:
      "AI-powered permit risk analysis for Marin and Sonoma County projects. Avoid 3 to 6 month delays. Free report. ConstruBay CSLB #1106798.",
    url: "https://www.construbay.com/permit-risk-report",
    type: "website",
  },
};

export default function PermitRiskReportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
