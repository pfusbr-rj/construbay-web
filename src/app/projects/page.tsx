"use client";

import { useState } from "react";
import Image from "next/image";

const projects = [
  {
    id: "nelsons",
    name: "The Nelson's Project",
    description:
      "Tearing out a wall to expand a bathroom and reconfiguring a kitchen layout so the cabinets, fridge, sink, and range are in different locations.",
    images: [
      "/images/projects/nelson1.jpg",
      "/images/projects/nelson2.jpg",
    ],
  },
  {
    id: "grove",
    name: "20131 Grove Street",
    description:
      "Whole house remodel combination of all rooms, an additional new room, the entire house.",
    images: [
      "/images/projects/grove1.jpg",
      "/images/projects/grove2.jpg",
      "/images/projects/grove3.jpg",
      "/images/projects/grove4.jpg",
      "/images/projects/grove5.jpg",
      "/images/projects/grove6.jpg",
    ],
  },
  {
    id: "jefferson",
    name: "The Jefferson's Lake House",
    description:
      "Stages of remodeling: planning, budgeting, demolition, construction, and cleanup.",
    images: [
      "/images/projects/jefferson1.jpg",
      "/images/projects/jefferson2.jpg",
      "/images/projects/jefferson3.jpg",
      "/images/projects/jefferson4.jpg",
      "/images/projects/jefferson5.jpg",
    ],
  },
];

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="pt-20">
      {/* Header / Tabs */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12">
          <h1 className="bg-brand-tan text-brand-dark px-6 py-3 text-xl font-semibold">
            Our Projects
          </h1>
          <div className="flex flex-wrap gap-2">
            {projects.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActiveTab(i)}
                className={`px-5 py-2 text-sm tracking-wider uppercase border transition-colors ${
                  activeTab === i
                    ? "border-brand-tan text-brand-tan bg-brand-tan/10"
                    : "border-white/30 text-white/70 hover:border-white/60"
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Project */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-20">
        {projects.map((project, idx) => (
          <div
            key={project.id}
            className={activeTab === idx ? "block" : "hidden"}
          >
            <h2 className="text-3xl text-brand-tan font-semibold mb-4">
              {project.name}
            </h2>
            <p className="text-white/80 max-w-3xl mb-10 leading-relaxed">
              {project.description}
            </p>

            {/* Image Gallery */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {project.images.map((src, i) => (
                <div
                  key={src}
                  className="relative aspect-[4/3] overflow-hidden"
                >
                  <Image
                    src={src}
                    alt={`${project.name} - Photo ${i + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
