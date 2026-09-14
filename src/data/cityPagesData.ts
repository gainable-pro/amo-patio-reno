export interface CitySeoDetails {
  slug: string;
  cityName: string;
  postalCode: string;
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  heroTagline: string;
  specificsText: string;
  localHousingContext: string;
  recommendedServices: {
    title: string;
    description: string;
    icon: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
  geoCoordinates: {
    latitude: number;
    longitude: number;
  };
}

export const CITY_SEO_DATA: Record<string, CitySeoDetails> = {
  'miramas': {
    slug: 'miramas',
    cityName: 'Miramas',
    postalCode: '13140',
    title: 'AMO Rénovation Énergétique & Audit RGE à Miramas (13140) | Patio Réno',
    metaDescription: 'Cabinet d\'Assistance à Maîtrise d\'Ouvrage (AMO) et Audit Énergétique RGE à Miramas. Marion BEAUPUY vous accompagne dans vos travaux de rénovation globale et subventions MaPrimeRénov 2026.',
    h1: 'AMO Rénovation Énergétique & Audit RGE à Miramas (13140)',
    intro: 'Propriétaires, bailleurs et collectivités à Miramas : sécurisez vos travaux de rénovation énergétique, bénéficiez de l\'expertise d\'un cabinet AMO qualifié RGE OPQIBI 1911 et optimisez le financement MaPrimeRénov\'.',
    heroTagline: 'Votre expert AMO de proximité pour valoriser votre patrimoine à Miramas',
    specificsText: 'Miramas présente un parc immobilier mixte composé de maisons individuelles de lotissement, de villas provençales et de bâtiments anciens du centre-ville. La rénovation thermique y exige une isolation adaptée aux fortes chaleurs estivales et une bonne gestion de l\'aération hygro-réglable.',
    localHousingContext: 'Entre la Plaine de la Crau et le bassin de l\'Étang de Berre, Miramas subit des étés très chauds et des hivers ventés. L\'audit énergétique RGE permet d\'arbitrer entre isolation par l\'extérieur (ITE), remplacement de pompes à chaleur (PAC) et confort d\'été passif.',
    recommendedServices: [
      {
        title: 'Audit Énergétique RGE (3CL / OPQIBI 1911)',
        description: 'Bilan thermique obligatoire pour les logements classés F ou G et préalable indispensable pour débloquer le parcours MaPrimeRénov\' Accompagné à Miramas.',
        icon: 'FileCheck'
      },
      {
        title: 'Assistance Maîtrise d\'Ouvrage (AMO)',
        description: 'Cadrage budgétaire, analyse des devis d\'artisans du 13, vérification de la qualité des travaux et assistance à la réception des chantiers.',
        icon: 'ShieldCheck'
      },
      {
        title: 'Rénovation Bâti Ancien & Confort d\'Été',
        description: 'Protection contre les fortes chaleurs en climat méditerranéen grâce aux matériaux biosourcés (fibre de bois, ouate) et à l\'inertie thermique.',
        icon: 'Sun'
      }
    ],
    faq: [
      {
        question: 'Pourquoi faire appel à un AMO à Miramas pour son projet de rénovation ?',
        answer: 'Un Assistant à Maître d\'Ouvrage (AMO) est un conseil indépendant à vos côtés. Il analyse les devis des entreprises du BTP, vérifie le respect du budget et des délais, et s\'assure que les travaux répondent aux exigences d\'aides financières de l\'État.'
      },
      {
        question: 'Un audit énergétique RGE est-il obligatoire pour vendre ou rénover une maison à Miramas ?',
        answer: 'Oui, l\'audit énergétique réglementaire est obligatoire pour la vente de maisons individuelles ou bâtiments en monopropriété classés F ou G au DPE. Il est également obligatoire pour bénéficier du parcours MaPrimeRénov\' Rénovation d\'ampleur.'
      },
      {
        question: 'Quel est le délai d\'intervention d\'AMO Patio Réno sur la commune de Miramas (13140) ?',
        answer: 'Basé à Salon-de-Provence à proximité immédiate de Miramas, le cabinet intervient très rapidement sous 48h à 72h pour les visites de site et les diagnostics initiaux.'
      }
    ],
    geoCoordinates: {
      latitude: 43.5817,
      longitude: 5.0022
    }
  },
  'istres': {
    slug: 'istres',
    cityName: 'Istres',
    postalCode: '13800',
    title: 'AMO Rénovation Énergétique & Audit RGE à Istres (13800) | Patio Réno',
    metaDescription: 'Conseil en rénovation énergétique, Audit RGE et Assistance à Maîtrise d\'Ouvrage (AMO) à Istres (13800). Marion BEAUPUY accompagne particuliers, copropriétés et collectivités.',
    h1: 'AMO Rénovation Énergétique & Audit RGE à Istres (13800)',
    intro: 'À Istres, confiez la direction de vos travaux de rénovation énergétique à un cabinet AMO indépendant certifié RGE. Optimisation des performances thermiques, suivi de chantier et montage des dossiers d\'aides.',
    heroTagline: 'Ingénierie bâtiment et accompagnement sur-mesure à Istres',
    specificsText: 'La commune d\'Istres regroupe un patrimoine varié, allant des pavillons des années 70-90 aux copropriétés et bâtiments publics. La maîtrise des consommations de chauffage et de rafraîchissement y représente un enjeu économique majeur.',
    localHousingContext: 'Soumise aux vents du mistral et aux épisodes de chaleur méditerranéenne, la ville d\'Istres nécessite des préconisations thermiques précises : étanchéité à l\'air, isolation des combles, modernisation du CVC et ventilation mécanique contrôlée (VMC).',
    recommendedServices: [
      {
        title: 'Audit Énergétique Réglementaire & Incitatif',
        description: 'Analyse thermique approfondie de votre logement ou copropriété à Istres avec scénarios de travaux chiffrés et chiffrage des aides.',
        icon: 'Zap'
      },
      {
        title: 'Pilotage de Chantier & Démarches AMO',
        description: 'Coordination des artisans locaux du BTP, vérification des conformités techniques et assistance jusqu\'à la livraison finale sans réserves.',
        icon: 'HardHat'
      },
      {
        title: 'Accompagnement Copropriétés & Bailleurs',
        description: 'Diagnostic thermique à l\'échelle de résidences entières, présentation en Assemblée Générale et programmation de travaux pluriannuels.',
        icon: 'Building2'
      }
    ],
    faq: [
      {
        question: 'Comment bénéficier des subventions MaPrimeRénov\' 2026 à Istres ?',
        answer: 'Pour obtenir les aides MaPrimeRénov\' Parcours Accompagné à Istres, il est obligatoire de passer par un Moniteur/AMO agréé qui effectue l\'audit préalable et vous guide de la demande jusqu\'au versement des fonds.'
      },
      {
        question: 'Intervenez-vous sur les copropriétés et bâtiments professionnels à Istres ?',
        answer: 'Absolument. AMO Patio Réno accompagne aussi bien les propriétaires individuels que les syndics de copropriété, les bailleurs sociaux et les collectivités locales du bassin d\'Istres.'
      }
    ],
    geoCoordinates: {
      latitude: 43.5133,
      longitude: 4.9883
    }
  },
  'salon-de-provence': {
    slug: 'salon-de-provence',
    cityName: 'Salon-de-Provence',
    postalCode: '13300',
    title: 'AMO Rénovation Énergétique & Audit RGE Salon-de-Provence (13300) | Patio Réno',
    metaDescription: 'Siège d\'AMO Patio Réno à Salon-de-Provence. Audit énergétique RGE, restauration du bâti ancien provençal et accompagnement AMO complet par Marion BEAUPUY.',
    h1: 'AMO & Audit Énergétique RGE à Salon-de-Provence (13300)',
    intro: 'Basé à Salon-de-Provence, AMO Patio Réno est votre interlocuteur de référence pour vos projets de rénovation thermique, la préservation des mas et bastides provençales et le suivi de chantier.',
    heroTagline: 'Le cabinet AMO référent au cœur de Salon-de-Provence et du Pays Salonais',
    specificsText: 'Salon-de-Provence se caractérise par son centre historique aux façades en pierre et chaux, ainsi que par ses quartiers résidentiels extérieurs. Le respect de la perspirance des murs anciens est primordial pour éviter les dégradations dues à l\'humidité.',
    localHousingContext: 'À Salon-de-Provence, nous préconisons l\'utilisation de matériaux biosourcés (chaux, chanvre, fibre de bois) combinés à des équipements modernes à haute efficacité énergétique.',
    recommendedServices: [
      {
        title: 'Audit RGE & Bâti Ancien Provençal',
        description: 'Expertise spécialisée dans l\'isolation perspirante et la conservation du patrimoine salonais sans risque de condensation.',
        icon: 'Landmark'
      },
      {
        title: 'Assistance à Maîtrise d\'Ouvrage Globale',
        description: 'Accompagnement complet de la conception des plans jusqu\'à la vérification des factures et la réception des travaux.',
        icon: 'ShieldCheck'
      }
    ],
    faq: [
      {
        question: 'Où est situé le cabinet AMO Patio Réno à Salon-de-Provence ?',
        answer: 'Le cabinet est implanté 320 Chemin de Mireille à Salon-de-Provence (13300), ce qui permet des déplacements immédiats sur tout le pays Salonais et le département des Bouches-du-Rhône.'
      }
    ],
    geoCoordinates: {
      latitude: 43.6403,
      longitude: 5.0975
    }
  },
  'aix-en-provence': {
    slug: 'aix-en-provence',
    cityName: 'Aix-en-Provence',
    postalCode: '13100 / 13090',
    title: 'AMO Rénovation Énergétique & Audit RGE Aix-en-Provence (13100) | Patio Réno',
    metaDescription: 'Audit énergétique RGE et AMO à Aix-en-Provence. Rénovation de centre ancien classé, copropriétés et bastides aixoises par Marion BEAUPUY.',
    h1: 'AMO Rénovation Énergétique & Audit RGE à Aix-en-Provence (13100)',
    intro: 'Accompagnement indépendant à Aix-en-Provence pour la rénovation thermique haut de gamme, les audits réglementaires et la préservation de l\'architecture aixoise.',
    heroTagline: 'Conseil neutre et expertise technique en Pays d\'Aix',
    specificsText: 'À Aix-en-Provence, la rénovation immobilière doit concilier exigences de l\'Architecte des Bâtiments de France (ABF) et performance énergétique élevée.',
    localHousingContext: 'Des appartements du cours Mirabeau aux villas du Tholonet, nous apportons un cadrage sur-mesure pour maximiser la valeur verte de votre bien.',
    recommendedServices: [
      {
        title: 'Audit Thermique Copropriété & Villa',
        description: 'Bilan énergétique complet et plan de travaux pluriannuel pour les biens aixois.',
        icon: 'Building2'
      }
    ],
    faq: [
      {
        question: 'Intervenez-vous en zone ABF à Aix-en-Provence ?',
        answer: 'Oui, nous intégrons les contraintes patrimoniales et d\'urbanisme des Bâtiments de France dès la phase d\'audit et de programmation AMO.'
      }
    ],
    geoCoordinates: {
      latitude: 43.5297,
      longitude: 5.4474
    }
  },
  'marseille': {
    slug: 'marseille',
    cityName: 'Marseille',
    postalCode: '13001 - 13016',
    title: 'AMO Rénovation Énergétique & Audit RGE Marseille (13000) | Patio Réno',
    metaDescription: 'AMO et Audit Énergétique RGE à Marseille. Conseil indépendant pour copropriétés, bailleurs sociaux et maisons individuelles dans les 16 arrondissements marseillais.',
    h1: 'AMO Rénovation Énergétique & Audit RGE à Marseille (13000)',
    intro: 'Cabinet AMO spécialisé à Marseille : rénovation globale d\'immeubles marseillais, confort d\'été passif et audits thermiques certifiés OPQIBI RGE.',
    heroTagline: 'Ingénierie du bâtiment et maîtrise d\'ouvrage à Marseille',
    specificsText: 'En milieu urbain marseillais très dense, l\'isolation thermique et la lutte contre les îlots de chaleur urbains nécessitent des réponses ciblées (toitures végétalisées, enduits réflectifs, menuiseries hautes performances).',
    localHousingContext: 'Nous accompagnons les copropriétés et propriétaires marseillais dans l\'obtention des subventions Métropole et MaPrimeRénov\'.',
    recommendedServices: [
      {
        title: 'AMO Copropriétés & Logement Collectif',
        description: 'Accompagnement syndic et conseil syndical pour les grands projets de rénovation globale à Marseille.',
        icon: 'Building'
      }
    ],
    faq: [
      {
        question: 'Proposez-vous des audits énergétiques pour les immeubles marseillais ?',
        answer: 'Oui, nous réalisons des audits thermiques réglementaires et incitatifs pour l\'ensemble du parc immobilier marseillais.'
      }
    ],
    geoCoordinates: {
      latitude: 43.2965,
      longitude: 5.3698
    }
  },
  'arles': {
    slug: 'arles',
    cityName: 'Arles',
    postalCode: '13200',
    title: 'AMO Rénovation Énergétique & Audit RGE à Arles (13200) | Patio Réno',
    metaDescription: 'Audit énergétique RGE et AMO à Arles et Pays d\'Arles. Expertise en bâti ancien camarguais, isolation chaux-chanvre et confort d\'été.',
    h1: 'AMO & Audit Énergétique RGE à Arles (13200)',
    intro: 'Spécialiste de la rénovation thermique du bâti ancien en Pays d\'Arles : concilier patrimoine camarguais, sobriété énergétique et fraîcheur d\'été.',
    heroTagline: 'Préserver l\'authenticité arlésienne tout en réussissant sa rénovation énergétique',
    specificsText: 'Les mas et maisons de ville d\'Arles souffrent souvent d\'un manque d\'isolation en toiture et de remontées capillaires. Une approche perspirante est indispensable.',
    localHousingContext: 'Nous privilégions les matériaux naturels et les dispositifs d\'ombrage passif adaptés au climat arlésien.',
    recommendedServices: [
      {
        title: 'Rénovation Bâti Ancien & Camarguais',
        description: 'Conseil en matériaux respirants et diagnostic hygrothermique préventif.',
        icon: 'Landmark'
      }
    ],
    faq: [
      {
        question: 'Comment isoler une maison ancienne à Arles sans l\'abîmer ?',
        answer: 'Il faut impérativement utiliser des isolants perméables à la vapeur d\'eau (fibre de bois, ouate) et des enduits à la chaux pour préserver la structure en pierre.'
      }
    ],
    geoCoordinates: {
      latitude: 43.6767,
      longitude: 4.6278
    }
  },
  'martigues': {
    slug: 'martigues',
    cityName: 'Martigues',
    postalCode: '13500',
    title: 'AMO Rénovation Énergétique & Audit RGE à Martigues (13500) | Patio Réno',
    metaDescription: 'Cabinet AMO et Audit Énergétique RGE à Martigues (13500). Suivi de travaux de rénovation thermique et aides MaPrimeRénov\' par Marion BEAUPUY.',
    h1: 'AMO & Audit Énergétique RGE à Martigues (13500)',
    intro: 'À Martigues et autour du Venise Provençale, AMO Patio Réno pilote vos chantiers de rénovation énergétique pour particuliers et collectivités.',
    heroTagline: 'Expertise thermique et accompagnement de chantier à Martigues',
    specificsText: 'Rénovation des maisons de pêcheurs, des villas de la Côte Bleue et des immeubles résidentiels martégaux.',
    localHousingContext: 'Optimisation de l\'enveloppe thermique et remplacement des systèmes de chauffage énergivores.',
    recommendedServices: [
      {
        title: 'Audit RGE & Stratégie Énergétique',
        description: 'Analyse 3CL et définition du plan de travaux idéal.',
        icon: 'Zap'
      }
    ],
    faq: [
      {
        question: 'Quel est l\'intérêt d\'une AMO à Martigues ?',
        answer: 'L\'AMO garantit que vos devis sont au juste prix et que les artisans respectent la réglementation RGE pour percevoir les aides.'
      }
    ],
    geoCoordinates: {
      latitude: 43.4053,
      longitude: 5.0547
    }
  },
  'aubagne': {
    slug: 'aubagne',
    cityName: 'Aubagne',
    postalCode: '13400',
    title: 'AMO Rénovation Énergétique & Audit RGE à Aubagne (13400) | Patio Réno',
    metaDescription: 'AMO et Audit Énergétique RGE à Aubagne et du Pays de l\'Étoile. Conseil neutre et indépendant en rénovation par Marion BEAUPUY.',
    h1: 'AMO & Audit Énergétique RGE à Aubagne (13400)',
    intro: 'Accompagnement des propriétaires et entreprises du BTP à Aubagne pour des réhabilitations thermiques durables et performantes.',
    heroTagline: 'Votre partenaire AMO en Pays de l\'Étoile',
    specificsText: 'Du centre historique d\'Aubagne aux quartiers résidentiels des Passons, nous sécurisons chaque étape de vos travaux.',
    localHousingContext: 'Réduction des factures de chauffage et amélioration du DPE de votre logement aubagnais.',
    recommendedServices: [
      {
        title: 'Assistance Maîtrise d\'Ouvrage Particuliers & Pro',
        description: 'Direction technique, suivi du planning et contrôle qualité.',
        icon: 'ShieldCheck'
      }
    ],
    faq: [
      {
        question: 'Intervenez-vous aussi auprès des entreprises du BTP à Aubagne ?',
        answer: 'Oui, nous proposons un service d\'appui administratif et relationnel auprès des clients maîtres d\'ouvrage pour le compte des entreprises BTP.'
      }
    ],
    geoCoordinates: {
      latitude: 43.2928,
      longitude: 5.5708
    }
  },
  'vitrolles': {
    slug: 'vitrolles',
    cityName: 'Vitrolles',
    postalCode: '13127',
    title: 'AMO Rénovation Énergétique & Audit RGE à Vitrolles (13127) | Patio Réno',
    metaDescription: 'Audit RGE et Assistance à Maîtrise d\'Ouvrage (AMO) à Vitrolles. Accompagnement rénovation énergétique par Marion BEAUPUY.',
    h1: 'AMO & Audit Énergétique RGE à Vitrolles (13127)',
    intro: 'Ingénierie du bâtiment et conseil en performance énergétique à Vitrolles pour pavillons, copropriétés et locaux professionnels.',
    heroTagline: 'Accompagnement AMO rigoureux à Vitrolles',
    specificsText: 'Rénovation thermique globale des habitations vitrollaises et mise aux normes des équipements thermiques.',
    localHousingContext: 'Solutions sur-mesure pour maximiser les économies d\'énergie et sécuriser les financements publics.',
    recommendedServices: [
      {
        title: 'Audit RGE & Audit Tertiaire / Collectif',
        description: 'Diagnostic technique de la performance globale du bâtiment.',
        icon: 'FileCheck'
      }
    ],
    faq: [
      {
        question: 'Combien coûte une mission AMO à Vitrolles ?',
        answer: 'La mission AMO peut être prise en charge jusqu\'à 100% selon les barèmes MaPrimeRénov\' Parcours Accompagné.'
      }
    ],
    geoCoordinates: {
      latitude: 43.4619,
      longitude: 5.2494
    }
  }
};
