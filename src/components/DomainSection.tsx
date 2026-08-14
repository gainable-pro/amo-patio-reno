import React from 'react';
import { DOMAINS_INTERVENTION, TARGET_AUDIENCES } from '../data/companyData';
import { AcronymTooltip } from './AcronymTooltip';
import { 
  CheckCircle2, 
  ArrowRight, 
  FileText,
  Check
} from 'lucide-react';

interface DomainSectionProps {
  domainId: string;
  onOpenContact: (domainId?: string) => void;
  onNavigateToDomain: (id: string) => void;
}

export const DomainSection: React.FC<DomainSectionProps> = ({
  domainId,
  onOpenContact,
  onNavigateToDomain,
}) => {
  const domain = DOMAINS_INTERVENTION.find(d => d.id === domainId) || DOMAINS_INTERVENTION[0];

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

  const domainImg = getDomainImage(domain.id);
  const targetAudiences = TARGET_AUDIENCES.filter(a => domain.targetAudienceIds.includes(a.id));

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* Editorial Corporate Header Banner */}
      <div className="bg-white border border-stone-200 rounded-lg p-8 sm:p-10 shadow-sm relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="bureau-badge-green font-mono">
                Domaine d'intervention
              </span>
              <span className="bureau-badge-brown font-serif italic">
                AMO Patio Réno — Marion Beaupuy
              </span>
            </div>

            <h1 className="font-serif font-bold text-3xl sm:text-4xl text-[#361B00] leading-tight">
              {domain.title}
            </h1>

            <div className="p-4 bg-stone-50 border-l-4 border-l-[#4d843d] text-stone-800 text-sm font-serif italic">
              "{domain.tagline}"
            </div>

            <div className="text-stone-700 text-sm sm:text-base leading-relaxed space-y-2">
              <div>{domain.headline}</div>
              <div>{domain.description}</div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <img 
              src={domainImg} 
              alt={domain.title} 
              className="w-full h-64 sm:h-72 object-cover rounded-lg border border-stone-200 shadow-md"
            />
          </div>

        </div>
      </div>

      {/* Comprehensive Long-Form Editorial Content Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Detailed Service Explanation & Deliverables */}
        <div className="lg:col-span-8 bg-white p-8 sm:p-10 rounded-lg border border-stone-200 shadow-sm space-y-8">
          
          {/* Section 1: Detailed Overview */}
          <div className="space-y-4">
            <h2 className="font-serif font-bold text-2xl text-[#361B00] border-b border-stone-200 pb-3">
              Définition & Approche Méthodologique
            </h2>

            <div className="text-stone-700 text-sm sm:text-base leading-relaxed space-y-4">
              {domain.id === 'energie' && (
                <>
                  <p>
                    La performance énergétique d'un bâtiment ne s'improvise pas. En tant qu'expert qualifié <AcronymTooltip acronym="OPQIBI" /> <AcronymTooltip acronym="RGE" />, Marion Beaupuy réalise des études thermiques et audits énergétiques complets pour garantir la sobriété d'usage et la réduction pérenne des factures d'énergie.
                  </p>
                  <p>
                    L'approche intègre la méthode de calcul réglementaire <AcronymTooltip acronym="3CL" /> tout en accordant une attention capitale au <strong>confort d'été méditerranéen</strong> dans les Bouches-du-Rhône. Nous analysons l'inertie globale, les occultations solaires, la ventilation naturelle nocturne et la performance des équipements de climatisation et chauffage (<AcronymTooltip acronym="CVC" />).
                  </p>
                </>
              )}

              {domain.id === 'bati_ancien' && (
                <>
                  <p>
                    Le bâti ancien (construit avant 1948 en pierre, pisé, moellons ou briques) possède son propre comportement hygrothermique. L'application directe de méthodes d'isolation conventionnelles synthétiques peut causer des désordres majeurs (condensations, moisissures, dégradation des maçonneries).
                  </p>
                  <p>
                    AMO Patio Réno étudie la <strong>perspirance des parois</strong>, le transfert de vapeur d'eau et recommande l'utilisation de matériaux biosourcés (fibre de bois, chanvre, chaux-chanvre, ouate de cellulose) permettant de concilier préservation du patrimoine et efficacité thermique.
                  </p>
                </>
              )}

              {domain.id === 'amo' && (
                <>
                  <p>
                    L'Assistance à Maîtrise d'Ouvrage (<AcronymTooltip acronym="AMO" />) constitue le pivot de la sécurité de votre projet. Marion Beaupuy agit en tant que conseillère indépendante et impartiale du Maître d'Ouvrage (<AcronymTooltip acronym="MOA" />), sans aucun lien d'intérêt avec les maîtres d'œuvre (<AcronymTooltip acronym="MOE" />) ou les entreprises de travaux.
                  </p>
                  <p>
                    De la phase de faisabilité au choix du maître d'œuvre, en passant par l'analyse du dossier de consultation des entreprises (<AcronymTooltip acronym="DCE" />), la négociation des marchés de travaux, le suivi de chantier et les opérations de réception, votre opération est encadrée avec rigueur et transparence.
                  </p>
                </>
              )}

              {domain.id === 'entreprises' && (
                <>
                  <p>
                    Pour les entreprises du bâtiment et de la rénovation, la gestion des exigences du Maître d'Ouvrage (<AcronymTooltip acronym="MOA" />) et le respect des formalités administratives représentent une charge chronophage qui ralentit la production sur le chantier.
                  </p>
                  <p>
                    AMO Patio Réno propose un accompagnement sur-mesure aux entreprises du <AcronymTooltip acronym="BTP" /> : fluidification de la communication avec la MOA, montage de dossiers techniques, préparation des situations de travaux et gestion amiable des imprévus de chantier.
                  </p>
                </>
              )}

              {domain.id === 'formation' && (
                <>
                  <p>
                    L'ingénierie de formation professionnelle constitue le 5e pilier de notre savoir-faire. Marion Beaupuy intervient comme maître de conférences et référente pédagogique auprès de la <AcronymTooltip acronym="CCI" /> Alpes-Provence EcoCampus et d'organismes de formation supérieure.
                  </p>
                  <p>
                    Nous concevons et animons des modules de formation sur la thermique du bâtiment, le diagnostic DPE, la conduite d'opérations sous loi <AcronymTooltip acronym="MOP" />, la méthode PERT / WBS et la gestion de chantier pour des niveaux Bac+2 à Bac+5 (RNCP niveau 7).
                  </p>
                </>
              )}
            </div>
          </div>

          {/* Section 2: Detailed Scope of Services */}
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-xl text-[#361B00]">
              Périmètre d'Intervention & Prestations Détaillées
            </h3>
            
            <div className="grid grid-cols-1 gap-3">
              {domain.bulletPoints.map((point, idx) => (
                <div key={idx} className="p-4 bg-stone-50 border border-stone-200 rounded flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#4d843d] shrink-0 mt-0.5" />
                  <div className="text-sm text-stone-800 font-medium">
                    {point}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Deliverables & Quality Standards */}
          <div className="p-6 bg-stone-50 border border-stone-200 rounded-lg space-y-3">
            <h4 className="font-serif font-bold text-[#361B00] text-base flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#c38d34]" />
              Livrables remis & Garanties de Qualité
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#4d843d]" />
                Rapport technique détaillé certifié OPQIBI RGE (selon la mission)
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#4d843d]" />
                Scénarios chiffrés d'économies d'énergie et estimation des aides (MaPrimeRénov', CEE, Éco-PTZ)
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#4d843d]" />
                Tableau de bord de suivi budgétaire et planning d'exécution
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#4d843d]" />
                Comptes-rendus de visites de chantier et fiches de réceptions
              </li>
            </ul>
          </div>

          {/* Direct Action */}
          <div className="p-6 bg-[#361B00] text-white rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-serif font-bold text-lg text-white">
                Besoin d'un cadrage technique sur {domain.shortTitle} ?
              </h4>
              <p className="text-xs text-stone-300">
                Marion Beaupuy répond à vos interrogations sous 24 à 48 heures.
              </p>
            </div>
            <button
              onClick={() => onOpenContact(domain.id)}
              className="btn-bureau-eco text-xs !py-3 !px-6 shrink-0"
            >
              <span>Échanger avec Marion Beaupuy</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Right Column: Audiences & Quick Switcher */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Target Audiences Card */}
          <div className="bg-white p-6 rounded-lg border border-stone-200 shadow-sm space-y-3">
            <h3 className="font-serif font-bold text-base text-[#361B00]">
              Publics & Profils Concernés
            </h3>
            <div className="flex flex-wrap gap-2">
              {targetAudiences.map((aud) => (
                <span key={aud.id} className="bureau-badge-brown text-xs">
                  {aud.label}
                </span>
              ))}
            </div>
          </div>

          {/* Marion Beaupuy Profile summary */}
          <div className="bg-stone-900 text-white p-6 rounded-lg space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#83ae42] bg-stone-800 px-2.5 py-1 rounded">
              Direction Technique
            </span>
            <h4 className="font-serif font-bold text-xl text-white">
              Marion BEAUPUY
            </h4>
            <p className="text-xs text-stone-300 leading-relaxed">
              20 ans d'expérience en encadrement de projets immobiliers, audits énergétiques et ingénierie de formation.
            </p>
            <div className="text-xs text-amber-200 pt-2 border-t border-stone-800 space-y-1">
              <div>✓ 500+ Logements accompagnés</div>
              <div>✓ 25 000 m² audités dans le 13</div>
              <div>✓ Référente Formation EcoCampus</div>
            </div>
          </div>

          {/* Navigation to other 4 domains */}
          <div className="bg-white p-6 rounded-lg border border-stone-200 space-y-3">
            <h4 className="font-serif font-bold text-[#361B00] text-sm">
              Découvrir les autres domaines :
            </h4>
            <div className="space-y-2">
              {DOMAINS_INTERVENTION.filter(d => d.id !== domainId).map((other) => (
                <button
                  key={other.id}
                  onClick={() => onNavigateToDomain(other.id)}
                  className="w-full p-2.5 bg-stone-50 hover:bg-stone-100 text-stone-800 text-xs font-semibold rounded border border-stone-200 flex items-center justify-between transition-colors text-left"
                >
                  <span>0{other.number}. {other.shortTitle}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
