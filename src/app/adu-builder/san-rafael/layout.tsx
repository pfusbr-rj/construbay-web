import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ADU Builder San Rafael CA | ConstruBay | CSLB #1106798",
  description:
    "ADU construction in San Rafael. Diverse lot sizes, garage conversions, and county seat permit expertise from a local licensed GC. CSLB #1106798.",
  alternates: {
    canonical: "https://www.construbay.com/adu-builder/san-rafael",
  },
  openGraph: {
    title: "ADU Builder San Rafael CA | ConstruBay | CSLB #1106798",
    description:
      "ADU construction in San Rafael. Diverse lot sizes, garage conversions, and county seat permit expertise from a local licensed GC. CSLB #1106798.",
    url: "https://www.construbay.com/adu-builder/san-rafael",
    type: "website",
  },
};

export default function AduBuilderSanRafaelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
