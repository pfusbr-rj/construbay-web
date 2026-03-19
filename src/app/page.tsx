import Link from "next/link";
import Image from "next/image";

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
        <div className="absolute inset-0">
          <Image
            src="/images/hero/hero-bg-1.jpg"
            alt="Luxury home remodel"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
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
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/services/services-1.jpg"
              alt="Construction flooring work"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/services/kitchen.jpg"
              alt="Luxurious kitchen remodel"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
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
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/services/bathroom-about.jpg"
              alt="Modern bathroom with skylight"
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
            { src: "/images/gallery/kitchen06.jpg", alt: "Kitchen remodel 6" },
            { src: "/images/gallery/kitchen04.jpg", alt: "Kitchen remodel 4" },
            { src: "/images/gallery/kitchen05.jpg", alt: "Kitchen remodel 5" },
            { src: "/images/gallery/kitchen03.jpg", alt: "Kitchen remodel 3" },
            { src: "/images/gallery/bathroom05.jpg", alt: "Bathroom remodel 5" },
            { src: "/images/gallery/bathroom07.jpg", alt: "Bathroom remodel 7" },
            { src: "/images/gallery/bathroom02.jpg", alt: "Bathroom remodel 2" },
            { src: "/images/gallery/kitchen01.jpg", alt: "Kitchen remodel 1" },
            { src: "/images/gallery/bathroom06.jpg", alt: "Bathroom remodel 6" },
            { src: "/images/gallery/kitchen02.jpg", alt: "Kitchen remodel 2" },
            { src: "/images/gallery/bathroom04.jpg", alt: "Bathroom remodel 4" },
            { src: "/images/gallery/bathroom03.jpg", alt: "Bathroom remodel 3" },
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
