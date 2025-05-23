import React from "react";
import { motion } from "framer-motion";

const sections = [
  {
    id: 1,
    text: "Découvrez une expérience intuitive et performante pour gérer vos données en toute simplicité.",
    imgSrc: "/img/fn.png",
    imgAlt: "Interface intuitive",
    delay: 0.1,
  },
  {
    id: 2,
    text: "Notre plateforme vous offre des outils puissants pour analyser et visualiser vos données financières rapidement.",
    imgSrc: "/img/BanqueF.png",
    imgAlt: "Analyse financière",
    delay: 0.3,
  },
  {
    id: 3,
    text: "Optimisez vos décisions grâce à une interface claire et des fonctionnalités avancées adaptées à vos besoins.",
    imgSrc: "/img/credi.jpg",
    imgAlt: "Décisions optimisées",
    delay: 0.5,
  },
];

export default function Section() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-10 mx-auto space-y-10 md:flex-row md:space-y-0 md:space-x-10 max-w-7xl">
      {sections.map(({ id, text, imgSrc, imgAlt, delay }) => (
        <motion.div
          key={id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay }}
          whileHover={{ scale: 1.05, y: -5 }}
          className="flex flex-col items-center p-6 text-center transition-all bg-blue-800 shadow-md rounded-2xl min-h-[300px] max-w-xs w-full"
        >
          <img
            src={imgSrc}
            alt={imgAlt}
            loading="lazy"
            className="object-cover mb-4 rounded-full w-28 h-28 md:w-36 md:h-36"
          />
          <p className="font-medium text-white">{text}</p>
        </motion.div>
      ))}
    </div>
  );
}
