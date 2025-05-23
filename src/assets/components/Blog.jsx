import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import ArticleCard from "./ArticleCard";

const articles = [
  {
    title: "L'impact de l'IA sur la finance",
    description:
      "Découvrez comment l'intelligence artificielle transforme les services financiers.",
    image:
      "https://datascientest.com/wp-content/uploads/2024/06/utilisation-IA-par-finance-datascientest.jpg",
    link: "/blog/impact-ia-finance",
  },
  {
    title: "Crédit scoring intelligent",
    description:
      "Analyse approfondie du scoring de crédit basé sur le machine learning.",
    image:
      "https://www.pymnts.com/wp-content/uploads/2019/02/Aire-AI-Credit-Scoring.jpg",
    link: "",
  },
  {
    title: "Automatisation des prêts",
    description:
      "Comment automatiser l'octroi de prêts avec des algorithmes intelligents.",
    image:
      "https://cdn.prod.website-files.com/647dcfe1db0e40779aaaa753/64a5634e492999ffae21bb56_64425eba7277be37738efa85_Blog%2520-%2520What%2520is%2520AP%2520automation.jpeg",
    link: "https://www.efinancialcareers.com/news/2024/01/ai-loan-automation",
  },
  {
    title: "Sécurité des données bancaires",
    description: "Les meilleures pratiques de cybersécurité pour les fintechs.",
    image:
      "https://www.duret-cottet.fr/wp-content/uploads/2024/12/securite-banque-en-ligne-1220x600.webp",
    link: "https://www.banque-france.fr/stabilite-financiere/banque-en-ligne-securite-des-donnees",
  },
  {
    title: "Conformité réglementaire et IA",
    description:
      "L'IA au service de la conformité dans les services financiers.",
    image:
      "https://f5b623aa.delivery.rocketcdn.me/wp-content/uploads/elementor/thumbs/Blog_Navigating-AI-Compliance-qot6reg72trh0q2jc5iy6am94950ejwjna78c7ez28.jpg",
    link: "https://www.efinancialcareers.com/news/2024/01/ai-compliance-fintech",
  },
  {
    title: "L'expérience client augmentée",
    description:
      "Comment l'IA améliore l'expérience utilisateur dans les banques.",
    image:
      "https://2976541.fs1.hubspotusercontent-na1.net/hubfs/2976541/augmenter%20satisfaction%20client.png",
    link: "/blog/experience-client",
  },
  {
    title: "Investissements pilotés par l'IA",
    description:
      "Découvrez comment l'IA optimise la gestion des portefeuilles.",
    image:
      "https://baumeister.swiss/wp-content/uploads/2021/02/technology-3389904_1920-1.jpg",
    link: "/blog/ia-investissement",
  },
  {
    title: "Blockchain et IA dans la finance",
    description: "L'intégration révolutionnaire entre IA et blockchain.",
    image:
      "https://public.bnbstatic.com/image/cms/blog/20230201/72084d62-33c3-4b91-9402-dddce0e11fdf.png",
    link: "/blog/blockchain-ia",
  },
  {
    title: "KYC automatisé grâce à l'IA",
    description: "L'automatisation du processus Know Your Customer.",
    image:
      "https://didit.me/_next/image?url=https%3A%2F%2Fservice-strapi-artifacts-d4f6h8k8.s3.eu-west-1.amazonaws.com%2Fkyc_automation_6_key_benefits_your_business_can_t_miss_ce0678c9bd.webp&w=2048&q=100",
    link: "/blog/kyc-automatiser",
  },
  {
    title: "Détection de fraude en temps réel",
    description: "Comment l'IA détecte la fraude bancaire instantanément.",
    image:
      "https://imgsrv2.voi.id/9xEkLsh4tnvTP5oXd4otYXjhgrps-nkcX6aX9BfPpdk/auto/1280/853/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy80MzQzMzUvMjAyNDExMTYxNzQ2LW1haW4uY3JvcHBlZF8xNzMxNzUzOTkzLmpwZWc.jpg",
    link: "/blog/detection-fraude",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
      when: "beforeChildren",
    },
  },
  exit: { opacity: 0, y: -30 },
};

const headerVariants = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const buttonsVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.5 } },
};

export default function Blog() {
  const [current, setCurrent] = useState(0);
  const [showBlog, setShowBlog] = useState(false);
  const totalSlides = Math.ceil(articles.length / 4);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % totalSlides);
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  useEffect(() => {
    const timer = setTimeout(() => setShowBlog(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showBlog) return;
    const interval = setInterval(nextSlide, 10000);
    return () => clearInterval(interval);
  }, [showBlog]);

  if (!showBlog) return null;

  const getVisibleArticles = () => {
    const start = current * 4;
    return articles.slice(start, start + 4);
  };

  const visibleArticles = getVisibleArticles();
  const justifyClass =
    visibleArticles.length < 4 ? "justify-center" : "justify-start";

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      className="relative w-full px-4 py-8 mx-auto overflow-hidden bg-gray-700 bg-center bg-cover max-w-7xl md:px-10"
      style={{
        backgroundImage:
          "url('https://cdn.edi-static.fr/image/upload/c_scale,dpr_auto,f_auto,q_auto,w_auto/c_limit,w_auto/v1/Img/BREVE/2023/10/385582/Comment-elle-modifier-relations-avec-F.jpg')",
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-black pointer-events-none"
      />

      <motion.h2
        className="relative z-10 mb-6 text-2xl font-bold text-center text-white md:text-4xl"
        variants={headerVariants}
      >
        Blog IA | Finance
      </motion.h2>

      <motion.div
        className="relative z-10 flex items-center justify-center mb-4 space-x-4"
        variants={buttonsVariants}
      >
        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          onClick={prevSlide}
          className="text-white hover:text-blue-300"
          aria-label="Slide précédent"
        >
          <ArrowLeftCircle className="w-6 h-6" />
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          onClick={nextSlide}
          className="text-white hover:text-blue-300"
          aria-label="Slide suivant"
        >
          <ArrowRightCircle className="w-6 h-6" />
        </motion.button>
      </motion.div>

      <div
        {...handlers}
        className={`relative z-10 w-full flex min-h-[400px] gap-6 ${justifyClass}`}
      >
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={current}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${visibleArticles.length} gap-6`}
            style={{ width: "100%", maxWidth: 1240 }}
          >
            {visibleArticles.map((article, index) => (
              <ArticleCard key={index} article={article} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-10 flex items-center justify-center mt-6 space-x-2">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <motion.div
            key={i}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              i === current ? "bg-blue-600" : "bg-gray-300"
            }`}
            animate={{ scale: i === current ? 1.5 : 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => setCurrent(i)}
            aria-label={`Aller au slide ${i + 1}`}
          />
        ))}
      </div>
    </motion.div>
  );
}
