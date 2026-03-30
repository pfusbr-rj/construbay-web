import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Home Addition Marin County | ConstruBay | CSLB #1106798",
  description:
    "Custom home additions in Marin County — primary suite wings, second stories & structural expansions. ConstruBay, CSLB #1106798, based in Mill Valley.",
  alternates: { canonical: "https://www.construbay.com/services/home-addition-marin-county" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
