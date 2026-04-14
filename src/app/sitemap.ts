import type { MetadataRoute } from 'next'
import { getBlogPosts } from '@/lib/blog'

const baseUrl = 'https://www.construbay.com'

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
  { path: '/services', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/pricing', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/request-a-bid', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/permit-risk-report', priority: 0.7, changeFrequency: 'monthly' },

  // High-priority money pages
  { path: '/adu', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/marin-county-general-contractor', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/luxury-home-remodel-marin-county', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/adu-builder-marin-county', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/investments', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/bathroom-remodel-marin-county', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/marin-county-kitchen-remodeling', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/marin-county-bathroom-remodeling', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/mill-valley-adu-builder', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/mill-valley-kitchen-remodel', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/tiburon-kitchen-remodel', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/san-rafael-kitchen-remodel', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/mill-valley-bathroom-remodel', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/tiburon-bathroom-remodel', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/marin-county-adu-builder', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/kitchen-remodel-marin-county', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/adu-marin-county', priority: 0.9, changeFrequency: 'monthly' },

  // Sonoma & Napa variants
  { path: '/adu-builder-sonoma-county', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/adu-sonoma-county', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/kitchen-remodel-sonoma-county', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/luxury-home-remodel-sonoma-county', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/luxury-home-remodel-napa-county', priority: 0.8, changeFrequency: 'monthly' },

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

  // City landing pages
  { path: '/mill-valley', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/tiburon', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/san-rafael', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/sausalito', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/novato', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/petaluma', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/santa-rosa', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/sebastopol', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/sonoma', priority: 0.7, changeFrequency: 'monthly' },

  // /general-contractor/* subpages
  { path: '/general-contractor/mill-valley', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/general-contractor/petaluma', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/general-contractor/sebastopol', priority: 0.7, changeFrequency: 'monthly' },

  // /adu-builder/* subpages
  { path: '/adu-builder/mill-valley', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/adu-builder/san-rafael', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/adu-builder/petaluma', priority: 0.7, changeFrequency: 'monthly' },

  // /kitchen-remodel/* subpages
  { path: '/kitchen-remodel/mill-valley', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/kitchen-remodel/tiburon', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/kitchen-bathroom-remodel-mill-valley', priority: 0.8, changeFrequency: 'monthly' },

  // /whole-house-remodel & /permit-expediting subpages
  { path: '/whole-house-remodel/marin-county', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/permit-expediting/marin-county', priority: 0.8, changeFrequency: 'monthly' },

  // Service pages
  { path: '/kitchen-remodel-mill-valley', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/kitchen-remodeling', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/bathroom-remodeling', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/full-home-remodeling', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/outdoor-living', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/design-build', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/home-additions-marin-county', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/marin-county-permit-expediting', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/sausalito-luxury-home-remodel', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/tiburon-luxury-home-remodel', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/ross-luxury-home-remodel', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/belvedere-luxury-home-remodel', priority: 0.8, changeFrequency: 'monthly' },

  // /services/* subpages
  { path: '/services/adu-builder-marin-county', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/services/adu-builder-mill-valley', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/services/adu-builder-sonoma-county', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/services/basement-finishing-marin-county', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/services/bathroom-remodel-marin-county', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/services/custom-pool-builder-marin-county', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/services/deck-outdoor-living-marin-county', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/services/driveways-hardscape-marin-county', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/services/electrical-marin-county', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/services/estate-stewardship', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/services/fencing-gates-marin-county', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/services/flooring-marin-county', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/services/general-contractor-marin-county', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/services/general-contractor-sonoma-county', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/services/home-addition-contractor-marin-county', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/services/home-addition-marin-county', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/services/hvac-marin-county', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/services/kitchen-remodel-marin-county', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/services/landscaping-grading-marin-county', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/services/new-construction-marin-county', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/services/painting-marin-county', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/services/permit-expediting-marin-county', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/services/plumbing-marin-county', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/services/roofing-marin-county', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/services/whole-house-remodel-marin-county', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/services/windows-doors-marin-county', priority: 0.7, changeFrequency: 'monthly' },

  // Audience pages
  { path: '/for-homeowners', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/for-architects', priority: 0.8, changeFrequency: 'monthly' },

  // Case study pages
  { path: '/projects/marion-avenue-mill-valley', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/projects/sycamore-sound-studio', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/projects/plymouth-whole-home-renovation', priority: 0.8, changeFrequency: 'monthly' },

  // Static blog posts not in lib/blog.ts (not covered by getBlogPosts)
  { path: '/blog/adu-trends-marin-county-2026', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/blog/ai-agents-construction-marin-county', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/blog/ai-luxury-bathroom-remodels-marin-county', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/blog/bathroom-addition-marin-county', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/blog/how-to-hire-general-contractor-marin-county', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/blog/mill-valley-marin-county-ai-home-construction-permitting', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/blog/open-plan-kitchen-living-marin-county', priority: 0.6, changeFrequency: 'monthly' },
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
