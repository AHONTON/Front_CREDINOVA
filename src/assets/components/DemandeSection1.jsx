import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import DemandePretModal from "../components/DemandePretModal";
import { useAuth } from "../components/AuthUser";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { Link } from "react-router-dom";

export default function DemandeSection1() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  const handleDemandeClick = () => {
    if (!isAuthenticated) {
      Swal.fire({
        icon: "info",
        title: "Oups🤦‍♂️ connexion requise",
        text: "Vous devez d'abord être connecté pour procéder à une demande de prêt.",
        confirmButtonText: "OK",
      }).then(() => {
        navigate("/connexion");
      });
    } else {
      setIsModalOpen(true);
    }
  };

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
              Optez dès maintenant pour un prêt rapide et sécurisé sur notre
              plateforme sans pour autant vous déplacer.
            </p>

            <div className="flex flex-col items-center gap-4 mt-10 md:flex-row">
              <button
                onClick={handleDemandeClick}
                className="inline-flex items-center justify-center w-full px-6 py-3 font-medium text-white transition bg-blue-900 rounded shadow-md hover:bg-blue-800 focus:outline-none md:w-auto"
              >
                Faites votre demande ici
              </button>

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
                alt="Demande de prêt"
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <DemandePretModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        userId={user?._id || ""}
      />
    </div>
  );
}
