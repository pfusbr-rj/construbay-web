import type { MetadataRoute } from 'next'
import { getBlogPosts } from '@/lib/blog'

const baseUrl = 'https://construbay.com'

type SitemapEntry = {
  path: string
  priority: number
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
}

const staticPages: SitemapEntry[] = [
  // Homepage
  { path: '', priority: 1.0, changeFrequency: 'weekly' },

  // Core pages
  { path: '/about', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/projects', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/locations', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/blog', priority: 0.7, changeFrequency: 'weekly' },

  // High-priority money pages
  { path: '/adu', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/marin-county-general-contractor', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/luxury-home-remodel-marin-county', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/adu-builder-marin-county', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/investments', priority: 0.9, changeFrequency: 'monthly' },

  // Primary city pages
  { path: '/mill-valley-general-contractor', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/tiburon-general-contractor', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/san-rafael-general-contractor', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/sausalito-general-contractor', priority: 0.9, changeFrequency: 'monthly' },

  // Secondary city pages
  { path: '/ross-general-contractor', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/belvedere-general-contractor', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/kentfield-general-contractor', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/larkspur-general-contractor', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/corte-madera-general-contractor', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/novato-general-contractor', priority: 0.8, changeFrequency: 'monthly' },

  // Service pages
  { path: '/kitchen-remodeling', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/bathroom-remodeling', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/full-home-remodeling', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/outdoor-living', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/design-build', priority: 0.8, changeFrequency: 'monthly' },

  // Audience pages
  { path: '/for-homeowners', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/for-architects', priority: 0.8, changeFrequency: 'monthly' },

  // Case study pages
  { path: '/projects/marion-avenue-mill-valley', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/projects/sycamore-sound-studio', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/projects/plymouth-whole-home-renovation', priority: 0.8, changeFrequency: 'monthly' },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()

  const staticUrls: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))

  // Dynamic blog posts from existing blog data
  const posts = getBlogPosts()
  const blogUrls: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Sort by priority descending for optimal crawl efficiency
  return [...staticUrls, ...blogUrls].sort(
    (a, b) => (b.priority || 0) - (a.priority || 0)
  )
}
