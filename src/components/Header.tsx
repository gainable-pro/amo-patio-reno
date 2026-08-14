import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ShieldCheck,
  ChevronDown
} from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tabId: string) => void;
  onOpenCalculator: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenCalculator,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [domainsDropdownOpen, setDomainsDropdownOpen] = useState(false);

  const domainsList = [
    { id: 'domaine_energie', title: 'Conseil & Rénovation Énergétique (RGE)' },
    { id: 'domaine_bati_ancien', title: 'Rénovation du Bâti Ancien & Perspirance' },
    { id: 'domaine_amo', title: 'Assistance à Maîtrise d\'Ouvrage (AMO)' },
    { id: 'domaine_entreprises', title: 'Appui Entreprises BTP & Relation MOA' },
    { id: 'domaine_formation', title: 'Formations Professionnelles (Bac+5)' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    setDomainsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-stone-200">
      
      {/* Top Engineering Contact Bar */}
      <div className="bureau-header-top py-2 px-4 sm:px-8 border-b border-amber-950/20">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
          
          <div className="flex flex-wrap items-center gap-6">
            <a 
              href="tel:0784429198" 
              className="flex items-center gap-1.5 hover:text-[#83ae42] transition-colors font-semibold text-stone-100"
            >
              <Phone className="w-3.5 h-3.5 text-[#83ae42]" />
              <span>07 84 42 91 98</span>
            </a>

            <a 
              href="mailto:contact@amopatioreno.fr" 
              className="flex items-center gap-1.5 hover:text-[#83ae42] transition-colors text-stone-200"
            >
              <Mail className="w-3.5 h-3.5 text-[#83ae42]" />
              <span>contact@amopatioreno.fr</span>
            </a>

            <span className="hidden lg:flex items-center gap-1.5 text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-[#c38d34]" />
              <span>Bouches-du-Rhône (13) & Communes limitrophes</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/marion-beaupuy20181986/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-stone-100 hover:text-white transition-colors text-[11px] font-semibold bg-[#0A66C2]/30 px-2.5 py-0.5 rounded border border-[#0A66C2]/50"
            >
              <svg className="w-3.5 h-3.5 fill-current text-[#3897f0]" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
              <span>Profil LinkedIn</span>
            </a>

            <span className="hidden sm:inline-flex items-center gap-1 text-stone-300 text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#83ae42]" />
              Qualification OPQIBI RGE
            </span>
          </div>

        </div>
      </div>

      {/* Main Corporate Header Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
        
        {/* Brand Logo (Sized Prominently: 58px height) & Title */}
        <div 
          onClick={() => handleNavClick('accueil')} 
          className="flex items-center gap-3.5 cursor-pointer shrink-0"
        >
          <img 
            src="/logo.jpg" 
            alt="AMO Patio Réno Logo - Marion BEAUPUY" 
            style={{ height: '58px', width: 'auto', objectFit: 'contain' }}
            className="rounded border border-stone-200 shadow-sm"
          />
          <div className="flex flex-col justify-center">
            <span className="font-serif font-bold text-xl sm:text-2xl text-[#361B00] tracking-tight leading-none">
              AMO Patio Réno
            </span>
            <span className="text-xs text-[#4d843d] font-serif italic mt-1 font-semibold">
              Du montage à la performance — Marion BEAUPUY
            </span>
          </div>
        </div>

        {/* Traditional Corporate Menu links */}
        <nav className="hidden lg:flex items-center gap-1 text-xs font-semibold text-stone-800">
          
          <button
            onClick={() => handleNavClick('accueil')}
            className={`px-3.5 py-2 rounded-md transition-colors ${
              activeTab === 'accueil'
                ? 'bg-[#361B00] text-white font-bold'
                : 'hover:bg-stone-100 hover:text-[#361B00]'
            }`}
          >
            Accueil
          </button>

          <button
            onClick={() => handleNavClick('apropos')}
            className={`px-3.5 py-2 rounded-md transition-colors ${
              activeTab === 'apropos'
                ? 'bg-[#361B00] text-white font-bold'
                : 'hover:bg-stone-100 hover:text-[#361B00]'
            }`}
          >
            À Propos de Marion
          </button>

          {/* Domaines Dropdown without Numbers */}
          <div className="relative">
            <button
              onClick={() => setDomainsDropdownOpen(!domainsDropdownOpen)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-md transition-colors ${
                activeTab.startsWith('domaine_')
                  ? 'bg-[#361B00] text-white font-bold'
                  : 'hover:bg-stone-100 hover:text-[#361B00]'
              }`}
            >
              <span>Nos 5 Domaines</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-70" />
            </button>

            {domainsDropdownOpen && (
              <div 
                className="absolute top-full left-0 mt-1 w-80 bg-white rounded-lg shadow-2xl border border-stone-200 py-2 z-50 text-xs animate-in fade-in duration-150"
                onMouseLeave={() => setDomainsDropdownOpen(false)}
              >
                {domainsList.map((d) => (
                  <button
                    key={d.id}
                    onClick={() => handleNavClick(d.id)}
                    className="w-full text-left px-4 py-3 hover:bg-[#361B00] hover:text-white font-medium border-b border-stone-100 last:border-0 transition-colors"
                  >
                    {d.title}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => handleNavClick('orientateur')}
            className={`px-3.5 py-2 rounded-md transition-colors ${
              activeTab === 'orientateur'
                ? 'bg-[#361B00] text-white font-bold'
                : 'hover:bg-stone-100 hover:text-[#361B00]'
            }`}
          >
            Qui êtes-vous ? (Vos Besoins)
          </button>

          <button
            onClick={() => handleNavClick('secteur13')}
            className={`px-3.5 py-2 rounded-md transition-colors ${
              activeTab === 'secteur13'
                ? 'bg-[#361B00] text-white font-bold'
                : 'hover:bg-stone-100 hover:text-[#361B00]'
            }`}
          >
            Secteur Bouches-du-Rhône
          </button>

          <button
            onClick={() => handleNavClick('contact_section')}
            className="px-3.5 py-2 rounded-md hover:bg-stone-100 hover:text-[#361B00]"
          >
            Contact
          </button>
        </nav>

        {/* Primary CTA */}
        <div className="hidden sm:flex items-center gap-2">
          <button
            onClick={onOpenCalculator}
            className="btn-bureau-eco text-xs !py-2.5 !px-4"
          >
            <span>Diagnostic Express</span>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-md text-stone-700 bg-stone-100 hover:bg-stone-200"
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-stone-200 px-4 pt-3 pb-6 space-y-2 shadow-xl">
          <button
            onClick={() => handleNavClick('accueil')}
            className="w-full text-left py-2.5 px-3 rounded text-sm font-semibold hover:bg-stone-100"
          >
            Accueil
          </button>
          <button
            onClick={() => handleNavClick('apropos')}
            className="w-full text-left py-2.5 px-3 rounded text-sm font-semibold hover:bg-stone-100"
          >
            À Propos de Marion Beaupuy
          </button>
          
          <div className="pt-2 pb-1 border-t border-stone-100">
            <span className="text-xs font-bold text-stone-400 uppercase tracking-wider px-3 block mb-1">
              Nos 5 Domaines d'Intervention
            </span>
            {domainsList.map((d) => (
              <button
                key={d.id}
                onClick={() => handleNavClick(d.id)}
                className="w-full text-left py-2 px-3 rounded text-xs font-medium hover:bg-[#361B00] hover:text-white"
              >
                {d.title}
              </button>
            ))}
          </div>

          <button
            onClick={() => handleNavClick('orientateur')}
            className="w-full text-left py-2.5 px-3 rounded text-sm font-semibold hover:bg-stone-100"
          >
            Qui êtes-vous ? (Vos Besoins)
          </button>
          
          <button
            onClick={() => handleNavClick('secteur13')}
            className="w-full text-left py-2.5 px-3 rounded text-sm font-semibold hover:bg-stone-100"
          >
            Interventions Bouches-du-Rhône (13)
          </button>

          <div className="pt-3 border-t border-stone-100 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenCalculator();
                setMobileMenuOpen(false);
              }}
              className="w-full btn-bureau-eco text-xs py-2.5 justify-center"
            >
              Évaluer mon projet (Diagnostic Express)
            </button>
          </div>
        </div>
      )}

    </header>
  );
};
