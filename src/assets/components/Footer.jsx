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
      className="relative mt-8 overflow-hidden text-center text-white bg-gray-900"
    >
      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          initial="initial"
          animate="animate"
          whileHover="whileHover"
          variants={floatAnimation}
          className="fixed z-50 p-3 text-white bg-blue-900 rounded-full shadow-lg bottom-6 right-6 hover:bg-indigo-600"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}

      <div className="grid grid-cols-1 gap-10 px-3 py-6 mx-auto max-w-7xl sm:px-6 sm:grid-cols-2 md:grid-cols-4">
        <motion.div
          variants={fadeUp}
          custom={1}
          className="flex flex-col items-start sm:items-start"
        >
          <div className="flex items-center gap-2 mb-4">
            <img
              src="./logo.png"
              alt="Logo"
              className="object-contain w-12 h-12"
            />
            <h3 className="text-xl font-bold">CREDINova</h3>
          </div>
          <p className="mb-4 italic text-justify">
            Rejoignez-nous dès maintenant pour bénéficier de notre expertise en
            intelligence artificielle appliquée à la finance inclusive.
          </p>
          <div className="flex items-center w-full max-w-xs overflow-hidden bg-white rounded">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-grow px-1 py-1 text-black outline-none"
            />
            <button className="flex items-center justify-center px-4 py-2 font-medium text-white transition-all bg-blue-900 rounded hover:bg-indigo-600">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} custom={2}>
          <h4 className="mb-3 text-base font-semibold">CREDINova</h4>
          <ul className="space-y-1 opacity-80">
            {["Accueil", "A propos", "Services", "Demande", "Contact"].map(
              (item) => (
                <motion.li
                  key={item}
                  whileHover={{ y: -2, color: "#93c5fd" }}
                  className="transition-colors cursor-pointer"
                >
                  <a href="#">{item}</a>
                </motion.li>
              )
            )}
          </ul>
        </motion.div>

        <motion.div variants={fadeUp} custom={3}>
          <h4 className="mb-3 text-base font-semibold">Ressources</h4>
          <ul className="space-y-1 opacity-80">
            {["Découverte", "Blogs", "FAQ"].map((item) => (
              <motion.li
                key={item}
                whileHover={{ y: -2, color: "#93c5fd" }}
                className="transition-colors cursor-pointer"
              >
                <a href="#">{item}</a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={fadeUp} custom={4}>
          <h4 className="mb-3 text-base font-semibold">Contact</h4>
          <ul className="space-y-1 opacity-80">
            <li>Bénin, Cotonou</li>
            <li>AI-CREDINova</li>
            <li>(+229) 01 541 422 55</li>
            <li>ai.credinova@hotmail.bj</li>
          </ul>
          <button className="px-4 py-2 mt-4 font-medium transition bg-blue-900 rounded hover:bg-indigo-600">
            Demander une assistance
          </button>
        </motion.div>
      </div>

      <motion.div
        variants={fadeUp}
        custom={5}
        className="flex flex-col items-center gap-3 px-4 py-6 text-center border-t border-gray-700 sm:px-6"
      >
        <p className="max-w-xl mx-auto leading-relaxed">
          © {new Date().getFullYear()} CREDINova | Tous droits réservés. <br />
          Notre mission : rendre le crédit intelligent, accessible et
          personnalisé à tous.
        </p>
        <div className="flex justify-center gap-5 mt-2">
          <a href="#">
            <Linkedin className="w-5 h-5 hover:text-blue-900" />
          </a>
          <a href="#">
            <Twitter className="w-5 h-5 hover:text-blue-900" />
          </a>
          <a href="#">
            <Facebook className="w-5 h-5 hover:text-blue-900" />
          </a>
          <a href="#">
            <Instagram className="w-5 h-5 hover:text-blue-900" />
          </a>
        </div>
      </motion.div>
    </motion.footer>
  );
}
