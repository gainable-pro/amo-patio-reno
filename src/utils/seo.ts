import type { BlogArticle } from '../data/blogArticles';
import type { DomainIntervention } from '../data/companyData';

export function updatePageSeo(params: {
  article?: BlogArticle | null;
  domain?: DomainIntervention | null;
  section?: string | null;
}) {
  const baseUrl = 'https://www.amopatioreno.fr';
  let title = 'AMO Patio Réno | Du montage à la performance — Marion BEAUPUY (13)';
  let description = "AMO Patio Réno — Cabinet d'Assistance à Maîtrise d'Ouvrage (AMO), audit énergétique RGE et ingénierie du bâtiment par Marion BEAUPUY dans les Bouches-du-Rhône (13). Marseille, Aix-en-Provence, Salon-de-Provence, Arles, Aubagne.";
  let canonicalUrl = `${baseUrl}/`;

  if (params.article) {
    const art = params.article;
    title = `${art.title} | AMO Patio Réno — Marion BEAUPUY`;
    description = art.excerpt;
    canonicalUrl = `${baseUrl}/?article=${encodeURIComponent(art.slug)}`;
  } else if (params.domain) {
    const dom = params.domain;
    title = `${dom.title} — AMO Patio Réno | Marion BEAUPUY (13)`;
    description = `${dom.tagline} — ${dom.description.substring(0, 150)}...`;
    canonicalUrl = `${baseUrl}/?domaine=${encodeURIComponent(dom.id)}`;
  } else if (params.section) {
    const sec = params.section;
    if (sec === 'orientateur') {
      title = 'Orientateur & Diagnostic Projet AMO | AMO Patio Réno';
      description = 'Identifiez vos besoins en Assistance à Maîtrise d\'Ouvrage (AMO) ou Audit Énergétique dans les Bouches-du-Rhône (13).';
      canonicalUrl = `${baseUrl}/?section=orientateur`;
    } else if (sec === 'secteur13') {
      title = 'Intervention dans les Bouches-du-Rhône (13) | AMO Patio Réno';
      description = 'AMO Patio Réno intervient à Marseille, Aix-en-Provence, Salon-de-Provence, Arles, Aubagne et dans tout le 13.';
      canonicalUrl = `${baseUrl}/?section=secteur13`;
    } else if (sec === 'blog') {
      title = 'Blog Technique & Guides AMO / RGE | AMO Patio Réno';
      description = 'Articles techniques, réglementations MaPrimeRénov 2026, audits énergétiques 3CL et rénovation du bâti ancien dans le 13.';
      canonicalUrl = `${baseUrl}/?section=blog`;
    }
  }

  // Update Document Title
  document.title = title;

  // Meta helper
  const setMetaAttr = (selector: string, attr: string, value: string) => {
    let el = document.querySelector(selector);
    if (!el) {
      if (selector.startsWith('meta[name=')) {
        const nameMatch = selector.match(/name="([^"]+)"/);
        if (nameMatch) {
          el = document.createElement('meta');
          el.setAttribute('name', nameMatch[1]);
          document.head.appendChild(el);
        }
      } else if (selector.startsWith('meta[property=')) {
        const propMatch = selector.match(/property="([^"]+)"/);
        if (propMatch) {
          el = document.createElement('meta');
          el.setAttribute('property', propMatch[1]);
          document.head.appendChild(el);
        }
      }
    }
    if (el) {
      el.setAttribute(attr, value);
    }
  };

  setMetaAttr('meta[name="title"]', 'content', title);
  setMetaAttr('meta[name="description"]', 'content', description);
  setMetaAttr('meta[property="og:title"]', 'content', title);
  setMetaAttr('meta[property="og:description"]', 'content', description);
  setMetaAttr('meta[property="og:url"]', 'content', canonicalUrl);
  setMetaAttr('meta[property="twitter:title"]', 'content', title);
  setMetaAttr('meta[property="twitter:description"]', 'content', description);
  setMetaAttr('meta[property="twitter:url"]', 'content', canonicalUrl);

  // Update Canonical Link
  let canonicalEl = document.querySelector('link[rel="canonical"]');
  if (!canonicalEl) {
    canonicalEl = document.createElement('link');
    canonicalEl.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalEl);
  }
  canonicalEl.setAttribute('href', canonicalUrl);

  // Dynamic Schema.org JSON-LD for Articles
  let schemaEl = document.getElementById('dynamic-article-schema');
  if (params.article) {
    const art = params.article;
    const articleSchema = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      'headline': art.title,
      'description': art.excerpt,
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
      'contentLocation': {
        '@type': 'Place',
        'name': `${art.cityName} (${art.postalCode})`
      }
    };
    if (!schemaEl) {
      schemaEl = document.createElement('script');
      schemaEl.id = 'dynamic-article-schema';
      schemaEl.setAttribute('type', 'application/ld+json');
      document.head.appendChild(schemaEl);
    }
    schemaEl.textContent = JSON.stringify(articleSchema);
  } else if (schemaEl) {
    schemaEl.remove();
  }
}
