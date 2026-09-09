import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Add any restricted routes here
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}