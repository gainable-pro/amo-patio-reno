import React, { useState, useMemo } from 'react';
import { BLOG_ARTICLES, type BlogArticle } from '../data/blogArticles';
import { DOMAINS_INTERVENTION } from '../data/companyData';
import { 
  Search, 
  MapPin, 
  Clock, 
  BookOpen, 
  ArrowRight, 
  Filter, 
  Sparkles, 
  ShieldCheck,
  Building2,
  Landmark,
  Zap,
  GraduationCap
} from 'lucide-react';

interface BlogSectionProps {
  onSelectArticle: (article: BlogArticle) => void;
  onOpenContact: (domainId?: string, cityName?: string) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({
  onSelectArticle,
  onOpenContact,
}) => {
  const [selectedDomain, setSelectedDomain] = useState<string>('all');
  const [selectedCity, setSelectedCity] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Extract unique cities list
  const availableCities = useMemo(() => {
    const set = new Set<string>();
    BLOG_ARTICLES.forEach(a => set.add(a.cityName));
    return Array.from(set).sort();
  }, []);

  // Filter articles
  const filteredArticles = useMemo(() => {
    return BLOG_ARTICLES.filter(art => {
      const matchDomain = selectedDomain === 'all' || art.domainId === selectedDomain;
      const matchCity = selectedCity === 'all' || art.cityName.toLowerCase() === selectedCity.toLowerCase();
      const matchQuery = 
        searchQuery.trim() === '' ||
        art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.cityName.toLowerCase().includes(searchQuery.toLowerCase());

      return matchDomain && matchCity && matchQuery;
    });
  }, [selectedDomain, selectedCity, searchQuery]);

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
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 font-sans">
      
      {/* Editorial Title Banner */}
      <div className="bg-white border border-stone-200 rounded-xl p-8 sm:p-12 shadow-sm relative overflow-hidden">
        <div className="max-w-3xl space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="bureau-badge-green font-mono">
              Expertise Réglementaire & Technique (13)
            </span>
            <span className="bureau-badge-brown font-serif italic">
              Marion BEAUPUY — Qualification OPQIBI RGE N°1911
            </span>
          </div>

          <h1 className="font-serif font-bold text-3xl sm:text-4xl text-[#361B00] leading-tight">
            Guides & Articles Techniques : Rénovation, AMO & Réglementation dans les Bouches-du-Rhône
          </h1>

          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            Consultez nos 40+ dossiers d'ingénierie rédigés par Marion Beaupuy. Retrouvez les normes de calcul 3CL, les démarches MaPrimeRénov' 2026, la restauration du bâti ancien perspirant et la conduite de projet MOP déclinées par commune du 13.
          </p>
        </div>
      </div>

      {/* Filter & Search Toolbar */}
      <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm space-y-6">
        
        {/* Top Search Bar & City Selector */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          
          {/* Text Search Input */}
          <div className="md:col-span-7 relative">
            <Search className="w-5 h-5 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher une thématique, un sujet (ex: MaPrimeRénov', 3CL, bastide, copropriété)..."
              className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-300 rounded-lg text-xs sm:text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />
          </div>

          {/* City Filter Dropdown */}
          <div className="md:col-span-5 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[#c38d34] shrink-0" />
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full py-2.5 px-3 bg-stone-50 border border-stone-300 rounded-lg text-xs sm:text-sm text-stone-800 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-600"
            >
              <option value="all">📍 Toutes les Communes des Bouches-du-Rhône (13)</option>
              {availableCities.map(city => (
                <option key={city} value={city}>
                  📍 {city}
                </option>
              ))}
            </select>
          </div>

        </div>

        {/* Domain Filter Tabs */}
        <div className="space-y-2 pt-2 border-t border-stone-200">
          <div className="flex items-center gap-2 text-xs font-bold text-stone-500 uppercase tracking-wider">
            <Filter className="w-4 h-4 text-[#83ae42]" /> Filtrer par Domaine d'Intervention :
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedDomain('all')}
              className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                selectedDomain === 'all'
                  ? 'bg-[#361B00] text-white shadow'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              Tous les domaines ({BLOG_ARTICLES.length})
            </button>

            {DOMAINS_INTERVENTION.map(dom => {
              const Icon = getDomainIcon(dom.id);
              const isSelected = selectedDomain === dom.id;
              const count = BLOG_ARTICLES.filter(a => a.domainId === dom.id).length;
              return (
                <button
                  key={dom.id}
                  onClick={() => setSelectedDomain(dom.id)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-bold flex items-center gap-2 transition-all ${
                    isSelected
                      ? 'bg-[#361B00] text-white shadow'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-[#83ae42]' : 'text-stone-500'}`} />
                  <span>{dom.shortTitle} ({count})</span>
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* Results Header Count */}
      <div className="flex items-center justify-between text-xs text-stone-600 font-semibold border-b border-stone-200 pb-3">
        <span>
          {filteredArticles.length} article{filteredArticles.length > 1 ? 's' : ''} disponible{filteredArticles.length > 1 ? 's' : ''}
        </span>
        {(selectedDomain !== 'all' || selectedCity !== 'all' || searchQuery !== '') && (
          <button
            onClick={() => {
              setSelectedDomain('all');
              setSelectedCity('all');
              setSearchQuery('');
            }}
            className="text-emerald-800 hover:underline cursor-pointer"
          >
            Réinitialiser les filtres
          </button>
        )}
      </div>

      {/* Articles Grid */}
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => {
            const Icon = getDomainIcon(article.domainId);
            const img = getDomainImage(article.domainId);
            return (
              <article
                key={article.id}
                onClick={() => onSelectArticle(article)}
                className="bureau-card rounded-xl overflow-hidden flex flex-col justify-between cursor-pointer group bg-white border border-stone-200"
              >
                <div>
                  <div className="h-44 overflow-hidden relative">
                    <img 
                      src={img} 
                      alt={article.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      <span className="bg-[#1C0E00]/90 text-[#83ae42] text-[10px] font-extrabold px-2.5 py-1 rounded backdrop-blur-sm font-mono">
                        {article.cityName}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-stone-500">
                      <Icon className="w-3.5 h-3.5 text-[#83ae42]" />
                      <span className="font-semibold text-stone-700">{article.domainTitle}</span>
                    </div>

                    <h3 className="font-serif font-bold text-base text-[#361B00] group-hover:text-[#4d843d] transition-colors leading-snug line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between text-xs font-semibold text-[#361B00]">
                  <span className="flex items-center gap-1.5 text-stone-600">
                    <Clock className="w-3.5 h-3.5 text-[#83ae42]" /> {article.readTimeMinutes} min de lecture
                  </span>
                  <span className="flex items-center gap-1 text-[#83ae42] group-hover:translate-x-1 transition-transform">
                    Lire le guide <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="p-12 text-center bg-white rounded-xl border border-stone-200 space-y-4">
          <BookOpen className="w-12 h-12 text-stone-300 mx-auto" />
          <h3 className="font-serif font-bold text-lg text-stone-800">
            Aucun article ne correspond à votre recherche
          </h3>
          <p className="text-xs text-stone-600">
            Essayez de modifier votre commune ou votre domaine d'intervention.
          </p>
          <button
            onClick={() => {
              setSelectedDomain('all');
              setSelectedCity('all');
              setSearchQuery('');
            }}
            className="btn-bureau-primary text-xs !py-2 !px-4 inline-flex"
          >
            Afficher tous les articles
          </button>
        </div>
      )}

      {/* CTA Bottom Section */}
      <div className="bg-[#1C0E00] text-white p-8 sm:p-12 rounded-xl shadow-md space-y-4">
        <div className="flex items-center gap-2">
          <span className="bureau-badge-gold">
            Cadrage & Audit RGE sur-mesure
          </span>
        </div>
        <h2 className="font-serif font-bold text-2xl sm:text-3xl text-white">
          Vous ne trouvez pas la réponse à votre projet spécifique dans les Bouches-du-Rhône ?
        </h2>
        <p className="text-amber-100 text-xs sm:text-sm leading-relaxed max-w-3xl">
          Marion Beaupuy réalise des diagnostics thermiques, bilans hygrothermiques et missions d'Assistance à Maîtrise d'Ouvrage (AMO) personnalisés sur toutes les communes des Bouches-du-Rhône.
        </p>
        <div className="pt-2">
          <button
            onClick={() => onOpenContact()}
            className="btn-bureau-eco text-xs py-3 px-6"
          >
            <span>Poser directement votre question à Marion Beaupuy</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </section>
  );
};
