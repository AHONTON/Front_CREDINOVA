import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import {
  FaGoogle,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaTimes,
} from "react-icons/fa";

export default function Inscription({ onClose }) {
  const modalRef = useRef();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const motDePasse = watch("motDePasse", "");

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:5000/api/user/register", data);
      console.log("Inscription réussie :", response.data);
      onClose();
    } catch (error) {
      console.error("Erreur d'inscription :", error.response?.data || error.message);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <AnimatePresence>
        <motion.div
          ref={modalRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="relative w-full max-w-7xl mx-4 bg-white p-6 sm:p-8 rounded-xl shadow-lg overflow-y-auto max-h-[90vh]"
        >
          {/* Bouton de fermeture */}
          <button
            onClick={onClose}
            className="absolute text-blue-900 top-4 right-4 hover:text-red-600 focus:outline-none"
          >
            <FaTimes size={22} />
          </button>

          <h2 className="mb-6 text-2xl font-bold text-center text-blue-900">Créer un compte</h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3"
            noValidate
          >
            {[
              { name: "nom", required: true },
              { name: "prenom", required: true },
              { name: "email", required: true, type: "email" },
              { name: "motDePasse", required: true, type: "password" },
              { name: "confirmPassword", required: true, type: "password" },
              { name: "pays" },
              { name: "telephone", type: "tel" },
              { name: "adresse" },
              { name: "numCIP" },
              { name: "dateNaissance", type: "date" },
              { name: "lieuNaissance" },
              { name: "sexe", type: "select" },
              { name: "casierJudiciaire", required: true },
              { name: "situationFamiliale" },
              { name: "situationProfessionnelle" },
              { name: "profession" },
              { name: "revenuMensuel", type: "number" },
            ].map((field, index) => (
              <div key={index}>
                {field.type === "select" ? (
                  <select
                    {...register(field.name)}
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-900"
                  >
                    <option value="">Sexe</option>
                    <option value="Masculin">Masculin</option>
                    <option value="Féminin">Féminin</option>
                    <option value="Autre">Autre</option>
                  </select>
                ) : (
                  <input
                    {...register(field.name, {
                      required: field.required && `${field.name} est requis`,
                      minLength:
                        field.name === "motDePasse"
                          ? { value: 6, message: "Au moins 6 caractères" }
                          : undefined,
                      pattern:
                        field.name === "email"
                          ? {
                              value: /^\S+@\S+$/i,
                              message: "Email invalide",
                            }
                          : undefined,
                      validate:
                        field.name === "confirmPassword"
                          ? (value) =>
                              value === motDePasse ||
                              "Les mots de passe ne correspondent pas"
                          : undefined,
                      valueAsNumber: field.type === "number",
                    })}
                    placeholder={field.name
                      .replace(/([A-Z])/g, " $1")
                      .replace(/^./, (c) => c.toUpperCase()) + (field.required ? " *" : "")}
                    type={field.type || "text"}
                    className="w-full px-4 py-2 font-bold placeholder-black border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
                  />
                )}
                {errors[field.name] && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors[field.name]?.message}
                  </p>
                )}
              </div>
            ))}

            <div className="flex flex-col items-center justify-between gap-4 mt-6 sm:flex-row sm:col-span-2 md:col-span-3">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitting}
                className="w-full px-6 py-2 font-semibold text-white bg-blue-900 rounded-md center sm:w-auto hover:bg-green-700 disabled:opacity-50"
              >
                {isSubmitting ? "Inscription..." : "Créer un compte"}
              </motion.button>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <span className="text-sm font-medium text-black font-borld">ou avec</span>
                {[
                  { icon: <FaGoogle />, bg: "bg-red-600", label: "Google" },
                  { icon: <FaFacebookF />, bg: "bg-blue-900", label: "Facebook" },
                  { icon: <FaTwitter />, bg: "bg-blue-900", label: "Twitter" },
                  { icon: <FaLinkedinIn />, bg: "bg-blue-900", label: "LinkedIn" },
                ].map((btn, idx) => (
                  <button
                    key={idx}
                    className={`${btn.bg} text-white p-2 rounded-full hover:scale-105 transition-transform flex items-center justify-center`}
                    title={btn.label}
                  >
                    {btn.icon}
                  </button>
                ))}
              </div>
            </div>
          </form>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
