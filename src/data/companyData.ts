export interface TargetAudience {
  id: string;
  label: string;
  category: 'particulier' | 'professionnel' | 'collectivite' | 'btp_moe' | 'formation';
  description: string;
  iconName: string;
  recommendedDomains: string[]; // domain ids
  typicalNeeds: string[];
}

export interface DomainIntervention {
  id: string;
  number: number;
  title: string;
  shortTitle: string;
  tagline: string;
  headline: string;
  description: string;
  bulletPoints: string[];
  keyHighlights: { title: string; desc: string; icon: string }[];
  targetAudienceIds: string[];
  modes?: string[];
}

export interface AcronymDefinition {
  acronym: string;
  fullTerm: string;
  category: string;
  description: string;
}

export interface CityTerritory {
  name: string;
  postalCode: string;
  description: string;
  highlights: string[];
}

export const ACRONYM_DICTIONARY: Record<string, AcronymDefinition> = {
  AMO: {
    acronym: 'AMO',
    fullTerm: 'Assistance à Maîtrise d\'Ouvrage',
    category: 'Ingénierie & Conseil',
    description: 'Mission de conseil et d\'accompagnement technique, administratif, financier et calendaire auprès du maître d\'ouvrage (le commanditaire du projet) pour l\'aider à prendre les bonnes décisions et piloter sereinement l\'opération.',
  },
  MOA: {
    acronym: 'MOA',
    fullTerm: 'Maître d\'Ouvrage',
    category: 'Acteurs du projet',
    description: 'Personne physique ou morale (particulier, entreprise, collectivité, bailleur) pour le compte de laquelle les travaux sont exécutés et qui détient la propriété ou l\'usage de l\'ouvrage.',
  },
  MOE: {
    acronym: 'MOE',
    fullTerm: 'Maître d\'Œuvre',
    category: 'Acteurs du projet',
    description: 'Professionnel (architecte, bureau d\'études) chargé de la conception technique, des plans et de la direction générale des travaux.',
  },
  RGE: {
    acronym: 'RGE',
    fullTerm: 'Reconnu Garant de l\'Environnement',
    category: 'Certification & Label',
    description: 'Qualification délivrée aux professionnels du bâtiment et bureaux d\'études qualifiés dans les travaux et conseils de rénovation énergétique, conditionnant l\'obtention d\'aides financières de l\'État (MaPrimeRénov\', CEE...).',
  },
  OPQIBI: {
    acronym: 'OPQIBI',
    fullTerm: 'Organisme de Qualification de l\'Ingénierie du Bâtiment et de l\'Industrie',
    category: 'Qualification professionnelle',
    description: 'Organisme de qualification de l\'ingénierie délivrant des certificats attestant des compétences et du sérieux d\'un cabinet ou bureau d\'études (ex. audit énergétique).',
  },
  BTP: {
    acronym: 'BTP',
    fullTerm: 'Bâtiment et Travaux Publics',
    category: 'Secteur d\'activité',
    description: 'Ensemble des entreprises et professionnels concourant à la construction, rénovation et maintenance des bâtiments et infrastructures.',
  },
  CVC: {
    acronym: 'CVC',
    fullTerm: 'Chauffage, Ventilation et Climatisation',
    category: 'Technique & Équipements',
    description: 'Domaine d\'ingénierie englobant l\'ensemble des équipements thermiques et aérauliques d\'un bâtiment assurant le confort et la qualité de l\'air.',
  },
  MOP: {
    acronym: 'MOP',
    fullTerm: 'Maîtrise d\'Ouvrage Publique',
    category: 'Cadre réglementaire',
    description: 'Loi fixant les rapports entre la maîtrise d\'ouvrage publique et la maîtrise d\'œuvre privée dans le secteur public (désormais intégrée au Code de la commande publique).',
  },
  DCE: {
    acronym: 'DCE',
    fullTerm: 'Dossier de Consultation des Entreprises',
    category: 'Phase de projet',
    description: 'Ensemble des documents techniques et administratifs (CCTP, DPGF, plans...) transmis par la maîtrise d\'ouvrage aux entreprises du BTP pour établir leurs devis et offres.',
  },
  WBS: {
    acronym: 'WBS',
    fullTerm: 'Work Breakdown Structure (Structure de Découpage du Projet)',
    category: 'Management de projet',
    description: 'Outil de gestion décomposant un projet complexe en éléments et tâches opérationnelles élémentaires pour sécuriser la planification et le budget.',
  },
  PERT: {
    acronym: 'PERT',
    fullTerm: 'Program Evaluation and Review Technique',
    category: 'Management de projet',
    description: 'Méthode d\'ordonnancement graphique permettant de planifier les tâches interdépendantes d\'un chantier complexe et de déterminer le chemin critique.',
  },
  CPM: {
    acronym: 'CPM',
    fullTerm: 'Critical Path Method (Méthode du Chemin Critique)',
    category: 'Management de projet',
    description: 'Technique d\'analyse temporelle identifiant la suite de tâches qui détermine la durée totale minimale indispensable d\'un chantier.',
  },
  '3CL': {
    acronym: '3CL',
    fullTerm: 'Calcul des Consommations Conventionnelles des Logements',
    category: 'Méthode thermique',
    description: 'Méthode réglementaire officielle servant de base au calcul du Diagnostic de Performance Énergétique (DPE) et des audits énergétiques réglementaires.',
  },
  CCI: {
    acronym: 'CCI',
    fullTerm: 'Chambre de Commerce et d\'Industrie',
    category: 'Institution',
    description: 'Établissement public représentant les intérêts des entreprises commerciales, industrielles et de services (notamment via le réseau EcoCampus Alpes-Provence).',
  },
  RNCP: {
    acronym: 'RNCP',
    fullTerm: 'Répertoire National des Certifications Professionnelles',
    category: 'Formation & Diplômes',
    description: 'Catalogue national enregistrant les diplômes et titres professionnels reconnus par l\'État et les branches professionnelles.',
  },
};

export const TARGET_AUDIENCES: TargetAudience[] = [
  {
    id: 'particuliers',
    label: 'Particuliers',
    category: 'particulier',
    description: 'Propriétaires occupants ou bailleurs souhaitant rénover ou construire en toute sécurité.',
    iconName: 'Home',
    recommendedDomains: ['energie', 'bati_ancien', 'amo'],
    typicalNeeds: [
      'Prioriser les travaux de rénovation énergétique (Audit RGE)',
      'Préserver le charme et la valeur du bâti ancien (perspirance, chaux, bois)',
      'Sécuriser les devis, le budget et le planning de chantier (AMO)',
      'Obtenir les aides financières et subventions de l\'État',
    ],
  },
  {
    id: 'collectivites',
    label: 'Collectivités & Mairies',
    category: 'collectivite',
    description: 'Communes du 13 et intercommunalités engagées dans la transition et l\'efficience de leurs bâtiments publics.',
    iconName: 'Building2',
    recommendedDomains: ['energie', 'bati_ancien', 'amo'],
    typicalNeeds: [
      'Audits énergétiques RGE sur le patrimoine communal (écoles, gymnases, mairies)',
      'Stratégie de sobriété et plan pluriannuel d\'investissements',
      'Assistance à Maîtrise d\'Ouvrage MOP pour travaux neufs ou lourdes réhabilitations',
      'Confort d\'été et résilience climatique des équipements publics',
    ],
  },
  {
    id: 'bailleurs',
    label: 'Bailleurs & Gestionnaires de Patrimoine',
    category: 'professionnel',
    description: 'Organismes de logement social, foncières et administrateurs de biens.',
    iconName: 'Building',
    recommendedDomains: ['energie', 'bati_ancien', 'amo'],
    typicalNeeds: [
      'Pilotage de programmes de réhabilitation globale du parc immobilier (20 à 120+ lots)',
      'Audits thermiques à l\'échelle de résidences entières',
      'Programmation budgétaire et maîtrise des charges locatives',
      'Suivi rigoureux des étapes de consultation et de réception',
    ],
  },
  {
    id: 'coproprietes',
    label: 'Copropriétés & Syndics',
    category: 'particulier',
    description: 'Conseils syndicaux et syndics de copropriété planifiant des rénovations collectives.',
    iconName: 'Users',
    recommendedDomains: ['energie', 'bati_ancien', 'amo'],
    typicalNeeds: [
      'Audit énergétique réglementaire en habitat collectif',
      'Assistance à la décision et présentation claire lors des Assemblées Générales',
      'Cadrage technique et financier de la rénovation de copropriété',
      'Coordination AMO indépendante pour rassurer l\'ensemble des copropriétaires',
    ],
  },
  {
    id: 'promoteurs',
    label: 'Promoteurs & Constructeurs',
    category: 'professionnel',
    description: 'Acteurs de la promotion immobilière privée ou mixte dans la région PACA / Bouches-du-Rhône.',
    iconName: 'HardHat',
    recommendedDomains: ['energie', 'bati_ancien', 'amo'],
    typicalNeeds: [
      'Cadrage environnemental dès la phase de programmation du programme',
      'Intégration du confort d\'été passif et des matériaux biosourcés',
      'Assistance au pilotage technique et administratif des opérations immobilières',
      'Sécurisation des jalons de livraison et de réception des lots',
    ],
  },
  {
    id: 'entreprises_btp',
    label: 'Entreprises du BTP',
    category: 'btp_moe',
    description: 'Entreprises générales, artisans qualifiés et groupements d\'artisans.',
    iconName: 'Wrench',
    recommendedDomains: ['energie', 'entreprises'],
    typicalNeeds: [
      'Fluidification de la relation et des échanges avec le client Maître d\'Ouvrage',
      'Prise en charge du suivi administratif, des concessionnaires et des décisions client',
      'Externalisation du rôle d\'accompagnement MOA pour se concentrer sur les travaux',
      'Appui à la préparation des opérations de réception et clôture',
    ],
  },
  {
    id: 'architectes_moe',
    label: 'Architectes & Maîtres d\'Œuvre',
    category: 'btp_moe',
    description: 'Cabinets d\'architecture et concepteurs en quête d\'un appui ingénierie / AMO spécialisé.',
    iconName: 'Compass',
    recommendedDomains: ['energie', 'bati_ancien', 'amo'],
    typicalNeeds: [
      'Appui technique sur la thermique du bâtiment ancien et les solutions sobres/low-tech',
      'Cadrage du programme et formalisation rigoureuse des besoins de la MOA',
      'Assistance au pilotage administratif et financier des étapes MOP/DCE',
      'Analyse de la perspirance et des désordres liés à l\'humidité',
    ],
  },
  {
    id: 'bureaux_etudes',
    label: 'Bureaux d\'Études & Diagnostiqueurs',
    category: 'btp_moe',
    description: 'Partenaires d\'ingénierie et professionnels des diagnostics immobiliers.',
    iconName: 'FileCheck',
    recommendedDomains: ['energie', 'bati_ancien'],
    typicalNeeds: [
      'Sous-traitance ou co-traitance sur les audits énergétiques RGE complexes',
      'Expertise complémentaire sur le comportement thermique du bâti ancien',
      'Validation de la cohérence des scénarios d\'amélioration et d\'adaptation climatique',
    ],
  },
  {
    id: 'organismes_formation',
    label: 'Organismes de Formation & Écoles',
    category: 'formation',
    description: 'Centres de formation continue, établissements d\'enseignement supérieur et CFA.',
    iconName: 'GraduationCap',
    recommendedDomains: ['formation'],
    typicalNeeds: [
      'Intervenante experte de terrain pour modules de rénovation énergétique et MOP (jusqu\'à Bac+5)',
      'Ingénierie pédagogique et mises en situation concrètes d\'opérations immobilières',
      'Référente de formation qualifiée (expérience CCI Alpes-Provence EcoCampus)',
    ],
  },
];

export const DOMAINS_INTERVENTION: DomainIntervention[] = [
  {
    id: 'energie',
    number: 1,
    title: 'Accompagnement et Conseil Énergétique',
    shortTitle: 'Conseil Énergétique',
    tagline: 'Comprendre l\'existant pour construire une rénovation cohérente, performante et adaptée aux usages.',
    headline: 'L\'énergie ne se résume pas à une étiquette ou à une consommation.',
    description: 'J\'accompagne particuliers et professionnels dans la compréhension de leurs bâtiments, la hiérarchisation des priorités et la construction de stratégies adaptées à leur patrimoine, leurs usages et leurs objectifs.',
    bulletPoints: [
      'Audit énergétique RGE Maison Individuelle',
      'Audit énergétique en habitat collectif et tertiaire',
      'Conception et pilotage de projets de rénovation globale',
      'Aide à la décision et analyse économique des différents scénarios',
      'Hiérarchisation et programmation des travaux prioritaires',
      'Analyse du confort d\'été et de la vulnérabilité aux fortes chaleurs (climat méditerranéen)',
      'Définition et hiérarchisation de solutions d\'adaptation passives et sobres',
      'Sobriété et efficacité énergétique individuelle et collective',
      'Stratégie énergétique et plan d\'actions à l\'échelle d\'un patrimoine / parc immobilier',
      'Prise en compte des usages actuels et futurs des occupants',
      'Solutions low-tech et valorisation des matériaux biosourcés',
    ],
    keyHighlights: [
      {
        title: 'Qualification OPQIBI RGE',
        desc: 'Garantie de qualité technique permettant de débloquer les dispositifs d\'aides financières.',
        icon: 'Award',
      },
      {
        title: 'Confort d\'Été Méditerranéen',
        desc: 'Focus spécifique sur la protection contre les canicules sans surconsommation de climatisation.',
        icon: 'Sun',
      },
      {
        title: 'Analyse Économique Globale',
        desc: 'Calcul précis du ROI, du temps de retour sur investissement et des coûts globaux d\'exploitation.',
        icon: 'TrendingUp',
      },
    ],
    targetAudienceIds: ['particuliers', 'collectivites', 'bailleurs', 'coproprietes', 'promoteurs', 'architectes_moe', 'bureaux_etudes'],
  },
  {
    id: 'bati_ancien',
    number: 2,
    title: 'Rénovation du Bâti Ancien',
    shortTitle: 'Bâti Ancien',
    tagline: 'Rénover l\'ancien, c\'est d\'abord le comprendre pour mieux le préserver.',
    headline: 'Le bâti ancien possède ses propres équilibres et qualités qu\'une rénovation inadaptée peut fragiliser.',
    description: 'Je privilégie une approche respectueuse de l\'existant, conciliant amélioration énergétique, confort, pérennité du bâtiment et valorisation de ses caractéristiques patrimoniales uniques.',
    bulletPoints: [
      'Compréhension et respect des caractéristiques physiques du bâti existant',
      'Programmation de travaux compatibles avec ses spécificités : perspirance, matériaux biosourcés, techniques traditionnelles',
      'Prise en compte des transferts d\'humidité, de l\'inertie thermique et du confort d\'été dans la sélection des solutions',
      'Amélioration énergétique sans altérer le caractère architectural ou créer de pathologies (condensation, moisissures)',
      'Valorisation durable du patrimoine ancien provençal et méditerranéen',
    ],
    keyHighlights: [
      {
        title: 'Respect de la Perspirance',
        desc: 'Prescription exclusive de matériaux respirants qui laissent migrer la vapeur d\'eau.',
        icon: 'Wind',
      },
      {
        title: 'Matériaux Biosourcés',
        desc: 'Chaux, chanvre, fibre de bois, ouate de cellulose : des isolants sains et durables.',
        icon: 'Leaf',
      },
      {
        title: 'Gestion des Pathologies',
        desc: 'Diagnostic préventif de l\'humidité remontante et de la salubrité du bâti.',
        icon: 'ShieldCheck',
      },
    ],
    targetAudienceIds: ['particuliers', 'collectivites', 'bailleurs', 'coproprietes', 'architectes_moe', 'bureaux_etudes'],
  },
  {
    id: 'amo',
    number: 3,
    title: 'Assistance à Maîtrise d\'Ouvrage (AMO) – Neuf & Rénovation',
    shortTitle: 'Assistance Maîtrise d\'Ouvrage',
    tagline: 'De l\'idée à la livraison : structurer, piloter et sécuriser votre opération.',
    headline: 'Gardez le contrôle complet de votre projet sans le stress du chantier.',
    description: 'J\'accompagne le Maître d\'Ouvrage (MOA) dans la compréhension et le pilotage de son projet, afin de l\'aider à prendre les bonnes décisions au bon moment et à conserver la maîtrise de ses objectifs, de son budget et de son calendrier.',
    bulletPoints: [
      'Programmation et cadrage clair des objectifs opérationnels',
      'Pilotage administratif et réglementaire : urbanisme, assurances, concessionnaires...',
      'Planification rigoureuse et suivi des grandes étapes de l\'opération',
      'Aide à la décision et analyse économique comparative des différents scénarios',
      'Cadrage budgétaire initial et maîtrise des coûts en phase projet',
      'Assistance à la consultation et à la négociation avec les Maîtres d\'Œuvre (MOE) et entreprises du BTP',
      'Suivi de l\'avancement des travaux et de l\'exécution budgétaire',
      'Coordination transversale des différents intervenants du chantier',
      'Assistance aux opérations de réception et à la clôture administrative et budgétaire',
      'Accompagnement à la prise en main des équipements et à l\'entretien du bien',
    ],
    keyHighlights: [
      {
        title: 'Indépendance Totale',
        desc: 'Conseil neutre et objectif 100% aligné sur les intérêts du maître d\'ouvrage.',
        icon: 'CheckCircle2',
      },
      {
        title: 'Sécurisation Financière',
        desc: 'Vérification méticuleuse des devis, des situations et des pièces d\'exécution.',
        icon: 'Coins',
      },
      {
        title: 'Respect des Délais',
        desc: 'Suivi par méthodes reconnues (Gantt, WBS) pour éviter les dérives calendaires.',
        icon: 'Clock',
      },
    ],
    targetAudienceIds: ['particuliers', 'collectivites', 'bailleurs', 'coproprietes', 'promoteurs', 'architectes_moe'],
  },
  {
    id: 'entreprises',
    number: 4,
    title: 'Accompagnement des Entreprises & Relation Maîtrise d\'Ouvrage',
    shortTitle: 'Appui Entreprises BTP',
    tagline: 'Vous construisez. Je vous aide à fluidifier la relation avec votre client et à structurer son projet.',
    headline: 'Libérez vos équipes techniques des chronophages sollicitations administratives et décisionnelles.',
    description: 'Certaines opérations nécessitent, au-delà des travaux, un accompagnement renforcé du maître d\'ouvrage : clarification des besoins, cadrage des décisions, coordination des intervenants, suivi des jalons, anticipation des démarches... Autant de temps que l\'entreprise consacre souvent au projet sans qu\'il relève directement de son cœur de métier.',
    bulletPoints: [
      'Clarification et formalisation des besoins et arbitrages du client MOA',
      'Accompagnement des échanges entre l\'entreprise BTP et la maîtrise d\'ouvrage',
      'Suivi dynamique des décisions et jalons indispensables à l\'avancement des travaux',
      'Formalisation des arbitrages du maître d\'ouvrage et mesure de leurs incidences (délais/coûts)',
      'Coordination de l\'information entre tous les corps d\'état et intervenants',
      'Anticipation et suivi des démarches administratives et raccordements concessionnaires',
      'Accompagnement du client dans la compréhension globale du déroulement de son chantier',
      'Appui à la préparation des opérations de réception et de clôture sans réserve',
    ],
    modes: [
      'Prestation réalisée pour le compte de l\'entreprise BTP (sous-traitance d\'accompagnement dans un périmètre clairement défini)',
      'Mission d\'AMO directement contractualisée avec le maître d\'ouvrage, lorsque l\'entreprise identifie chez son client un besoin d\'accompagnement indépendant.',
    ],
    keyHighlights: [
      {
        title: 'Gain de Temps Chantier',
        desc: 'Vos équipes se concentrent sur la pose et la qualité technique d\'exécution.',
        icon: 'Timer',
      },
      {
        title: 'Fluidité Relationnelle',
        desc: 'Moins de frictions, une communication cadrée et un client rassuré à chaque étape.',
        icon: 'MessageSquareCheck',
      },
      {
        title: '2 Formules Flexibles',
        desc: 'Intervention directe en votre nom ou mission AMO autonome avec le client final.',
        icon: 'Sliders',
      },
    ],
    targetAudienceIds: ['entreprises_btp'],
  },
  {
    id: 'formation',
    number: 5,
    title: 'Formation – Rénovation Énergétique & Pilotage d\'Opérations (jusqu\'au Bac+5)',
    shortTitle: 'Formations Professionnelles',
    tagline: 'Transmettre l\'expérience du terrain pour former les professionnels de demain.',
    headline: 'Une pédagogie fondée sur l\'expérience opérationnelle et la mise en situation réelle.',
    description: 'J\'interviens en formation initiale, continue ou en alternance auprès des écoles et centres spécialisés. L\'objectif : permettre aux apprenants de comprendre les méthodes et outils, mais surtout de savoir les appliquer face aux réalités d\'un projet.',
    bulletPoints: [
      'Interventions en formation initiale, continue, alternance et titres professionnels RNCP (du BTS au Master / Bac+5)',
      'Rénovation énergétique : thermique du bâtiment, méthode 3CL, audit 1911, logiciels de simulation, CVC, bâti ancien, aides financières...',
      'Pilotage d\'opérations immobilières : loi MOP, acteurs & responsabilités, urbanisme, planification (Gantt, PERT, CPM, WBS), budgets, consultations DCE, marchés de travaux, suivi administratif & réception',
      'Villes & territoires durables / adaptation climatique / confort d\'été passif',
      'Référente de formation engagée auprès de la CCI Alpes-Provence EcoCampus',
    ],
    keyHighlights: [
      {
        title: 'Ancrage Terrain',
        desc: 'Cas pratiques réels issus de 20 ans d\'expérience concrète en direction de projets.',
        icon: 'BookOpen',
      },
      {
        title: 'Conformité RNCP',
        desc: 'Programmes adaptés aux référentiels nationaux de compétences professionnels.',
        icon: 'Award',
      },
      {
        title: 'Référente CCI EcoCampus',
        desc: 'Garantie de qualité pédagogique et d\'engagement dans la formation environnementale.',
        icon: 'GraduationCap',
      },
    ],
    targetAudienceIds: ['organismes_formation'],
  },
];

export const CITIES_BOUCHES_DU_RHONE: CityTerritory[] = [
  {
    name: 'Aix-en-Provence',
    postalCode: '13100 / 13090',
    description: 'Patrimoine historique remarquable, rénovation du centre ancien classé et audits thermiques sur résidences et équipements.',
    highlights: ['Bâti Ancien & Perspirance', 'Audits Copropriétés', 'AMO Rénovation'],
  },
  {
    name: 'Marseille',
    postalCode: '13001 - 13016',
    description: 'Accompagnement des copropriétés, bailleurs sociaux et projets d\'adaptation au confort d\'été en milieu urbain dense.',
    highlights: ['Logements Sociaux', 'Audits Copropriétés', 'Confort d\'Été'],
  },
  {
    name: 'Salon-de-Provence',
    postalCode: '13300',
    description: 'Commune charnière entre Durance et Crau. Projets de réhabilitation énergétique pour particuliers et collectivités.',
    highlights: ['Audits RGE Communaux', 'Bâti Ancien Provençal', 'AMO Projets'],
  },
  {
    name: 'Arles & Pays d\'Arles',
    postalCode: '13200',
    description: 'Haute sensibilité patrimoniale et forte exposition aux fortes chaleurs. Solutions sobres et biosourcées privilégiées.',
    highlights: ['Bâti Ancien Historique', 'Matériaux Biosourcés', 'Adaptation Canicule'],
  },
  {
    name: 'Aubagne & Pays de l\'Étoile',
    postalCode: '13400',
    description: 'Accompagnement des entreprises du BTP et des particuliers pour des rénovations énergétiques durables.',
    highlights: ['Support BTP', 'Conseil Énergie', 'AMO Particuliers'],
  },
  {
    name: 'Martigues & Étang de Berre',
    postalCode: '13500',
    description: 'Audits énergétiques pour parcs de logements collectifs et tertiaires, sobriété et plan d\'actions.',
    highlights: ['Audits Tertiaires', 'Habitat Collectif', 'Stratégie Carbone'],
  },
  {
    name: 'Vitrolles & Istres',
    postalCode: '13127 / 13800',
    description: 'Accompagnement des équipements publics et projets immobiliers neufs ou réhabilités.',
    highlights: ['Maîtrise d\'Ouvrage MOP', 'Formations BTP', 'Gestion de Projets'],
  },
  {
    name: 'La Ciotat & Cassis',
    postalCode: '13600 / 13260',
    description: 'Rénovation d\'habitations individuelles et collectives en zone côtière méditerranéenne.',
    highlights: ['Confort Thallasso-Climatique', 'AMO Villa & Copro', 'Audits RGE'],
  },
  {
    name: 'Pertuis & Sud-Vaucluse (communes limitrophes)',
    postalCode: '84120',
    description: 'Bassin d\'intervention limitrophe du 13 pour l\'accompagnement des particuliers et collectivités du Val de Durance.',
    highlights: ['Bâti Traditionnel', 'Audit Maison RGE', 'Formation EcoCampus'],
  },
];
