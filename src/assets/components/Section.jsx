import React from "react";
import { motion } from "framer-motion";
import fn from "../img/fn.png";
import credi from "../img/credi.jpg";
import BanqueF from "../img/banqueF.png";

const sections = [
  {
    id: 1,
    text: "Découvrez une expérience intuitive et performante pour gérer vos données en toute simplicité.",
    imgSrc: fn,
    imgAlt: "Image 1",
    delay: 0.1,
  },
  {
    id: 2,
    text: "Notre plateforme vous offre des outils puissants pour analyser et visualiser vos données financières rapidement.",
    imgSrc: BanqueF,
    imgAlt: "Image 2",
    delay: 0.3,
  },
  {
    id: 3,
    text: "Optimisez vos décisions grâce à une interface claire et des fonctionnalités avancées adaptées à vos besoins.",
    imgSrc: credi,
    imgAlt: "Image 3",
    delay: 0.5,
  },
];

export default function Section() {
  return (
    <div className="flex flex-col items-center justify-center max-w-6xl px-4 py-10 mx-auto space-y-10 font-bold text-black md:flex-row md:space-y-0 md:space-x-20">
      {sections.map(({ id, text, imgSrc, imgAlt, delay }) => (
        <motion.div
          key={id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay }}
          whileHover={{ scale: 1.05, y: -5 }}
          className="flex flex-col items-center p-6 text-center transition-all bg-blue-gray-700 shadow-md rounded-xl min-h-[300px]"
        >
          <img
            src={imgSrc}
            alt={imgAlt}
            className="object-cover mb-4 rounded-full w-28 h-28 md:w-40 md:h-40"
          />
          <p className="text-white">{text}</p>
        </motion.div>
      ))}
    </div>
  );
}
