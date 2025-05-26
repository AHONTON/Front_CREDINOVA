const articles = [
  {
    title: "L'impact de l'IA sur la finance",
    description:
      "Découvrez comment l'intelligence artificielle transforme les services financiers.",
    image:
      "https://aicrafters.com/wp-content/uploads/2024/05/ia-dans-la-finance.jpg",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Faicrafters.com%2Flimpact-de-lia-dans-le-secteur-financier%2F&psig=AOvVaw09KkkiMRND1Tu8hocqMdDd&ust=1748337990739000&source=images&cd=vfe&opi=89978449&ved=0CBgQ3YkBahcKEwjYtdLY6MCNAxUAAAAAHQAAAAAQBA",
  },
  {
    title: "Crédit scoring intelligent",
    description:
      "Analyse approfondie du scoring de crédit basé sur le machine learning.",
    image:
      "https://www.pymnts.com/wp-content/uploads/2019/02/Aire-AI-Credit-Scoring.jpg",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pymnts.com%2Fnews%2Falternative-financial-services%2F2019%2Fai-credit-scoring-applicant-risk%2F&psig=AOvVaw1bZd6orfoFc3T7Nvj5DLNu&ust=1748337966855000&source=images&cd=vfe&opi=89978449&ved=0CBgQ3YkBahcKEwiQyaHN6MCNAxUAAAAAHQAAAAAQBA",
  },
  {
    title: "Automatisation des prêts",
    description:
      "Comment automatiser l'octroi de prêts avec des algorithmes intelligents.",
    image:
      "https://www.livementor.com/wpapp/uploads/2025/02/adobestock-621255374-1-1620x1080.jpeg",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.livementor.com%2Fblog%2Foutils-automatisation%2F&psig=AOvVaw0Mwpk0LSFZ8cMNT5Fpz7cs&ust=1748337936242000&source=images&cd=vfe&opi=89978449&ved=0CBgQ3YkBahcKEwjAid6-6MCNAxUAAAAAHQAAAAAQBA",
  },
  {
    title: "Sécurité des données bancaires",
    description: "Les meilleures pratiques de cybersécurité pour les fintechs.",
    image:
      "https://banque.meilleurtaux.com/images/actu/2017-1017_securite-bancaire.jpg",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbanque.meilleurtaux.com%2Ffrais-bancaires%2Factualites%2F2017-octobre%2Fcomment-proteger-ses-donnees-bancaires-et-financieres.html&psig=AOvVaw13IZPO71ms5jn-Rl7-LvEk&ust=1748337833704000&source=images&cd=vfe&opi=89978449&ved=0CBkQ3YkBahcKEwjI-NyN6MCNAxUAAAAAHQAAAAAQBA",
  },
  {
    title: "Conformité réglementaire et IA",
    description:
      "L'IA au service de la conformité dans les services financiers.",
    image:
      "https://f5b623aa.delivery.rocketcdn.me/wp-content/uploads/elementor/thumbs/Blog_Navigating-AI-Compliance-qot6reg72trh0q2jc5iy6am94950ejwjna78c7ez28.jpg",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ffr.shaip.com%2Fblog%2Fnavigating-ai-compliance-strategies-for-ethical-and-regulatory-alignment%2F&psig=AOvVaw2utFvXfY2ywtD0o8h3fcSW&ust=1748337794955000&source=images&cd=vfe&opi=89978449&ved=0CBgQ3YkBahcKEwjYn6P758CNAxUAAAAAHQAAAAAQBA",
  },
  {
    title: "L'expérience client augmentée",
    description:
      "Comment l'IA améliore l'expérience utilisateur dans les banques.",
    image:
      "https://www.supplychaininfo.eu/wp-content/uploads/2020/11/experience-client.jpg",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.supplychaininfo.eu%2Fexperience-client%2F&psig=AOvVaw0Vg7yX4Sgf-jB7vYyknJuc&ust=1748337375390000&source=images&cd=vfe&opi=89978449&ved=0CBgQ3YkBahcKEwjY2Mno58CNAxUAAAAAHQAAAAAQBA",
  },
  {
    title: "Investissements pilotés par l'IA",
    description:
      "Découvrez comment l'IA optimise la gestion des portefeuilles.",
    image:
      "https://www.lemondedudroit.fr/images/stories/1-UNES/intelligence-artificielle-entreprise.jpg",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.lemondedudroit.fr%2Finstitutions%2F63674-intelligence-artificielle-ue-fixe-7-principes-ethiques.html&psig=AOvVaw30tGvNHvZMAhxsjpymqgNy&ust=1748337493264000&source=images&cd=vfe&opi=89978449&ved=0CBgQ3YkBahcKEwiQ7tzU58CNAxUAAAAAHQAAAAAQBA",
  },
  {
    title: "Blockchain et IA dans la finance",
    description: "L'intégration révolutionnaire entre IA et blockchain.",
    image:
      "https://public.bnbstatic.com/image/cms/blog/20230201/72084d62-33c3-4b91-9402-dddce0e11fdf.png",
    link: "https://www.binance.com/fr/blog/all/comment-lintelligence-artificielle-ia-aidetelle-la-blockchain-%C3%A0-se-d%C3%A9velopper--7610519246456095421",
  },
  {
    title: "KYC automatisé grâce à l'IA",
    description: "L'automatisation du processus Know Your Customer.",
    image:
      "https://didit.me/_next/image?url=https%3A%2F%2Fservice-strapi-artifacts-d4f6h8k8.s3.eu-west-1.amazonaws.com%2Fkyc_automation_6_key_benefits_your_business_can_t_miss_ce0678c9bd.webp&w=2048&q=100",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdidit.me%2Ffr%2Fblog%2Fkyc-automation-6-key-benefits-your-business-can-t-miss&psig=AOvVaw3IhV4QuMEKEuwgQmgHUTAU&ust=1748338109894000&source=images&cd=vfe&opi=89978449&ved=0CBgQ3YkBahcKEwiAvNSW6cCNAxUAAAAAHQAAAAAQBA",
  },
  {
    title: "Détection de fraude en temps réel",
    description: "Comment l'IA détecte la fraude bancaire instantanément.",
    image:
      "https://a-us.storyblok.com/f/1012896/2667x1500/ae6762a0e1/fraud-detection-02.jpg",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.quantexa.com%2Ffr%2Fsolutions%2Ffraud%2F&psig=AOvVaw0Qb4eE8T_NhXMrzN_GdosL&ust=1748338242407000&source=images&cd=vfe&opi=89978449&ved=0CBgQ3YkBahcKEwj40c3X6cCNAxUAAAAAHQAAAAAQBA",
  },
];

export default articles;
