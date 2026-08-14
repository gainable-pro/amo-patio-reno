import React, { useState } from 'react';
import { X, ZoomIn, Download, FileText, Image as ImageIcon, CreditCard } from 'lucide-react';

interface DocumentViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'logo' | 'charte' | 'flyer';
}

export const DocumentViewerModal: React.FC<DocumentViewerModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'logo',
}) => {
  const [activeTab, setActiveTab] = useState<'logo' | 'charte' | 'flyer'>(initialTab);
  const [zoom, setZoom] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-amber-900/10">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-amber-950/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-900/10 flex items-center justify-center text-amber-900">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-gray-900 text-lg">
                Documents & Supports de Communication
              </h3>
              <p className="text-xs text-gray-500">
                Visualisez le logo, la charte graphique et le flyer 3 volets d'AMO Patio Réno
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-gray-200 bg-gray-50/50 px-6 pt-2 gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('logo')}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'logo'
                ? 'border-emerald-600 text-emerald-800 bg-white rounded-t-lg'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <ImageIcon className="w-4 h-4" />
            Logo officiel
          </button>

          <button
            onClick={() => setActiveTab('charte')}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'charte'
                ? 'border-emerald-600 text-emerald-800 bg-white rounded-t-lg'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <CreditCard className="w-4 h-4" />
            Charte Graphique & Carte
          </button>

          <button
            onClick={() => setActiveTab('flyer')}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'flyer'
                ? 'border-emerald-600 text-emerald-800 bg-white rounded-t-lg'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <FileText className="w-4 h-4" />
            Flyer 3 volets
          </button>
        </div>

        {/* Body View */}
        <div className="flex-1 overflow-y-auto p-6 bg-stone-50 flex flex-col items-center justify-center min-h-[350px]">
          {activeTab === 'logo' && (
            <div className="flex flex-col items-center text-center max-w-lg">
              <div className={`relative p-6 bg-white rounded-2xl shadow-md border border-gray-200 transition-all cursor-pointer ${zoom ? 'scale-125 z-10' : 'hover:scale-105'}`} onClick={() => setZoom(!zoom)}>
                <img
                  src="/logo.jpg"
                  alt="Logo officiel AMO Patio Réno"
                  className="max-h-72 object-contain mx-auto rounded-lg"
                />
                <span className="absolute bottom-3 right-3 bg-black/60 text-white text-[10px] px-2 py-1 rounded-full flex items-center gap-1 backdrop-blur-sm">
                  <ZoomIn className="w-3 h-3" /> Cliquer pour zoomer
                </span>
              </div>
              <h4 className="font-serif font-bold text-gray-900 text-lg mt-6">
                Symbolique du Logo AMO Patio Réno
              </h4>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                Arbre de vie et de croissance (sobriété & nature), ancré sur le toit de la maison (bâtiment & patrimoine), entouré de la flèche circulaire d'accompagnement continu, de l'ampoule (efficacité énergétique) et de l'euro (sécurité financière).
              </p>
              <a
                href="/logo.jpg"
                download="Logo_AMO_Patio_Reno.jpg"
                className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-emerald-700 text-white rounded-lg text-xs font-semibold hover:bg-emerald-800 transition-colors"
              >
                <Download className="w-3.5 h-3.5" /> Télécharger le fichier original
              </a>
            </div>
          )}

          {activeTab === 'charte' && (
            <div className="flex flex-col items-center text-center max-w-2xl w-full">
              <div className="bg-white p-4 rounded-2xl shadow-md border border-gray-200 w-full mb-4">
                <img
                  src="/charte.png"
                  alt="Charte graphique et carte de visite AMO Patio Réno"
                  className="w-full h-auto object-contain rounded-lg max-h-[420px]"
                />
              </div>

              {/* Color Code Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 w-full mt-2 text-left">
                <div className="p-2.5 bg-white rounded-xl border border-gray-200 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full border border-gray-300 shadow-inner shrink-0" style={{ backgroundColor: '#361B00' }} />
                  <div>
                    <span className="block text-[10px] text-gray-400 uppercase font-mono">#361B00</span>
                    <span className="text-xs font-bold text-gray-800">Terre Sombre</span>
                  </div>
                </div>

                <div className="p-2.5 bg-white rounded-xl border border-gray-200 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full border border-gray-300 shadow-inner shrink-0" style={{ backgroundColor: '#3f290f' }} />
                  <div>
                    <span className="block text-[10px] text-gray-400 uppercase font-mono">#3F290F</span>
                    <span className="text-xs font-bold text-gray-800">Bois Brun</span>
                  </div>
                </div>

                <div className="p-2.5 bg-white rounded-xl border border-gray-200 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full border border-gray-300 shadow-inner shrink-0" style={{ backgroundColor: '#83ae42' }} />
                  <div>
                    <span className="block text-[10px] text-gray-400 uppercase font-mono">#83AE42</span>
                    <span className="text-xs font-bold text-gray-800">Vert Feuille</span>
                  </div>
                </div>

                <div className="p-2.5 bg-white rounded-xl border border-gray-200 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full border border-gray-300 shadow-inner shrink-0" style={{ backgroundColor: '#4d843d' }} />
                  <div>
                    <span className="block text-[10px] text-gray-400 uppercase font-mono">#4D843D</span>
                    <span className="text-xs font-bold text-gray-800">Vert Forêt</span>
                  </div>
                </div>

                <div className="p-2.5 bg-white rounded-xl border border-gray-200 flex items-center gap-2 col-span-2 sm:col-span-1">
                  <span className="w-6 h-6 rounded-full border border-gray-300 shadow-inner shrink-0" style={{ backgroundColor: '#c38d34' }} />
                  <div>
                    <span className="block text-[10px] text-gray-400 uppercase font-mono">#C38D34</span>
                    <span className="text-xs font-bold text-gray-800">Ocre Doré</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'flyer' && (
            <div className="flex flex-col items-center w-full max-w-3xl">
              <div className="bg-white p-4 rounded-2xl shadow-md border border-gray-200 w-full mb-4">
                <img
                  src="/flyer.jpg"
                  alt="Flyer 3 volets AMO Patio Réno"
                  className="w-full h-auto object-contain rounded-lg max-h-[480px]"
                />
              </div>
              <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl text-left w-full text-xs text-emerald-900 leading-relaxed">
                <strong className="block font-serif font-bold text-sm mb-1 text-emerald-950">
                  Extrait du Flyer : "Un projet, des travaux ? Analyser et sécuriser pour agir"
                </strong>
                <p>
                  AMO Patio Réno répond aux questions clés : Par où commencer ? Quels travaux prioriser ? Quel budget ? Quelles aides ? Le bâti ancien, c'est délicat ? Comment coordonner les intervenants et suivre le chantier sereinement ?
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-gray-100 border-t border-gray-200 flex items-center justify-between text-xs text-gray-500">
          <span>AMO Patio Réno — Marion BEAUPUY</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
          >
            Fermer la vue
          </button>
        </div>
      </div>
    </div>
  );
};
