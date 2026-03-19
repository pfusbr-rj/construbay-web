import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "General Contractor Mill Valley CA | ConstruBay | CSLB #1106798",
  description:
    "Licensed general contractor in Mill Valley, CA. Hillside construction, ADUs, kitchen remodels, and whole house renovations. CSLB #1106798. Serving Tam Valley, Blithedale Canyon, and all Mill Valley neighborhoods.",
  alternates: {
    canonical: "https://www.construbay.com/mill-valley",
  },
  openGraph: {
    title: "General Contractor Mill Valley CA | ConstruBay | CSLB #1106798",
    description:
      "Licensed general contractor in Mill Valley, CA. Hillside construction, ADUs, kitchen remodels, and whole house renovations. CSLB #1106798.",
    url: "https://www.construbay.com/mill-valley",
    type: "website",
  },
};

export default function MillValleyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
