import Link from "next/link";

export default function ComunidadePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-brand-dark to-yellow-900/20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs tracking-[0.15em] uppercase text-[#C9A84C] mb-4">
            Atendimento em Português
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Empreiteiro Licenciado em Marin &amp; Sonoma County
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            A ConstruBay atende a comunidade brasileira com orgulho.
            Fale conosco em Português — estamos aqui para ajudar.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-12">
          {/* About Paulo */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Sobre a ConstruBay
            </h2>
            <p className="text-white/80 leading-relaxed mb-4">
              A ConstruBay é liderada por Paulo, brasileiro radicado em Mill Valley,
              Califórnia. Com mais de 10 anos de experiência em construção residencial
              de alto padrão, Paulo e sua equipe atendem clientes em todo o condado de
              Marin e Sonoma.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              Entendemos que navegar o processo de construção nos Estados Unidos pode
              ser complicado — especialmente as licenças e permissões municipais. Por
              isso, oferecemos atendimento completo em Português, do primeiro contato
              até a entrega da obra.
            </p>
            <p className="text-white/80 leading-relaxed">
              Nossa licença de empreiteiro geral da Califórnia é{" "}
              <span className="text-[#C9A84C] font-semibold">CSLB #1106798</span>.
              Somos licenciados, segurados e comprometidos com a qualidade.
            </p>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Nossos Serviços
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: "Reformas Completas", desc: "Reforma total da casa, do estrutural ao acabamento de luxo", href: "/services/whole-house-remodel-marin-county" },
                { name: "ADUs (Casas Secundárias)", desc: "Unidades habitacionais acessórias — garagem, anexo, independente", href: "/services/adu-builder-marin-county" },
                { name: "Piscinas Personalizadas", desc: "Projeto, licenças e construção de piscinas", href: "/services/custom-pool-builder-marin-county" },
                { name: "Cozinhas e Banheiros", desc: "Armários sob medida, bancadas premium, acabamentos de luxo", href: "/services/kitchen-remodel-marin-county" },
                { name: "Licenças e Permissões", desc: "Análise de permissões com tecnologia PlanPass.ai", href: "/permit-risk-report" },
                { name: "Adições e Expansões", desc: "Segundo andar, quartos adicionais, extensões", href: "/services/home-addition-contractor-marin-county" },
              ].map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="block border border-brand-tan/30 p-6 hover:border-[#C9A84C] transition-colors"
                >
                  <h3 className="text-lg font-semibold text-[#C9A84C] mb-2">
                    {service.name}
                  </h3>
                  <p className="text-white/70 text-sm">{service.desc}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Areas */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Cidades que Atendemos
            </h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Atendemos clientes brasileiros em toda a região de Marin e Sonoma County:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { city: "Mill Valley", href: "/mill-valley" },
                { city: "San Rafael", href: "/san-rafael" },
                { city: "Novato", href: "/novato" },
                { city: "Tiburon", href: "/tiburon" },
                { city: "Sausalito", href: "/sausalito" },
                { city: "Petaluma", href: "/petaluma" },
                { city: "Santa Rosa", href: "/santa-rosa" },
                { city: "Sebastopol", href: "/sebastopol" },
                { city: "Sonoma", href: "/sonoma" },
              ].map((c) => (
                <Link
                  key={c.city}
                  href={c.href}
                  className="text-brand-tan hover:text-[#C9A84C] transition-colors"
                >
                  {c.city} →
                </Link>
              ))}
            </div>
            <p className="text-white/60 text-sm mt-4">
              As maiores comunidades brasileiras em Marin estão em San Rafael e Novato.
              Temos orgulho de servir essas comunidades com atendimento personalizado.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-[#1B2A3B] p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Fale Conosco em Português
            </h2>
            <p className="text-white/80 text-lg mb-2">
              Ligue agora para uma consulta gratuita:
            </p>
            <a
              href="tel:4159689494"
              className="text-4xl font-bold text-[#C9A84C] hover:opacity-80 transition-opacity"
            >
              (415) 968-9494
            </a>
            <p className="text-white/60 text-sm mt-4">
              paulo@construbay.com · 18 El Paseo Ln, Mill Valley, CA 94941
            </p>
            <p className="text-white/50 text-xs mt-2">
              Empreiteiro Geral Licenciado na Califórnia — CSLB #1106798
            </p>
            <div className="mt-8">
              <Link
                href="/request-a-bid"
                className="inline-block bg-[#C9A84C] text-white font-bold text-lg px-12 py-4 rounded-full hover:opacity-90 transition-opacity"
              >
                Agendar uma Consulta
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "GeneralContractor",
            name: "ConstruBay",
            description:
              "Empreiteiro geral licenciado atendendo a comunidade brasileira em Marin e Sonoma County. CSLB #1106798.",
            url: "https://www.construbay.com/comunidade",
            telephone: "+14159689494",
            email: "paulo@construbay.com",
            license: "CSLB #1106798",
            address: {
              "@type": "PostalAddress",
              streetAddress: "18 El Paseo Ln",
              addressLocality: "Mill Valley",
              addressRegion: "CA",
              postalCode: "94941",
              addressCountry: "US",
            },
            areaServed: [
              { "@type": "City", name: "San Rafael" },
              { "@type": "City", name: "Novato" },
              { "@type": "County", name: "Marin County" },
              { "@type": "County", name: "Sonoma County" },
            ],
            knowsLanguage: ["en", "pt"],
          }),
        }}
      />
    </>
  );
}
