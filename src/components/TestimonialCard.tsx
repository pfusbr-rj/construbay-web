const CG = 'Cormorant Garamond'
const MS = 'Montserrat'

interface TestimonialCardProps {
  quote: string
  author: string
  city: string
  projectType: string
}

export default function TestimonialCard({ quote, author, city, projectType }: TestimonialCardProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: { '@type': 'LocalBusiness', name: 'ConstruBay' },
    reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
    author: { '@type': 'Person', name: author },
    reviewBody: quote,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div style={{
        borderLeft: '3px solid #cbb26a',
        backgroundColor: '#000000',
        padding: '2rem 2rem 2rem 2.5rem',
        maxWidth: '760px',
        margin: '0 auto',
      }}>
        <p style={{
          fontFamily: CG,
          fontSize: 'clamp(1.15rem, 2vw, 1.45rem)',
          fontWeight: 300,
          fontStyle: 'italic',
          color: 'rgba(255,255,255,0.9)',
          lineHeight: 1.7,
          marginBottom: '1.25rem',
        }}>
          &ldquo;{quote}&rdquo;
        </p>
        <p style={{ fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#cbb26a' }}>
          — {author}
        </p>
        <p style={{ fontFamily: MS, fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginTop: '0.25rem' }}>
          {city} · {projectType}
        </p>
      </div>
    </>
  )
}
