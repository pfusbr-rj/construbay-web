import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Roofing Contractor Marin County | ConstruBay | CSLB #1106798",
  description:
    "Premium roofing installation in Marin County — slate, standing seam metal, clay & concrete tile. ConstruBay, licensed roofing contractor, CSLB #1106798.",
  alternates: { canonical: "https://www.construbay.com/services/roofing-marin-county" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
