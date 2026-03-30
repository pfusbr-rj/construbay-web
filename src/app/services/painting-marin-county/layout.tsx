import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Painting Contractor Marin County | ConstruBay | CSLB #1106798",
  description:
    "Museum-grade interior & exterior painting in Marin County. Master painter execution, surface prep & premium finishes. ConstruBay, CSLB #1106798, Mill Valley.",
  alternates: { canonical: "https://www.construbay.com/services/painting-marin-county" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
