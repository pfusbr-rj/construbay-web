import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ADU Builder Mill Valley CA | ConstruBay | CSLB #1106798",
  description:
    "Mill Valley ADU construction. Design, permits, and build by local licensed GC. Hillside specialists. CSLB #1106798. Free ADU assessment.",
  alternates: {
    canonical: "https://www.construbay.com/services/adu-builder-mill-valley",
  },
  openGraph: {
    title: "ADU Builder Mill Valley CA | ConstruBay | CSLB #1106798",
    description:
      "Mill Valley ADU construction. Design, permits, and build by local licensed GC. Hillside specialists. CSLB #1106798. Free ADU assessment.",
    url: "https://www.construbay.com/services/adu-builder-mill-valley",
    type: "website",
  },
};

export default function AduMillValleyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
