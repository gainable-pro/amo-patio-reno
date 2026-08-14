export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  domainId: 'energie' | 'bati_ancien' | 'amo' | 'entreprises' | 'formation';
  domainTitle: string;
  cityName: string;
  postalCode: string;
  readTimeMinutes: number;
  publishDate: string;
  author: string;
  keyTakeaways: string[];
  contentHtml: string;
}

export const BLOG_ARTICLES: BlogArticle[] = [
  // --- DOMAINE 1 : AUDIT ÉNERGÉTIQUE & RÉNOVATION RGE ---
  {
    id: 'art-1',
    slug: 'audit-energetique-3cl-marseille-passoires-thermiques',
    title: 'Audit Énergétique Réglementaire 3CL à Marseille : Sortir des Passoires Thermiques (F/G)',
    excerpt: 'Comment réaliser un audit énergétique qualifié OPQIBI RGE à Marseille pour répondre aux obligations légales de vente et réussir la rénovation globale de son bien.',
    domainId: 'energie',
    domainTitle: 'Audit Énergétique & Rénovation RGE',
    cityName: 'Marseille',
    postalCode: '13000',
    readTimeMinutes: 6,
    publishDate: '2026-02-10',
    author: 'Marion BEAUPUY',
    keyTakeaways: [
      'L\'audit énergétique 3CL est obligatoire à Marseille pour la vente de maisons individuelles ou immeubles en monopropropriété classés F ou G.',
      'L\'analyse prend en compte le climat méditerranéen : inertie, occultation et confort d\'été nocturne.',
      'Un audit certifié OPQIBI 1911 conditionne l\'accès aux parcours accompagnés MaPrimeRénov\' 2026.',
    ],
    contentHtml: `
      <h2>Pourquoi l'Audit Énergétique est Indispensable à Marseille</h2>
      <p>À Marseille, la pression réglementaire s'accélère sur les passoires thermiques (logements étiquetés F ou G au DPE). Que ce soit dans le centre historique (1er, 2ème, 6ème arrondissements) ou dans l'habitat individuel des quartiers sud et nord, la réalisation d'un <strong>audit énergétique réglementaire 3CL</strong> est le préalable indispensable à toute transaction et à tout projet de rénovation globale.</p>
      
      <h3>La méthode de calcul 3CL adaptée au climat provençal</h3>
      <p>Contrairement à une étude thermique théorique classique, l'audit 3CL prend en compte l'enveloppe du bâtiment, l'état de la ventilation, l'orientation des baies et le comportement hygrothermique. À Marseille, la priorité ne réside pas uniquement dans la lutte contre le froid hivernal, mais également dans la <strong>gestion du confort d'été</strong> et la prévention des surchauffes lors des épisodes de canicule.</p>

      <h3>Les étapes clés d'un audit réussi par Marion Beaupuy</h3>
      <ul>
        <li><strong>Relevé sur site :</strong> Mesure des métriques d\'isolation, étude des déperditions par la toiture, les planchers bas et les menuiseries.</li>
        <li><strong>Analyse des équipements CVC :</strong> Diagnostic des systèmes de chauffage, production d\'eau chaude sanitaire (ECS) et climatisation.</li>
        <li><strong>Propositions de scénarios chiffrés :</strong> Établissement de 2 à 3 parcours de travaux progressifs permettant d'atteindre la classe B ou A.</li>
        <li><strong>Plan de financement personnalisé :</strong> Simulation explicite des aides MaPrimeRénov', CEE et Éco-PTZ.</li>
      </ul>
      
      <p>En faisant appel à AMO Patio Réno, vous bénéficiez d'une expertise qualifiée OPQIBI RGE N°1911 impartiale pour sécuriser l'avenir thermique de votre patrimoine marseillais.</p>
    `,
  },
  {
    id: 'art-2',
    slug: 'confort-ete-climatisation-passive-aix-en-provence',
    title: 'Confort d\'Été & Climatisation Passive à Aix-en-Provence : Stratégies de Rénovation RGE',
    excerpt: 'Découvrez comment isoler et rafraîchir naturellement votre maison aixoise sans dépendre uniquement de la climatisation énergivore.',
    domainId: 'energie',
    domainTitle: 'Audit Énergétique & Rénovation RGE',
    cityName: 'Aix-en-Provence',
    postalCode: '13100',
    readTimeMinutes: 5,
    publishDate: '2026-02-08',
    author: 'Marion BEAUPUY',
    keyTakeaways: [
      'À Aix-en-Provence, les étés chauds nécessitent de travailler sur le déphasage thermique des isolants.',
      'La laine de bois et les matériaux biosourcés ralentissent la pénétration de la chaleur durant 10 à 12 heures.',
      'La surventilation nocturne et les ombrages extérieurs réduisent la température intérieure de 4°C à 6°C.',
    ],
    contentHtml: `
      <h2>Le Défi du Confort d'Été dans le Pays d'Aix</h2>
      <p>Le territoire aixois connaît des températures estivales particulièrement élevées. Lors d'une rénovation énergétique RGE à Aix-en-Provence, se concentrer uniquement sur l'isolation d'hiver constitue une erreur majeure. L'audit thermique doit intégrer la <strong>capacité de déphasage thermique</strong> des matériaux choisis.</p>
      
      <h3>L'importance des matériaux biosourcés à haut déphasage</h3>
      <p>Les isolants synthétiques légers laissés sous toiture laissent passer la chaleur en seulement 3 à 4 heures. En privilégiant des matériaux biosourcés comme la <strong>fibre de bois dense ou la ouate de cellulose</strong>, le temps de traversée de la chaleur atteint 10 à 12 heures. La chaleur accumulée le jour n'atteint l'intérieur que la nuit, moment où elle est évacuée par ventilation croisée.</p>

      <h3>Les solutions d'ingénierie passive recommandées :</h3>
      <ul>
        <li>Installation de casquettes solaires et volets persiennes réglables.</li>
        <li>Isolation performante des rampants de toiture.</li>
        <li>Optimisation de la VMC double flux hygroréglable avec puits provençal ou surventilation nocturne.</li>
      </ul>
    `,
  },
  {
    id: 'art-3',
    slug: 'maprimerenov-2026-eco-ptz-salon-de-provence',
    title: 'MaPrimeRénov\' 2026 & Éco-PTZ à Salon-de-Provence : Réussir son Dossier de Subvention',
    excerpt: 'Toutes les clés pour financer jusqu\'à 80% de vos travaux de rénovation énergétique à Salon-de-Provence grâce à l\'accompagnement AMO.',
    domainId: 'energie',
    domainTitle: 'Audit Énergétique & Rénovation RGE',
    cityName: 'Salon-de-Provence',
    postalCode: '13300',
    readTimeMinutes: 7,
    publishDate: '2026-02-05',
    author: 'Marion BEAUPUY',
    keyTakeaways: [
      'Les aides MaPrimeRénov\' 2026 imposent le recours à un Mon Accompagnateur Rénov\' / AMO qualifié pour les parcours accompagnés.',
      'Cumuler MaPrimeRénov\', CEE et Éco-PTZ à taux zéro permet de financer le reste à charge.',
      'Marion Beaupuy vous guide dans la validation technique préalable des devis d\'artisans RGE à Salon-de-Provence.',
    ],
    contentHtml: `
      <h2>Accéder aux Subventions Réglementaires à Salon-de-Provence</h2>
      <p>Pour les propriétaires salonais, la rénovation énergétique représente un investissement valorisant mais complexe. Les barèmes MaPrimeRénov' 2026 récompensent fortement les rénovations d'ampleur permettant un saut d'au moins 2 classes DPE.</p>

      <h3>Le rôle indispensable de l'AMO dans le montage financier</h3>
      <p>La moindre incohérence sur un devis d'artisan (absence de mention RGE, résistance thermique R insuffisante, libellé non conforme) peut bloquer l'attribution de plusieurs milliers d'euros de primes. L'expertise d'AMO Patio Réno à Salon-de-Provence réside dans le <strong>cadrage et le contrôle préventif des pièces justificatives</strong> avant le début des travaux.</p>
    `,
  },
  {
    id: 'art-4',
    slug: 'audit-energetique-rge-isolation-biosourcee-arles-camargue',
    title: 'Audit Énergétique & Isolation Biosourcée à Arles et en Camargue',
    excerpt: 'Protéger l\'habitat arlésien contre l\'humidité et le vent du Mistral grâce aux bilans thermiques qualifiés et aux matériaux écologiques.',
    domainId: 'energie',
    domainTitle: 'Audit Énergétique & Rénovation RGE',
    cityName: 'Arles',
    postalCode: '13200',
    readTimeMinutes: 6,
    publishDate: '2026-02-01',
    author: 'Marion BEAUPUY',
    keyTakeaways: [
      'En Camargue, l\'étanchéité à l\'air est mise à rude épreuve par le Mistral.',
      'L\'audit énergétique à Arles doit mesurer l\'impact des infiltrations parasites.',
      'Les biosourcés régulent l\'humidité ambiante sans dégrader le bâti.',
    ],
    contentHtml: `
      <h2>Spécificités Thermiques du Pays Arlésien</h2>
      <p>Entre le Rhône et la Camargue, le climat d'Arles combine des vents violents (Mistral) et un taux d'humidité ambiant élevé. Un audit énergétique performant doit impérativement intégrer un diagnostic d'étanchéité à l'air et de gestion de la vapeur d'eau.</p>
    `,
  },
  {
    id: 'art-5',
    slug: 'remplacement-chaudiere-pac-air-eau-aubagne',
    title: 'Remplacement de Chaudière par Pompe à Chaleur (PAC) à Aubagne : Cadrage AMO',
    excerpt: 'Éviter les erreurs de surdimensionnement lors de la transition d\'un chauffage fossile vers une PAC Air/Eau à Aubagne.',
    domainId: 'energie',
    domainTitle: 'Audit Énergétique & Rénovation RGE',
    cityName: 'Aubagne',
    postalCode: '13400',
    readTimeMinutes: 5,
    publishDate: '2026-01-28',
    author: 'Marion BEAUPUY',
    keyTakeaways: [
      'Isoler avant de changer le système de chauffage permet de réduire la puissance nécessaire de la PAC.',
      'Une étude thermique préalable évite le surdimensionnement coûteux à Aubagne.',
    ],
    contentHtml: `
      <h2>Dimensionner Correctement sa PAC à Aubagne</h2>
      <p>À Aubagne et dans la vallée de l'Huveaune, la tentation est grande de remplacer directement une ancienne chaudière fioul par une pompe à chaleur air/eau sans revoir l'isolation. C'est le piège classique conduisant à des factures d'électricité anormale et un vieillissement prématuré du compresseur.</p>
    `,
  },
  {
    id: 'art-6',
    slug: 'diagnostic-thermique-villas-cotieres-martigues',
    title: 'Diagnostic Thermique des Villas Côtières à Martigues : Faire Face aux Embruns',
    excerpt: 'Optimiser l\'isolation des toitures et des menuiseries extérieures exposées à l\'environnement marin de Martigues.',
    domainId: 'energie',
    domainTitle: 'Audit Énergétique & Rénovation RGE',
    cityName: 'Martigues',
    postalCode: '13500',
    readTimeMinutes: 5,
    publishDate: '2026-01-24',
    author: 'Marion BEAUPUY',
    keyTakeaways: [
      'Les embruns salins accélèrent la dégradation des rupteurs de ponts thermiques.',
      'Martigues nécessite des vitrages et châssis certifiés à haute résistance à la corrosion.',
    ],
    contentHtml: `
      <h2>Rénovation Thermique en Bord de Mer à Martigues</h2>
      <p>À Martigues, Venise Provençale, les maisons subissent les attaques salines. L'audit thermique analyse la pérennité des isolants et la qualité des étanchéités de façades.</p>
    `,
  },
  {
    id: 'art-7',
    slug: 'renovation-energetique-globale-amo-la-ciotat',
    title: 'Rénovation Énergétique Globale avec Suivi AMO à La Ciotat',
    excerpt: 'Comment orchestrer les corps d\'état pour réussir un saut de 3 classes DPE sur une villa ciotadenne.',
    domainId: 'energie',
    domainTitle: 'Audit Énergétique & Rénovation RGE',
    cityName: 'La Ciotat',
    postalCode: '13600',
    readTimeMinutes: 6,
    publishDate: '2026-01-20',
    author: 'Marion BEAUPUY',
    keyTakeaways: [
      'Un projet de rénovation globale à La Ciotat nécessite une chronologie de travaux stricte.',
      'L\'AMO coordonne l\'isolation, la ventilation et la domotique thermique.',
    ],
    contentHtml: `
      <h2>Rehausser la valeur verte de son bien à La Ciotat</h2>
      <p>La Ciotat bénéficie d'une forte attractivité immobilière. Réaliser une rénovation globale accompagnée par AMO Patio Réno garantit un gain de valeur patrimoniale et des factures d'énergie réduites au minimum.</p>
    `,
  },
  {
    id: 'art-8',
    slug: 'ite-vs-iti-isolation-climat-provencal-istres',
    title: 'Isolation par l\'Extérieur (ITE) vs Intérieur (ITI) à Istres : Quel Choix ?',
    excerpt: 'Comparatif technique pour choisir la meilleure stratégie d\'isolation des murs à Istres selon la typologie du bâtiment.',
    domainId: 'energie',
    domainTitle: 'Audit Énergétique & Rénovation RGE',
    cityName: 'Istres',
    postalCode: '13800',
    readTimeMinutes: 5,
    publishDate: '2026-01-16',
    author: 'Marion BEAUPUY',
    keyTakeaways: [
      'L\'ITE supprime l\'ensemble des ponts thermiques de planchers mais modifie l\'aspect extérieur.',
      'L\'ITI préserve les façades en pierre mais nécessite une gestion stricte de la condensation.',
    ],
    contentHtml: `
      <h2>Arbitrer entre ITE et ITI à Istres</h2>
      <p>À Istres, le choix entre isolation par l'extérieur (ITE) et isolation par l'intérieur (ITI) dépend de la nature des façades, des règles d'urbanisme local (PLU) et de la recherche d'inertie thermique.</p>
    `,
  },
  {
    id: 'art-9',
    slug: 'reduire-facture-chauffage-vitrolles-audit-opqibi',
    title: 'Réduire de 50% sa Facture d\'Énergie à Vitrolles grâce à l\'Audit Qualifié OPQIBI',
    excerpt: 'Analyse méthodique des déperditions calorifiques sur les pavillons et copropriétés de Vitrolles.',
    domainId: 'energie',
    domainTitle: 'Audit Énergétique & Rénovation RGE',
    cityName: 'Vitrolles',
    postalCode: '13127',
    readTimeMinutes: 5,
    publishDate: '2026-01-12',
    author: 'Marion BEAUPUY',
    keyTakeaways: [
      'La toiture représente 30% des déperditions calorifiques non isolées.',
      'L\'audit OPQIBI N°1911 garantit la conformité des calculs réglementaires.',
    ],
    contentHtml: `
      <h2>Traquer les Déperditions à Vitrolles</h2>
      <p>Les constats relevés à Vitrolles montrent que 70% de l'énergie de chauffage est gaspillée à cause de défauts d'isolation des combles et de vannes thermostatiques obsolètes.</p>
    `,
  },
  {
    id: 'art-10',
    slug: 'transition-energetique-patrimoine-minier-gardanne',
    title: 'Transition Énergétique du Patrimoine Bâti à Gardanne',
    excerpt: 'Conseils AMO pour la rénovation thermique efficace des maisons ouvrières et pavillons de Gardanne.',
    domainId: 'energie',
    domainTitle: 'Audit Énergétique & Rénovation RGE',
    cityName: 'Gardanne',
    postalCode: '13120',
    readTimeMinutes: 5,
    publishDate: '2026-01-08',
    author: 'Marion BEAUPUY',
    keyTakeaways: [
      'Le bâti de Gardanne présente une grande diversité de structures mixtes.',
      'L\'accompagnement personnalisé sécurise l\'atteinte des objectifs Bâtiment Bas Carbone (BBC).',
    ],
    contentHtml: `
      <h2>Rénover le Bâti Gardannais</h2>
      <p>À Gardanne, l'amélioration de la performance énergétique s'inscrit dans la revalorisation globale du cadre de vie et la maîtrise durable du budget des ménages.</p>
    `,
  },

  // --- DOMAINE 2 : BÂTI ANCIEN PROVENÇAL ---
  {
    id: 'art-11',
    slug: 'restauration-bastide-provencale-pierre-chaux-aix',
    title: 'Restauration de Bastides Provençales à Aix-en-Provence : Respect de la Pierre et de la Chaux',
    excerpt: 'Comment isoler une bastide aixoise sans créer de pathologies d\'humidité ni dénaturer la beauté des façades ancestrales.',
    domainId: 'bati_ancien',
    domainTitle: 'Restauration du Bâti Ancien',
    cityName: 'Aix-en-Provence',
    postalCode: '13100',
    readTimeMinutes: 7,
    publishDate: '2026-02-09',
    author: 'Marion BEAUPUY',
    keyTakeaways: [
      'Le bâti ancien en pierre de Taille ou moellons doit impérativement respirer (migration de vapeur).',
      'Le ciment étanche bloque l\'humidité dans les murs et provoque des décollements.',
      'Les enduits isolants à la chaux-chanvre préservent l\'esthétique et le comportement hygrothermique.',
    ],
    contentHtml: `
      <h2>Les Règles d'Or de la Rénovation du Bâti Ancien dans le Pays d'Aix</h2>
      <p>Les bastides et demeures en pierre d'Aix-en-Provence constituent un patrimoine inestimable. Malheureusement, l'application aveugle de techniques de rénovation modernes (isolation en polystyrène étanche, enduits au ciment) cause des dégâts irréversibles : moisissures, pourrissement des poutres et dégradation des maçonneries.</p>
      
      <h3>Préserver la perspirabilité des murs</h3>
      <p>Avant toute intervention, Marion Beaupuy réalise une analyse de la composition des murs. Les murs anciens fonctionnent en régime <strong>perspirant</strong> : ils absorbent l\'humidité ambiante et la restituent naturellement. Pour préserver cet équilibre, l'utilisation de correcteurs thermiques à la <strong>chaux et au chanvre ou la chaux et au lin</strong> est vivement préconisée.</p>
    `,
  },
  {
    id: 'art-12',
    slug: 'humidite-enduits-chaux-centre-historique-salon',
    title: 'Traitement de l\'Humidité & Enduits à la Chaux dans le Centre Historique de Salon-de-Provence',
    excerpt: 'Résoudre les désordres d\'humidité et rénover les façades anciennes du centre-ville de Salon avec les méthodes traditionnelles.',
    domainId: 'bati_ancien',
    domainTitle: 'Restauration du Bâti Ancien',
    cityName: 'Salon-de-Provence',
    postalCode: '13300',
    readTimeMinutes: 6,
    publishDate: '2026-02-04',
    author: 'Marion BEAUPUY',
    keyTakeaways: [
      'Les remontées capillaires dans les ruelles de Salon doivent être traitées à la racine.',
      'Les mortiers à la chaux aérienne ou hydraulique naturelle sont seuls compatibles avec les maçonneries anciennes.',
    ],
    contentHtml: `
      <h2>Rénover le Cœur Historique de Salon-de-Provence</h2>
      <p>Dans les ruelles du centre ancien de Salon-de-Provence, les rez-de-chaussée souffrent souvent d'humidité contenue par des joints ciment inadéquats. L'expertise d'AMO Patio Réno consiste à diagnostiquer l'origine exacte de l'eau et préconiser les purges et rejointoiements à la chaux adaptés.</p>
    `,
  },
  {
    id: 'art-13',
    slug: 'rehabilitation-energetique-immeuble-marseillais-trois-fenetres',
    title: 'Réhabilitation Énergétique des Immeubles Marseillais "3 Fenêtres"',
    excerpt: 'Techniques d\'isolation intérieure et consolidation des planchers bois sur le bâti traditionnel marseillais.',
    domainId: 'bati_ancien',
    domainTitle: 'Restauration du Bâti Ancien',
    cityName: 'Marseille',
    postalCode: '13001',
    readTimeMinutes: 7,
    publishDate: '2026-01-31',
    author: 'Marion BEAUPUY',
    keyTakeaways: [
      'Les immeubles marseillais "trois fenêtres" possèdent une typologie constructive spécifique (murs en pierre, planchers tomettes sur solives).',
      'La rénovation énergétique doit traiter le risque de condensation interstitielle.',
    ],
    contentHtml: `
      <h2>Le Défi des Immeubles Marseillais Traditionnels</h2>
      <p>L'immeuble marseillais "trois fenêtres" nécessite une approche sur-mesure. De Noailles à Vauban, la réhabilitation thermique exige de combiner performance énergétique et sauvegarde des éléments architecturaux (moulures, cheminées, tomettes).</p>
    `,
  },
  {
    id: 'art-14',
    slug: 'patrimoine-romain-abf-architectes-batiments-de-france-arles',
    title: 'Rénover dans le Périmètre ABF à Arles : Règlements & Exigences Patrimoniales',
    excerpt: 'Comment concilier audit énergétique RGE et prescriptions de l\'Architecte des Bâtiments de France dans la cité d\'Arles.',
    domainId: 'bati_ancien',
    domainTitle: 'Restauration du Bâti Ancien',
    cityName: 'Arles',
    postalCode: '13200',
    readTimeMinutes: 6,
    publishDate: '2026-01-26',
    author: 'Marion BEAUPUY',
    keyTakeaways: [
      'À Arles, la proximité des monuments UNESCO soumet les projets à l\'accord de l\'ABF.',
      'L\'AMO prépare des dossiers d\'autorisation préalable conformes aux exigences visuelles et matérielles.',
    ],
    contentHtml: `
      <h2>Concilier Performance et Patrimoine à Arles</h2>
      <p>Obtenir l'accord des Bâtiments de France pour la pose de menuiseries double vitrage ou l'isolation de toiture en secteur sauvegardé à Arles requiert un cadrage technique irréprochable.</p>
    `,
  },
  {
    id: 'art-15',
    slug: 'renovation-thermique-mas-en-pierre-alpilles',
    title: 'Rénovation Thermique de Mas en Pierre à Saint-Rémy-de-Provence & Alpilles',
    excerpt: 'Allier le charme authentique de la pierre des Alpilles aux exigences de sobriété énergétique modernes.',
    domainId: 'bati_ancien',
    domainTitle: 'Restauration du Bâti Ancien',
    cityName: 'Saint-Rémy-de-Provence',
    postalCode: '13210',
    readTimeMinutes: 6,
    publishDate: '2026-01-22',
    author: 'Marion BEAUPUY',
    keyTakeaways: [
      'Les mas provençaux des Alpilles possèdent une grande inertie qui doit être valorisée.',
      'L\'isolation des combles par ouate de cellulose protège efficacement contre le soleil estival.',
    ],
    contentHtml: `
      <h2>Rénover un Mas Provençal dans les Alpilles</h2>
      <p>Les mas de Saint-Rémy-de-Provence exigent un conseil neutre pour traiter la toiture, les rampants et la régulation hygrothermique des pièces de vie sans dénaturer la maçonnerie de pierre.</p>
    `,
  },
  {
    id: 'art-16',
    slug: 'diagnostic-hygrothermique-remontee-capillaire-tarascon',
    title: 'Diagnostic Hygrothermique & Remontées Capillaires à Tarascon',
    excerpt: 'Comprendre et stopper les dégradations d\'humidité au bas des murs anciens dans le pays de Tarascon.',
    domainId: 'bati_ancien',
    domainTitle: 'Restauration du Bâti Ancien',
    cityName: 'Tarascon',
    postalCode: '13150',
    readTimeMinutes: 5,
    publishDate: '2026-01-18',
    author: 'Marion BEAUPUY',
    keyTakeaways: [
      'L\'eau du sol remonte par capillarité dans les maçonneries poreuses non étanchées à la base.',
      'Des solutions de drainage et d\'assèchement naturel doivent précéder l\'isolation.',
    ],
    contentHtml: `
      <h2>Assainir les Maçonneries à Tarascon</h2>
      <p>En bordure du Rhône à Tarascon, les diagnostics d'AMO Patio Réno identifient précisément les pathologies d'humidité pour éviter les échecs de rénovation.</p>
    `,
  },
  {
    id: 'art-17',
    slug: 'materiaux-renovation-durables-climat-littoral-cassis',
    title: 'Matériaux de Rénovation Durables et Climat Littoral à Cassis',
    excerpt: 'Sélectionner des isolants et enduits résistants au sel, à la chaleur et aux vents marins sur les hauteurs de Cassis.',
    domainId: 'bati_ancien',
    domainTitle: 'Restauration du Bâti Ancien',
    cityName: 'Cassis',
    postalCode: '13260',
    readTimeMinutes: 5,
    publishDate: '2026-01-14',
    author: 'Marion BEAUPUY',
    keyTakeaways: [
      'L\'air salin exige des fixations et armatures en inox ou matériaux imputrescibles.',
      'Les enduits respirants préservent les façades cassidaines.',
    ],
    contentHtml: `
      <h2>Conseils Matériaux pour le Littoral Cassidain</h2>
      <p>À Cassis, le choix des matériaux de rénovation doit intégrer la forte exposition au soleil et l'agressivité des embruns marins.</p>
    `,
  },
  {
    id: 'art-18',
    slug: 'consolidation-planchers-bois-batiment-ancien-lambesc',
    title: 'Consolidation des Planchers Bois & Solivages Anciens à Lambesc',
    excerpt: 'Diagnostiquer la capacité portante des solivages bois et tomettes dans les demeures anciennes du Pays d\'Aix.',
    domainId: 'bati_ancien',
    domainTitle: 'Restauration du Bâti Ancien',
    cityName: 'Lambesc',
    postalCode: '13410',
    readTimeMinutes: 5,
    publishDate: '2026-01-10',
    author: 'Marion BEAUPUY',
    keyTakeaways: [
      'Les attaques d\'insectes xylophages et l\'humidité fragilisent les solives anciennes.',
      'Renforcer les planchers sans surcharger la structure est une compétence clé AMO.',
    ],
    contentHtml: `
      <h2>Expertise des Structures Bois à Lambesc</h2>
      <p>À Lambesc, les interventions sur les planchers anciens combinent renforcement mécanique et apport d'isolation phonique et thermique sous tomettes.</p>
    `,
  },

  // --- DOMAINE 3 : ASSISTANCE À MAÎTRISE D'OUVRAGE (AMO) GLOBALE ---
  {
    id: 'art-19',
    slug: 'role-amo-independant-travaux-copropriete-marseille',
    title: 'Le Rôle Protecteur de l\'AMO Indépendant pour les Copropriétés à Marseille',
    excerpt: 'Comment le conseil en maîtrise d\'ouvrage sécurise les assemblées générales, les budgets et le suivi de chantier marseillais.',
    domainId: 'amo',
    domainTitle: 'Assistance à Maîtrise d\'Ouvrage (AMO)',
    cityName: 'Marseille',
    postalCode: '13008',
    readTimeMinutes: 7,
    publishDate: '2026-02-07',
    author: 'Marion BEAUPUY',
    keyTakeaways: [
      'L\'AMO indépendant représente exclusivement les intérêts du Maître d\'Ouvrage (syndic et copropriétaires).',
      'Il effectue la vérification neutre des devis et prévient les avenants abusifs.',
      'Il assure la coordination technique entre la maîtrise d\'œuvre et les entreprises du BTP.',
    ],
    contentHtml: `
      <h2>Pourquoi les Copropriétés Marseillaises Ont Besoin d'un AMO</h2>
      <p>Voter des travaux de ravalement ou de rénovation énergétique en Assemblée Générale à Marseille est souvent un parcours du combattant. Entre divergence d'intérêts et méfiance vis-à-vis des coûts, la présence d'un <strong>Assistant à Maîtrise d'Ouvrage (AMO) neutre et indépendant</strong> apporte la sérénité indispensable.</p>
      
      <h3>Les missions stratégiques de l'AMO en copropriété</h3>
      <ul>
        <li><strong>Aide au choix du scénario de travaux :</strong> Présentation claire et pédagogique des enjeux techniques en AG.</li>
        <li><strong>Cadrage de la consultation (DCE) :</strong> Rédaction de cahiers des charges précis pour comparer des devis équivalents.</li>
        <li><strong>Suivi financier et administratif :</strong> Contrôle des situations mensuelles de travaux et vérification du respect du planning.</li>
      </ul>
    `,
  },
  {
    id: 'art-20',
    slug: 'maitriser-budget-planning-renovation-lourde-aix',
    title: 'Maîtriser son Budget & Planning de Rénovation Lourde à Aix-en-Provence',
    excerpt: 'Méthodologie d\'anticipation des risques financiers et des retards de livraison sur le secteur aixois.',
    domainId: 'amo',
    domainTitle: 'Assistance à Maîtrise d\'Ouvrage (AMO)',
    cityName: 'Aix-en-Provence',
    postalCode: '13100',
    readTimeMinutes: 6,
    publishDate: '2026-02-03',
    author: 'Marion BEAUPUY',
    keyTakeaways: [
      'Les dérives budgétaires en rénovation proviennent quasi-systématiquement d\'un manque d\'anticipation lors du montage.',
      'L\'AMO établit un planning enveloppe PERT et contrôle les avancements réels.',
    ],
    contentHtml: `
      <h2>Éviter les Surcoûts lors d'une Rénovation à Aix</h2>
      <p>Une rénovation lourde à Aix-en-Provence implique une multitude d'intervenants. L'AMO Patio Réno structure l'opération dès la phase d'idée pour garantir le respect strict du budget initial.</p>
    `,
  },
  {
    id: 'art-21',
    slug: 'reception-chantier-levee-reserves-protection-amo-aubagne',
    title: 'Réception de Chantier & Levée des Réserves à Aubagne : La Sécurité AMO',
    excerpt: 'Ne pas signer le procès-verbal de réception sans avoir fait contrôler les malfaçons par un expert indépendant à Aubagne.',
    domainId: 'amo',
    domainTitle: 'Assistance à Maîtrise d\'Ouvrage (AMO)',
    cityName: 'Aubagne',
    postalCode: '13400',
    readTimeMinutes: 6,
    publishDate: '2026-01-30',
    author: 'Marion BEAUPUY',
    keyTakeaways: [
      'La réception de chantier est le point de départ des garanties légales (parfait achèvement, biennale, décennale).',
      'L\'AMO assiste le Maître d\'Ouvrage lors de la visite minutieuse des lieux.',
    ],
    contentHtml: `
      <h2>Sécuriser la Réception de vos Travaux à Aubagne</h2>
      <p>La clôture d'un chantier d'habitation ou de bureaux à Aubagne est une étape capitale. Marion Beaupuy vous assiste pour consigner précisément toutes les réserves techniques avant le versement du solde.</p>
    `,
  },
  {
    id: 'art-22',
    slug: 'analyse-comparative-devis-artisans-eviter-surcouts-salon',
    title: 'Analyse Comparative de Devis d\'Artisans à Salon-de-Provence : Déceler les Pièges',
    excerpt: 'Comment décrypter les propositions financières et éliminer les imprécisions avant de signer son marché de travaux.',
    domainId: 'amo',
    domainTitle: 'Assistance à Maîtrise d\'Ouvrage (AMO)',
    cityName: 'Salon-de-Provence',
    postalCode: '13300',
    readTimeMinutes: 5,
    publishDate: '2026-01-25',
    author: 'Marion BEAUPUY',
    keyTakeaways: [
      'Deux devis d\'artisans au même montant global peuvent cacher des différences majeures de prestations.',
      'L\'AMO harmonise la grille d\'analyse des offres pour une comparaison équitable.',
    ],
    contentHtml: `
      <h2>Décrypter les Devis du Bâtiment à Salon</h2>
      <p>À Salon-de-Provence, faire le bon choix parmi plusieurs propositions d'entreprises nécessite d'analyser les métrés, les marques de matériaux et les garanties d'assurance décennale.</p>
    `,
  },
  {
    id: 'art-23',
    slug: 'montage-financier-aides-publiques-collectivites-martigues',
    title: 'Montage Financier & Subventions Publiques pour Collectivités à Martigues',
    excerpt: 'Accompagnement des décideurs publics et bailleurs dans l\'obtention des fonds de rénovation du patrimoine municipal.',
    domainId: 'amo',
    domainTitle: 'Assistance à Maîtrise d\'Ouvrage (AMO)',
    cityName: 'Martigues',
    postalCode: '13500',
    readTimeMinutes: 6,
    publishDate: '2026-01-21',
    author: 'Marion BEAUPUY',
    keyTakeaways: [
      'Les projets des collectivités locales bénéficient de dotations d\'État sous condition d\'objectifs énergétiques audités.',
      'L\'AMO constitue le dossier technico-financier requis.',
    ],
    contentHtml: `
      <h2>Ingénierie Financière Publique à Martigues</h2>
      <p>Pour les équipements publics et logements sociaux à Martigues, AMO Patio Réno apporte une rigueur méthodologique garantissant l'éligibilité aux subventions.</p>
    `,
  },
  {
    id: 'art-24',
    slug: 'cadrage-dce-dossier-consultation-entreprises-la-ciotat',
    title: 'Rédaction & Cadrage du Dossier de Consultation des Entreprises (DCE) à La Ciotat',
    excerpt: 'Rédiger des CCTP et CCAP clairs pour obtenir des chiffrages précis des entreprises du BTP.',
    domainId: 'amo',
    domainTitle: 'Assistance à Maîtrise d\'Ouvrage (AMO)',
    cityName: 'La Ciotat',
    postalCode: '13600',
    readTimeMinutes: 5,
    publishDate: '2026-01-17',
    author: 'Marion BEAUPUY',
    keyTakeaways: [
      'Un DCE incomplet génère inévitablement des litiges et des avenants financiers durant le chantier.',
      'L\'AMO formalise les besoins du Maître d\'Ouvrage.',
    ],
    contentHtml: `
      <h2>L'Importance d'un Bon DCE à La Ciotat</h2>
      <p>À La Ciotat, la formalisation claire des exigences techniques permet aux entreprises de chiffrer leurs interventions au juste prix.</p>
    `,
  },
  {
    id: 'art-25',
    slug: 'securisation-juridique-loi-mop-projets-publics-vitrolles',
    title: 'Sécurisation Juridique selon la Loi MOP pour Projets Publics à Vitrolles',
    excerpt: 'Comprendre l\'organisation de la maîtrise d\'ouvrage publique et l\'articulation des missions AMO / MOE.',
    domainId: 'amo',
    domainTitle: 'Assistance à Maîtrise d\'Ouvrage (AMO)',
    cityName: 'Vitrolles',
    postalCode: '13127',
    readTimeMinutes: 6,
    publishDate: '2026-01-13',
    author: 'Marion BEAUPUY',
    keyTakeaways: [
      'La loi MOP encadre strictement les responsabilités du Maître d\'Ouvrage public.',
      'L\'AMO assiste la collectivité dans la conduite des opérations et le choix des prestataires.',
    ],
    contentHtml: `
      <h2>Respecter la Réglementation MOP à Vitrolles</h2>
      <p>Les opérations portées par les acteurs publics à Vitrolles exigent le respect scrupuleux des étapes réglementaires depuis la faisabilité jusqu'au parfait achèvement.</p>
    `,
  },
  {
    id: 'art-26',
    slug: 'coordination-transversale-moa-architecte-btp-miramas',
    title: 'Coordination Transversale Maître d\'Ouvrage / Architecte / BTP à Miramas',
    excerpt: 'Assurer une communication fluide entre tous les acteurs du chantier pour éviter les blocages opérationnels.',
    domainId: 'amo',
    domainTitle: 'Assistance à Maîtrise d\'Ouvrage (AMO)',
    cityName: 'Miramas',
    postalCode: '13140',
    readTimeMinutes: 5,
    publishDate: '2026-01-09',
    author: 'Marion BEAUPUY',
    keyTakeaways: [
      'L\'AMO agit comme tiers de confiance facilitant la compréhension réciproque entre le client et l\'équipe de maîtrise d\'œuvre.',
    ],
    contentHtml: `
      <h2>Fluidifier le Pilotage de Projet à Miramas</h2>
      <p>À Miramas, la médiation technique et la clarté des comptes-rendus AMO préviennent les malentendus sur le terrain.</p>
    `,
  },

  // --- DOMAINE 4 : ACCOMPAGNEMENT DES ENTREPRISES DU BTP & RELATION MOA ---
  {
    id: 'art-27',
    slug: 'fluidifier-echanges-entreprise-btp-client-particulier-salon',
    title: 'Fluidifier la Relation Entreprise du BTP & Client Particulier à Salon-de-Provence',
    excerpt: 'Comment l\'AMO aide les artisans du bâtiment à cadrer les choix du client et à éviter le temps perdu en explications répétitives.',
    domainId: 'entreprises',
    domainTitle: 'Appui Entreprises BTP',
    cityName: 'Salon-de-Provence',
    postalCode: '13300',
    readTimeMinutes: 6,
    publishDate: '2026-02-06',
    author: 'Marion BEAUPUY',
    keyTakeaways: [
      'Les entreprises du BTP consacrent un temps précieux non facturable pour expliquer les détails techniques aux clients.',
      'L\'AMO intervient en amont pour valider les choix du client et figer le programme.',
      'L\'artisan se concentre sur son cœur de métier : l\'exécution parfaite des travaux.',
    ],
    contentHtml: `
      <h2>Soulager les Artisans et PME du Bâtiment à Salon</h2>
      <p>Sur un chantier de rénovation à Salon-de-Provence, les entreprises de maçonnerie, d'électricité ou d'isolation sont fréquemment sollicitées par des Maîtres d'Ouvrage indécis ou anxieux. Ces discussions incessantes ralentissent l'avancement du chantier et créent des tensions.</p>
      
      <h3>L'intervention facilitatrice d'AMO Patio Réno</h3>
      <p>Marion Beaupuy propose aux entreprises du BTP un service d'appui : **nous accompagnons le client final dans la compréhension des choix techniques et des jalons**, libérant les équipes de terrain de la charge relationnelle et administrative.</p>
    `,
  },
  {
    id: 'art-28',
    slug: 'gestion-situations-travaux-sous-traitance-marseille',
    title: 'Gestion des Situations de Travaux & Sous-Traitance à Marseille',
    excerpt: 'Sécuriser le paiement des situations mensuelles et l\'acceptation des sous-traitants sur les chantiers marseillais.',
    domainId: 'entreprises',
    domainTitle: 'Appui Entreprises BTP',
    cityName: 'Marseille',
    postalCode: '13002',
    readTimeMinutes: 5,
    publishDate: '2026-02-02',
    author: 'Marion BEAUPUY',
    keyTakeaways: [
      'La vérification rigoureuse des avancements réels garantit des facturations de situations sans litige.',
      'Le cadre légal de la sous-traitance protège la santé financière des entreprises.',
    ],
    contentHtml: `
      <h2>Rigueur Financière pour les Entreprises à Marseille</h2>
      <p>À Marseille, la validation rapide des situations de travaux par l'AMO permet de maintenir la trésorerie des PME du BTP en évitant les blocages de paiement.</p>
    `,
  },
  {
    id: 'art-29',
    slug: 'jalons-pert-wbs-eviter-derives-calendaires-aix',
    title: 'Méthodes PERT & WBS à Aix-en-Provence : Zéro Dérive Calendaire pour les Chantiers',
    excerpt: 'Utiliser les outils reconnus de planification industrielle pour l\'ordonnancement des chantiers de bâtiment.',
    domainId: 'entreprises',
    domainTitle: 'Appui Entreprises BTP',
    cityName: 'Aix-en-Provence',
    postalCode: '13100',
    readTimeMinutes: 6,
    publishDate: '2026-01-29',
    author: 'Marion BEAUPUY',
    keyTakeaways: [
      'La méthode WBS découpe le projet en tâches élémentaires maîtrisées.',
      'Le réseau PERT identifie le chemin critique pour anticiper les goulots d\'étranglement.',
    ],
    contentHtml: `
      <h2>Planification Industrielle appliquée au BTP Aixois</h2>
      <p>L'application des méthodes PERT et WBS par Marion Beaupuy offre une visibilité totale aux entreprises du BTP opérant dans le Pays d'Aix.</p>
    `,
  },
  {
    id: 'art-30',
    slug: 'imprevus-avenants-chantier-bonnes-pratiques-artisans-aubagne',
    title: 'Gestion des Imprévus & Avenants de Chantier : Les Bonnes Pratiques à Aubagne',
    excerpt: 'Comment traiter techniquement et financièrement un aléa de chantier en conservant la confiance du Maître d\'Ouvrage.',
    domainId: 'entreprises',
    domainTitle: 'Appui Entreprises BTP',
    cityName: 'Aubagne',
    postalCode: '13400',
    readTimeMinutes: 5,
    publishDate: '2026-01-23',
    author: 'Marion BEAUPUY',
    keyTakeaways: [
      'Un imprévu technique non documenté immédiatement est source d\'annulation d\'avenant.',
      'L\'AMO formalise la cause de l\'aléa pour une prise en charge transparente.',
    ],
    contentHtml: `
      <h2>Gérer les Aléas sans Conflit à Aubagne</h2>
      <p>Lors de la découverte d'un vice caché sur un chantier à Aubagne (structure dégradée, réseau non répertorié), l'intervention neutre d'AMO Patio Réno permet de valider l'avenant nécessaire sans bloquer le chantier.</p>
    `,
  },
  {
    id: 'art-31',
    slug: 'compte-rendu-visite-chantier-qualite-execution-martigues',
    title: 'Compte-Rendu de Visite de Chantier & Traçabilité Qualité à Martigues',
    excerpt: 'L\'importance de la preuve photographique et du journal de chantier pour prévenir les réclamations abusives.',
    domainId: 'entreprises',
    domainTitle: 'Appui Entreprises BTP',
    cityName: 'Martigues',
    postalCode: '13500',
    readTimeMinutes: 5,
    publishDate: '2026-01-19',
    author: 'Marion BEAUPUY',
    keyTakeaways: [
      'Des comptes-rendus de chantier réguliers protègent les entreprises en cas de contestation ultérieure.',
    ],
    contentHtml: `
      <h2>Traçabilité et Rigueur sur le Terrain à Martigues</h2>
      <p>Chaque visite de chantier réalisée à Martigues donne lieu à une fiche claire récapitulant les décisions actées et les consignes de sécurité.</p>
    `,
  },
  {
    id: 'art-32',
    slug: 'accompagnement-pme-btp-exigences-rge-istres',
    title: 'Accompagnement des PME du BTP aux Exigences de la Qualification RGE à Istres',
    excerpt: 'Aider les artisans à constituer et maintenir leurs dossiers de qualifications RGE et devoirs d\'information.',
    domainId: 'entreprises',
    domainTitle: 'Appui Entreprises BTP',
    cityName: 'Istres',
    postalCode: '13800',
    readTimeMinutes: 5,
    publishDate: '2026-01-15',
    author: 'Marion BEAUPUY',
    keyTakeaways: [
      'Le label RGE impose un contrôle qualité strict sur les audits et réalisations.',
      'AMO Patio Réno conseille les artisans istréens pour maintenir leurs certifications.',
    ],
    contentHtml: `
      <h2>Sécuriser ses Qualifications RGE à Istres</h2>
      <p>Pour les PME du bâtiment à Istres, être épaulé sur les aspects réglementaires RGE permet de répondre en toute sérénité aux marchés accompagnés.</p>
    `,
  },
  {
    id: 'art-33',
    slug: 'organisation-chantier-faible-nuisance-chateaurenard',
    title: 'Organisation de Chantier à Faible Nuisance Environnementale à Châteaurenard',
    excerpt: 'Mettre en place la tri sélectif des déchets du BTP et réduire le bruit sur les chantiers provençaux.',
    domainId: 'entreprises',
    domainTitle: 'Appui Entreprises BTP',
    cityName: 'Châteaurenard',
    postalCode: '13160',
    readTimeMinutes: 5,
    publishDate: '2026-01-11',
    author: 'Marion BEAUPUY',
    keyTakeaways: [
      'La gestion des déchets du bâtiment est désormais soumise à la filière REP Bâtiment (déchetteries professionnelles).',
    ],
    contentHtml: `
      <h2>Chantiers Éco-Responsables à Châteaurenard</h2>
      <p>L'accompagnement des entreprises du BTP à Châteaurenard inclut le cadrage environnemental pour des opérations propres et respectueuses des riverains.</p>
    `,
  },

  // --- DOMAINE 5 : INGÉNIERIE DE FORMATION & PÉDAGOGIE RGE ---
  {
    id: 'art-34',
    slug: 'formation-rge-ecocampus-cci-alpes-provence-salon',
    title: 'Formation RGE & ÉcoCampus CCI Alpes-Provence à Salon-de-Provence : Transmettre l\'Excellence',
    excerpt: 'Marion Beaupuy, enseignante et référente de formation : Former la nouvelle génération d\'experts en efficacité énergétique.',
    domainId: 'formation',
    domainTitle: 'Ingénierie de Formation & Pédagogie',
    cityName: 'Salon-de-Provence',
    postalCode: '13300',
    readTimeMinutes: 6,
    publishDate: '2026-02-08',
    author: 'Marion BEAUPUY',
    keyTakeaways: [
      'La montée en compétences des acteurs du bâtiment est la condition sine qua non de la réussite de la transition énergétique.',
      'Marion Beaupuy intervient comme référente et formatrice qualifiée au sein du réseau CCI EcoCampus.',
      'Des modules pédagogiques sur-mesure pour professionnels, diagnostiqueurs et étudiants.',
    ],
    contentHtml: `
      <h2>La Pédagogie au Cœur de la Transition Énergétique</h2>
      <p>En parallèle de ses interventions de conseil en maîtrise d'ouvrage, Marion BEAUPUY s'investit passionnément dans la transmission des savoirs technologiques et réglementaires. Enseignante et référente au sein de la **CCI Alpes-Provence ÉcoCampus**, elle forme les cadres et techniciens de demain.</p>
      
      <h3>Des programmes axés sur le terrain et la réglementation :</h3>
      <ul>
        <li><strong>Maîtrise des audits thermiques 3CL :</strong> Analyse critique des données d'entrée et interprétation des résultats.</li>
        <li><strong>Comportement du bâti ancien :</strong> Physico-chimie des matériaux, gestion de l'humidité et isolation biosourcée.</li>
        <li><strong>Loi MOP et montage de projet :</strong> Préparation des futurs responsables d'opérations publiques.</li>
      </ul>
    `,
  },
  {
    id: 'art-35',
    slug: 'methode-3cl-evolutions-dpe-professionnels-marseille',
    title: 'Comprendre la Méthode de Calcul 3CL et les Évolutions du DPE à Marseille',
    excerpt: 'Décryptage pédagogique des moteurs de calcul DPE pour les agents immobiliers, syndics et maîtres d\'œuvre marseillais.',
    domainId: 'formation',
    domainTitle: 'Ingénierie de Formation & Pédagogie',
    cityName: 'Marseille',
    postalCode: '13006',
    readTimeMinutes: 6,
    publishDate: '2026-01-27',
    author: 'Marion BEAUPUY',
    keyTakeaways: [
      'Comprendre l\'impact des coefficients de conversion de l\'énergie primaire permet d\'expliquer clairement les notes DPE.',
    ],
    contentHtml: `
      <h2>Maîtriser le Moteur de Calcul 3CL à Marseille</h2>
      <p>À Marseille, les professionnels de l'immobilier et du bâtiment doivent parfaitement assimiler les variables qui font basculer un bien en passoire thermique ou en classe performante.</p>
    `,
  },
  {
    id: 'art-36',
    slug: 'sensibilisation-sobriete-batiment-decarbonation-aix',
    title: 'Sensibilisation à la Sobriété du Bâtiment & Décarbonation à Aix-en-Provence',
    excerpt: 'Ateliers et formations sur les leviers d\'action pour la décarbonation du parc immobilier aixois.',
    domainId: 'formation',
    domainTitle: 'Ingénierie de Formation & Pédagogie',
    cityName: 'Aix-en-Provence',
    postalCode: '13100',
    readTimeMinutes: 5,
    publishDate: '2026-01-23',
    author: 'Marion BEAUPUY',
    keyTakeaways: [
      'La sobriété d\'usage est le premier pôle d\'économie avant même le remplacement des systèmes.',
    ],
    contentHtml: `
      <h2>Former à la Sobriété Immobilière à Aix</h2>
      <p>Les conférences et sessions de sensibilisation dispensées par Marion Beaupuy donnent aux décideurs aixois les clés pour engager la décarbonation de leur patrimoine.</p>
    `,
  },
  {
    id: 'art-37',
    slug: 'formation-diagnostiqueurs-immobiliers-techniciens-arles',
    title: 'Formation Continue pour Diagnostiqueurs Immobiliers & Techniciens à Arles',
    excerpt: 'Montée en compétences sur l\'audit énergétique qualifié et l\'analyse hygrothermique des bâtiments.',
    domainId: 'formation',
    domainTitle: 'Ingénierie de Formation & Pédagogie',
    cityName: 'Arles',
    postalCode: '13200',
    readTimeMinutes: 5,
    publishDate: '2026-01-19',
    author: 'Marion BEAUPUY',
    keyTakeaways: [
      'L\'audit énergétique exige une rigueur de constatation bien supérieure à celle d\'un DPE standard.',
    ],
    contentHtml: `
      <h2>Accompagner les Diagnostiqueurs à Arles</h2>
      <p>Les modules de formation continue à Arles permettent aux techniciens d'acquérir les bons réflexes pour réaliser des bilans thermiques fiables.</p>
    `,
  },
  {
    id: 'art-38',
    slug: 'comprendre-loi-mop-role-amo-formation-aubagne',
    title: 'Comprendre la Loi MOP & le Rôle de l\'AMO : Stage Opérationnel à Aubagne',
    excerpt: 'Stage de formation à destination des services techniques et directeurs de projets immobiliers.',
    domainId: 'formation',
    domainTitle: 'Ingénierie de Formation & Pédagogie',
    cityName: 'Aubagne',
    postalCode: '13400',
    readTimeMinutes: 5,
    publishDate: '2026-01-15',
    author: 'Marion BEAUPUY',
    keyTakeaways: [
      'Maîtriser les étapes de la Loi MOP évite les contentieux juridiques lors du déroulement des marchés publics.',
    ],
    contentHtml: `
      <h2>Stage Pratique Loi MOP à Aubagne</h2>
      <p>À Aubagne, Marion Beaupuy anime des sessions de formation action permettant aux équipes de maîtriser le pilotage de la maîtrise d'ouvrage.</p>
    `,
  },
  {
    id: 'art-39',
    slug: 'confort-ete-pedagogie-thermique-sud-la-ciotat',
    title: 'Confort d\'Été & Pédagogie Thermique en Climat Méditerranéen à La Ciotat',
    excerpt: 'Comment enseigner la thermique d\'été et la ventilation passive aux professionnels du Sud.',
    domainId: 'formation',
    domainTitle: 'Ingénierie de Formation & Pédagogie',
    cityName: 'La Ciotat',
    postalCode: '13600',
    readTimeMinutes: 5,
    publishDate: '2026-01-11',
    author: 'Marion BEAUPUY',
    keyTakeaways: [
      'Le confort d\'été nécessite de croiser l\'inertie des parois, la protection solaire et la vitesse d\'air nocturne.',
    ],
    contentHtml: `
      <h2>Pédagogie de la Thermique d'Été à La Ciotat</h2>
      <p>À La Ciotat, former les concepteurs et rénovateurs au confort d'été est une priorité absolue pour limiter le recours aux climatiseurs individuels.</p>
    `,
  },
  {
    id: 'art-40',
    slug: 'maintenance-equipements-thermiques-cvc-vitrolles',
    title: 'Sensibilisation à la Maintenance des Équipements Thermiques (CVC) à Vitrolles',
    excerpt: 'Module de formation sur l\'entretien préventif des pompes à chaleur, VMC et chaudières collectives.',
    domainId: 'formation',
    domainTitle: 'Ingénierie de Formation & Pédagogie',
    cityName: 'Vitrolles',
    postalCode: '13127',
    readTimeMinutes: 5,
    publishDate: '2026-01-07',
    author: 'Marion BEAUPUY',
    keyTakeaways: [
      'Un équipement CVC non entretenu perd jusqu\'à 25% de son efficacité énergétique nominale.',
    ],
    contentHtml: `
      <h2>Former à l'Entretien des Équipements à Vitrolles</h2>
      <p>À Vitrolles, les sessions dédiées à la maintenance CVC rappellent les bonnes pratiques pour pérenniser les investissements énergétiques.</p>
    `,
  }
];
