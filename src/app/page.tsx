import Link from "next/link";
import Image from "next/image";
import { Cormorant_Garamond, Montserrat } from 'next/font/google';

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400'] });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400'] });

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
    title: "Kitchen & Bath",
    description: "Custom cabinetry, premium tile, fully permitted",
    href: "/services/kitchen-remodel-marin-county",
    image: "/images/services/kitchen.jpg",
    gradient: null,
  },
  {
    title: "Outdoor Living",
    description: "Pool houses, decks, outdoor kitchens — Sonoma focus",
    href: "/services",
    image: null,
    gradient: "from-green-900/40 to-brand-dark",
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
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#C9A84C" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/hero-bg-1.jpg"
            alt="Luxury home remodel in Marin County by ConstruBay — CSLB #1106798"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.75) 100%)' }} />
        </div>

        <div className="relative z-10 px-4 max-w-4xl mx-auto text-center w-full" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', width: '100%' }}>

          <h1 className={`${cormorant.className} font-light text-4xl sm:text-5xl md:text-7xl text-white mb-6 leading-none text-center w-full mx-auto`}>
            Built Without Compromise
          </h1>
          <p className={`${montserrat.className} text-white/70 mb-12`} style={{ letterSpacing: '0.25em', textTransform: 'uppercase', fontSize: '13px', textAlign: 'center', width: '100%', display: 'block' }}>
            Marin, Sonoma &amp; Napa
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <a
              href="https://calendly.com/construbay/adu-planning-session-design-permits-budget"
              target="_blank"
              rel="noopener noreferrer"
              className={`${montserrat.className} inline-block transition-opacity hover:opacity-80`}
              style={{ backgroundColor: '#cbb26a', color: '#0a1628', border: 'none', fontWeight: '500', fontSize: '13px', letterSpacing: '0.2em', textTransform: 'uppercase', paddingLeft: '56px', paddingRight: '56px', paddingTop: '18px', paddingBottom: '18px' }}
            >
              Inquire
            </a>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h2 className={`${cormorant.className} text-4xl md:text-5xl text-brand-tan font-light mb-16`}>
          Featured Projects
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-12">
          {[
            { src: "/images/gallery/kitchen06.jpg", alt: "Custom kitchen remodel in Mill Valley, Marin County by ConstruBay" },
            { src: "/images/gallery/kitchen04.jpg", alt: "Custom kitchen remodel in Tiburon, Marin County by ConstruBay" },
            { src: "/images/gallery/kitchen05.jpg", alt: "Custom kitchen remodel in Sausalito, Marin County by ConstruBay" },
            { src: "/images/gallery/kitchen03.jpg", alt: "Custom kitchen remodel in San Rafael, Marin County by ConstruBay" },
            { src: "/images/gallery/bathroom05.jpg", alt: "Luxury bathroom remodel in Mill Valley, Marin County by ConstruBay" },
            { src: "/images/gallery/bathroom07.jpg", alt: "Luxury bathroom remodel in Tiburon, Marin County by ConstruBay" },
            { src: "/images/gallery/bathroom02.jpg", alt: "Luxury bathroom remodel in Sausalito, Marin County by ConstruBay" },
            { src: "/images/gallery/kitchen01.jpg", alt: "Custom kitchen remodel in Novato, Marin County by ConstruBay" },
            { src: "/images/gallery/bathroom06.jpg", alt: "Luxury bathroom remodel in San Rafael, Marin County by ConstruBay" },
            { src: "/images/gallery/kitchen02.jpg", alt: "Custom kitchen remodel in Petaluma, Sonoma County by ConstruBay" },
            { src: "/images/gallery/bathroom04.jpg", alt: "Luxury bathroom remodel in Santa Rosa, Sonoma County by ConstruBay" },
            { src: "/images/gallery/bathroom03.jpg", alt: "Luxury bathroom remodel in Sebastopol, Sonoma County by ConstruBay" },
          ].map((img) => (
            <div key={img.src} className="relative aspect-square overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
          ))}
        </div>
        <Link
          href="/projects"
          className={`${montserrat.className} inline-block border border-white/60 text-white/80 px-10 py-3 hover:bg-white/10 transition-colors`}
          style={{ letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: '12px' }}
        >
          View All Projects
        </Link>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className={`${cormorant.className} text-4xl md:text-5xl text-brand-tan font-light mb-16`}>
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {serviceCards.map((card) => (
            <Link key={card.title} href={card.href} className="group block">
              <div className="relative aspect-[16/9] overflow-hidden">
                {card.image ? (
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} transition-transform duration-500 group-hover:scale-105`} />
                )}
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h3 className={`${cormorant.className} text-white font-light text-2xl mb-2`}>{card.title}</h3>
                  <p className={`${montserrat.className} text-white/70 text-xs tracking-wider`}>{card.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className={`${cormorant.className} text-5xl md:text-6xl font-light text-white mb-8`}>About Us</h2>
            <p className={`${montserrat.className} text-white/70 leading-relaxed text-sm`}>
              At Construbay, we specialize in high-end custom finishes for luxury homes.
              With over 10 years of experience in the industry, we are known for our meticulous
              attention to detail and exceptional craftsmanship, particularly in bathroom and
              kitchen renovations. Serving clients across Mill Valley and Marin, Sonoma, and Napa Counties,
              we are committed to providing a seamless and stress-free experience from start to finish.
              Trust Construbay to transform your vision into reality with superior quality, sophisticated
              design, and unparalleled customer service.
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

      {/* Testimonials Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className={`${cormorant.className} text-4xl md:text-5xl text-brand-tan font-light mb-6`}>
          Testimonials
        </h2>
        <div className="flex items-center gap-2 mb-16">
          <div className="flex gap-1">
            <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
          </div>
          <span className={`${montserrat.className} text-brand-tan text-xs tracking-[0.15em] uppercase`}>
            5.0 on Google &amp; Yelp
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.author} className="border border-brand-tan/20 p-8">
              <p className={`${montserrat.className} text-white/70 leading-relaxed mb-8 text-sm italic`}>
                &ldquo;{t.text}&rdquo;
              </p>
              <p className={`${cormorant.className} text-brand-tan text-lg`}>&mdash; {t.author}</p>
              <p className={`${montserrat.className} text-xs text-white/40 mt-1 tracking-wider`}>{t.projectType}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-brand-tan/20 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className={`${montserrat.className} text-white/40 text-xs tracking-[0.15em] uppercase`}>
            &copy; {new Date().getFullYear()} ConstruBay &mdash; All rights reserved
          </p>
          <p className={`${montserrat.className} text-white/40 text-xs tracking-[0.15em] uppercase`}>
            CSLB #1106798 &middot; <a href="tel:4159689494" className="hover:text-brand-tan transition-colors">(415) 968-9494</a> &middot; Mill Valley, CA
          </p>
        </div>
      </footer>
    </>
  );
}
