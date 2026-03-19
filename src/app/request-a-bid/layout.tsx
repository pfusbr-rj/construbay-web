import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Bid | Construbay",
  description:
    "Get a free professional estimate for your home remodeling project from Construbay.",
};

export default function RequestBidLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
