import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Key } from "lucide-react";

const questions = [
  {
    question: "Qu'est-ce que la plateforme propose ?",
    answer: "Elle utilise l'IA pour analyser les données et octroyer des prêts rapidement.",
    bgColor: "bg-blue-300"
  },
  {
    question: "Comment les données sont-elles sécurisées ?",
    answer: "Nous utilisons le chiffrement de bout en bout et des audits réguliers.",
    bgColor: "bg-green-300"
  },
  {
    question: "Quel est le délai d'octroi d'un prêt ?",
    answer: "En général, moins de 24 heures après validation du dossier.",
    bgColor: "bg-yellow-300"
  },
  {
    question: "Puis-je simuler mon éligibilité ?",
    answer: "Oui, vous pouvez simuler un prêt depuis votre espace personnel.",
    bgColor: "bg-pink-300"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function Question() {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleQuestion = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const toggleAll = () => {
    if (openIndexes.length === questions.length) {
      setOpenIndexes([]);
    } else {
      setOpenIndexes(questions.map((_, i) => i));
    }
  };

  const allOpen = openIndexes.length === questions.length;

  return (
    <div className="max-w-5xl p-4 mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="flex-1 text-2xl font-bold text-center">Questions Fréquentes</h2>
        <button
          onClick={toggleAll}
          aria-label={allOpen ? "Fermer toutes les questions" : "Ouvrir toutes les questions"}
          className="p-2 ml-4 text-white transition bg-blue-900 rounded-full hover:bg-blue-800"
        >
          <motion.span
            animate={{ rotate: allOpen ? 180 : 0 }}
            transition={{ duration: 0.4 }}
          >
            <Key className="w-7 h-7" />
          </motion.span>
        </button>
      </div>

      <motion.div
        className="grid grid-cols-1 gap-4 md:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {questions.map((item, index) => {
          const isOpen = openIndexes.includes(index);

          return (
            <motion.div
              key={index}
              variants={cardVariants}
              whileTap={{ scale: 0.98 }}
              whileHover={{ scale: 1.05, boxShadow: "0 12px 24px rgba(0, 0, 0, 0.15)" }}
              animate={{ scale: isOpen ? 1.04 : 1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`rounded-2xl p-6 shadow-md border cursor-pointer transition-colors duration-300 ${item.bgColor}`}
              onClick={() => toggleQuestion(index)}
            >
              <div className="flex items-center justify-between w-full text-base font-semibold text-left select-none">
                {item.question}
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={e => { e.stopPropagation(); toggleQuestion(index); }}
                >
                  <Key className="w-6 h-6 text-gray-900 cursor-pointer" />
                </motion.span>
              </div>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="mt-3 overflow-hidden text-sm text-gray-800"
                  >
                    <div>{item.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
