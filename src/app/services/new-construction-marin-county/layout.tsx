import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Home Construction Marin County | ConstruBay | CSLB #1106798",
  description:
    "Architect-designed custom home construction in Marin County. Ground-up estate builds with full structural and MEP coordination. Licensed GC, CSLB #1106798.",
  alternates: {
    canonical: "https://www.construbay.com/services/new-construction-marin-county",
  },
  openGraph: {
    title: "Custom Home Construction Marin County | ConstruBay | CSLB #1106798",
    description:
      "Architect-designed custom home construction in Marin County. Ground-up estate builds with full structural and MEP coordination. Licensed GC, CSLB #1106798.",
    url: "https://www.construbay.com/services/new-construction-marin-county",
    type: "website",
  },
};

export default function NewConstructionMarinLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
