import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Swal from "sweetalert2";

export default function Inscription() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/register",
        data
      );
      if (response.status === 201) {
        Swal.fire({
          title: "Succès",
          text: "Inscription réussie!",
          icon: "success",
          confirmButtonColor: "#1e3a8a",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Erreur",
        text: error.response?.data?.message || "Une erreur s'est produite.",
        icon: "error",
        confirmButtonColor: "#1e3a8a",
      });
    }
  };

  const fields = [
    { name: "nom", label: "Nom" },
    { name: "prenom", label: "Prénom" },
    { name: "email", label: "Email", type: "email" },
    { name: "motDePasse", label: "Mot de passe", type: "password" },
    { name: "pays", label: "Pays" },
    { name: "telephone", label: "Téléphone" },
    { name: "adresse", label: "Adresse" },
    { name: "numCIP", label: "Numéro CIP" },
    { name: "dateNaissance", label: "Date de naissance", type: "date", shrink: true },
    { name: "lieuNaissance", label: "Lieu de naissance" },
    { name: "sexe", label: "Sexe" },
    { name: "casierJudiciaire", label: "Casier judiciaire" },
    { name: "situationFamiliale", label: "Situation familiale" },
    { name: "situationProfessionnelle", label: "Situation professionnelle" },
    { name: "profession", label: "Profession" },
    { name: "revenuMensuel", label: "Revenu mensuel", type: "number" },
    { name: "codePostal", label: "Code postal" },
    { name: "ville", label: "Ville" },
    { name: "nationalite", label: "Nationalité" },
    { name: "identifiantNational", label: "Identifiant national" },
    { name: "typeContrat", label: "Type de contrat" },
    { name: "anciennete", label: "Ancienneté dans l’emploi (mois)", type: "number" },
    { name: "chargesMensuelles", label: "Charges mensuelles", type: "number" },
    { name: "montantCreditSouhaite", label: "Montant du crédit souhaité", type: "number" },
    { name: "dureeRemboursement", label: "Durée de remboursement (mois)", type: "number" },
    { name: "finaliteCredit", label: "Finalité du crédit" },
  ];

  // Simule la connexion via un réseau social
  const handleSocialLogin = (provider) => {
    Swal.fire({
      icon: "info",
      title: `Connexion via ${provider}`,
      text: "Cette fonctionnalité sera bientôt disponible.",
      confirmButtonColor: "#1e3a8a",
    });
  };

  return (
    <div className="fixed inset-0 bg-blue-900 bg-[url('/background-pattern.svg')] bg-cover bg-center flex items-center justify-center p-6">
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-[1200px] h-full max-h-[95vh] overflow-y-auto bg-white/90 rounded-2xl p-8 shadow-xl backdrop-blur-sm flex flex-col"
      >
        <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">
          Créer un compte
        </h2>

        <div className="grid flex-grow grid-cols-1 gap-6 overflow-auto sm:grid-cols-2 md:grid-cols-3">
          {fields.map(({ name, label, type, shrink }) => (
            <TextField
              key={name}
              label={label}
              type={type || "text"}
              {...register(name, { required: false })}
              fullWidth
              variant="outlined"
              size="small"
              InputLabelProps={shrink ? { shrink: true } : {}}
              sx={{
                borderRadius: "9999px",
                backgroundColor: "#eff6ff",
                input: {
                  borderRadius: "9999px",
                  backgroundColor: "#eff6ff",
                },
                "& fieldset": {
                  border: "none",
                },
              }}
            />
          ))}
        </div>

        {/* Boutons réseaux sociaux */}
        <div className="flex justify-center gap-6 mt-8">
          {[
            { name: "Google", color: "bg-red-500", icon: "G" },
            { name: "Facebook", color: "bg-blue-900", icon: "F" },
            { name: "Twitter", color: "bg-blue-900", icon: "T" },
          ].map(({ name, color, icon }) => (
            <button
              key={name}
              type="button"
              onClick={() => handleSocialLogin(name)}
              className={`${color} text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold shadow-md hover:opacity-90 transition-opacity`}
              aria-label={`Connexion via ${name}`}
            >
              {icon}
            </button>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="px-8 py-3 text-lg font-semibold text-white transition bg-indigo-600 rounded-full hover:opacity-90"
          >
            S'inscrire
          </button>
        </div>
      </motion.form>
    </div>
  );
}
