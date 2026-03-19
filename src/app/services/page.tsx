import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Services | Construbay | Mill Valley",
  description:
    "Complete remodeling, kitchen remodeling, bathroom remodeling, home interior, flooring services by ConstruBay in Mill Valley, Marin and Sonoma County.",
  alternates: {
    canonical: "https://www.construbay.com/services",
  },
};

const kitchenSteps = [
  "Tear Out and Demolition",
  "Rough-In Work Including Framing and Plumbing",
  "Professional Inspection",
  "Finishing the Walls",
  "Install Doors and Windows",
  "Time for Cabinets and Plumbing Fixtures",
  "Bring in New Appliances",
  "Install New Flooring",
  "Celebrate Your New Kitchen",
];

const interiorServices = [
  "Architectural details and drawings",
  "Construction floor plans and elevations",
  "Coordination with architects and contractors",
  "Space planning and interior architecture",
  "Selection of furniture and accessories",
  "Custom furniture and textile design",
  "Concierge purchasing management",
  "Color palette consultation",
];

const expertise = [
  {
    title: "Pre-Construction",
    items: ["Design-Build", "Scheduling", "Estimating & Budgeting"],
  },
  {
    title: "Construction",
    items: ["Quality Control", "Safety Management", "Subcontractor Management"],
  },
  {
    title: "Post-Construction",
    items: ["Certificate of Occupancy", "As-built documentation", "Warranty"],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Top Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-16">Our Services</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Complete Remodeling */}
          <div className="border border-brand-tan/40 p-8">
            <h2 className="text-2xl text-brand-tan font-semibold mb-4">
              Complete Remodeling
            </h2>
            <p className="text-white/80 leading-relaxed">
              Remodelers hang, repair, and replace drywall as needed for new and
              existing rooms. Remodelers install floors, including wood floors,
              carpeting, concrete, and other flooring types. Remodelers install new
              tilework on floors and walls, place new grout, and repair existing tile.
            </p>
          </div>

          {/* Kitchen Remodeling */}
          <div className="border border-brand-tan/40 p-8">
            <h2 className="text-2xl text-brand-tan font-semibold mb-4">
              Kitchen Remodeling
            </h2>
            <p className="text-white/80 mb-4">The 10 Steps of a Kitchen Remodel</p>
            <ol className="list-decimal list-inside space-y-2 text-white/80">
              {kitchenSteps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>

          {/* Kitchen Image */}
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[400px] overflow-hidden">
            <Image
              src="/images/services/office-kitchen.jpg"
              alt="Kitchen remodeling"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </div>
        </div>
      </section>

      {/* Second Section - 4 columns */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Bathroom Image */}
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="/images/services/bathroom-service.jpg"
              alt="Bathroom remodeling service"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>

          {/* Home Interior */}
          <div>
            <h2 className="text-2xl text-brand-tan font-semibold italic mb-2">
              Home Interior
            </h2>
            <p className="text-brand-tan/70 text-sm uppercase tracking-wider mb-4">
              Full Service Design
            </p>
            <ul className="space-y-2">
              {interiorServices.map((s) => (
                <li key={s} className="flex items-start gap-2 text-white/80 text-sm">
                  <span className="w-1.5 h-1.5 bg-brand-tan rounded-full flex-shrink-0 mt-1.5" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Flooring */}
          <div>
            <h2 className="text-2xl text-brand-tan font-semibold italic mb-4">
              Flooring
            </h2>
            <p className="text-white/80 leading-relaxed text-sm">
              Complete new floor installations in homes and businesses. They install
              carpet, linoleum, laminate, hardwood, and tile floors. In addition,
              flooring installers apply blocks, strips, shock absorbers, and
              decorative elements.
            </p>
          </div>

          {/* Bathroom Remodeling */}
          <div>
            <h2 className="text-2xl text-brand-tan font-semibold italic mb-4">
              Bathroom Remodeling
            </h2>
            <p className="text-white/80 leading-relaxed text-sm">
              Bathroom remodel may include: Upgrading bathtub or shower. Updating
              faucets, flooring and lighting. Installing new tile in tub or shower.
            </p>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl text-brand-tan font-semibold mb-12">Our Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expertise.map((e) => (
            <div key={e.title} className="border border-brand-tan/40 p-8">
              <h3 className="text-xl text-white font-semibold mb-6">{e.title}</h3>
              <ul className="space-y-3">
                {e.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/80">
                    <span className="w-1.5 h-1.5 bg-brand-tan rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
