import React, { useState } from 'react';
import { ACRONYM_DICTIONARY } from '../data/companyData';
import { HelpCircle, X, Info } from 'lucide-react';

interface AcronymTooltipProps {
  acronym: string;
  displayText?: string;
  customClass?: string;
}

export const AcronymTooltip: React.FC<AcronymTooltipProps> = ({
  acronym,
  displayText,
  customClass = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const info = ACRONYM_DICTIONARY[acronym];

  if (!info) {
    return <span>{displayText || acronym}</span>;
  }

  return (
    <span className={`inline-inline relative ${customClass}`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="inline-flex items-center gap-1 font-semibold text-[#4d843d] bg-emerald-50/80 px-2 py-0.5 rounded-md border border-emerald-300/60 hover:border-emerald-500 hover:bg-emerald-100/80 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer shadow-sm group text-xs sm:text-sm"
        title={`Cliquer ou survoler pour expliciter "${acronym}"`}
      >
        <span>{displayText || info.acronym}</span>
        <HelpCircle className="w-3.5 h-3.5 text-[#83ae42] group-hover:scale-110 group-hover:rotate-12 transition-transform duration-200" />
      </button>

      {/* Floating Glassmorphic Tooltip */}
      {isOpen && (
        <span 
          className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2.5 w-72 sm:w-80 p-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_20px_50px_rgba(54,27,0,0.2)] border border-emerald-200/80 text-left text-xs sm:text-sm block animate-in fade-in zoom-in-95 duration-200 ring-1 ring-emerald-500/10"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <span className="flex items-start justify-between gap-2 border-b border-stone-100 pb-2 mb-2 block">
            <span className="block">
              <span className="inline-block text-[10px] font-extrabold tracking-wider uppercase text-emerald-800 bg-emerald-100/80 px-2.5 py-0.5 rounded-full mb-1">
                {info.category}
              </span>
              <span className="block font-serif font-bold text-stone-900 text-sm">
                {info.acronym} — {info.fullTerm}
              </span>
            </span>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-stone-400 hover:text-stone-700 p-1 rounded-full hover:bg-stone-100 transition-colors shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </span>
          <span className="block text-stone-600 leading-relaxed font-sans text-xs">
            {info.description}
          </span>
          <span className="mt-3 pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400 block">
            <span className="flex items-center gap-1 text-[#4d843d] font-medium">
              <Info className="w-3.5 h-3.5" /> Pédagogie AMO Patio Réno
            </span>
            <span className="font-serif italic text-amber-900/60">Marion Beaupuy</span>
          </span>
          {/* Subtle Glowing Arrow */}
          <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-8 border-transparent border-t-white/95 block drop-shadow-sm" />
        </span>
      )}
    </span>
  );
};
