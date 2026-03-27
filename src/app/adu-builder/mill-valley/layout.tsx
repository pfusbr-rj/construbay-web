import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ADU Builder Mill Valley CA | ConstruBay | CSLB #1106798",
  description:
    "Expert ADU construction in Mill Valley. Hillside specialists handling Design Review Board approvals, Tam Valley and Strawberry Point builds. CSLB #1106798.",
  alternates: {
    canonical: "https://www.construbay.com/adu-builder/mill-valley",
  },
  openGraph: {
    title: "ADU Builder Mill Valley CA | ConstruBay | CSLB #1106798",
    description:
      "Expert ADU construction in Mill Valley. Hillside specialists handling Design Review Board approvals, Tam Valley and Strawberry Point builds. CSLB #1106798.",
    url: "https://www.construbay.com/adu-builder/mill-valley",
    type: "website",
  },
};

export default function AduBuilderMillValleyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
