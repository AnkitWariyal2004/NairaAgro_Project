// src/app/sitemap.xml/route.ts

export async function GET() {
    const baseUrl = 'https://www.nairaagro.in' // Change this to your actual domain
  
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
          <loc>${baseUrl}/</loc>
          <changefreq>monthly</changefreq>
          <priority>1.0</priority>
        </url>
      </urlset>
    `
  
    return new Response(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
      },
    })
  }
  