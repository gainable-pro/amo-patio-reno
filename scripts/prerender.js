import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Helper for ESM directory paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Import TS data modules
import { BLOG_ARTICLES } from '../src/data/blogArticles.js';
import { DOMAINS_INTERVENTION } from '../src/data/companyData.js';
import { CITY_SEO_DATA } from '../src/data/cityPagesData.js';

const baseUrl = 'https://www.amopatioreno.fr';

const escapeHtml = (str) =>
  str ? str.replace(/&/g, '&amp;')
           .replace(/</g, '&lt;')
           .replace(/>/g, '&gt;')
           .replace(/"/g, '&quot;')
           .replace(/'/g, '&#039;') : '';

async function prerender() {
  console.log('🚀 Starting Full Static Site Generation (SSG) for AMO Patio Réno...');

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
      description: "AMO Patio Réno — Cabinet d'Assistance à Maîtrise d'Ouvrage (AMO), audit énergétique RGE (OPQIBI 1911) et ingénierie du bâtiment par Marion BEAUPUY dans les Bouches-du-Rhône (13). Marseille, Aix-en-Provence, Salon-de-Provence, Miramas, Istres, Arles, Aubagne.",
      keywords: "AMO rénovation énergétique, Assistance Maître d'Ouvrage, Audit Énergétique 3CL, RGE OPQIBI 1911, Bouches-du-Rhône, 13, Miramas, Istres, Salon-de-Provence, Marseille, Aix-en-Provence, Arles, Aubagne, MaPrimeRénov 2026, Marion Beaupuy",
      ogType: 'website',
      bodyContent: `
        <header>
          <nav>
            <a href="/">Accueil</a> | 
            <a href="/orientateur">Diagnostic Projet</a> | 
            <a href="/secteur-13">Secteur 13</a> | 
            <a href="/blog">Blog & Guides</a>
          </nav>
        </header>
        <main>
          <h1>AMO Patio Réno — Du montage à la performance énergétique (13)</h1>
          <p>Accompagnement indépendant et neutre par Marion BEAUPUY, Directrice Technique qualifiée OPQIBI RGE 1911. Spécialiste de l'Assistance à Maîtrise d'Ouvrage (AMO), de l'audit énergétique et du bâti ancien provençal dans les Bouches-du-Rhône.</p>
          
          <h2>Nos 5 Domaines d'Intervention</h2>
          <ul>
            <li><a href="/domaines/energie">Accompagnement et Conseil Énergétique</a></li>
            <li><a href="/domaines/bati-ancien">Rénovation du Bâti Ancien Provençal</a></li>
            <li><a href="/domaines/amo">Assistance à Maîtrise d'Ouvrage (AMO) Neuf & Rénovation</a></li>
            <li><a href="/domaines/entreprises">Accompagnement des Entreprises & Relation MOA</a></li>
            <li><a href="/domaines/formation">Formations Professionnelles Rénovation Énergétique & MOP</a></li>
          </ul>

          <h2>Intervention Privilégiée dans les Bouches-du-Rhône (13)</h2>
          <p>Découvrez nos pages dédiées par commune pour vos projets AMO et audits RGE :</p>
          <ul>
            ${Object.keys(CITY_SEO_DATA).map(slug => {
              const c = CITY_SEO_DATA[slug];
              return `<li><a href="/villes/${slug}">AMO & Audit Énergétique RGE à ${escapeHtml(c.cityName)} (${c.postalCode})</a></li>`;
            }).join('\n')}
          </ul>
        </main>
      `,
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
          'Salon-de-Provence', 'Miramas', 'Istres', 'Marseille', 'Aix-en-Provence', 'Arles', 'Aubagne', 'Martigues', 'La Ciotat', 'Vitrolles', 'Bouches-du-Rhône'
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
      ogType: 'website',
      bodyContent: `
        <main>
          <h1>Orientateur & Diagnostic Projet AMO Rénovation (13)</h1>
          <p>Identifiez vos besoins précis en Assistance à Maîtrise d'Ouvrage (AMO), Audit Énergétique RGE et financement MaPrimeRénov 2026.</p>
        </main>
      `
    },
    {
      path: '/secteur-13',
      fileDir: path.join(distDir, 'secteur-13'),
      title: 'AMO & Audit Énergétique Bouches-du-Rhône (13) | Miramas, Istres, Salon, Aix, Marseille',
      description: "Cabinet AMO Patio Réno par Marion BEAUPUY : conseil en rénovation énergétique et suivi de chantier à Miramas, Istres, Salon-de-Provence, Aix-en-Provence, Marseille, Arles.",
      keywords: "AMO Miramas, AMO Istres, AMO Salon-de-Provence, AMO Aix-en-Provence, AMO Marseille, audit énergétique 13",
      ogType: 'website',
      bodyContent: `
        <main>
          <h1>AMO & Audit Énergétique dans les Bouches-du-Rhône (13)</h1>
          <p>Cabinet d'ingénierie et conseil en rénovation énergétique intervenant à Miramas, Istres, Salon-de-Provence, Aix-en-Provence, Marseille et Arles.</p>
        </main>
      `
    },
    {
      path: '/blog',
      fileDir: path.join(distDir, 'blog'),
      title: 'Blog Technique AMO & Guides Rénovation Énergétique RGE (13) | Patio Réno',
      description: "Retrouvez nos guides techniques sur l'audit 3CL, le bâti ancien provençal, la réglementation MaPrimeRénov' 2026 et l'accompagnement de chantier dans le 13.",
      keywords: "blog AMO, guides rénovation énergétique, tutoriels RGE, audit 3CL, bâti ancien provençal",
      ogType: 'website',
      bodyContent: `
        <main>
          <h1>Blog Technique AMO & Guides Rénovation Énergétique RGE (13)</h1>
          <p>Retrouvez l'ensemble de nos guides techniques et articles pour réussir vos projets de rénovation énergétique dans les Bouches-du-Rhône.</p>
          <ul>
            ${BLOG_ARTICLES.map(art => `<li><a href="/articles/${art.slug}">${escapeHtml(art.title)}</a></li>`).join('\n')}
          </ul>
        </main>
      `
    }
  ];

  // 3. City Landing Pages (/villes/:slug)
  const domainPathSlugMap = {
    'energie': 'energie',
    'bati_ancien': 'bati-ancien',
    'amo': 'amo',
    'entreprises': 'entreprises',
    'formation': 'formation'
  };

  Object.keys(CITY_SEO_DATA).forEach(slug => {
    const city = CITY_SEO_DATA[slug];
    pages.push({
      path: `/villes/${slug}`,
      fileDir: path.join(distDir, 'villes', slug),
      title: city.title,
      description: city.metaDescription,
      keywords: `AMO ${city.cityName}, Audit Énergétique RGE ${city.cityName}, Rénovation thermique ${city.cityName}, MaPrimeRénov ${city.cityName}, ${city.postalCode}, Marion Beaupuy`,
      ogType: 'website',
      bodyContent: `
        <header>
          <nav><a href="/">Accueil</a> > <a href="/secteur-13">Villes (13)</a> > <span>${escapeHtml(city.cityName)}</span></nav>
        </header>
        <main>
          <h1>${escapeHtml(city.h1)}</h1>
          <p>${escapeHtml(city.intro)}</p>
          <blockquote>${escapeHtml(city.heroTagline)}</blockquote>
          
          <h2>Spécificités du parc immobilier et du climat à ${escapeHtml(city.cityName)} (${city.postalCode})</h2>
          <p>${escapeHtml(city.specificsText)}</p>
          <p>${escapeHtml(city.localHousingContext)}</p>

          <h2>Nos Prestations AMO & Audit Énergétique RGE à ${escapeHtml(city.cityName)}</h2>
          <ul>
            ${city.recommendedServices.map(s => `
              <li>
                <strong>${escapeHtml(s.title)}</strong> : ${escapeHtml(s.description)}
              </li>
            `).join('\n')}
          </ul>

          <h2>Foire Aux Questions — Rénovation Énergétique à ${escapeHtml(city.cityName)}</h2>
          ${city.faq ? city.faq.map(f => `
            <div>
              <h3>${escapeHtml(f.question)}</h3>
              <p>${escapeHtml(f.answer)}</p>
            </div>
          `).join('\n') : ''}

          <h2>Autres communes d'intervention dans les Bouches-du-Rhône (13)</h2>
          <ul>
            ${Object.keys(CITY_SEO_DATA).map(otherSlug => {
              const oc = CITY_SEO_DATA[otherSlug];
              return `<li><a href="/villes/${otherSlug}">AMO & Audit RGE à ${escapeHtml(oc.cityName)} (${oc.postalCode})</a></li>`;
            }).join('\n')}
          </ul>
        </main>
      `,
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        'name': `AMO Patio Réno — ${city.cityName}`,
        'description': city.metaDescription,
        'url': `${baseUrl}/villes/${city.slug}`,
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
          'latitude': city.geoCoordinates.latitude,
          'longitude': city.geoCoordinates.longitude
        },
        'areaServed': {
          '@type': 'AdministrativeArea',
          'name': `${city.cityName} (${city.postalCode})`
        }
      }
    });
  });

  // 4. Domaines d'Intervention
  DOMAINS_INTERVENTION.forEach(dom => {
    const slug = domainPathSlugMap[dom.id] || dom.id;
    pages.push({
      path: `/domaines/${slug}`,
      fileDir: path.join(distDir, 'domaines', slug),
      title: `${dom.title} — AMO Rénovation (13) | Patio Réno`,
      description: `${dom.tagline} — ${dom.description.substring(0, 160)}`,
      keywords: `${dom.title}, ${dom.shortTitle}, AMO, rénovation énergétique, 13, Bouches-du-Rhône, Marion BEAUPUY`,
      ogType: 'website',
      bodyContent: `
        <main>
          <h1>${escapeHtml(dom.title)}</h1>
          <p><em>${escapeHtml(dom.tagline)}</em></p>
          <p>${escapeHtml(dom.description)}</p>
          <h2>Points clés d'intervention</h2>
          <ul>
            ${dom.bulletPoints.map(bp => `<li>${escapeHtml(bp)}</li>`).join('\n')}
          </ul>
        </main>
      `
    });
  });

  // 5. Technical Articles
  BLOG_ARTICLES.forEach(art => {
    pages.push({
      path: `/articles/${art.slug}`,
      fileDir: path.join(distDir, 'articles', art.slug),
      title: `${art.title} | AMO Patio Réno (13)`,
      description: art.excerpt,
      keywords: `${art.domainTitle}, AMO, ${art.cityName}, ${art.postalCode}, Marion BEAUPUY, Audit Énergétique RGE, Bouches-du-Rhône, rénovation thermique`,
      ogType: 'article',
      bodyContent: `
        <article>
          <h1>${escapeHtml(art.title)}</h1>
          <p>Publié par <strong>${escapeHtml(art.author || 'Marion BEAUPUY')}</strong> le ${escapeHtml(art.publishDate)} à ${escapeHtml(art.cityName)} (${art.postalCode})</p>
          <p class="excerpt"><strong>${escapeHtml(art.excerpt)}</strong></p>
          <h2>Analyse Technique & Recommandations AMO</h2>
          <p>${escapeHtml(art.excerpt)}</p>
          <p>Pour vos projets d'audit énergétique ou d'accompagnement AMO à ${escapeHtml(art.cityName)}, contactez Marion BEAUPUY chez AMO Patio Réno.</p>
          <p><a href="/villes/${art.cityName.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-')}">Découvrir les prestations AMO à ${escapeHtml(art.cityName)}</a></p>
        </article>
      `,
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

  let generatedCount = 0;
  const sitemapUrls = [];

  for (const page of pages) {
    const canonicalUrl = page.path === '/' ? `${baseUrl}/` : `${baseUrl}${page.path}`;
    const safeTitle = escapeHtml(page.title);
    const safeDescription = escapeHtml(page.description);
    const safeKeywords = escapeHtml(page.keywords || '');

    sitemapUrls.push({
      loc: canonicalUrl,
      lastmod: '2026-09-14',
      priority: page.path === '/' ? '1.0' : page.path.startsWith('/villes/') ? '0.9' : '0.8'
    });

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

    // Inject Rich HTML Body Content inside <div id="root"></div>
    if (page.bodyContent) {
      html = html.replace('<div id="root"></div>', `<div id="root">${page.bodyContent}</div>`);
    }

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

  console.log(`✅ Pre-rendered ${generatedCount} static HTML pages in dist/ with FULL HTML BODY text!`);

  // Generate Sitemap.xml
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync(path.join(rootDir, 'public', 'sitemap.xml'), sitemapXml, 'utf-8');
  if (fs.existsSync(distDir)) {
    fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf-8');
  }
  console.log(`✅ Generated updated sitemap.xml with ${sitemapUrls.length} URLs!`);
}

prerender().catch(err => {
  console.error('❌ Error during pre-rendering:', err);
  process.exit(1);
});
