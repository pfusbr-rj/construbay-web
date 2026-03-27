import Link from "next/link";
import Image from "next/image";

const serviceCards = [
  {
    title: "Full Home Remodels",
    description: "Complete design-build from structural to luxury finishes",
    href: "/services/whole-house-remodel-marin-county",
    image: "/images/services/services-1.jpg",
    gradient: null,
  },
  {
    title: "ADUs & Home Additions",
    description: "Fully permitted accessory dwelling units and additions",
    href: "/services/adu-builder-marin-county",
    image: null,
    gradient: "from-amber-900/40 to-brand-dark",
  },
  {
    title: "Custom Pools",
    description: "Design, permits, and construction — Marin & Sonoma",
    href: "/services/custom-pool-builder-marin-county",
    image: null,
    gradient: "from-blue-900/40 to-brand-dark",
  },
  {
    title: "Kitchen & Bath",
    description: "Custom cabinetry, premium tile, fully permitted",
    href: "/services/kitchen-remodel-marin-county",
    image: "/images/services/kitchen.jpg",
    gradient: null,
  },
  {
    title: "Permit Expediting — PlanPass.ai",
    description: "AI-powered plan review — catch issues before submission",
    href: "/permit-risk-report",
    image: null,
    gradient: "from-slate-800 to-brand-dark",
  },
  {
    title: "Outdoor Living",
    description: "Pool houses, decks, outdoor kitchens — Sonoma focus",
    href: "/services",
    image: null,
    gradient: "from-green-900/40 to-brand-dark",
  },
];

const features = [
  {
    title: "Vast Experience",
    iconSrc: "/images/icons/vast-experience.png",
  },
  {
    title: "Professional Team",
    iconSrc: "/images/icons/professional-team.png",
  },
  {
    title: "High Finish",
    iconSrc: "/images/icons/high-finish.png",
  },
  {
    title: "Sustainable & Accountable",
    iconSrc: "/images/icons/sustainable.png",
  },
];

const testimonials = [
  {
    text: "Quick to respond! They gave us a free estimate in a timely manner. Hired them for several projects on our Home. They do 'Great' work, clean, friendly, fun to work with on a daily basis.",
    author: "The Mathews",
    projectType: "Full home remodel — Mill Valley",
  },
  {
    text: "Great place to work at with great people. Energetic with a great foundation for growth. Organized and focused to perform at a high level of expectation for their customers.",
    author: "Lars & Mary Williams",
    projectType: "Kitchen remodel — Tiburon",
  },
  {
    text: "I dealt with different aspects of their business from converting LLC to corps to working with out of state job projects and licensing. The job was very fast paced and fun.",
    author: "Chris Parks",
    projectType: "Commercial project — San Rafael",
  },
];

function StarIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#C9A84C" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Social Sidebar */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
        <a href="https://instagram.com/construbay" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#cbb26a] opacity-70 hover:opacity-100 transition-opacity">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
        </a>
        <a href="https://facebook.com/construbay" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-[#cbb26a] opacity-70 hover:opacity-100 transition-opacity">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
        </a>
        <a href="https://wa.me/14159689494" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-[#cbb26a] opacity-70 hover:opacity-100 transition-opacity">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>
        </a>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/hero-bg-1.jpg"
            alt="Luxury home remodel in Marin County by ConstruBay — CSLB #1106798"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="font-caveat text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-6">
            Legacy Built Without Compromise
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-10">
            Licensed luxury general contractor &mdash; Marin, Sonoma &amp; Napa
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-white/90 mb-10 text-lg">
            <div>
              <span className="font-semibold">Mill Valley</span>{" "}
              &middot;{" "}
              <a href="tel:4159689494" className="hover:text-brand-tan transition-colors">(415) 968-9494</a>
              {" "}&middot;{" "}
              <span>Marin &amp; Sonoma County</span>
            </div>
          </div>
          <a
            href="https://calendly.com/construbay/adu-planning-session-design-permits-budget"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#C9A84C] text-white font-bold text-lg px-12 py-[18px] rounded-full hover:opacity-90 transition-opacity"
            style={{ fontSize: "18px", fontWeight: 700, padding: "18px 48px", borderRadius: "50px" }}
          >
            Schedule a Consultation
          </a>
          <p className="mt-6 text-white/85 text-sm">
            Licensed &amp; Insured &middot; CSLB #1106798 &middot; Mill Valley Based &middot; 10+ Years Experience
          </p>
        </div>
      </section>

      {/* Trust Bar Section */}
      <section className="bg-brand-dark/80 border-y border-brand-tan/20 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center gap-2 md:border-r md:border-brand-tan/20">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" className="w-6 h-6">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span className="text-white text-sm tracking-wider uppercase">CSLB #1106798</span>
          </div>
          <div className="flex flex-col items-center gap-2 md:border-r md:border-brand-tan/20">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" className="w-6 h-6">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span className="text-white text-sm tracking-wider uppercase">10+ Years Experience</span>
          </div>
          <div className="flex flex-col items-center gap-2 md:border-r md:border-brand-tan/20">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" className="w-6 h-6">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="text-white text-sm tracking-wider uppercase">Marin &amp; Sonoma County</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" className="w-6 h-6">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
            <span className="text-white text-sm tracking-wider uppercase">PlanPass.ai Technology</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl text-brand-tan font-semibold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {serviceCards.map((card) => (
            <Link key={card.title} href={card.href} className="group block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                {card.image ? (
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} transition-transform duration-300 group-hover:scale-105`} />
                )}
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-white font-bold text-xl mb-1">{card.title}</h3>
                  <p className="text-white/80 text-sm">{card.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <p className="text-white/50 text-sm italic">
          Also available for existing clients: handyman services, deck restoration, fence building
        </p>
      </section>

      {/* PlanPass.ai Section */}
      <section className="bg-[#1B2A3B] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.15em] uppercase text-[#C9A84C] mb-4">
            THE CONSTRUBAY ADVANTAGE
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            We catch permit problems before the city does.
          </h2>
          <p className="text-white/80 leading-relaxed mb-12 max-w-3xl">
            Marin County permit review takes 3 to 6 months &mdash; sometimes longer. Most homeowners
            find out their plans have issues after submission. That means months of delay and thousands
            in carrying costs. PlanPass.ai reads your blueprints and flags every code conflict, Title 24
            gap, and county amendment issue before you pay the county filing fees. ConstruBay is the only
            Marin County contractor using this technology on every project.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12">
            <div>
              <p className="text-3xl font-bold text-[#C9A84C]">3&ndash;6 months</p>
              <p className="text-sm text-white/70 mt-1">Average Marin permit delay</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#C9A84C]">10&ndash;14 weeks</p>
              <p className="text-sm text-white/70 mt-1">With PlanPass.ai pre-analysis</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#C9A84C]">0 surprises</p>
              <p className="text-sm text-white/70 mt-1">Our permit rejection rate</p>
            </div>
          </div>
          <div className="text-center">
            <Link
              href="/permit-risk-report"
              className="inline-block border border-white text-white text-sm tracking-[0.15em] uppercase px-8 py-3 hover:bg-white/10 transition-colors"
            >
              Get a Free Permit Risk Report
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="border border-brand-tan/40 p-8 text-center flex flex-col items-center gap-4"
            >
              <Image
                src={f.iconSrc}
                alt={f.title}
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <h3 className="text-white text-sm tracking-wider uppercase">{f.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold text-white mb-2">About Us</h2>
            <h3 className="text-2xl text-brand-tan mb-1">Construbay</h3>
            <p className="text-brand-tan/80 mb-6">Construbay | Mill Valley &amp; Marin/Sonoma County</p>
            <p className="text-white/80 leading-relaxed">
              At Construbay, we specialize in high-end custom finishes for luxury homes.
              With over 10 years of experience in the industry, we are known for our meticulous
              attention to detail and exceptional craftsmanship, particularly in bathroom and
              kitchen renovations. Serving clients across Mill Valley and Marin and Sonoma Counties, we are
              committed to providing a seamless and stress-free experience from start to
              finish. Whether you&apos;re embarking on a home renovation or building your dream
              home from the ground up, our expert team is dedicated to guiding you through
              every step of the process. Trust Construbay to transform your vision into
              reality with superior quality, sophisticated design, and unparalleled customer
              service. Let&apos;s build your dream home&mdash;together.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/services/bathroom-about.jpg"
              alt="Modern bathroom remodel in Mill Valley, Marin County by ConstruBay — CSLB #1106798"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl text-brand-tan font-semibold mb-12">Recent Projects</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
          {[
            { src: "/images/gallery/kitchen06.jpg", alt: "Custom kitchen remodel in Mill Valley, Marin County by ConstruBay — CSLB #1106798" },
            { src: "/images/gallery/kitchen04.jpg", alt: "Custom kitchen remodel in Tiburon, Marin County by ConstruBay — CSLB #1106798" },
            { src: "/images/gallery/kitchen05.jpg", alt: "Custom kitchen remodel in Sausalito, Marin County by ConstruBay — CSLB #1106798" },
            { src: "/images/gallery/kitchen03.jpg", alt: "Custom kitchen remodel in San Rafael, Marin County by ConstruBay — CSLB #1106798" },
            { src: "/images/gallery/bathroom05.jpg", alt: "Luxury bathroom remodel in Mill Valley, Marin County by ConstruBay — CSLB #1106798" },
            { src: "/images/gallery/bathroom07.jpg", alt: "Luxury bathroom remodel in Tiburon, Marin County by ConstruBay — CSLB #1106798" },
            { src: "/images/gallery/bathroom02.jpg", alt: "Luxury bathroom remodel in Sausalito, Marin County by ConstruBay — CSLB #1106798" },
            { src: "/images/gallery/kitchen01.jpg", alt: "Custom kitchen remodel in Novato, Marin County by ConstruBay — CSLB #1106798" },
            { src: "/images/gallery/bathroom06.jpg", alt: "Luxury bathroom remodel in San Rafael, Marin County by ConstruBay — CSLB #1106798" },
            { src: "/images/gallery/kitchen02.jpg", alt: "Custom kitchen remodel in Petaluma, Sonoma County by ConstruBay — CSLB #1106798" },
            { src: "/images/gallery/bathroom04.jpg", alt: "Luxury bathroom remodel in Santa Rosa, Sonoma County by ConstruBay — CSLB #1106798" },
            { src: "/images/gallery/bathroom03.jpg", alt: "Luxury bathroom remodel in Sebastopol, Sonoma County by ConstruBay — CSLB #1106798" },
          ].map((img) => (
            <div key={img.src} className="relative aspect-square overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
          ))}
        </div>
        <Link
          href="/projects"
          className="inline-block border border-white/80 text-white text-sm tracking-[0.15em] uppercase px-8 py-3 hover:bg-white/10 transition-colors"
        >
          View All
        </Link>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl text-brand-tan font-semibold mb-6">Testimonials</h2>
        <div className="flex items-center gap-2 mb-12">
          <div className="flex gap-1">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
          <span className="text-brand-tan font-semibold">5.0 on Google &amp; Yelp</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="border border-brand-tan/40 p-8"
            >
              <p className="text-white/80 leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="text-brand-tan font-semibold">&mdash; {t.author}</p>
              <p className="text-sm text-white/50 mt-1">{t.projectType}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
