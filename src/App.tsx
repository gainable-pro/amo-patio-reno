import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AcronymTooltip } from './components/AcronymTooltip';
import { AudienceSelector } from './components/AudienceSelector';
import { DomainSection } from './components/DomainSection';
import { TerritorySeoHub } from './components/TerritorySeoHub';
import { BlogSection } from './components/BlogSection';
import { BlogArticlePage } from './components/BlogArticlePage';
import { ContactForm } from './components/ContactForm';
import { AuditCalculatorModal } from './components/AuditCalculatorModal';
import { DOMAINS_INTERVENTION, ACRONYM_DICTIONARY } from './data/companyData';
import { BLOG_ARTICLES, type BlogArticle } from './data/blogArticles';
import { 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  Zap,
  Landmark,
  Building2,
  GraduationCap
} from 'lucide-react';

import { updatePageSeo } from './utils/seo';

export function App() {
  const [activeTab, setActiveTab] = useState<string>('accueil');
  const [selectedAudienceForContact, setSelectedAudienceForContact] = useState<string | undefined>(undefined);
  const [selectedDomainForContact, setSelectedDomainForContact] = useState<string | undefined>(undefined);
  const [selectedCityForContact, setSelectedCityForContact] = useState<string | undefined>(undefined);
  const [diagnosticSummary, setDiagnosticSummary] = useState<string>('');

  // Blog modal state
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);

  // Modals state
  const [calculatorModalOpen, setCalculatorModalOpen] = useState(false);

  // Deep linking for Sitemap URLs (?article=slug, ?domaine=id, ?section=name)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const articleSlug = params.get('article');
    const domaineId = params.get('domaine');
    const sectionName = params.get('section');

    if (articleSlug) {
      const art = BLOG_ARTICLES.find(a => a.slug === articleSlug);
      if (art) {
        setSelectedArticle(art);
        setActiveTab('blog');
      }
    } else if (domaineId) {
      setActiveTab(`domaine_${domaineId}`);
    } else if (sectionName) {
      setActiveTab(sectionName);
    }
  }, []);

  // Synchronize SEO Meta Tags & Canonical Link with Active Page State
  useEffect(() => {
    if (selectedArticle) {
      updatePageSeo({ article: selectedArticle });
    } else if (activeTab.startsWith('domaine_')) {
      const domId = activeTab.replace('domaine_', '');
      const dom = DOMAINS_INTERVENTION.find(d => d.id === domId);
      updatePageSeo({ domain: dom });
    } else if (activeTab !== 'accueil') {
      updatePageSeo({ section: activeTab });
    } else {
      updatePageSeo({});
    }
  }, [activeTab, selectedArticle]);


  const handleOpenContactWithAudience = (audienceId?: string) => {
    setSelectedAudienceForContact(audienceId);
    const element = document.getElementById('contact_section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenContactWithDomain = (domainId?: string) => {
    setSelectedDomainForContact(domainId);
    const element = document.getElementById('contact_section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenContactWithCity = (cityName?: string) => {
    setSelectedCityForContact(cityName);
    const element = document.getElementById('contact_section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenContactWithDomainAndCity = (domainId?: string, cityName?: string) => {
    setSelectedDomainForContact(domainId);
    setSelectedCityForContact(cityName);
    const element = document.getElementById('contact_section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenContactWithDiagnostic = (diag: string) => {
    setDiagnosticSummary(diag);
    const element = document.getElementById('contact_section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getDomainIcon = (id: string) => {
    switch (id) {
      case 'energie': return Zap;
      case 'bati_ancien': return Landmark;
      case 'amo': return ShieldCheck;
      case 'entreprises': return Building2;
      case 'formation': return GraduationCap;
      default: return Sparkles;
    }
  };

  const getDomainImage = (id: string) => {
    switch (id) {
      case 'energie': return '/images/audit_energetique.png';
      case 'bati_ancien': return '/images/bati_ancien.png';
      case 'amo': return '/images/amo_supervision.png';
      case 'entreprises': return '/images/amo_supervision.png';
      case 'formation': return '/images/audit_energetique.png';
      default: return '/images/audit_energetique.png';
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#2C2621]">
      
      {/* Clean Corporate Header Navbar */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenCalculator={() => setCalculatorModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">

        {/* TAB 1: ACCUEIL */}
        {activeTab === 'accueil' && (
          <div className="space-y-16 pb-16">
            
            {/* Clean Hero Section */}
            <section className="bg-white border-b border-stone-200 py-12 lg:py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  
                  {/* Left Hero Text */}
                  <div className="lg:col-span-7 space-y-6">
                    
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="bureau-badge-green">
                        Ingénierie & Conseil AMO
                      </span>
                      <span className="bureau-badge-brown">
                        Bouches-du-Rhône (13) & Communes limitrophes
                      </span>
                    </div>

                    <h1 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-[#361B00] leading-tight">
                      AMO Patio Réno <br />
                      <span className="text-[#4d843d] italic font-serif">Du montage à la performance</span>
                    </h1>

                    <p className="text-stone-700 text-base sm:text-lg leading-relaxed font-sans">
                      Accompagne, depuis l’idée jusqu’à la finalité, les principaux acteurs de projets dans la compréhension, la structuration et la réalisation en sécurité de leurs opérations.
                    </p>

                    <div className="p-4 bg-stone-50 border-l-4 border-l-[#83ae42] rounded text-stone-800 text-sm font-serif italic">
                      "Sans perdre de vue la sobriété." — Conseils impartiaux et indépendants en maîtrise d'ouvrage neuve, rénovation énergétique RGE et préservation du bâti ancien.
                    </div>

                    <div className="pt-2 flex flex-wrap items-center gap-4">
                      <button
                        onClick={() => {
                          setActiveTab('orientateur');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="btn-bureau-primary text-sm py-3 px-6"
                      >
                        <span>Qui êtes-vous ? Identifier vos besoins</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => setCalculatorModalOpen(true)}
                        className="btn-bureau-eco text-sm py-3 px-6"
                      >
                        <span>Diagnostic Express 2 min</span>
                      </button>
                    </div>

                  </div>

                  {/* Right Hero Feature Showcase Image & Key Specs */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="relative rounded-xl overflow-hidden border border-stone-200 shadow-md">
                      <img 
                        src="/images/amo_supervision.png" 
                        alt="Bureau AMO Patio Réno Marion Beaupuy" 
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end text-white">
                        <span className="text-xs font-bold text-[#83ae42] font-mono uppercase tracking-wider">
                          Cabinet AMO & Audit RGE
                        </span>
                        <h3 className="font-serif font-bold text-xl text-white">
                          Marion BEAUPUY — Directrice Technique
                        </h3>
                        <p className="text-xs text-stone-200">
                          Qualification OPQIBI RGE N°1911 • Référente Formation CCI EcoCampus
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-3 bg-white border border-stone-200 rounded text-center">
                        <span className="font-serif font-bold text-base text-[#361B00] block">Bouches-du-Rhône (13)</span>
                        <span className="text-stone-600">Intervention de proximité</span>
                      </div>
                      <div className="p-3 bg-white border border-stone-200 rounded text-center">
                        <span className="font-serif font-bold text-base text-[#4d843d] block">Sobriété & Technique</span>
                        <span className="text-stone-600">Conseil 100% Indépendant</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </section>

            {/* Methodology & Commitment Banner */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-gradient-to-r from-[#1C0E00] to-[#361B00] text-amber-50 p-8 sm:p-10 rounded-xl shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-7 space-y-4">
                  <span className="bureau-badge-gold">
                    Notre Engagement Clé
                  </span>
                  <h2 className="font-serif font-bold text-2xl sm:text-3xl text-white">
                    Un accompagnement sécurisé de l'idée initiale à la réception
                  </h2>
                  <p className="text-amber-100 text-xs sm:text-sm leading-relaxed">
                    De la faisabilité technico-économique au pilotage des entreprises du BTP, nous garantissons la maîtrise des coûts, le respect des plannings et la durabilité thermique de votre bâtiment.
                  </p>
                </div>

                <div className="lg:col-span-5 grid grid-cols-2 gap-3">
                  <div className="p-4 bg-white/5 border border-amber-900/40 rounded text-amber-100 text-xs space-y-1">
                    <span className="font-bold text-[#83ae42] text-sm block">1. Diagnostic RGE</span>
                    <span>Analyse thermique & bâti ancien</span>
                  </div>
                  <div className="p-4 bg-white/5 border border-amber-900/40 rounded text-amber-100 text-xs space-y-1">
                    <span className="font-bold text-[#83ae42] text-sm block">2. Montage AMO</span>
                    <span>Cadrage DCE & subventions</span>
                  </div>
                  <div className="p-4 bg-white/5 border border-amber-900/40 rounded text-amber-100 text-xs space-y-1">
                    <span className="font-bold text-[#83ae42] text-sm block">3. Suivi Sécurisé</span>
                    <span>Coordination MOA / Entreprises</span>
                  </div>
                  <div className="p-4 bg-white/5 border border-amber-900/40 rounded text-amber-100 text-xs space-y-1">
                    <span className="font-bold text-[#83ae42] text-sm block">4. Réception Clôture</span>
                    <span>Levée des réserves & conformité</span>
                  </div>
                </div>

              </div>
            </section>

            {/* The 5 Intervention Domains Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
              <div className="border-b border-stone-200 pb-4">
                <span className="bureau-badge-brown">
                  Prestations & Services
                </span>
                <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#361B00] mt-2">
                  Nos 5 Domaines d'Intervention Principaux
                </h2>
                <p className="text-stone-600 text-sm">
                  Découvrez l'étendue de nos expertises et accédez aux dossiers détaillés par domaine.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {DOMAINS_INTERVENTION.map((dom) => {
                  const Icon = getDomainIcon(dom.id);
                  const img = getDomainImage(dom.id);
                  return (
                    <div
                      key={dom.id}
                      className="bureau-card rounded-lg overflow-hidden flex flex-col justify-between cursor-pointer group"
                      onClick={() => {
                        setActiveTab(`domaine_${dom.id}`);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                    >
                      <div>
                        <div className="h-44 overflow-hidden relative">
                          <img 
                            src={img} 
                            alt={dom.title} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>

                        <div className="p-6 space-y-3">
                          <h3 className="font-serif font-bold text-lg text-[#361B00] group-hover:text-[#4d843d] transition-colors">
                            {dom.title}
                          </h3>

                          <p className="text-xs text-stone-600 italic leading-relaxed">
                            "{dom.tagline}"
                          </p>

                          <p className="text-xs text-stone-700 line-clamp-3 leading-relaxed">
                            {dom.description}
                          </p>
                        </div>
                      </div>

                      <div className="p-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between text-xs font-semibold text-[#361B00]">
                        <span className="flex items-center gap-1.5">
                          <Icon className="w-4 h-4 text-[#83ae42]" /> Consulter le dossier complet
                        </span>
                        <ArrowRight className="w-4 h-4 text-[#83ae42] group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Department 13 Territory SEO */}
            <TerritorySeoHub onOpenContact={handleOpenContactWithCity} />

            {/* Long-Form FAQ & Glossary Explanation Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white p-8 sm:p-12 rounded-lg border border-stone-200 shadow-sm space-y-6">
                
                <div className="border-b border-stone-200 pb-3">
                  <span className="bureau-badge-green">
                    Pédagogie & Transparence
                  </span>
                  <h2 className="font-serif font-bold text-2xl text-[#361B00] mt-2">
                    Comprendre les termes et sigles de votre projet
                  </h2>
                  <p className="text-stone-600 text-xs sm:text-sm">
                    L'explicitation pédagogique est au cœur de notre démarche pour vous permettre de décider en toute sécurité.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.values(ACRONYM_DICTIONARY).slice(0, 6).map((item) => (
                    <div key={item.acronym} className="p-4 bg-stone-50 rounded border border-stone-200 space-y-1.5">
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
            </section>

          </div>
        )}

        {/* TAB: À PROPOS DE MARION */}
        {activeTab === 'apropos' && (
          <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="bg-white p-8 sm:p-12 rounded-lg border border-stone-200 shadow-sm space-y-6">
              <span className="bureau-badge-gold">
                Fondatrice & Consultante Indépendante
              </span>
              <h1 className="font-serif font-bold text-3xl sm:text-4xl text-[#361B00]">
                Marion BEAUPUY — 20 ans d'expertise au service de vos projets
              </h1>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
                <div className="lg:col-span-8 text-stone-700 text-sm sm:text-base leading-relaxed space-y-4">
                  <p>
                    Diplômée et forte de deux décennies d'expérience dans l'ingénierie du bâtiment, la conduite de chantier et l'efficacité énergétique, Marion Beaupuy accompagne les Maîtres d'Ouvrage (<AcronymTooltip acronym="MOA" />), collectivités, copropriétés, bailleurs et entreprises du <AcronymTooltip acronym="BTP" /> dans le département des Bouches-du-Rhône (13).
                  </p>
                  <p>
                    Son parcours se distingue par une double compétence rare : d'une part la maîtrise technique du comportement thermique et hygrothermique des bâtiments (méthodes <AcronymTooltip acronym="3CL" />, audits qualifiés <AcronymTooltip acronym="OPQIBI" /> <AcronymTooltip acronym="RGE" />), et d'autre part le cadrage juridique et financier strict des opérations (Loi <AcronymTooltip acronym="MOP" />, marchés de travaux, gestion des planning PERT / WBS).
                  </p>
                  <p>
                    En parallèle de son activité de conseil, Marion Beaupuy intervient comme enseignante et référente de formation auprès de la <AcronymTooltip acronym="CCI" /> Alpes-Provence EcoCampus, formant les futurs cadres et experts de la transition énergétique.
                  </p>
                </div>

                <div className="lg:col-span-4">
                  <img 
                    src="/images/amo_supervision.png" 
                    alt="Marion Beaupuy AMO Patio Réno" 
                    className="w-full h-72 object-cover rounded-lg border border-stone-200 shadow"
                  />
                </div>
              </div>
            </div>

          </div>
        )}

        {/* TAB: SECTEUR 13 */}
        {activeTab === 'secteur13' && (
          <div className="py-8">
            <TerritorySeoHub onOpenContact={handleOpenContactWithCity} />
          </div>
        )}

        {/* TAB: BLOG & GUIDES SEO */}
        {activeTab === 'blog' && (
          selectedArticle ? (
            <BlogArticlePage
              article={selectedArticle}
              onBackToBlog={() => {
                setSelectedArticle(null);
                window.history.pushState(null, '', window.location.pathname);
              }}
              onSelectArticle={(art) => {
                setSelectedArticle(art);
                window.history.pushState(null, '', `?article=${art.slug}`);
              }}
              onOpenContact={handleOpenContactWithDomainAndCity}
            />
          ) : (
            <BlogSection
              onSelectArticle={(art) => {
                setSelectedArticle(art);
                window.history.pushState(null, '', `?article=${art.slug}`);
              }}
              onOpenContact={handleOpenContactWithDomainAndCity}
            />
          )
        )}

        {/* TAB 2: ORIENTATEUR */}
        {activeTab === 'orientateur' && (
          <AudienceSelector
            onSelectDomain={(domainId) => {
              setActiveTab(`domaine_${domainId}`);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenContact={handleOpenContactWithAudience}
          />
        )}

        {/* TABS 3 à 7: DOMAINES 1 à 5 */}
        {activeTab === 'domaine_energie' && (
          <DomainSection
            domainId="energie"
            onOpenContact={handleOpenContactWithDomain}
            onNavigateToDomain={(id) => {
              setActiveTab(`domaine_${id}`);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeTab === 'domaine_bati_ancien' && (
          <DomainSection
            domainId="bati_ancien"
            onOpenContact={handleOpenContactWithDomain}
            onNavigateToDomain={(id) => {
              setActiveTab(`domaine_${id}`);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeTab === 'domaine_amo' && (
          <DomainSection
            domainId="amo"
            onOpenContact={handleOpenContactWithDomain}
            onNavigateToDomain={(id) => {
              setActiveTab(`domaine_${id}`);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeTab === 'domaine_entreprises' && (
          <DomainSection
            domainId="entreprises"
            onOpenContact={handleOpenContactWithDomain}
            onNavigateToDomain={(id) => {
              setActiveTab(`domaine_${id}`);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeTab === 'domaine_formation' && (
          <DomainSection
            domainId="formation"
            onOpenContact={handleOpenContactWithDomain}
            onNavigateToDomain={(id) => {
              setActiveTab(`domaine_${id}`);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {/* Contact Form Section */}
        <div id="contact_section">
          <ContactForm
            initialAudienceId={selectedAudienceForContact}
            initialDomainId={selectedDomainForContact}
            initialCityName={selectedCityForContact}
            prefilledNotes={diagnosticSummary}
          />
        </div>

      </main>

      {/* Corporate Footer */}
      <Footer
        onNavigateTab={(tabId) => {
          setActiveTab(tabId);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Interactive Diagnostic Calculator Modal */}
      <AuditCalculatorModal
        isOpen={calculatorModalOpen}
        onClose={() => setCalculatorModalOpen(false)}
        onOpenContactWithDiagnostic={handleOpenContactWithDiagnostic}
      />

    </div>
  );
}

export default App;
