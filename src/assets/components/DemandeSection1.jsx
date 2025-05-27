import React from "react";
import { ArrowRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export default function DemandeSection1() {
  return (
    <div className="relative z-50 flex items-center justify-center px-4 overflow-hidden bg-white sm:px-6 lg:px-8">
      <div className="relative w-full py-12 mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">

          <motion.div
            className="w-full lg:max-w-xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <p className="mb-2 text-sm uppercase text-g1">
              Vous comptez boustez vos activités ?
            </p>
            <h2 className="mb-6 text-4xl font-light leading-snug tracking-tight sm:text-5xl md:text-6xl text-g1">
              Nous avons la{" "}
              <span className="inline-block px-4 my-1 font-bold bg-white border-b-8 border-g4 text-g4 animate__animated animate__flash">
                solution pour vous !
              </span>
            </h2>
            <p className="max-w-lg text-base italic font-bold text-black">
              Optez dès maintenant pour un prêt rapide et sécurisé sur note
              plateforme sans pour autant vous déplacer.
            </p>
            <div className="flex flex-col items-center gap-4 mt-10 md:flex-row">
              <a
                href="/"
                className="inline-flex items-center justify-center w-full px-6 py-3 font-medium text-white transition bg-blue-900 rounded shadow-md hover:bg-blue-800 focus:outline-none md:w-auto"
              >
                Faites votre demande ici
              </a>
              <a
                href="/"
                className="inline-flex items-center font-bold text-blue-900 group text-g1"
              >
                connectez-vous ici
                <ArrowRightIcon className="w-6 h-6 ml-2 text-blue-900 transition-transform group-hover:translate-x-2" />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center w-full lg:w-1/2"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          >
            <ChevronDownIcon className="w-10 h-10 p-2 mb-6 text-blue-900 bg-white rounded-full animate-bounce lg:hidden" />
            <div className="overflow-hidden rounded-[6rem] rounded-br-none rounded-tl-none shadow-lg shadow-green-300 max-w-sm sm:max-w-md md:max-w-lg w-full">
              <img
                src="https://www.parent-solo.fr/images/dossiers/2019-01/pret-bancaire-180831.jpg"
                alt="Reservation Card"
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
