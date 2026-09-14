import React from 'react';
import { CITY_SEO_DATA, type CitySeoDetails } from '../data/cityPagesData';
import { MapPin, ShieldCheck, ArrowRight, Check, FileCheck, Sun, Zap, Building2, HardHat, Landmark, Phone } from 'lucide-react';

interface CityLandingPageProps {
  citySlug: string;
  onOpenContact: (cityName?: string) => void;
  onNavigateToCity: (slug: string) => void;
}

export const CityLandingPage: React.FC<CityLandingPageProps> = ({
  citySlug,
  onOpenContact,
  onNavigateToCity
}) => {
  const cityData: CitySeoDetails = CITY_SEO_DATA[citySlug] || CITY_SEO_DATA['salon-de-provence'];

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileCheck': return FileCheck;
      case 'ShieldCheck': return ShieldCheck;
      case 'Sun': return Sun;
      case 'Zap': return Zap;
      case 'Building2': return Building2;
      case 'HardHat': return HardHat;
      case 'Landmark': return Landmark;
      default: return ShieldCheck;
    }
  };

  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    'name': `AMO Patio Réno — ${cityData.cityName}`,
    'description': cityData.metaDescription,
    'url': `https://www.amopatioreno.fr/villes/${cityData.slug}`,
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
      'latitude': cityData.geoCoordinates.latitude,
      'longitude': cityData.geoCoordinates.longitude
    },
    'areaServed': {
      '@type': 'AdministrativeArea',
      'name': `${cityData.cityName} (${cityData.postalCode})`
    },
    'knowsAbout': [
      'Assistance à Maîtrise d\'Ouvrage (AMO)',
      'Audit Énergétique RGE OPQIBI 1911',
      'Rénovation globale MaPrimeRénov 2026',
      'Thermique du Bâti Ancien Provençal'
    ]
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Schema.org Local Business Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      {/* Hero Section */}
      <section className="bg-white border-b border-stone-200 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="bureau-badge-green flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  Secteur {cityData.cityName} ({cityData.postalCode})
                </span>
                <span className="bureau-badge-brown">
                  Cabinet AMO & Audit RGE OPQIBI 1911
                </span>
              </div>

              <h1 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-[#361B00] leading-tight">
                {cityData.h1}
              </h1>

              <p className="text-stone-700 text-base sm:text-lg leading-relaxed font-sans">
                {cityData.intro}
              </p>

              <div className="p-4 bg-stone-50 border-l-4 border-l-[#83ae42] rounded text-stone-800 text-sm font-serif italic">
                "{cityData.heroTagline}" — Accompagnement technique et financier neutre, indépendant et qualifié sur {cityData.cityName}.
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenContact(cityData.cityName)}
                  className="btn-bureau-primary text-sm py-3 px-6"
                >
                  <span>Demander un devis / rdv à {cityData.cityName}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="tel:+33784429198"
                  className="btn-bureau-eco text-sm py-3 px-6 flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>07 84 42 91 98</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-4">
              <div className="bg-stone-900 text-white p-6 rounded-xl space-y-4 shadow-lg">
                <div className="border-b border-stone-800 pb-3">
                  <span className="text-xs font-mono font-bold text-[#83ae42] uppercase">Fiche d'intervention</span>
                  <h3 className="font-serif font-bold text-xl text-white mt-1">
                    AMO Patio Réno — {cityData.cityName}
                  </h3>
                </div>

                <ul className="space-y-3 text-xs text-stone-300">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#83ae42]" />
                    <span>Audit Énergétique RGE qualifié OPQIBI 1911</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#83ae42]" />
                    <span>Dépôt & montage subventions MaPrimeRénov' 2026</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#83ae42]" />
                    <span>Expertise Bâti Ancien et Confort d'Été Passif</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#83ae42]" />
                    <span>Intervention directe sous 48h à {cityData.cityName}</span>
                  </li>
                </ul>

                <button
                  onClick={() => onOpenContact(cityData.cityName)}
                  className="w-full py-2.5 bg-[#83ae42] hover:bg-[#6c9135] text-stone-950 font-bold text-xs rounded transition-colors"
                >
                  Prendre contact pour {cityData.cityName}
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Specifics & Housing Context Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-12 rounded-xl border border-stone-200 shadow-sm space-y-8">
          <div className="border-b border-stone-200 pb-4">
            <span className="bureau-badge-brown">Expertise Territoriale</span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#361B00] mt-2">
              Spécificités de la rénovation thermique à {cityData.cityName} ({cityData.postalCode})
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-stone-700 text-sm leading-relaxed">
            <div className="space-y-3 p-5 bg-stone-50 rounded-lg border border-stone-200">
              <h3 className="font-serif font-bold text-lg text-[#361B00] flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#83ae42]" />
                Contexte du parc immobilier local
              </h3>
              <p>{cityData.specificsText}</p>
            </div>

            <div className="space-y-3 p-5 bg-stone-50 rounded-lg border border-stone-200">
              <h3 className="font-serif font-bold text-lg text-[#361B00] flex items-center gap-2">
                <Sun className="w-5 h-5 text-amber-600" />
                Climat méditerranéen & Confort d'été
              </h3>
              <p>{cityData.localHousingContext}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-stone-200 pb-4">
          <span className="bureau-badge-green">Missions Dédiées</span>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#361B00] mt-2">
            Nos prestations AMO & Audit à {cityData.cityName}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cityData.recommendedServices.map((srv, idx) => {
            const Icon = getServiceIcon(srv.icon);
            return (
              <div key={idx} className="bureau-card p-6 rounded-xl flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-[#83ae42]/15 flex items-center justify-center text-[#4d843d]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[#361B00]">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {srv.description}
                  </p>
                </div>

                <button
                  onClick={() => onOpenContact(cityData.cityName)}
                  className="text-xs font-bold text-[#4d843d] hover:text-[#361B00] flex items-center gap-1 pt-2 border-t border-stone-100"
                >
                  <span>En savoir plus sur cette prestation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ Local SEO */}
      {cityData.faq && cityData.faq.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 sm:p-12 rounded-xl border border-stone-200 shadow-sm space-y-6">
            <div className="border-b border-stone-200 pb-4">
              <span className="bureau-badge-brown">Foire Aux Questions</span>
              <h2 className="font-serif font-bold text-2xl text-[#361B00] mt-2">
                Questions fréquentes sur l'AMO et l'audit à {cityData.cityName}
              </h2>
            </div>

            <div className="space-y-4">
              {cityData.faq.map((item, index) => (
                <div key={index} className="p-5 bg-stone-50 rounded-lg border border-stone-200 space-y-2">
                  <h3 className="font-serif font-bold text-stone-900 text-base">
                    {item.question}
                  </h3>
                  <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Nearby Cities Links Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-900 text-white p-8 rounded-2xl space-y-6">
          <h3 className="font-serif font-bold text-xl text-white">
            Autres communes couvertes dans les Bouches-du-Rhône (13) :
          </h3>

          <div className="flex flex-wrap gap-3">
            {Object.keys(CITY_SEO_DATA).map((slug) => {
              const c = CITY_SEO_DATA[slug];
              const isCurrent = slug === citySlug;
              return (
                <button
                  key={slug}
                  onClick={() => onNavigateToCity(slug)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                    isCurrent
                      ? 'bg-[#83ae42] text-stone-950 font-bold'
                      : 'bg-stone-800 text-stone-300 hover:bg-stone-700 hover:text-white border border-stone-700'
                  }`}
                >
                  AMO & Audit RGE à {c.cityName} ({c.postalCode})
                </button>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
};
