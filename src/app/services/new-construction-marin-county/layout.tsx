import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Home Construction Marin County | ConstruBay | CSLB #1106798",
  description:
    "ConstruBay builds architect-designed custom homes in Marin County. Ground-up estate construction, structural & MEP coordination. Licensed GC, CSLB #1106798. Mill Valley.",
  alternates: {
    canonical: "https://www.construbay.com/services/new-construction-marin-county",
  },
  openGraph: {
    title: "Custom Home Construction Marin County | ConstruBay | CSLB #1106798",
    description:
      "ConstruBay builds architect-designed custom homes in Marin County. Ground-up estate construction, structural & MEP coordination. Licensed GC, CSLB #1106798. Mill Valley.",
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
