import React from 'react';
import { X, ShieldCheck, Building2, MapPin, Mail, Phone, Lock } from 'lucide-react';

interface LegalNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LegalNoticeModal: React.FC<LegalNoticeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white text-stone-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl font-sans">
        
        {/* Header */}
        <div className="p-6 bg-[#1C0E00] text-white flex items-center justify-between border-b border-amber-950">
          <div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#83ae42]" />
              <h3 className="font-serif font-bold text-xl text-white">
                Mentions Légales & Informations Réglementaires
              </h3>
            </div>
            <p className="text-xs text-stone-300 mt-1">
              AMO Patio Réno — Conformité selon la loi n°2004-575 du 21 juin 2004 (LCEN)
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-stone-800 rounded-lg text-stone-400 hover:text-white transition-colors"
            aria-label="Fermer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 custom-scrollbar">
          
          {/* Section 1: Éditeur du site */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-lg text-[#361B00] flex items-center gap-2 border-b border-stone-200 pb-2">
              <Building2 className="w-5 h-5 text-[#83ae42]" />
              1. Éditeur du Site & Identification de l'Entreprise
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-stone-700">
              <div className="p-4 bg-stone-50 rounded-lg border border-stone-200 space-y-2">
                <span className="font-bold text-[#361B00] block text-base font-serif">
                  Marion BEAUPUY (EI)
                </span>
                <p><strong>Statut :</strong> Entrepreneur Individuel (EI)</p>
                <p><strong>Enseigne :</strong> AMO Patio Réno</p>
                <p><strong>Directrice de la Publication :</strong> Marion BEAUPUY</p>
                <p><strong>Code APE / NAF :</strong> 71.12B (Ingénierie, études techniques)</p>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg border border-stone-200 space-y-2">
                <p><strong>SIREN :</strong> 991 774 381</p>
                <p><strong>SIRET du Siège :</strong> 991 774 381 00016</p>
                <p><strong>TVA Intracommunautaire :</strong> FR57991774381</p>
                <p><strong>Qualification professionnelle :</strong> OPQIBI RGE N°1911</p>
              </div>
            </div>
          </div>

          {/* Section 2: Siège social et coordonnées */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-lg text-[#361B00] flex items-center gap-2 border-b border-stone-200 pb-2">
              <MapPin className="w-5 h-5 text-[#83ae42]" />
              2. Siège Social & Contact Direct
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-stone-700">
              <div className="p-4 bg-stone-50 rounded-lg border border-stone-200 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-[#361B00] mb-1">
                  <MapPin className="w-4 h-4 text-[#83ae42]" /> Adresse Postale
                </div>
                <p>320 Chemin de Mireille</p>
                <p>13300 Salon-de-Provence</p>
                <p>France</p>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg border border-stone-200 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-[#361B00] mb-1">
                  <Phone className="w-4 h-4 text-[#83ae42]" /> Téléphone
                </div>
                <p className="font-semibold">07 84 42 91 98</p>
                <p className="text-stone-500 text-xs">Du lundi au vendredi (8h - 19h)</p>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg border border-stone-200 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-[#361B00] mb-1">
                  <Mail className="w-4 h-4 text-[#83ae42]" /> Email Officiel
                </div>
                <p className="font-semibold text-emerald-800 break-all">contact@amopatioreno.fr</p>
                <p className="text-stone-500 text-xs">Réponse sous 24h à 48h</p>
              </div>
            </div>
          </div>

          {/* Section 3: Hébergeur du site */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-lg text-[#361B00] flex items-center gap-2 border-b border-stone-200 pb-2">
              <ShieldCheck className="w-5 h-5 text-[#83ae42]" />
              3. Hébergement du Site Web
            </h4>

            <div className="p-4 bg-stone-50 rounded-lg border border-stone-200 text-xs sm:text-sm text-stone-700 space-y-1">
              <p><strong>Hébergeur :</strong> Vercel Inc.</p>
              <p><strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</p>
              <p><strong>Site web de l'hébergeur :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-emerald-800 underline">https://vercel.com</a></p>
            </div>
          </div>

          {/* Section 4: Propriété intellectuelle & Protection des données RGPD */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-lg text-[#361B00] flex items-center gap-2 border-b border-stone-200 pb-2">
              <Lock className="w-5 h-5 text-[#83ae42]" />
              4. Propriété Intellectuelle & Protection des Données (RGPD)
            </h4>

            <div className="text-xs sm:text-sm text-stone-700 leading-relaxed space-y-3">
              <p>
                <strong>Propriété intellectuelle :</strong> L'ensemble des contenus (structure, textes, visuels, logos, charte graphique et documents) présentés sur le site <code>amopatioreno.fr</code> est la propriété exclusive de Marion BEAUPUY (AMO Patio Réno), sauf mention contraire. Toute reproduction, représentation, modification ou adaptation sans autorisation écrite préalable est strictement interdite.
              </p>
              <p>
                <strong>Protection des données personnelles :</strong> Les informations recueillies via le formulaire de contact (nom, téléphone, email, détails du projet) sont destinées exclusivement à l'usage de Marion BEAUPUY dans le cadre du traitement de vos demandes d'assistance à maîtrise d'ouvrage et d'études énergétiques.
              </p>
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant. Pour exercer ce droit, adressez un message par email à <a href="mailto:contact@amopatioreno.fr" className="text-emerald-800 underline">contact@amopatioreno.fr</a>.
              </p>
            </div>
          </div>

        </div>

        {/* Footer Action */}
        <div className="p-4 bg-stone-100 border-t border-stone-200 flex justify-end">
          <button
            onClick={onClose}
            className="btn-bureau-primary text-xs !py-2.5 !px-6"
          >
            Fermer les mentions légales
          </button>
        </div>

      </div>
    </div>
  );
};
