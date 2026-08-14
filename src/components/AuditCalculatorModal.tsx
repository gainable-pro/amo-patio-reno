import React, { useState } from 'react';
import { X, Calculator, ArrowRight, Sparkles, Building, Home, ShieldCheck, RefreshCw } from 'lucide-react';

interface AuditCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContactWithDiagnostic: (diagSummary: string) => void;
}

export const AuditCalculatorModal: React.FC<AuditCalculatorModalProps> = ({
  isOpen,
  onClose,
  onOpenContactWithDiagnostic,
}) => {
  const [step, setStep] = useState(1);
  const [projectType, setProjectType] = useState<'maison' | 'copro' | 'tertiaire' | 'btp'>('maison');
  const [buildingAge, setBuildingAge] = useState<'ancien' | 'semi_recent' | 'neuf'>('ancien');
  const [primaryGoal, setPrimaryGoal] = useState<'energie' | 'securite_travaux' | 'preservation' | 'btp_support'>('energie');

  if (!isOpen) return null;

  const resetQuiz = () => {
    setStep(1);
    setProjectType('maison');
    setBuildingAge('ancien');
    setPrimaryGoal('energie');
  };

  const getRecommendation = () => {
    let title = '';
    let description = '';
    let recommendedDomain = '';

    if (primaryGoal === 'btp_support' || projectType === 'btp') {
      title = 'Accompagnement des Entreprises BTP & Relation MOA';
      description = 'Intervention en appui pour fluidifier vos échanges avec le Maître d\'Ouvrage (MOA), sécuriser les jalons et libérer du temps pour vos équipes chantier.';
      recommendedDomain = 'Appui Entreprises BTP (Domaine 4)';
    } else if (buildingAge === 'ancien' && primaryGoal === 'preservation') {
      title = 'Conseil & Rénovation du Bâti Ancien';
      description = 'Étude spécifique de perspirance, inertie et hygrothermie pour préserver le caractère patrimonial tout en améliorant l\'efficacité thermique avec des matériaux biosourcés.';
      recommendedDomain = 'Bâti Ancien (Domaine 2)';
    } else if (primaryGoal === 'securite_travaux') {
      title = 'Mission d\'Assistance à Maîtrise d\'Ouvrage (AMO)';
      description = 'Accompagnement complet de l\'idée à la livraison : cadrage budgétaire, consultation des entreprises (DCE), suivi des travaux et réception.';
      recommendedDomain = 'AMO Neuf & Rénovation (Domaine 3)';
    } else {
      title = 'Audit Énergétique RGE & Stratégie Thermique';
      description = 'Diagnostic technique complet selon la méthode 3CL et préconisations de scénarios hiérarchisés avec calcul de ROI et aides financières.';
      recommendedDomain = 'Conseil Énergétique (Domaine 1)';
    }

    return { title, description, recommendedDomain };
  };

  const rec = getRecommendation();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-stone-200">
        
        {/* Header */}
        <div className="bg-[#361B00] text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-white">
                Diagnostic Express d'Aiguillage
              </h3>
              <p className="text-xs text-stone-300">
                Déterminez la formule idéale pour votre projet en 3 clics
              </p>
            </div>
          </div>
          <button onClick={onClose} className="text-stone-400 hover:text-white p-1 rounded-full">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-stone-100 h-1.5 flex">
          <div className={`bg-[#83ae42] transition-all duration-300 ${step === 1 ? 'w-1/3' : step === 2 ? 'w-2/3' : 'w-full'}`} />
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {step === 1 && (
            <div className="space-y-4">
              <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full">
                Étape 1 sur 3
              </span>
              <h4 className="font-serif font-bold text-xl text-[#361B00]">
                Quel est le type d'ouvrage concerné ?
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => setProjectType('maison')}
                  className={`p-4 rounded-2xl border text-left flex items-start gap-3 transition-all ${
                    projectType === 'maison'
                      ? 'border-emerald-600 bg-emerald-50/50 text-[#361B00] ring-2 ring-emerald-500/20'
                      : 'border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <Home className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-sm block">Maison / Logement Individuel</span>
                    <span className="text-xs text-stone-500">Particulier ou propriétaire bailleur</span>
                  </div>
                </button>

                <button
                  onClick={() => setProjectType('copro')}
                  className={`p-4 rounded-2xl border text-left flex items-start gap-3 transition-all ${
                    projectType === 'copro'
                      ? 'border-emerald-600 bg-emerald-50/50 text-[#361B00] ring-2 ring-emerald-500/20'
                      : 'border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <Building className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-sm block">Copropriété / Immeuble</span>
                    <span className="text-xs text-stone-500">Syndic, conseil syndical, bailleur social</span>
                  </div>
                </button>

                <button
                  onClick={() => setProjectType('tertiaire')}
                  className={`p-4 rounded-2xl border text-left flex items-start gap-3 transition-all ${
                    projectType === 'tertiaire'
                      ? 'border-emerald-600 bg-emerald-50/50 text-[#361B00] ring-2 ring-emerald-500/20'
                      : 'border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-sm block">Bâtiment Public / Tertiaire</span>
                    <span className="text-xs text-stone-500">Collectivité, école, mairie, entreprise</span>
                  </div>
                </button>

                <button
                  onClick={() => setProjectType('btp')}
                  className={`p-4 rounded-2xl border text-left flex items-start gap-3 transition-all ${
                    projectType === 'btp'
                      ? 'border-emerald-600 bg-emerald-50/50 text-[#361B00] ring-2 ring-emerald-500/20'
                      : 'border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <Sparkles className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-sm block">Entreprise du BTP / Artisan</span>
                    <span className="text-xs text-stone-500">Besoin d'appui relation MOA</span>
                  </div>
                </button>
              </div>

              <div className="flex justify-end pt-4">
                <button onClick={() => setStep(2)} className="btn-primary text-xs !py-2.5 !px-5">
                  <span>Continuer</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full">
                Étape 2 sur 3
              </span>
              <h4 className="font-serif font-bold text-xl text-[#361B00]">
                Quelle est l'ancienneté du bâtiment ?
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  onClick={() => setBuildingAge('ancien')}
                  className={`p-4 rounded-2xl border text-left flex flex-col justify-between transition-all ${
                    buildingAge === 'ancien'
                      ? 'border-emerald-600 bg-emerald-50/50 text-[#361B00] ring-2 ring-emerald-500/20'
                      : 'border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <span className="font-bold text-sm">Bâti Ancien (Avant 1948)</span>
                  <span className="text-xs text-stone-500 mt-2">Pierre, chaux, pisé, perspirant</span>
                </button>

                <button
                  onClick={() => setBuildingAge('semi_recent')}
                  className={`p-4 rounded-2xl border text-left flex flex-col justify-between transition-all ${
                    buildingAge === 'semi_recent'
                      ? 'border-emerald-600 bg-emerald-50/50 text-[#361B00] ring-2 ring-emerald-500/20'
                      : 'border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <span className="font-bold text-sm">Post-1948 (1950-2000)</span>
                  <span className="text-xs text-stone-500 mt-2">Béton, brique, premiers isolants</span>
                </button>

                <button
                  onClick={() => setBuildingAge('neuf')}
                  className={`p-4 rounded-2xl border text-left flex flex-col justify-between transition-all ${
                    buildingAge === 'neuf'
                      ? 'border-emerald-600 bg-emerald-50/50 text-[#361B00] ring-2 ring-emerald-500/20'
                      : 'border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <span className="font-bold text-sm">Neuf ou Récent (&gt; 2000)</span>
                  <span className="text-xs text-stone-500 mt-2">Projet de construction neuve</span>
                </button>
              </div>

              <div className="flex justify-between pt-4">
                <button onClick={() => setStep(1)} className="btn-outline text-xs !py-2 !px-4">
                  Retour
                </button>
                <button onClick={() => setStep(3)} className="btn-primary text-xs !py-2.5 !px-5">
                  <span>Continuer</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full">
                Étape 3 sur 3 — Résultat du Diagnostic
              </span>
              
              <div className="p-6 bg-gradient-to-br from-emerald-50 to-stone-50 rounded-2xl border border-emerald-200 space-y-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-emerald-600" />
                  <span className="text-xs font-extrabold uppercase text-emerald-900 tracking-wider">
                    Formule Préconisée :
                  </span>
                </div>
                <h4 className="font-serif font-bold text-2xl text-[#361B00]">
                  {rec.title}
                </h4>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {rec.description}
                </p>
                <div className="pt-2">
                  <span className="inline-block bg-[#361B00] text-white text-xs font-bold px-3 py-1 rounded-full">
                    Réf : {rec.recommendedDomain}
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between gap-3 pt-2">
                <button onClick={resetQuiz} className="btn-outline text-xs !py-2 flex items-center justify-center gap-1">
                  <RefreshCw className="w-3.5 h-3.5" /> Recommencer
                </button>
                
                <button
                  onClick={() => {
                    onClose();
                    onOpenContactWithDiagnostic(`Diagnostic Express : ${rec.title} (${rec.recommendedDomain})`);
                  }}
                  className="btn-eco text-xs !py-3 !px-6 justify-center"
                >
                  <span>Transmettre ce diagnostic à Marion Beaupuy</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
