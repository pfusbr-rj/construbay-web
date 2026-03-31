import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ADU Builder Mill Valley CA | ConstruBay | CSLB #1106798",
  description:
    "ADU construction in Mill Valley, CA. Design-build, full permit management, and hillside expertise from a local licensed GC. CSLB #1106798.",
  alternates: {
    canonical: "https://www.construbay.com/services/adu-builder-mill-valley",
  },
  openGraph: {
    title: "ADU Builder Mill Valley CA | ConstruBay | CSLB #1106798",
    description:
      "ADU construction in Mill Valley, CA. Design-build, full permit management, and hillside expertise from a local licensed GC. CSLB #1106798.",
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
