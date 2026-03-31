import { Metadata } from 'next';
import { City } from './cities';
import { BlogPost } from './blog';

export function generateCityMetadata(city: City): Metadata {
  const title = `General Contractor in ${city.name}, CA | ConstruBay | CSLB #1106798`;
  const description = `Licensed general contractor in ${city.name}, CA. Full home remodels, ADUs, kitchen & bath, and additions. CSLB #1106798. Call (415) 968-9494.`;

  return {
    title,
    description,
    keywords: [
      `general contractor ${city.name}`,
      `home remodel ${city.name}`,
      `kitchen remodel ${city.name} CA`,
      `bathroom remodel ${city.name}`,
      `ADU builder ${city.name}`,
      `home addition ${city.name}`,
      `${city.county} County contractor`,
      `ConstruBay ${city.name}`,
      `CSLB 1106798`,
    ],
    alternates: {
      canonical: `https://www.construbay.com/${city.slug}-general-contractor`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.construbay.com/${city.slug}-general-contractor`,
      siteName: 'ConstruBay',
      locale: 'en_US',
      type: 'website',
    },
  };
}

export function generateBlogMetadata(post: BlogPost): Metadata {
  return {
    title: `${post.title} | ConstruBay Blog`,
    description: post.excerpt,
    keywords: post.tags,
    alternates: {
      canonical: `https://www.construbay.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.construbay.com/blog/${post.slug}`,
      siteName: 'ConstruBay',
      locale: 'en_US',
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
    },
  };
}
