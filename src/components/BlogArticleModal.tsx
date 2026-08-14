import React from 'react';
import { X, Clock, Calendar, MapPin, ShieldCheck, ArrowRight, BookOpen, CheckCircle2 } from 'lucide-react';
import type { BlogArticle } from '../data/blogArticles';

interface BlogArticleModalProps {
  article: BlogArticle | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: (domainId?: string, cityName?: string) => void;
}

export const BlogArticleModal: React.FC<BlogArticleModalProps> = ({
  article,
  isOpen,
  onClose,
  onOpenContact,
}) => {
  if (!isOpen || !article) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white text-stone-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl font-sans">
        
        {/* Header */}
        <div className="p-6 bg-[#1C0E00] text-white flex items-center justify-between border-b border-amber-950 shrink-0">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="bureau-badge-green text-[10px]">
                {article.domainTitle}
              </span>
              <span className="bureau-badge-brown text-[10px]">
                {article.cityName} ({article.postalCode})
              </span>
            </div>
            <h2 className="font-serif font-bold text-lg sm:text-xl text-white line-clamp-1">
              {article.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 hover:bg-stone-800 rounded-lg text-stone-400 hover:text-white transition-colors shrink-0 ml-4"
            aria-label="Fermer l'article"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 custom-scrollbar">
          
          {/* Article Meta Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-stone-50 rounded-lg border border-stone-200 text-xs text-stone-600">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-[#83ae42]" /> Par {article.author}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4 text-stone-400" /> {article.publishDate}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1 font-semibold text-stone-800">
                <Clock className="w-4 h-4 text-[#83ae42]" /> Temps de lecture : {article.readTimeMinutes} min
              </span>
              <span className="flex items-center gap-1 text-[#361B00] font-bold">
                <MapPin className="w-4 h-4 text-[#c38d34]" /> {article.cityName}
              </span>
            </div>
          </div>

          {/* Excerpt */}
          <div className="p-5 bg-stone-100 border-l-4 border-l-[#83ae42] rounded-r-lg text-stone-800 font-serif text-base sm:text-lg italic leading-relaxed">
            "{article.excerpt}"
          </div>

          {/* Key Takeaways Box */}
          {article.keyTakeaways && article.keyTakeaways.length > 0 && (
            <div className="p-6 bg-gradient-to-br from-emerald-50 to-stone-50 rounded-xl border border-emerald-200 space-y-3">
              <h3 className="font-serif font-bold text-base text-[#361B00] flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#83ae42]" />
                Points Clés à Retenir pour votre Projet à {article.cityName} :
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                {article.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#4d843d] shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* HTML Article Main Body */}
          <div 
            className="prose prose-stone max-w-none text-stone-800 text-sm sm:text-base leading-relaxed space-y-4 font-sans"
            dangerouslySetInnerHTML={{ __html: article.contentHtml }}
          />

          {/* Call To Action Box inside Article */}
          <div className="p-6 sm:p-8 bg-[#361B00] text-white rounded-xl shadow-md space-y-4">
            <div className="flex items-center gap-2">
              <span className="bureau-badge-gold text-[10px]">
                Conseil Indépendant & Audit Qualifié
              </span>
            </div>
            
            <h3 className="font-serif font-bold text-xl text-white">
              Vous avez un projet de rénovation ou d'étude à {article.cityName} ?
            </h3>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Marion BEAUPUY vous accompagne depuis l'idée initiale jusqu'à la réception de vos travaux pour garantir la conformité technique, la maîtrise des coûts et l'obtention de vos subventions.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  onClose();
                  onOpenContact(article.domainId, article.cityName);
                }}
                className="btn-bureau-eco text-xs py-3 px-6"
              >
                <span>Demander une étude personnalisée ({article.cityName})</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-stone-100 border-t border-stone-200 flex items-center justify-between shrink-0">
          <span className="text-xs text-stone-500 italic">
            Article rédigé par Marion BEAUPUY • AMO Patio Réno Bouches-du-Rhône
          </span>
          <button
            onClick={onClose}
            className="btn-bureau-primary text-xs !py-2 !px-4"
          >
            Fermer l'article
          </button>
        </div>

      </div>
    </div>
  );
};
