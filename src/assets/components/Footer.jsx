import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  ArrowUp,
  Send,
} from "iconoir-react";
import { useEffect, useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const floatAnimation = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: [0, -8, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "loop",
    },
  },
  whileHover: {
    scale: 1.1,
    rotate: -5,
    transition: { type: "spring", stiffness: 300 },
  },
};

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-gray-900 text-white mt-8 relative overflow-hidden"
    >
      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          initial="initial"
          animate="animate"
          whileHover="whileHover"
          variants={floatAnimation}
          className="fixed bottom-6 right-6 z-50 bg-blue-900 hover:bg-indigo-600 text-white p-3 rounded-full shadow-lg"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        <motion.div variants={fadeUp} custom={1} className="flex flex-col items-start sm:items-start">
          <div className="flex items-center gap-2 mb-4">
            <img src="./logo.png" alt="Logo" className="h-12 w-12 object-contain" />
            <h3 className="text-xl font-bold">CREDINova</h3>
          </div>
          <p className="mb-4 text-justify">
            Rejoignez-nous dès maintenant pour bénéficier de notre expertise en intelligence artificielle appliquée à la finance inclusive.
          </p>
          <div className="flex items-center w-full max-w-xs bg-white overflow-hidden rounded">
            <input
              type="email"
              placeholder="Email Address"
              className="px-2 py-2 text-black flex-grow outline-none"
            />
            <button className="bg-blue-900 rounded text-white px-4 py-2 font-medium hover:bg-indigo-600 transition-all flex items-center justify-center">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} custom={2}>
          <h4 className="text-base font-semibold mb-3">CREDINova</h4>
          <ul className="space-y-1 opacity-80">
            {["Accueil", "A propos", "Services", "Demande", "Contact"].map((item) => (
              <motion.li
                key={item}
                whileHover={{ y: -2, color: "#93c5fd" }}
                className="cursor-pointer transition-colors"
              >
                <a href="#">{item}</a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={fadeUp} custom={3}>
          <h4 className="text-base font-semibold mb-3">Ressources</h4>
          <ul className="space-y-1 opacity-80">
            {["Découverte", "Blogs", "FAQ"].map((item) => (
              <motion.li
                key={item}
                whileHover={{ y: -2, color: "#93c5fd" }}
                className="cursor-pointer transition-colors"
              >
                <a href="#">{item}</a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={fadeUp} custom={4}>
          <h4 className="text-base font-semibold mb-3">Contact</h4>
          <ul className="space-y-1 opacity-80">
            <li>Bénin, Cotonou</li>
            <li>AI-CREDINova</li>
            <li>(+229) 01 541 422 55</li>
            <li>ai.credinova@hotmail.bj</li>
          </ul>
          <button className="mt-4 px-4 py-2 bg-blue-900 hover:bg-indigo-600 font-medium transition rounded">
            Demander une assistance
          </button>
        </motion.div>
      </div>

      <motion.div
        variants={fadeUp}
        custom={5}
        className="border-t border-gray-700 py-6 px-4 sm:px-6 flex flex-col items-center gap-3 text-center"
      >
        <p className="max-w-xl mx-auto leading-relaxed">
          © {new Date().getFullYear()} CREDINova. Tous droits réservés. <br className="sm:hidden" />
          Notre mission : rendre le crédit intelligent, accessible et personnalisé à tous.
        </p>
        <div className="flex gap-5 justify-center mt-2">
          <a href="#"><Linkedin className="w-5 h-5 hover:text-blue-400" /></a>
          <a href="#"><Twitter className="w-5 h-5 hover:text-blue-400" /></a>
          <a href="#"><Facebook className="w-5 h-5 hover:text-blue-400" /></a>
          <a href="#"><Instagram className="w-5 h-5 hover:text-blue-400" /></a>
        </div>
      </motion.div>
    </motion.footer>
  );
}
