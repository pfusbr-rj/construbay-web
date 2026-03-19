import Link from "next/link";

const services = [
  "Kitchen remodeling",
  "Bathroom Remodeling",
  "Home Interior",
  "Hardwood floor refinishing",
  "Certified Ditra floor system",
  "Complete basement renovation",
  "Paint color design",
  "Soundproofing rooms",
  "Home addition",
  "Deck restoration",
  "Fence building services",
];

const features = [
  {
    title: "Vast Experience",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Professional Team",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
  {
    title: "High Finish",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
      </svg>
    ),
  },
  {
    title: "Sustainable & Accountable",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    text: "Quick to respond! They gave us a free estimate in a timely manner. Hired them for several projects on our Home. They do 'Great' work, clean, friendly, fun to work with on a daily basis.",
    author: "The Mathews",
  },
  {
    text: "Great place to work at with great people. Energetic with a great foundation for growth. Organized and focused to perform at a high level of expectation for their customers.",
    author: "Lars & Mary Williams",
  },
  {
    text: "I dealt with different aspects of their business from converting LLC to corps to working with out of state job projects and licensing. The job was very fast paced and fun.",
    author: "Chris Parks",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-[#3a2f28] to-[#1a1512]">
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="font-caveat text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-6">
            Luxury Remodels &amp; Custom Homes
          </h1>
          <p className="font-caveat text-2xl sm:text-3xl text-brand-tan italic mb-10">
            There are no problems, only solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-white/90 mb-10 text-lg">
            <div>
              <span className="font-semibold">Mill Valley</span>{" "}
              <a href="tel:4159689494" className="hover:text-brand-tan transition-colors">(415) 968-9494</a>
            </div>
            <div>
              <span className="font-semibold">Del Mar</span>{" "}
              <a href="tel:6198373177" className="hover:text-brand-tan transition-colors">(619) 837-3177</a>
            </div>
          </div>
          <Link
            href="/request-a-bid"
            className="inline-block border-2 border-white text-white text-sm tracking-[0.2em] uppercase px-10 py-4 hover:bg-white/10 transition-colors"
          >
            Request a Bid
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="aspect-[4/3] bg-gradient-to-br from-[#4a3f35] to-[#2a2420] border border-brand-tan/20 flex items-center justify-center text-brand-tan/30 text-sm">
            Kitchen Remodel Image
          </div>
          <div className="aspect-[4/3] bg-gradient-to-br from-[#3a3530] to-[#252018] border border-brand-tan/20 flex items-center justify-center text-brand-tan/30 text-sm">
            Construction Image
          </div>
        </div>

        <h2 className="text-4xl text-brand-tan font-semibold mb-8">Our Services</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
          {services.map((s) => (
            <li key={s} className="flex items-center gap-3 text-white/80">
              <span className="w-1.5 h-1.5 bg-brand-tan rounded-full flex-shrink-0" />
              {s}
            </li>
          ))}
        </ul>
        <Link
          href="/request-a-bid"
          className="inline-block border border-brand-tan text-brand-tan text-sm tracking-[0.15em] uppercase px-8 py-3 hover:bg-brand-tan/10 transition-colors"
        >
          Click Here to Request a Bid
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="border border-brand-tan/40 p-8 text-center flex flex-col items-center gap-4"
            >
              <div className="text-brand-tan">{f.icon}</div>
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
            <p className="text-brand-tan/80 mb-6">Construbay | Mill Valley &amp; Del Mar</p>
            <p className="text-white/80 leading-relaxed">
              At Construbay, we specialize in high-end custom finishes for luxury homes.
              With over years of experience in the industry, we are known for our meticulous
              attention to detail and exceptional craftsmanship, particularly in bathroom and
              kitchen renovations. Serving clients across Mill Valley and Del Mar, we are
              committed to providing a seamless and stress-free experience from start to
              finish. Whether you&apos;re embarking on a home renovation or building your dream
              home from the ground up, our expert team is dedicated to guiding you through
              every step of the process. Trust Construbay to transform your vision into
              reality with superior quality, sophisticated design, and unparalleled customer
              service. Let&apos;s build your dream home&mdash;together.
            </p>
          </div>
          <div className="aspect-[4/3] bg-gradient-to-br from-[#4a4540] to-[#2a2520] border border-brand-tan/20 flex items-center justify-center text-brand-tan/30 text-sm">
            Bathroom / Skylight Image
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl text-brand-tan font-semibold mb-12">Recent Projects</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square bg-gradient-to-br from-[#3a3530] to-[#252018] border border-brand-tan/20 flex items-center justify-center text-brand-tan/20 text-xs"
            >
              Project {i + 1}
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
        <h2 className="text-4xl text-brand-tan font-semibold mb-12">Testimonials</h2>
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
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
