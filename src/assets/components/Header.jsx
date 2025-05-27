import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../../public/logo.png";

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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-3 py-1 text-white font-bold bg-[#fa2c44] rounded hover:bg-blue-gray-900"
            >
              Inscription
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-3 py-1 font-bold text-white bg-green-600 rounded hover:bg-blue-600"
            >
              Connexion
            </motion.button>
          </nav>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(true)}>
              <Menu size={28} className="text-white" />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black bg-opacity-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 z-50 w-3/4 h-full p-6 bg-white shadow-lg"
            >
              <div className="flex items-center justify-between mb-6">
                <img className="w-8 h-8" src={logo} alt="Logo" />
                <button onClick={() => setIsOpen(false)}>
                  <X size={28} />
                </button>
              </div>

              <ul className="flex flex-col gap-4">
                {tabs.map(({ label, path }) => (
                  <Link
                    key={label}
                    to={path}
                    onClick={() => {
                      setActiveTab(label);
                      setIsOpen(false);
                    }}
                    className="font-medium text-gray-700 transition-colors cursor-pointer hover:text-blue-600"
                  >
                    {label}
                  </Link>
                ))}

                <input
                  type="text"
                  placeholder="Rechercher..."
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 text-white bg-[#fa2c44] rounded-md hover:bg-green-600"
                >
                  Inscription
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700"
                >
                  Connexion
                </motion.button>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
