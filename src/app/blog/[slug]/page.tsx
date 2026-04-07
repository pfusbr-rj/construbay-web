import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { generateBlogMetadata } from '@/lib/seo';
import KeyTakeaways from '@/components/blog/KeyTakeaways';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import FaqSchema from '@/components/schema/FaqSchema';
import HowToSchema from '@/components/schema/HowToSchema';
import type { Metadata } from 'next';

const CG = 'Cormorant Garamond, serif';
const MS = 'Montserrat, sans-serif';

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

  const parseInline = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} style={{ color: '#ffffff', fontWeight: '400' }}>{part.slice(2, -2)}</strong>;
      }
      const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (linkMatch) {
        return (
          <a key={i} href={linkMatch[2]} style={{ color: '#cbb26a', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
            {linkMatch[1]}
          </a>
        );
      }
      return part;
    });
  };

  for (const line of lines) {
    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={key++} style={{
          fontFamily: CG,
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
      elements.push(
        <p key={key++} style={{
          fontFamily: MS,
          fontSize: '14px',
          fontWeight: '300',
          color: 'rgba(255,255,255,0.65)',
          lineHeight: 2,
          letterSpacing: '0.03em',
          marginBottom: '0',
        }}>
          {parseInline(line)}
        </p>
      );
    }
  }

  return elements;
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      '@type': 'Person',
      name: 'Paulo Fernandes',
      jobTitle: 'Licensed General Contractor',
      description: 'CSLB #1106798. Founder of ConstruBay and PlanPass.ai. 15+ years luxury residential construction in Marin County.',
      url: 'https://www.construbay.com/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ConstruBay',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.construbay.com/images/svg/logo%20vector-02.svg',
      },
    },
    image: `https://www.construbay.com${post.coverImage}`,
    url: `https://www.construbay.com/blog/${post.slug}`,
    keywords: post.tags.join(', '),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.construbay.com' },
        { name: 'Blog', url: 'https://www.construbay.com/blog' },
        { name: post.title, url: `https://www.construbay.com/blog/${post.slug}` },
      ]} />
      {/* FaqSchema — TO BE FILLED PER POST via post.faqs */}
      {post.faqs && post.faqs.length > 0 && <FaqSchema items={post.faqs} />}
      {/* HowToSchema — TO BE FILLED PER POST via post.howToSteps */}
      {post.isHowTo && post.howToSteps && post.howToSteps.length > 0 && (
        <HowToSchema name={post.title} description={post.excerpt} steps={post.howToSteps} />
      )}

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
            <p style={{
              fontFamily: MS,
              fontSize: '10px',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#cbb26a',
              marginBottom: '16px',
            }}>
              {post.category}
            </p>
            <h1 style={{
              fontFamily: CG,
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
            marginBottom: '40px',
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
              <p style={{ fontFamily: MS, fontSize: '12px', color: 'rgba(255,255,255,0.7)', marginBottom: '2px' }}>
                {post.author}
              </p>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <span style={{ fontFamily: MS, fontSize: '10px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em' }}>
                  {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </span>
                <span style={{ color: 'rgba(203,178,106,0.3)', fontSize: '10px' }}>·</span>
                <span style={{ fontFamily: MS, fontSize: '10px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em' }}>
                  {post.readTime} min read
                </span>
              </div>
            </div>
          </div>

          {/* Author box */}
          <div style={{
            borderLeft: '3px solid #cbb26a',
            background: '#0a0a0a',
            padding: '1.5rem',
            marginBottom: '2rem',
          }}>
            <p style={{ color: '#cbb26a', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Written by</p>
            <p style={{ color: '#ffffff', fontFamily: CG, fontSize: '1.3rem', marginBottom: '0.25rem' }}>Paulo Fernandes</p>
            <p style={{ color: '#cbb26a', fontFamily: MS, fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Licensed General Contractor — CSLB #1106798</p>
            <p style={{ color: '#aaaaaa', fontFamily: MS, fontSize: '0.75rem', lineHeight: '1.6' }}>Founder of ConstruBay and PlanPass.ai. 15+ years of luxury residential construction experience in Marin County, California.</p>
          </div>

          {/* Key Takeaways — TO BE FILLED PER POST via post.keyTakeaways */}
          {post.keyTakeaways && post.keyTakeaways.length > 0 && (
            <KeyTakeaways takeaways={post.keyTakeaways} />
          )}

          {/* Article body */}
          <article>
            {renderContent(post.content)}
          </article>

          {/* FAQs */}
          {post.faqs && post.faqs.length > 0 && (
            <div style={{ marginTop: '64px' }}>
              <h2 style={{
                fontFamily: CG,
                fontSize: 'clamp(22px, 3vw, 32px)',
                fontWeight: '300',
                color: '#ffffff',
                marginBottom: '32px',
                lineHeight: 1.3,
              }}>
                Frequently Asked Questions
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {post.faqs.map((faq, i) => (
                  <div key={i} style={{
                    borderTop: '1px solid rgba(203,178,106,0.15)',
                    paddingTop: '24px',
                    paddingBottom: '24px',
                  }}>
                    <p style={{
                      fontFamily: MS,
                      fontSize: '13px',
                      fontWeight: '400',
                      color: '#ffffff',
                      marginBottom: '10px',
                      lineHeight: 1.5,
                      letterSpacing: '0.02em',
                    }}>
                      {faq.question}
                    </p>
                    <p style={{
                      fontFamily: MS,
                      fontSize: '13px',
                      fontWeight: '300',
                      color: 'rgba(255,255,255,0.6)',
                      lineHeight: 1.9,
                      letterSpacing: '0.03em',
                    }}>
                      {faq.answer}
                    </p>
                  </div>
                ))}
                <div style={{ borderTop: '1px solid rgba(203,178,106,0.15)' }} />
              </div>
            </div>
          )}

          {/* Tags */}
          <div style={{
            marginTop: '64px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
          }}>
            {post.tags.map(tag => (
              <span key={tag} style={{
                fontFamily: MS,
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

          {/* Lead Magnet */}
          <div style={{
            marginTop: '64px',
            border: '1px solid #cbb26a',
            padding: '40px',
            backgroundColor: '#000000',
          }}>
            <p style={{
              fontFamily: MS,
              fontSize: '10px',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#cbb26a',
              marginBottom: '12px',
            }}>
              Free Download
            </p>
            <h3 style={{
              fontFamily: CG,
              fontSize: '28px',
              fontWeight: '300',
              color: '#ffffff',
              marginBottom: '12px',
              lineHeight: 1.2,
            }}>
              The Marin County Remodel Guide
            </h3>
            <p style={{
              fontFamily: MS,
              fontSize: '12px',
              fontWeight: '300',
              color: 'rgba(255,255,255,0.5)',
              marginBottom: '24px',
              lineHeight: 1.8,
              letterSpacing: '0.04em',
            }}>
              Download our free guide to permits, costs and contractor selection in Marin County. Based on completed local projects.
            </p>
            <a
              href="/request-a-bid"
              style={{
                display: 'inline-block',
                backgroundColor: '#cbb26a',
                color: '#000000',
                fontFamily: MS,
                fontSize: '11px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                padding: '14px 32px',
                textDecoration: 'none',
                fontWeight: '400',
              }}
            >
              Download Free
            </a>
          </div>

          {/* CTA */}
          <div style={{
            marginTop: '64px',
            padding: '48px',
            border: '1px solid rgba(203,178,106,0.2)',
            textAlign: 'center',
          }}>
            <p style={{
              fontFamily: MS,
              fontSize: '10px',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#cbb26a',
              marginBottom: '16px',
            }}>
              Ready to Build?
            </p>
            <h3 style={{
              fontFamily: CG,
              fontSize: '32px',
              fontWeight: '300',
              color: '#ffffff',
              marginBottom: '16px',
            }}>
              Let&apos;s Talk About Your Project
            </h3>
            <p style={{
              fontFamily: MS,
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
              style={{
                display: 'inline-block',
                border: '1px solid #cbb26a',
                color: '#cbb26a',
                fontFamily: MS,
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
              style={{
                fontFamily: MS,
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
