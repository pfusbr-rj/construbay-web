import { Cormorant_Garamond, Montserrat } from 'next/font/google';
import { getAllPosts } from '@/lib/blog';
import type { Metadata } from 'next';

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400'] });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400'] });

export const metadata: Metadata = {
  title: 'Construction & Remodeling Blog | ConstruBay — Marin County',
  description: 'Expert insights on home remodeling, ADUs, permits, and contractor selection in Marin, Sonoma, and Napa counties. Written by ConstruBay founder Paulo Fernandes.',
  alternates: {
    canonical: 'https://construbay.com/blog',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main style={{ backgroundColor: '#000000', minHeight: '100vh', paddingTop: '140px' }}>
      <div className="max-w-6xl mx-auto px-6 pb-24">

        {/* Header */}
        <div style={{ marginBottom: '80px' }}>
          <p className={montserrat.className} style={{
            fontSize: '11px',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: '#cbb26a',
            marginBottom: '24px',
          }}>
            Insights & Resources
          </p>
          <h1 className={cormorant.className} style={{
            fontSize: 'clamp(40px, 6vw, 72px)',
            fontWeight: '300',
            color: '#ffffff',
            lineHeight: 1.1,
            marginBottom: '24px',
          }}>
            The ConstruBay Journal
          </h1>
          <p className={montserrat.className} style={{
            fontSize: '14px',
            fontWeight: '300',
            color: 'rgba(255,255,255,0.55)',
            maxWidth: '560px',
            lineHeight: 1.8,
            letterSpacing: '0.05em',
          }}>
            Practical guidance on remodeling in Marin, Sonoma, and Napa counties — from permits and budgets to contractor selection and design trends.
          </p>
        </div>

        {/* Posts Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '48px',
        }}>
          {posts.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{ textDecoration: 'none', display: 'block' }}
              className="group"
            >
              {/* Cover Image */}
              <div style={{
                position: 'relative',
                height: '240px',
                overflow: 'hidden',
                marginBottom: '28px',
              }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.coverImage}
                  alt={post.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s ease',
                  }}
                  className="group-hover:scale-105"
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.6) 100%)',
                }} />
                {/* Category badge */}
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  backgroundColor: 'rgba(0,0,0,0.7)',
                  border: '1px solid rgba(203,178,106,0.4)',
                  padding: '4px 12px',
                }}>
                  <span className={montserrat.className} style={{
                    fontSize: '9px',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: '#cbb26a',
                  }}>
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Meta */}
              <div style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span className={montserrat.className} style={{
                  fontSize: '10px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.35)',
                }}>
                  {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </span>
                <span style={{ color: 'rgba(203,178,106,0.3)', fontSize: '10px' }}>·</span>
                <span className={montserrat.className} style={{
                  fontSize: '10px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.35)',
                }}>
                  {post.readTime} min read
                </span>
              </div>

              {/* Title */}
              <h2 className={`${cormorant.className} group-hover:text-[#cbb26a]`} style={{
                fontSize: '26px',
                fontWeight: '300',
                color: '#ffffff',
                lineHeight: 1.3,
                marginBottom: '12px',
                transition: 'color 0.3s ease',
              }}>
                {post.title}
              </h2>

              {/* Excerpt */}
              <p className={montserrat.className} style={{
                fontSize: '12px',
                fontWeight: '300',
                color: 'rgba(255,255,255,0.5)',
                lineHeight: 1.8,
                letterSpacing: '0.04em',
              }}>
                {post.excerpt}
              </p>

              {/* Read more */}
              <div style={{
                marginTop: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#cbb26a',
              }}>
                <span className={montserrat.className} style={{
                  fontSize: '10px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                }}>
                  Read
                </span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Author bio */}
        <div style={{
          marginTop: '120px',
          borderTop: '1px solid rgba(203,178,106,0.2)',
          paddingTop: '60px',
          display: 'flex',
          alignItems: 'center',
          gap: '32px',
        }}>
          <div style={{ flexShrink: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/paulo/paulo-fernandes-01.png"
              alt="Paulo Fernandes, ConstruBay"
              style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', border: '1px solid rgba(203,178,106,0.3)' }}
            />
          </div>
          <div>
            <p className={cormorant.className} style={{ fontSize: '22px', fontWeight: '300', color: '#ffffff', marginBottom: '4px' }}>
              Paulo Fernandes
            </p>
            <p className={montserrat.className} style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#cbb26a', marginBottom: '12px' }}>
              Founder, ConstruBay · CSLB #1106798
            </p>
            <p className={montserrat.className} style={{ fontSize: '12px', fontWeight: '300', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, maxWidth: '480px' }}>
              Builder, entrepreneur, and Bay Area native. Paulo writes about construction, permitting, and what it takes to build without compromise in one of the world&apos;s most demanding markets.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
