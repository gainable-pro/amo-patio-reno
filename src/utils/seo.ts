import type { BlogArticle } from '../data/blogArticles';
import type { DomainIntervention } from '../data/companyData';

const domainSlugMap: Record<string, string> = {
  'energie': 'energie',
  'bati_ancien': 'bati-ancien',
  'amo': 'amo',
  'entreprises': 'entreprises',
  'formation': 'formation'
};

export function updatePageSeo(params: {
  article?: BlogArticle | null;
  domain?: DomainIntervention | null;
  section?: string | null;
}) {
  const baseUrl = 'https://www.amopatioreno.fr';
  let title = 'AMO Rénovation Énergétique & Audit RGE (13) | Patio Réno — Marion BEAUPUY';
  let description = "AMO Patio Réno — Cabinet d'Assistance à Maîtrise d'Ouvrage (AMO), audit énergétique RGE qualifié OPQIBI 1911 et accompagnement rénovation globale par Marion BEAUPUY dans les Bouches-du-Rhône (13). Marseille, Aix-en-Provence, Salon-de-Provence, Arles, Aubagne.";
  let canonicalUrl = `${baseUrl}/`;
  let ogImage = `${baseUrl}/og-image.jpg`;

  if (params.article) {
    const art = params.article;
    title = `${art.title} | AMO Patio Réno (13)`;
    description = art.excerpt;
    canonicalUrl = `${baseUrl}/articles/${art.slug}`;
  } else if (params.domain) {
    const dom = params.domain;
    const domSlug = domainSlugMap[dom.id] || dom.id;
    title = `${dom.title} — AMO Rénovation (13) | Patio Réno`;
    description = `${dom.tagline} — ${dom.description.substring(0, 160)}`;
    canonicalUrl = `${baseUrl}/domaines/${domSlug}`;
  } else if (params.section) {
    const sec = params.section;
    if (sec === 'orientateur') {
      title = 'Orientateur & Diagnostic Projet AMO Rénovation (13) | Patio Réno';
      description = 'Simulez vos besoins en Assistance à Maîtrise d\'Ouvrage (AMO), Audit Énergétique RGE et subventions MaPrimeRénov\' dans les Bouches-du-Rhône.';
      canonicalUrl = `${baseUrl}/orientateur`;
    } else if (sec === 'secteur13') {
      title = 'AMO & Audit Énergétique Bouches-du-Rhône (13) | Marseille, Aix, Salon, Arles';
      description = 'Cabinet AMO Patio Réno par Marion BEAUPUY : conseil en rénovation énergétique et suivi de chantier à Marseille, Aix-en-Provence, Salon-de-Provence, Arles, Aubagne.';
      canonicalUrl = `${baseUrl}/secteur-13`;
    } else if (sec === 'blog') {
      title = 'Blog Technique AMO & Guides Rénovation Énergétique RGE (13) | Patio Réno';
      description = 'Retrouvez nos 40 guides techniques sur l\'audit 3CL, le bâti ancien provençal, la réglementation MaPrimeRénov\' 2026 et l\'accompagnement de chantier dans le 13.';
      canonicalUrl = `${baseUrl}/blog`;
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
  setMetaAttr('meta[property="og:image"]', 'content', ogImage);
  setMetaAttr('meta[property="twitter:title"]', 'content', title);
  setMetaAttr('meta[property="twitter:description"]', 'content', description);
  setMetaAttr('meta[property="twitter:url"]', 'content', canonicalUrl);
  setMetaAttr('meta[property="twitter:image"]', 'content', ogImage);

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
      'image': ogImage,
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
