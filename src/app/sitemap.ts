import { MetadataRoute } from 'next';
import { cities } from '@/lib/cities';
import { getAllPosts } from '@/lib/blog';

const BASE_URL = 'https://construbay.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/projects`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/locations`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/services/whole-house-remodel-marin-county`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/services/kitchen-remodel-marin-county`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/services/adu-builder-marin-county`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/services/bathroom-remodel-marin-county`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/services/home-addition-contractor-marin-county`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/services/general-contractor-marin-county`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/request-a-bid`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
  ];

  const cityPages: MetadataRoute.Sitemap = cities.map(city => ({
    url: `${BASE_URL}/${city.slug}-general-contractor`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: city.tier === 'primary' ? 0.9 : 0.75,
  }));

  const blogPages: MetadataRoute.Sitemap = getAllPosts().map(post => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'yearly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...cityPages, ...blogPages];
}
