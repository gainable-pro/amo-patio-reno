import React, { useState } from 'react';
import { TARGET_AUDIENCES, DOMAINS_INTERVENTION } from '../data/companyData';
import { 
  Home, 
  Landmark, 
  Building, 
  Building2, 
  HardHat, 
  Ruler, 
  GraduationCap, 
  CheckCircle2, 
  ArrowRight, 
  FileCheck,
  Compass
} from 'lucide-react';

interface AudienceSelectorProps {
  onSelectDomain: (domainId: string) => void;
  onOpenContact: (audienceId?: string) => void;
}

export const AudienceSelector: React.FC<AudienceSelectorProps> = ({
  onSelectDomain,
  onOpenContact,
}) => {
  const [selectedAudienceId, setSelectedAudienceId] = useState<string>('particuliers');

  const selectedAudience = TARGET_AUDIENCES.find(a => a.id === selectedAudienceId) || TARGET_AUDIENCES[0];
  const recommendedDomains = DOMAINS_INTERVENTION.filter(d => selectedAudience.recommendedDomainIds.includes(d.id));

  const getProfileIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home': return Home;
      case 'Landmark': return Landmark;
      case 'Building': return Building;
      case 'Building2': return Building2;
      case 'HardHat': return HardHat;
      case 'Ruler': return Ruler;
      case 'GraduationCap': return GraduationCap;
      default: return Home;
    }
  };

  const getProfileImage = (id: string) => {
    switch (id) {
      case 'particuliers': return '/images/profile_particuliers.png';
      case 'collectivites': return '/images/profile_collectivites.png';
      case 'coproprietes': return '/images/profile_coproprietes.png';
      case 'bailleurs': return '/images/profile_coproprietes.png';
      case 'promoteurs': return '/images/amo_supervision.png';
      case 'btp': return '/images/amo_supervision.png';
      case 'architectes': return '/images/amo_supervision.png';
      case 'diagnostiqueurs': return '/images/audit_energetique.png';
      case 'formations': return '/images/audit_energetique.png';
      default: return '/images/profile_particuliers.png';
    }
  };

  const profileImg = getProfileImage(selectedAudience.id);

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10 font-sans">
      
      {/* Title & Introduction */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="bureau-badge-green font-mono">
          Orientateur Sur Mesure
        </span>

        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-[#361B00]">
          Qui êtes-vous ? De quoi avez-vous besoin ?
        </h1>

        <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
          Sélectionnez votre profil ci-dessous pour identifier instantanément les prestations sur-mesure déployées par Marion Beaupuy pour sécuriser vos objectifs.
        </p>
      </div>

      {/* Profile Selector Tabs Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-2">
        {TARGET_AUDIENCES.map((audience) => {
          const Icon = getProfileIcon(audience.iconName);
          const isSelected = audience.id === selectedAudienceId;
          return (
            <button
              key={audience.id}
              onClick={() => setSelectedAudienceId(audience.id)}
              className={`p-3 rounded-lg border flex flex-col items-center text-center gap-2 transition-all duration-200 cursor-pointer ${
                isSelected
                  ? 'bg-[#361B00] text-white border-[#361B00] shadow-md scale-105'
                  : 'bg-white text-stone-700 border-stone-200 hover:border-emerald-600 hover:bg-emerald-50/50'
              }`}
            >
              <div className={`p-2 rounded-md ${isSelected ? 'bg-white/10 text-[#83ae42]' : 'bg-stone-100 text-stone-600'}`}>
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold leading-tight">
                {audience.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Profile Details Card with Dynamic Image Background */}
      <div className="bg-white rounded-xl border border-stone-200 shadow-sm overflow-hidden">
        
        {/* Dynamic Image Banner Header */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden">
          <img 
            src={profileImg} 
            alt={selectedAudience.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C0E00] via-[#1C0E00]/60 to-transparent p-6 sm:p-8 flex flex-col justify-end">
            <span className="bureau-badge-green w-fit text-[11px] mb-1 font-mono">
              Profil sélectionné
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-white">
              {selectedAudience.title}
            </h2>
            <p className="text-stone-200 text-xs sm:text-sm max-w-2xl mt-1">
              {selectedAudience.subtitle}
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Challenges */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-serif font-bold text-lg text-[#361B00] flex items-center gap-2 border-b border-stone-200 pb-2">
              <FileCheck className="w-5 h-5 text-[#83ae42]" />
              Vos Enjeux & Problématiques Typiques :
            </h3>

            <ul className="space-y-3 text-xs sm:text-sm text-stone-700">
              {selectedAudience.challenges.map((challenge, idx) => (
                <li key={idx} className="flex items-start gap-2.5 p-3 bg-stone-50 rounded border border-stone-200">
                  <CheckCircle2 className="w-4 h-4 text-[#4d843d] shrink-0 mt-0.5" />
                  <span className="font-medium text-stone-800">{challenge}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <button
                onClick={() => onOpenContact(selectedAudience.id)}
                className="w-full btn-bureau-primary text-xs py-3 justify-center"
              >
                <span>Faire étudier mon projet ({selectedAudience.label})</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Recommended Domains */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="font-serif font-bold text-lg text-[#361B00] border-b border-stone-200 pb-2">
              Domaines d'intervention recommandés pour {selectedAudience.label} ({recommendedDomains.length})
            </h3>

            <div className="space-y-3">
              {recommendedDomains.map((domain) => (
                <div 
                  key={domain.id} 
                  className="p-4 bg-stone-50 rounded-lg border border-stone-200 hover:border-emerald-600 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <h4 className="font-serif font-bold text-base text-[#361B00]">
                      {domain.title}
                    </h4>
                    <p className="text-xs text-stone-600 italic">
                      "{domain.tagline}"
                    </p>
                  </div>

                  <button
                    onClick={() => onSelectDomain(domain.id)}
                    className="btn-bureau-outline text-xs !py-2 !px-3 shrink-0"
                  >
                    <span>Voir le domaine</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
