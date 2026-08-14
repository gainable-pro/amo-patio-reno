import React, { useState } from 'react';
import { CITIES_BOUCHES_DU_RHONE } from '../data/companyData';
import { MapPin, ChevronRight, Check, Building2 } from 'lucide-react';
import { AcronymTooltip } from './AcronymTooltip';

interface TerritorySeoHubProps {
  onOpenContact: (cityName?: string) => void;
}

export const TerritorySeoHub: React.FC<TerritorySeoHubProps> = ({ onOpenContact }) => {
  const [selectedCity, setSelectedCity] = useState(CITIES_BOUCHES_DU_RHONE[0]);

  // Structured JSON-LD for local SEO / GEO
  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    'name': 'AMO Patio Réno - Marion BEAUPUY',
    'description': 'Assistance à Maîtrise d\'Ouvrage (AMO), Conseil en rénovation énergétique RGE et réhabilitation du bâti ancien dans les Bouches-du-Rhône (13).',
    'provider': {
      '@type': 'Person',
      'name': 'Marion BEAUPUY',
      'jobTitle': 'Expert AMO & Efficacité Énergétique',
      'alumniOf': 'CCI Alpes-Provence EcoCampus',
    },
    'address': {
      '@type': 'PostalAddress',
      'addressRegion': 'Bouches-du-Rhône',
      'addressCountry': 'FR',
    },
    'geo': {
      '@type': 'GeoShape',
      'region': 'Bouches-du-Rhône (13)',
    },
    'telephone': '+33784429198',
    'email': 'beaupuy.marion@outlook.fr',
    'areaServed': CITIES_BOUCHES_DU_RHONE.map(c => c.name),
    'knowsAbout': [
      'Assistance à Maîtrise d\'Ouvrage (AMO)',
      'Audit énergétique RGE',
      'Rénovation du Bâti Ancien',
      'Thermique du bâtiment',
      'MOP',
      'Formation professionnelle BTP',
    ],
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* JSON-LD Script Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      <div className="bg-stone-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-600/20 to-amber-600/20 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4 mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs font-semibold border border-emerald-500/30">
            <MapPin className="w-3.5 h-3.5" /> Ancrage Territorial Régional
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Intervention privilégiée dans les Bouches-du-Rhône (13) et communes limitrophes
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            AMO Patio Réno accompagne les maîtres d'ouvrage (<AcronymTooltip acronym="MOA" />), collectivités, copropriétés et entreprises du BTP à Aix-en-Provence, Marseille, Salon-de-Provence, Arles et l'ensemble du département 13.
          </p>
        </div>

        {/* City Switcher Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
          
          {/* Cities List */}
          <div className="lg:col-span-5 space-y-2 max-h-[420px] overflow-y-auto pr-2 custom-scrollbar">
            <div className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-2 px-1">
              Sélectionnez une commune du 13 :
            </div>
            {CITIES_BOUCHES_DU_RHONE.map((city) => {
              const isSelected = city.name === selectedCity.name;
              return (
                <button
                  key={city.name}
                  onClick={() => setSelectedCity(city)}
                  className={`w-full p-3.5 rounded-xl text-left flex items-center justify-between transition-all ${
                    isSelected
                      ? 'bg-emerald-600 text-white font-bold shadow-md'
                      : 'bg-stone-800/80 text-stone-300 hover:bg-stone-800 hover:text-white border border-stone-700/60'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <MapPin className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-emerald-400'}`} />
                    <span className="text-sm">{city.name}</span>
                  </div>
                  <span className={`text-xs ${isSelected ? 'text-emerald-100' : 'text-stone-400'}`}>
                    {city.postalCode}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Selected City Detail Card */}
          <div className="lg:col-span-7 bg-stone-800/90 p-6 sm:p-8 rounded-2xl border border-stone-700/80 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-stone-700 pb-3">
                <div>
                  <span className="text-xs font-bold text-emerald-400 tracking-wider">
                    {selectedCity.postalCode} — BOUCHES-DU-RHÔNE
                  </span>
                  <h3 className="font-serif font-bold text-2xl text-white">
                    Accompagnement AMO & Énergie à {selectedCity.name}
                  </h3>
                </div>
                <Building2 className="w-8 h-8 text-emerald-400/80" />
              </div>

              <p className="text-stone-300 text-sm leading-relaxed">
                {selectedCity.description}
              </p>

              <div className="space-y-2">
                <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider block">
                  Axes d'intervention sur {selectedCity.name} :
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedCity.highlights.map((h, i) => (
                    <span key={i} className="inline-flex items-center gap-1 px-3 py-1 bg-stone-700 text-emerald-200 rounded-lg text-xs font-medium border border-stone-600">
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-700 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-stone-400">
                Disponibilité rapide pour rendez-vous terrain sur {selectedCity.name}.
              </span>
              <button
                onClick={() => onOpenContact(selectedCity.name)}
                className="w-full sm:w-auto px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-stone-950 font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <span>Contacter pour un projet à {selectedCity.name}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
