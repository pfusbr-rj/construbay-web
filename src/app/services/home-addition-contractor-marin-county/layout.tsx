import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Addition Contractor Marin County | ConstruBay | CSLB #1106798",
  description:
    "Licensed home addition contractor in Marin County. Second stories, room additions, and bump-outs. Design-build approach, fully permitted. CSLB #1106798.",
  alternates: {
    canonical: "https://www.construbay.com/services/home-addition-contractor-marin-county",
  },
  openGraph: {
    title: "Home Addition Contractor Marin County | ConstruBay | CSLB #1106798",
    description:
      "Licensed home addition contractor in Marin County. Second stories, room additions, and bump-outs. Design-build approach, fully permitted. CSLB #1106798.",
    url: "https://www.construbay.com/services/home-addition-contractor-marin-county",
    type: "website",
  },
};

export default function HomeAdditionMarinLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
