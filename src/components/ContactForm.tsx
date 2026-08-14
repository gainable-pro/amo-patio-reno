import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { CITIES_BOUCHES_DU_RHONE, TARGET_AUDIENCES, DOMAINS_INTERVENTION } from '../data/companyData';
import { AcronymTooltip } from './AcronymTooltip';

interface ContactFormProps {
  initialAudienceId?: string;
  initialDomainId?: string;
  initialCityName?: string;
  prefilledNotes?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  initialAudienceId,
  initialDomainId,
  initialCityName,
  prefilledNotes = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    audienceId: initialAudienceId || 'particuliers',
    domainId: initialDomainId || 'energie',
    city: initialCityName || 'Aix-en-Provence',
    projectPhase: 'reflexion',
    message: prefilledNotes,
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate Resend API dispatch
    setTimeout(() => {
      setStatus('success');
    }, 1200);
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-white rounded-3xl shadow-xl border border-stone-200 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
        
        {/* Left Column: Direct Contact Info */}
        <div className="lg:col-span-5 bg-[#361B00] text-white p-8 sm:p-12 flex flex-col justify-between space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#83ae42]/30 to-[#c38d34]/20 rounded-full blur-3xl -mr-24 -mt-24 pointer-events-none" />

          <div className="space-y-6 relative z-10">
            <span className="badge-ochre text-amber-200 bg-white/10 border-white/20">
              <ShieldCheck className="w-3.5 h-3.5 text-[#83ae42]" /> Échange direct & Indépendant
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-white leading-tight">
              Parlons de votre projet
            </h2>
            <p className="text-stone-300 text-sm leading-relaxed">
              Vous hésitez sur la marche à suivre ? Vous avez besoin d'un cadrage technique, d'un audit <AcronymTooltip acronym="RGE" /> ou d'une mission <AcronymTooltip acronym="AMO" /> sur les Bouches-du-Rhône ? Contactez Marion Beaupuy.
            </p>

            <div className="space-y-4 pt-4 border-t border-amber-900/50">
              <a href="tel:0784429198" className="flex items-center gap-4 text-stone-200 hover:text-emerald-300 transition-colors group">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#83ae42] group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-stone-400 block">Téléphone direct</span>
                  <span className="font-bold text-base text-white">07 84 42 91 98</span>
                </div>
              </a>

              <a href="mailto:beaupuy.marion@outlook.fr" className="flex items-center gap-4 text-stone-200 hover:text-emerald-300 transition-colors group">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#83ae42] group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-stone-400 block">Adresse Email</span>
                  <span className="font-bold text-sm text-white break-all">beaupuy.marion@outlook.fr</span>
                </div>
              </a>

              <div className="flex items-center gap-4 text-stone-200">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#83ae42]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-stone-400 block">Secteur d'intervention</span>
                  <span className="font-bold text-sm text-white">Bouches-du-Rhône (13) & limitrophes</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-amber-900/50 relative z-10 text-xs text-stone-400">
            <span>AMO Patio Réno — Siret & Qualifications OPQIBI RGE transmises sur demande.</span>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="lg:col-span-7 p-8 sm:p-12 space-y-6">
          {status === 'success' ? (
            <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-3xl text-center space-y-4 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif font-bold text-2xl text-emerald-950">
                Votre message a été transmis !
              </h3>
              <p className="text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                Merci d'avoir contacté AMO Patio Réno. Marion Beaupuy étudiera votre demande avec attention et vous recontactera sous 24 à 48 heures ouvrées.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="btn-primary text-xs !py-2.5 !px-5 mt-2"
              >
                Envoyer une autre demande
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h3 className="font-serif font-bold text-2xl text-[#361B00]">
                Formulaire de Demande d'Accompagnement
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                    Nom & Prénom *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="ex. Jean Dupont"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:border-[#83ae42] focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="ex. 06 12 34 56 78"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:border-[#83ae42] focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                  Adresse Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="ex. contact@exemple.fr"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:border-[#83ae42] focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                    Votre Profil *
                  </label>
                  <select
                    value={formData.audienceId}
                    onChange={(e) => setFormData({ ...formData, audienceId: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm bg-white focus:border-[#83ae42] outline-none"
                  >
                    {TARGET_AUDIENCES.map((aud) => (
                      <option key={aud.id} value={aud.id}>
                        {aud.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                    Commune du Projet (13) *
                  </label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm bg-white focus:border-[#83ae42] outline-none"
                  >
                    {CITIES_BOUCHES_DU_RHONE.map((c) => (
                      <option key={c.name} value={c.name}>
                        {c.name} ({c.postalCode})
                      </option>
                    ))}
                    <option value="autre_13">Autre commune des Bouches-du-Rhône</option>
                    <option value="limitrophe">Commune limitrophe (84, 83, 30)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                  Domaine d'intervention souhaité *
                </label>
                <select
                  value={formData.domainId}
                  onChange={(e) => setFormData({ ...formData, domainId: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm bg-white focus:border-[#83ae42] outline-none"
                >
                  {DOMAINS_INTERVENTION.map((d) => (
                    <option key={d.id} value={d.id}>
                      {d.number}. {d.title}
                    </option>
                  ))}
                  <option value="general">Information générale / Diagnostic</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                  Précisions sur votre projet ou questions *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Décrivez brièvement vos attentes, vos délais ou l'état d'avancement de vos travaux..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:border-[#83ae42] focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full btn-eco justify-center text-sm font-bold !py-3.5"
                >
                  {status === 'submitting' ? (
                    <span>Envoi en cours...</span>
                  ) : (
                    <>
                      <span>Envoyer ma demande à Marion Beaupuy</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-stone-400 text-center">
                Vos informations restent strictement confidentielles et ne sont transmises à aucun tiers sans votre accord.
              </p>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
