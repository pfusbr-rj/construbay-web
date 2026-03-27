import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PROJECTS | Construbay",
  description:
    "View our portfolio of luxury home remodeling projects in Mill Valley, Marin and Sonoma County.",
  alternates: {
    canonical: "https://www.construbay.com/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
