import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  exit: { opacity: 0, y: -20 },
};

export default function ArticleCard({ article }) {
  return (
    <motion.div
      className="overflow-hidden bg-white shadow-lg rounded-2xl"
      variants={cardVariants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      style={{ width: "100%" }}
    >
      <motion.img
        src={article.image}
        alt={article.title}
        className="object-cover h-40 Aw-full"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      />
      <div className="p-4">
        <h3 className="mb-2 text-xl font-semibold">{article.title}</h3>
        <p className="mb-4 text-sm text-black">{article.description}</p>
        <a
          href={article.link}
          className="inline-flex items-center px-3 py-1 italic text-white transition-colors bg-blue-900 rounded hover:bg-blue-800"
        >
          Consulter l'article <ArrowRight className="w-4 h-4 ml-1" />
        </a>
      </div>
    </motion.div>
  );
}
