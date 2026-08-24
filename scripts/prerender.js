import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Helper for ESM directory paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Import TS data modules directly or parse data
import { BLOG_ARTICLES } from '../src/data/blogArticles.js';
import { DOMAINS_INTERVENTION } from '../src/data/companyData.js';

const baseUrl = 'https://www.amopatioreno.fr';

async function prerender() {
  console.log('🚀 Starting Static Site Pre-Rendering (SSG) for AMO Patio Réno...');

  const distDir = path.join(rootDir, 'dist');
  const templatePath = path.join(distDir, 'index.html');

  if (!fs.existsSync(templatePath)) {
    console.error('❌ dist/index.html not found! Run vite build first.');
    process.exit(1);
  }

  const baseTemplate = fs.readFileSync(templatePath, 'utf-8');

  // List of all pages to pre-render
  const pages = [
    // 1. Homepage
    {
      path: '/',
      fileDir: distDir,
      title: 'AMO Rénovation Énergétique & Audit RGE (13) | Patio Réno — Marion BEAUPUY',
      description: "AMO Patio Réno — Cabinet d'Assistance à Maîtrise d'Ouvrage (AMO), audit énergétique RGE (OPQIBI 1911) et ingénierie du bâtiment par Marion BEAUPUY dans les Bouches-du-Rhône (13). Marseille, Aix-en-Provence, Salon-de-Provence, Arles, Aubagne.",
      keywords: "AMO rénovation énergétique, Assistance Maître d'Ouvrage, Audit Énergétique 3CL, RGE OPQIBI 1911, Bouches-du-Rhône, 13, Marseille, Aix-en-Provence, Salon-de-Provence, Arles, Aubagne, Bâti ancien chaux pierre, MaPrimeRénov 2026, Loi MOP, Marion Beaupuy",
      ogType: 'website',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        'name': 'AMO Patio Réno — Marion BEAUPUY',
        'image': `${baseUrl}/logo.jpg`,
        '@id': `${baseUrl}/#business`,
        'url': `${baseUrl}/`,
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
          'Salon-de-Provence', 'Marseille', 'Aix-en-Provence', 'Arles', 'Aubagne', 'Martigues', 'La Ciotat', 'Istres', 'Vitrolles', 'Bouches-du-Rhône'
        ],
        'knowsAbout': [
          'Assistance à Maîtrise d\'Ouvrage (AMO)',
          'Audit Énergétique 3CL RGE',
          'Restauration du Bâti Ancien Provençal',
          'Loi MOP',
          'MaPrimeRénov 2026',
          'OPQIBI RGE 1911'
        ]
      }
    },
    // 2. Main Sections
    {
      path: '/orientateur',
      fileDir: path.join(distDir, 'orientateur'),
      title: 'Orientateur & Diagnostic Projet AMO Rénovation (13) | Patio Réno',
      description: "Simulez vos besoins en Assistance à Maîtrise d'Ouvrage (AMO), Audit Énergétique RGE et subventions MaPrimeRénov' dans les Bouches-du-Rhône.",
      keywords: "orientateur AMO, diagnostic rénovation, simulateur MaPrimeRénov 2026, audit RGE 13, Marion Beaupuy",
      ogType: 'website'
    },
    {
      path: '/secteur-13',
      fileDir: path.join(distDir, 'secteur-13'),
      title: 'AMO & Audit Énergétique Bouches-du-Rhône (13) | Marseille, Aix, Salon, Arles',
      description: "Cabinet AMO Patio Réno par Marion BEAUPUY : conseil en rénovation énergétique et suivi de chantier à Marseille, Aix-en-Provence, Salon-de-Provence, Arles, Aubagne.",
      keywords: "AMO Marseille, AMO Aix-en-Provence, AMO Salon-de-Provence, AMO Arles, AMO Aubagne, audit énergétique 13",
      ogType: 'website'
    },
    {
      path: '/blog',
      fileDir: path.join(distDir, 'blog'),
      title: 'Blog Technique AMO & Guides Rénovation Énergétique RGE (13) | Patio Réno',
      description: "Retrouvez nos 40 guides techniques sur l'audit 3CL, le bâti ancien provençal, la réglementation MaPrimeRénov' 2026 et l'accompagnement de chantier dans le 13.",
      keywords: "blog AMO, guides rénovation énergétique, tutoriels RGE, audit 3CL, bâti ancien provençal",
      ogType: 'website'
    }
  ];

  // 3. Domaines d'Intervention
  const domainPathSlugMap = {
    'energie': 'energie',
    'bati_ancien': 'bati-ancien',
    'amo': 'amo',
    'entreprises': 'entreprises',
    'formation': 'formation'
  };

  DOMAINS_INTERVENTION.forEach(dom => {
    const slug = domainPathSlugMap[dom.id] || dom.id;
    pages.push({
      path: `/domaines/${slug}`,
      fileDir: path.join(distDir, 'domaines', slug),
      title: `${dom.title} — AMO Rénovation (13) | Patio Réno`,
      description: `${dom.tagline} — ${dom.description.substring(0, 160)}`,
      keywords: `${dom.title}, ${dom.shortTitle}, AMO, rénovation énergétique, 13, Bouches-du-Rhône, Marion BEAUPUY`,
      ogType: 'website'
    });
  });

  // 4. All 40 Technical Articles
  BLOG_ARTICLES.forEach(art => {
    pages.push({
      path: `/articles/${art.slug}`,
      fileDir: path.join(distDir, 'articles', art.slug),
      title: `${art.title} | AMO Patio Réno (13)`,
      description: art.excerpt,
      keywords: `${art.domainTitle}, AMO, ${art.cityName}, ${art.postalCode}, Marion BEAUPUY, Audit Énergétique RGE, Bouches-du-Rhône, rénovation thermique`,
      ogType: 'article',
      jsonLd: {
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
        'mainEntityOfPage': `${baseUrl}/articles/${art.slug}`,
        'image': `${baseUrl}/og-image.jpg`,
        'contentLocation': {
          '@type': 'Place',
          'name': `${art.cityName} (${art.postalCode})`
        }
      }
    });
  });

  const escapeHtml = (str) =>
    str ? str.replace(/&/g, '&amp;')
             .replace(/</g, '&lt;')
             .replace(/>/g, '&gt;')
             .replace(/"/g, '&quot;')
             .replace(/'/g, '&#039;') : '';

  let generatedCount = 0;

  for (const page of pages) {
    const canonicalUrl = page.path === '/' ? `${baseUrl}/` : `${baseUrl}${page.path}`;
    const safeTitle = escapeHtml(page.title);
    const safeDescription = escapeHtml(page.description);
    const safeKeywords = escapeHtml(page.keywords || '');
    const ogImage = `${baseUrl}/og-image.jpg`;

    let html = baseTemplate;

    // Replace Title
    html = html.replace(/<title>.*?<\/title>/s, `<title>${safeTitle}</title>`);
    html = html.replace(/<meta name="title" content=".*?" \/>/s, `<meta name="title" content="${safeTitle}" />`);

    // Replace Meta Description & Keywords & Canonical
    html = html.replace(/<meta name="description" content=".*?" \/>/s, `<meta name="description" content="${safeDescription}" />`);
    html = html.replace(/<meta name="keywords" content=".*?" \/>/s, `<meta name="keywords" content="${safeKeywords}" />`);
    html = html.replace(/<link rel="canonical" href=".*?" \/>/s, `<link rel="canonical" href="${canonicalUrl}" />`);

    // Replace Open Graph Tags
    html = html.replace(/<meta property="og:type" content=".*?" \/>/s, `<meta property="og:type" content="${page.ogType}" />`);
    html = html.replace(/<meta property="og:url" content=".*?" \/>/s, `<meta property="og:url" content="${canonicalUrl}" />`);
    html = html.replace(/<meta property="og:title" content=".*?" \/>/s, `<meta property="og:title" content="${safeTitle}" />`);
    html = html.replace(/<meta property="og:description" content=".*?" \/>/s, `<meta property="og:description" content="${safeDescription}" />`);

    // Replace Twitter Tags
    html = html.replace(/<meta property="twitter:url" content=".*?" \/>/s, `<meta property="twitter:url" content="${canonicalUrl}" />`);
    html = html.replace(/<meta property="twitter:title" content=".*?" \/>/s, `<meta property="twitter:title" content="${safeTitle}" />`);
    html = html.replace(/<meta property="twitter:description" content=".*?" \/>/s, `<meta property="twitter:description" content="${safeDescription}" />`);

    // Add/Replace JSON-LD Schema if present
    if (page.jsonLd) {
      const jsonLdString = `<script type="application/ld+json">\n${JSON.stringify(page.jsonLd, null, 2)}\n</script>`;
      html = html.replace(/<script type="application\/ld\+json">.*?<\/script>/s, jsonLdString);
    }

    // Ensure directory exists
    if (!fs.existsSync(page.fileDir)) {
      fs.mkdirSync(page.fileDir, { recursive: true });
    }

    const outputFile = page.path === '/' 
      ? path.join(distDir, 'index.html') 
      : path.join(page.fileDir, 'index.html');

    fs.writeFileSync(outputFile, html, 'utf-8');
    generatedCount++;
  }

  console.log(`✅ Pre-rendered ${generatedCount} static HTML pages in dist/!`);
}

prerender().catch(err => {
  console.error('❌ Error during pre-rendering:', err);
  process.exit(1);
});
