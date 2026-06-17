import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://divineevents.co.uk'
  
  const routes = [
    '',
    '/services/mandap-hire',
    '/services/wedding-decor',
    '/services/stage-design',
    '/services/dj-entertainment',
    '/services/lighting',
    '/services/packages',
    '/locations/leicester',
    '/locations/birmingham',
    '/locations/london',
    '/locations/nottingham',
    '/locations/derby',
    '/locations/coventry',
    '/portfolio',
    '/about',
    '/contact',
    '/testimonials',
    '/blog',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : route.includes('/locations/') ? 0.9 : 0.8,
  }))
}

// Made with Bob
