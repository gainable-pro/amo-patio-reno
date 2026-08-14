import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  BookOpen, 
  X
} from 'lucide-react';
import { ACRONYM_DICTIONARY } from '../data/companyData';

interface FooterProps {
  onNavigateTab: (tabId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateTab,
}) => {
  const [glossaryModalOpen, setGlossaryModalOpen] = useState(false);

  return (
    <footer className="bg-[#1C0E00] text-amber-50/90 pt-12 pb-8 border-t border-amber-950/40 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand & Bio */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-1 bg-white rounded-xl shadow-sm shrink-0">
                <img src="/logo.jpg" alt="AMO Patio Réno" style={{ height: '48px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
              </div>
              <div>
                <span className="font-serif font-bold text-xl text-white block">
                  AMO Patio Réno
                </span>
                <span className="text-xs text-[#83ae42] font-serif italic">
                  Du montage à la performance — Marion BEAUPUY
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-300 leading-relaxed max-w-md">
              Cabinet d'Assistance à Maîtrise d'Ouvrage (<AcronymTooltipFooter acronym="AMO" />) et de conseil en sobriété énergétique (<AcronymTooltipFooter acronym="RGE" />), réhabilitation du bâti ancien et ingénierie de formation dans les Bouches-du-Rhône.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs">
              <a
                href="https://www.linkedin.com/in/marion-beaupuy20181986/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#0A66C2] text-white font-semibold hover:bg-[#084e96] transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
                <span>Profil LinkedIn</span>
              </a>

              <span className="px-2.5 py-1 rounded bg-amber-950/60 text-amber-200 border border-amber-900/50 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#83ae42]" /> OPQIBI RGE
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <button onClick={() => onNavigateTab('accueil')} className="hover:text-white transition-colors">
                  Accueil & Présentation
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('apropos')} className="hover:text-white transition-colors">
                  À Propos de Marion Beaupuy
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('orientateur')} className="hover:text-white transition-colors">
                  Qui êtes-vous ? (Vos Besoins)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('secteur13')} className="hover:text-white transition-colors">
                  Interventions Bouches-du-Rhône (13)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('domaine_energie')} className="hover:text-white transition-colors">
                  Rénovation Énergétique (RGE)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('domaine_amo')} className="hover:text-white transition-colors">
                  Assistance Maîtrise d'Ouvrage (AMO)
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider">
              Contact Direct
            </h4>
            <div className="space-y-2 text-xs text-stone-300">
              <a href="tel:0784429198" className="flex items-center gap-2 hover:text-[#83ae42] transition-colors">
                <Phone className="w-4 h-4 text-[#83ae42]" /> 07 84 42 91 98
              </a>
              <a href="mailto:beaupuy.marion@outlook.fr" className="flex items-center gap-2 hover:text-[#83ae42] transition-colors">
                <Mail className="w-4 h-4 text-[#83ae42]" /> beaupuy.marion@outlook.fr
              </a>
              <span className="flex items-center gap-2 text-stone-400">
                <MapPin className="w-4 h-4 text-[#c38d34]" /> Bouches-du-Rhône (13) & limitrophes
              </span>
            </div>

            <div className="pt-3">
              <button
                onClick={() => setGlossaryModalOpen(true)}
                className="w-full flex items-center justify-center gap-2 py-2 px-3 bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 text-xs rounded transition-colors"
              >
                <BookOpen className="w-4 h-4 text-[#83ae42]" />
                <span>Ouvrir le Lexique complet des Sigles</span>
              </button>
            </div>
          </div>

        </div>

        {/* Legal Bottom Footer */}
        <div className="pt-6 border-t border-amber-950/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div>
            © {new Date().getFullYear()} AMO Patio Réno — Marion BEAUPUY. Tous droits réservés.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>OPQIBI RGE N°1911</span>
            <span>CCI EcoCampus Référente</span>
            <span>Mentions Légales</span>
          </div>
        </div>

      </div>

      {/* Full Acronym Glossary Modal */}
      {glossaryModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white text-stone-900 rounded-xl max-w-4xl w-full max-h-[85vh] overflow-hidden flex flex-col shadow-2xl">
            
            <div className="p-6 bg-stone-900 text-white flex items-center justify-between">
              <div>
                <h3 className="font-serif font-bold text-xl text-white">
                  Dictionnaire & Lexique des Sigles du Bâtiment & AMO
                </h3>
                <p className="text-xs text-stone-300">
                  Décodage pédagogique de tous les termes techniques et réglementaires
                </p>
              </div>
              <button
                onClick={() => setGlossaryModalOpen(false)}
                className="p-2 hover:bg-stone-800 rounded-lg text-stone-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-4 custom-scrollbar">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.values(ACRONYM_DICTIONARY).map((item) => (
                  <div key={item.acronym} className="p-4 bg-stone-50 rounded-lg border border-stone-200 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-serif font-bold text-[#361B00] text-sm">
                        {item.acronym} — {item.fullTerm}
                      </span>
                      <span className="text-[10px] font-bold uppercase text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 bg-stone-100 border-t border-stone-200 text-right">
              <button
                onClick={() => setGlossaryModalOpen(false)}
                className="btn-bureau-primary text-xs !py-2 !px-4"
              >
                Fermer le dictionnaire
              </button>
            </div>

          </div>
        </div>
      )}

    </footer>
  );
};

const AcronymTooltipFooter: React.FC<{ acronym: string }> = ({ acronym }) => {
  const item = ACRONYM_DICTIONARY[acronym as keyof typeof ACRONYM_DICTIONARY];
  if (!item) return <span>{acronym}</span>;
  return (
    <span className="underline decoration-dotted decoration-[#83ae42] underline-offset-2 font-semibold text-stone-200" title={`${item.acronym}: ${item.fullTerm} - ${item.description}`}>
      {acronym}
    </span>
  );
};
