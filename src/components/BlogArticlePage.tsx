import React, { useEffect } from 'react';
import { 
  ArrowLeft, 
  Clock, 
  Calendar, 
  MapPin, 
  ShieldCheck, 
  ArrowRight, 
  BookOpen, 
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { BLOG_ARTICLES, type BlogArticle } from '../data/blogArticles';

import { updatePageSeo } from '../utils/seo';

interface BlogArticlePageProps {
  article: BlogArticle;
  onBackToBlog: () => void;
  onSelectArticle: (article: BlogArticle) => void;
  onOpenContact: (domainId?: string, cityName?: string) => void;
}

export const BlogArticlePage: React.FC<BlogArticlePageProps> = ({
  article,
  onBackToBlog,
  onSelectArticle,
  onOpenContact,
}) => {
  // Update document title, meta tags, canonical link and scroll to top on mount / change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    updatePageSeo({ article });
  }, [article]);


  // Find related articles (same domain or city)
  const relatedArticles = BLOG_ARTICLES.filter(
    a => a.id !== article.id && (a.domainId === article.domainId || a.cityName === article.cityName)
  ).slice(0, 3);

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
    <div className="min-h-screen bg-[#FAF9F6] text-[#2C2621] py-8 sm:py-12 font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumb Navigation Bar */}
        <nav className="flex items-center gap-2 text-xs text-stone-600 bg-white p-3 rounded-lg border border-stone-200 shadow-sm overflow-x-auto">
          <button 
            onClick={onBackToBlog}
            className="hover:text-emerald-800 font-semibold cursor-pointer shrink-0"
          >
            Accueil
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
          <button 
            onClick={onBackToBlog}
            className="hover:text-emerald-800 font-semibold cursor-pointer shrink-0"
          >
            Blog & Guides (13)
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
          <span className="text-[#361B00] font-bold truncate max-w-xs sm:max-w-md">
            {article.title}
          </span>
        </nav>

        {/* Back Button */}
        <div>
          <button
            onClick={onBackToBlog}
            className="btn-bureau-primary text-xs !py-2.5 !px-5 inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>← Retour à la liste des articles</span>
          </button>
        </div>

        {/* Dedicated Page Main Article Container */}
        <article className="bg-white rounded-2xl border border-stone-200 shadow-md overflow-hidden space-y-8 p-6 sm:p-12">
          
          {/* Header Metadata */}
          <div className="space-y-4 border-b border-stone-200 pb-8">
            
            <div className="flex flex-wrap items-center gap-2">
              <span className="bureau-badge-green font-mono">
                {article.domainTitle}
              </span>
              <span className="bureau-badge-brown font-serif italic">
                📍 {article.cityName} ({article.postalCode})
              </span>
            </div>

            <h1 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-[#361B00] leading-tight">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 text-xs text-stone-600 border-t border-stone-100">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 font-semibold text-stone-800">
                  <ShieldCheck className="w-4 h-4 text-[#83ae42]" /> Rédigé par {article.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-stone-400" /> {article.publishDate}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 font-bold text-[#361B00]">
                  <Clock className="w-4 h-4 text-[#83ae42]" /> Lecture : {article.readTimeMinutes} min
                </span>
                <span className="flex items-center gap-1 text-[#c38d34] font-semibold">
                  <MapPin className="w-4 h-4" /> Bouches-du-Rhône (13)
                </span>
              </div>
            </div>

          </div>

          {/* Hero Image */}
          <div className="rounded-xl overflow-hidden shadow-sm border border-stone-200 max-h-96">
            <img 
              src={getDomainImage(article.domainId)} 
              alt={article.title} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Excerpt Chapeau */}
          <div className="p-6 bg-stone-50 border-l-4 border-l-[#83ae42] rounded-r-xl text-stone-800 font-serif text-base sm:text-lg italic leading-relaxed">
            "{article.excerpt}"
          </div>

          {/* Key Takeaways Box */}
          {article.keyTakeaways && article.keyTakeaways.length > 0 && (
            <div className="p-6 sm:p-8 bg-gradient-to-br from-emerald-50 to-stone-50 rounded-xl border border-emerald-200 space-y-4">
              <h3 className="font-serif font-bold text-lg text-[#361B00] flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#83ae42]" />
                Points Clés à Retenir pour votre Projet à {article.cityName} :
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-stone-800">
                {article.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#4d843d] shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Main Content Body */}
          <div 
            className="prose prose-stone max-w-none text-stone-800 text-sm sm:text-base leading-relaxed space-y-6 pt-4 font-sans border-t border-stone-100"
            dangerouslySetInnerHTML={{ __html: article.contentHtml }}
          />

          {/* Direct CTA Box */}
          <div className="p-8 bg-[#361B00] text-white rounded-2xl shadow-lg space-y-4 mt-12">
            <span className="bureau-badge-gold text-[10px]">
              Conseil Indépendant & Audit Qualifié OPQIBI 1911
            </span>
            
            <h3 className="font-serif font-bold text-2xl text-white">
              Vous avez un projet d'étude ou de rénovation à {article.cityName} ?
            </h3>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Marion BEAUPUY vous accompagne depuis l'idée initiale jusqu'à la livraison finale pour garantir la sécurité technique, la maîtrise financière et l'obtention de vos aides MaPrimeRénov'.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenContact(article.domainId, article.cityName)}
                className="btn-bureau-eco text-xs py-3.5 px-6"
              >
                <span>Contacter Marion Beaupuy pour un projet à {article.cityName}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </article>

        {/* Related Articles Suggestions */}
        {relatedArticles.length > 0 && (
          <div className="space-y-6 pt-8 border-t border-stone-200">
            <h3 className="font-serif font-bold text-xl text-[#361B00] flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#83ae42]" />
              Autres Guides Techniques Recommandés :
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => onSelectArticle(rel)}
                  className="bureau-card bg-white p-5 rounded-xl border border-stone-200 space-y-3 cursor-pointer group hover:border-[#83ae42] transition-colors"
                >
                  <span className="text-[10px] font-bold text-[#83ae42] bg-emerald-50 px-2 py-0.5 rounded">
                    {rel.cityName}
                  </span>
                  <h4 className="font-serif font-bold text-sm text-[#361B00] group-hover:text-[#4d843d] transition-colors line-clamp-2">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-stone-600 line-clamp-2">
                    {rel.excerpt}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Back Button */}
        <div className="pt-4 text-center">
          <button
            onClick={onBackToBlog}
            className="btn-bureau-primary text-xs !py-3 !px-6"
          >
            <span>← Retourner à la liste de tous les articles</span>
          </button>
        </div>

      </div>
    </div>
  );
};
