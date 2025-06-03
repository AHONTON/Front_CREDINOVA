// import React, { useState } from "react";
// import Inscription from "../components/Inscription";
// import {Connexion} from "../components/Connexion";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X } from "lucide-react";
// import { Link } from "react-router-dom";
// import logo from "../../../public/logo.png";
// import { Typography } from "@material-tailwind/react";

// const tabs = [
//   { label: "Accueil", path: "/" },
//   { label: "À propos", path: "/about" },
//   { label: "Services", path: "/services" },
//   { label: "Demande", path: "/demande" },
//   { label: "Contact", path: "/contact" },
// ];

// export default function Header() {
//   const [activeTab, setActiveTab] = useState(tabs[0].label);
//   const [isOpen, setIsOpen] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [isSignup, setIsSignup] = useState(true);

//   return (
//     <header className="sticky top-0 z-50 w-full bg-blue-900 shadow-md">
//       <div className="px-3 py-2 mx-auto max-w-7xl">
//         <div className="flex items-center justify-between">
//           <Link to="/" className="flex items-center gap-2">
//             <img className="w-10 h-10 rounded" src={logo} alt="Logo" />
//             <span className="text-xl font-bold text-white">CREDINOVA</span>
//           </Link>

//           <nav className="items-center hidden gap-3 md:flex">
//             {tabs.map(({ label, path }) => (
//               <Link
//                 key={label}
//                 to={path}
//                 onClick={() => setActiveTab(label)}
//                 className={`relative px-2 py-1 font-medium text-white hover:text-blue-300 ${
//                   activeTab === label ? "font-bold" : ""
//                 }`}
//               >
//                 {label}
//                 {activeTab === label && (
//                   <motion.div
//                     layoutId="underline"
//                     className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full"
//                     transition={{ type: "spring", stiffness: 500, damping: 30 }}
//                   />
//                 )}
//               </Link>
//             ))}

//             <input
//               type="text"
//               placeholder="Rechercher..."
//               className="px-2 py-1 text-sm text-black bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />

//             <motion.button
//               onClick={() => {
//                 setShowModal(true);
//                 setIsSignup(true);
//                 setIsOpen(false);
//               }}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-3 py-1 text-white font-bold bg-[#fa2c44] rounded hover:bg-blue-gray-900"
//             >
//               Inscription
//             </motion.button>

//             <motion.button
//               onClick={() => {
//                 setShowModal(true);
//                 setIsSignup(false);
//                 setIsOpen(false);
//               }}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-3 py-1 font-bold text-white bg-green-600 rounded hover:bg-blue-600"
//             >
//               Connexion
//             </motion.button>
//           </nav>

//           <div className="md:hidden">
//             <button onClick={() => setIsOpen(true)}>
//               <Menu size={28} className="text-white" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* MODALE INSCRIPTION / CONNEXION */}
//       <AnimatePresence>
//         {showModal && (
//           <>
//             <motion.div
//               className="fixed inset-0 z-40 bg-black bg-opacity-50"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setShowModal(false)}
//             />
//             <div className="fixed inset-0 z-50 flex items-center justify-center min-h-screen">
//               <motion.div
//                 initial={{ scale: 0.9, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 exit={{ scale: 0.9, opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//                 className="relative w-full max-w-4xl mx-4 overflow-hidden bg-white shadow-2xl rounded-xl"
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <button
//                   className="absolute text-gray-600 top-3 right-3 hover:text-black"
//                   onClick={() => setShowModal(false)}
//                   aria-label="Fermer la modale"
//                 >
//                   <X size={24} />
//                 </button>

//                 {isSignup ? <Inscription /> : <Connexion onClose={() => setShowModal(false)} />}

//                 <Typography color="gray" className="mt-4 text-sm text-center">
//                   {isSignup ? (
//                     <>
//                       Vous avez déjà un compte ?{" "}
//                       <button
//                         className="font-medium text-blue-600 hover:underline"
//                         onClick={() => setIsSignup(false)}
//                       >
//                         Se connecter
//                       </button>
//                     </>
//                   ) : (
//                     <>
//                       Pas encore de compte ?{" "}
//                       <button
//                         className="font-medium text-blue-600 hover:underline"
//                         onClick={() => setIsSignup(true)}
//                       >
//                         S'inscrire
//                       </button>
//                     </>
//                   )}
//                 </Typography>
//               </motion.div>
//             </div>
//           </>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }
import React, { useState, useRef, useEffect } from "react";
import Inscription from "../components/Inscription";
import Connexion from "../components/Connexion";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../../public/logo.png";
import { Typography } from "@material-tailwind/react";

const tabs = [
  { label: "Accueil", path: "/" },
  { label: "À propos", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Demande", path: "/demande" },
  { label: "Contact", path: "/contact" },
];

export default function Header() {
  const [activeTab, setActiveTab] = useState(tabs[0].label);
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isSignup, setIsSignup] = useState(true);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    };
    if (showModal) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showModal]);

  return (
    <header className="sticky top-0 z-50 w-full bg-blue-900 shadow-md">
      <div className="px-3 py-2 mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img className="w-10 h-10 rounded" src={logo} alt="Logo" />
            <span className="text-xl font-bold text-white">CREDINOVA</span>
          </Link>

          <nav className="items-center hidden gap-3 md:flex">
            {tabs.map(({ label, path }) => (
              <Link
                key={label}
                to={path}
                onClick={() => setActiveTab(label)}
                className={`relative px-2 py-1 font-medium text-white hover:text-blue-300 ${
                  activeTab === label ? "font-bold" : ""
                }`}
              >
                {label}
                {activeTab === label && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}

            <input
              type="text"
              placeholder="Rechercher..."
              className="px-2 py-1 text-sm text-black bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <motion.button
              onClick={() => {
                setShowModal(true);
                setIsSignup(true);
                setIsOpen(false);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-3 py-1 text-white font-bold bg-[#fa2c44] rounded hover:bg-blue-gray-900"
            >
              Inscription
            </motion.button>

            <motion.button
              onClick={() => {
                setShowModal(true);
                setIsSignup(false);
                setIsOpen(false);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-3 py-1 font-bold text-white bg-green-600 rounded hover:bg-blue-600"
            >
              Connexion
            </motion.button>
          </nav>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="flex flex-col gap-2 py-4 text-white md:hidden"
            >
              {tabs.map(({ label, path }) => (
                <Link
                  key={label}
                  to={path}
                  onClick={() => {
                    setActiveTab(label);
                    setIsOpen(false);
                  }}
                  className="px-4 py-2 rounded hover:bg-blue-800"
                >
                  {label}
                </Link>
              ))}
              <button onClick={() => { setShowModal(true); setIsSignup(true); setIsOpen(false); }} className="px-4 py-2 bg-[#fa2c44] rounded">Inscription</button>
              <button onClick={() => { setShowModal(true); setIsSignup(false); setIsOpen(false); }} className="px-4 py-2 bg-green-600 rounded">Connexion</button>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>

      {/* MODALE INSCRIPTION / CONNEXION */}
      <AnimatePresence>
        {showModal && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black bg-opacity-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center min-h-screen">
              <motion.div
                ref={modalRef}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-4xl mx-4 overflow-hidden bg-white shadow-2xl rounded-xl"
              >
                <button
                  className="absolute text-gray-600 top-3 right-3 hover:text-black"
                  onClick={() => setShowModal(false)}
                  aria-label="Fermer la modale"
                >
                  <X size={24} />
                </button>

                {isSignup ? (<Inscription onClose={() => setShowModal(false)} />) : (<Connexion onClose={() => setShowModal(false)} />)}

                <Typography color="gray" className="mt-4 text-sm text-center">
                  {isSignup ? (
                    <>
                      Vous avez déjà un compte ?{" "}
                      <button
                        className="font-medium text-blue-600 hover:underline"
                        onClick={() => setIsSignup(false)}
                      >
                        Se connecter
                      </button>
                    </>
                  ) : (
                    <>
                      Pas encore de compte ?{" "}
                      <button
                        className="font-medium text-blue-600 hover:underline"
                        onClick={() => setIsSignup(true)}
                      >
                        S'inscrire
                      </button>
                    </>
                  )}
                </Typography>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

