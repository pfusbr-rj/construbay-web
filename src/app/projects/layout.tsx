import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PROJECTS | Construbay",
  description:
    "View our portfolio of luxury home remodeling projects in Mill Valley and Del Mar.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
