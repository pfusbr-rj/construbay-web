import { notFound } from 'next/navigation';
import { Cormorant_Garamond, Montserrat } from 'next/font/google';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { generateBlogMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400'] });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400'] });

export async function generateStaticParams() {
  return getAllPosts().map(post => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return generateBlogMetadata(post);
}

function renderContent(content: string) {
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (const line of lines) {
    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={key++} className={cormorant.className} style={{
          fontSize: 'clamp(24px, 3vw, 34px)',
          fontWeight: '300',
          color: '#ffffff',
          marginTop: '56px',
          marginBottom: '20px',
          lineHeight: 1.3,
        }}>
          {line.replace('## ', '')}
        </h2>
      );
    } else if (line.trim() === '') {
      elements.push(<div key={key++} style={{ height: '16px' }} />);
    } else {
      // Process bold text
      const parts = line.split(/(\*\*[^*]+\*\*)/g);
      const rendered = parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i} style={{ color: '#ffffff', fontWeight: '400' }}>{part.slice(2, -2)}</strong>;
        }
        return part;
      });

      elements.push(
        <p key={key++} className={montserrat.className} style={{
          fontSize: '14px',
          fontWeight: '300',
          color: 'rgba(255,255,255,0.65)',
          lineHeight: 2,
          letterSpacing: '0.03em',
          marginBottom: '0',
        }}>
          {rendered}
        </p>
      );
    }
  }

  return elements;
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Person',
      name: post.author,
      url: 'https://construbay.com/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ConstruBay',
      url: 'https://construbay.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://construbay.com/images/svg/logo%20vector-02.svg',
      },
    },
    datePublished: post.publishedAt,
    image: `https://construbay.com${post.coverImage}`,
    url: `https://construbay.com/blog/${post.slug}`,
    keywords: post.tags.join(', '),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main style={{ backgroundColor: '#000000', minHeight: '100vh', paddingTop: '140px' }}>

        {/* Hero */}
        <div style={{ position: 'relative', height: '420px', marginBottom: '80px' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.coverImage}
            alt={post.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.85) 100%)',
          }} />
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '48px',
            maxWidth: '800px',
          }}>
            {/* Category */}
            <p className={montserrat.className} style={{
              fontSize: '10px',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#cbb26a',
              marginBottom: '16px',
            }}>
              {post.category}
            </p>
            <h1 className={cormorant.className} style={{
              fontSize: 'clamp(28px, 4vw, 52px)',
              fontWeight: '300',
              color: '#ffffff',
              lineHeight: 1.2,
            }}>
              {post.title}
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-6 pb-24">

          {/* Meta row */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '56px',
            paddingBottom: '32px',
            borderBottom: '1px solid rgba(203,178,106,0.15)',
          }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/paulo/paulo-fernandes-01.png"
              alt={post.author}
              style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover', border: '1px solid rgba(203,178,106,0.3)' }}
            />
            <div>
              <p className={montserrat.className} style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)', marginBottom: '2px' }}>
                {post.author}
              </p>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <span className={montserrat.className} style={{ fontSize: '10px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em' }}>
                  {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </span>
                <span style={{ color: 'rgba(203,178,106,0.3)', fontSize: '10px' }}>·</span>
                <span className={montserrat.className} style={{ fontSize: '10px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em' }}>
                  {post.readTime} min read
                </span>
              </div>
            </div>
          </div>

          {/* Article body */}
          <article>
            {renderContent(post.content)}
          </article>

          {/* Tags */}
          <div style={{
            marginTop: '64px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
          }}>
            {post.tags.map(tag => (
              <span key={tag} className={montserrat.className} style={{
                fontSize: '9px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(203,178,106,0.7)',
                border: '1px solid rgba(203,178,106,0.2)',
                padding: '4px 12px',
              }}>
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div style={{
            marginTop: '80px',
            padding: '48px',
            border: '1px solid rgba(203,178,106,0.2)',
            textAlign: 'center',
          }}>
            <p className={montserrat.className} style={{
              fontSize: '10px',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#cbb26a',
              marginBottom: '16px',
            }}>
              Ready to Build?
            </p>
            <h3 className={cormorant.className} style={{
              fontSize: '32px',
              fontWeight: '300',
              color: '#ffffff',
              marginBottom: '16px',
            }}>
              Let&apos;s Talk About Your Project
            </h3>
            <p className={montserrat.className} style={{
              fontSize: '12px',
              fontWeight: '300',
              color: 'rgba(255,255,255,0.5)',
              marginBottom: '32px',
              lineHeight: 1.8,
            }}>
              Free consultations for qualified projects in Marin, Sonoma, and Napa.
            </p>
            <a
              href="tel:4159689494"
              className={montserrat.className}
              style={{
                display: 'inline-block',
                border: '1px solid #cbb26a',
                color: '#cbb26a',
                fontSize: '11px',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                padding: '16px 48px',
                textDecoration: 'none',
              }}
            >
              (415) 968-9494
            </a>
          </div>

          {/* Back link */}
          <div style={{ marginTop: '48px' }}>
            <a
              href="/blog"
              className={montserrat.className}
              style={{
                fontSize: '10px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(203,178,106,0.6)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              All Articles
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
