import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Construction Services Marin County | ConstruBay | CSLB #1106798",
  description: "ConstruBay offers luxury home construction, remodeling & specialty services across Marin County. Custom builds, kitchen & bath, ADU, and more. CSLB #1106798.",
  alternates: {
    canonical: "https://www.construbay.com/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
