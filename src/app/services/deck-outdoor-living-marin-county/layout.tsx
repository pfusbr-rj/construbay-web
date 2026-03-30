import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Deck & Outdoor Living Marin County | ConstruBay | CSLB #1106798",
  description:
    "Premium deck & outdoor living construction in Marin County. Ipe hardwood, outdoor kitchens, fire features & louvered pergolas. ConstruBay, CSLB #1106798.",
  alternates: { canonical: "https://www.construbay.com/services/deck-outdoor-living-marin-county" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
