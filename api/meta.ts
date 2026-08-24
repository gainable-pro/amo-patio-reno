import type { VercelRequest, VercelResponse } from '@vercel/node';
import { BLOG_ARTICLES } from '../src/data/blogArticles';
import { DOMAINS_INTERVENTION } from '../src/data/companyData';

export default function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const baseUrl = 'https://www.amopatioreno.fr';
    
    // Parse query parameters
    const articleSlug = typeof req.query.article === 'string' ? req.query.article : null;
    const domaineId = typeof req.query.domaine === 'string' ? req.query.domaine : null;
    const sectionName = typeof req.query.section === 'string' ? req.query.section : null;

    let title = 'AMO Rénovation Énergétique & Audit RGE (13) | Patio Réno — Marion BEAUPUY';
    let description = "AMO Patio Réno — Cabinet d'Assistance à Maîtrise d'Ouvrage (AMO), audit énergétique RGE qualifié OPQIBI 1911 et accompagnement rénovation globale par Marion BEAUPUY dans les Bouches-du-Rhône (13). Marseille, Aix-en-Provence, Salon-de-Provence, Arles, Aubagne.";
    let keywords = 'AMO rénovation énergétique, Assistance Maître d\'Ouvrage, Audit Énergétique 3CL, RGE OPQIBI 1911, Bouches-du-Rhône, 13, Marseille, Aix-en-Provence, Salon-de-Provence, Arles, Aubagne, Bâti ancien chaux pierre, MaPrimeRénov 2026, Loi MOP, Marion Beaupuy';
    let canonicalUrl = `${baseUrl}/`;
    let ogType = 'website';
    let ogImage = `${baseUrl}/og-image.jpg`;
    let ogImageAlt = 'AMO Patio Réno - Assistance à Maîtrise d\'Ouvrage et Audit Énergétique RGE (13)';
    
    let jsonLd: Record<string, any> = {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      'name': 'AMO Patio Réno — Marion BEAUPUY',
      'image': `${baseUrl}/logo.jpg`,
      '@id': `${baseUrl}/#business`,
      'url': baseUrl,
      'telephone': '+33784429198',
      'email': 'contact@amopatioreno.fr',
      'priceRange': '€€',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '320 Chemin de Mireille',
        'addressLocality': 'Salon-de-Provence',
        'postalCode': '13300',
        'addressRegion': 'Bouches-du-Rhône',
        'addressCountry': 'FR'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 43.6403,
        'longitude': 5.0975
      },
      'areaServed': [
        'Salon-de-Provence',
        'Marseille',
        'Aix-en-Provence',
        'Arles',
        'Aubagne',
        'Martigues',
        'La Ciotat',
        'Istres',
        'Vitrolles',
        'Bouches-du-Rhône'
      ],
      'knowsAbout': [
        'Assistance à Maîtrise d\'Ouvrage (AMO)',
        'Audit Énergétique 3CL RGE',
        'Restauration du Bâti Ancien Provençal',
        'Loi MOP',
        'MaPrimeRénov 2026',
        'OPQIBI RGE 1911'
      ]
    };

    // Match Article
    if (articleSlug) {
      const art = BLOG_ARTICLES.find(a => a.slug === articleSlug);
      if (art) {
        title = `${art.title} | AMO Patio Réno (13)`;
        description = art.excerpt;
        keywords = `${art.domainTitle}, AMO, ${art.cityName}, ${art.postalCode}, Marion BEAUPUY, Audit Énergétique RGE, Bouches-du-Rhône, rénovation thermique`;
        canonicalUrl = `${baseUrl}/?article=${encodeURIComponent(art.slug)}`;
        ogType = 'article';
        ogImageAlt = art.title;

        jsonLd = {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          'headline': art.title,
          'description': art.excerpt,
          'articleBody': art.excerpt,
          'author': {
            '@type': 'Person',
            'name': art.author || 'Marion BEAUPUY'
          },
          'publisher': {
            '@type': 'Organization',
            'name': 'AMO Patio Réno',
            'logo': {
              '@type': 'ImageObject',
              'url': `${baseUrl}/logo.jpg`
            }
          },
          'datePublished': art.publishDate,
          'mainEntityOfPage': canonicalUrl,
          'image': ogImage,
          'contentLocation': {
            '@type': 'Place',
            'name': `${art.cityName} (${art.postalCode})`
          }
        };
      }
    } 
    // Match Domaine
    else if (domaineId) {
      const dom = DOMAINS_INTERVENTION.find(d => d.id === domaineId);
      if (dom) {
        title = `${dom.title} — AMO Rénovation (13) | Patio Réno`;
        description = `${dom.tagline} — ${dom.description.substring(0, 160)}`;
        canonicalUrl = `${baseUrl}/?domaine=${encodeURIComponent(dom.id)}`;
        ogImageAlt = dom.title;
      }
    } 
    // Match Section
    else if (sectionName) {
      if (sectionName === 'orientateur') {
        title = 'Orientateur & Diagnostic Projet AMO Rénovation (13) | Patio Réno';
        description = 'Simulez vos besoins en Assistance à Maîtrise d\'Ouvrage (AMO), Audit Énergétique RGE et subventions MaPrimeRénov\' dans les Bouches-du-Rhône.';
        canonicalUrl = `${baseUrl}/?section=orientateur`;
      } else if (sectionName === 'secteur13') {
        title = 'AMO & Audit Énergétique Bouches-du-Rhône (13) | Marseille, Aix, Salon, Arles';
        description = 'Cabinet AMO Patio Réno par Marion BEAUPUY : conseil en rénovation énergétique et suivi de chantier à Marseille, Aix-en-Provence, Salon-de-Provence, Arles, Aubagne.';
        canonicalUrl = `${baseUrl}/?section=secteur13`;
      } else if (sectionName === 'blog') {
        title = 'Blog Technique AMO & Guides Rénovation Énergétique RGE (13) | Patio Réno';
        description = 'Retrouvez nos 40 guides techniques sur l\'audit 3CL, le bâti ancien provençal, la réglementation MaPrimeRénov\' 2026 et l\'accompagnement de chantier dans le 13.';
        canonicalUrl = `${baseUrl}/?section=blog`;
      }
    }

    const escapeHtml = (str: string) => 
      str.replace(/&/g, '&amp;')
         .replace(/</g, '&lt;')
         .replace(/>/g, '&gt;')
         .replace(/"/g, '&quot;')
         .replace(/'/g, '&#039;');

    const safeTitle = escapeHtml(title);
    const safeDescription = escapeHtml(description);
    const safeKeywords = escapeHtml(keywords);

    const html = `<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" href="/favicon.png" />
    <link rel="alternate icon" type="image/x-icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- Primary Meta Tags -->
    <title>${safeTitle}</title>
    <meta name="title" content="${safeTitle}" />
    <meta name="description" content="${safeDescription}" />
    <meta name="keywords" content="${safeKeywords}" />
    <meta name="author" content="Marion BEAUPUY" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    
    <link rel="canonical" href="${canonicalUrl}" />

    <!-- Open Graph / Facebook / LinkedIn -->
    <meta property="og:type" content="${ogType}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:site_name" content="AMO Patio Réno" />
    <meta property="og:locale" content="fr_FR" />
    <meta property="og:title" content="${safeTitle}" />
    <meta property="og:description" content="${safeDescription}" />
    <meta property="og:image" content="${ogImage}" />
    <meta property="og:image:secure_url" content="${ogImage}" />
    <meta property="og:image:type" content="image/jpeg" />
    <meta property="og:image:width" content="1376" />
    <meta property="og:image:height" content="768" />
    <meta property="og:image:alt" content="${escapeHtml(ogImageAlt)}" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="${canonicalUrl}" />
    <meta property="twitter:title" content="${safeTitle}" />
    <meta property="twitter:description" content="${safeDescription}" />
    <meta property="twitter:image" content="${ogImage}" />

    <!-- Structured Data Schema.org JSON-LD -->
    <script type="application/ld+json">
    ${JSON.stringify(jsonLd, null, 2)}
    </script>

    <script type="module" crossorigin src="/assets/index.js"></script>
    <link rel="stylesheet" crossorigin href="/assets/index.css">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`;

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
    return res.status(200).send(html);
  } catch (error) {
    console.error('SEO middleware error:', error);
    return res.status(500).send('Internal Server Error');
  }
}
