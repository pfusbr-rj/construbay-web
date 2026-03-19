"use client";

import { useState } from "react";

const projects = [
  {
    id: "nelsons",
    name: "The Nelson's Project",
    description:
      "Tearing out a wall to expand a bathroom and reconfiguring a kitchen layout so the cabinets, fridge, sink, and range are in different locations.",
    images: 6,
  },
  {
    id: "grove",
    name: "20131 Grove Street",
    description:
      "Whole house remodel combination of all rooms, an additional new room, the entire house.",
    images: 6,
  },
  {
    id: "jefferson",
    name: "The Jefferson's Lake House",
    description:
      "Stages of remodeling: planning, budgeting, demolition, construction, and cleanup.",
    images: 6,
  },
];

const gradients = [
  "from-[#4a3f35] to-[#2a2420]",
  "from-[#3a3530] to-[#252018]",
  "from-[#4a4540] to-[#2a2520]",
  "from-[#3a302a] to-[#201a15]",
  "from-[#453d35] to-[#2f2820]",
  "from-[#3d3832] to-[#28221c]",
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
              {Array.from({ length: project.images }).map((_, i) => (
                <div
                  key={i}
                  className={`aspect-[4/3] bg-gradient-to-br ${gradients[i % gradients.length]} border border-brand-tan/20 flex items-center justify-center text-brand-tan/20 text-xs`}
                >
                  {project.name} - Photo {i + 1}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
