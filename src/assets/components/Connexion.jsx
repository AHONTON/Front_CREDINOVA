import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../components/AuthUser";
import { motion } from "framer-motion";

export default function Connexion() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/api/user/login", {
        email,
        motDePasse: password,
      });

      if (response.data.token && response.data.user) {
        Swal.fire({
          icon: "success",
          title: "Connexion réussie",
          text: response.data.message || "Bienvenue !",
          background: "#1e3a8a",
          iconColor: "#fff",
          color: "#fff",
          confirmButtonText: "Continuer",
          customClass: {
            title: "text-white text-lg font-semibold",
            popup: "rounded-xl px-6 py-4",
            confirmButton: "bg-white text-blue-900 font-bold px-4 py-2 rounded-full hover:bg-gray-200",
            htmlContainer: "text-white text-sm mt-2",
          },
        });

        login(response.data.token, response.data.user);
        navigate("/user_dashboard");
      } else {
        Swal.fire({
          icon: "error",
          title: "Erreur",
          text: "Identifiants invalides",
          background: "#1e3a8a",
          iconColor: "#fff",
          color: "#fff",
          confirmButtonText: "Réessayer",
          customClass: {
            title: "text-white text-lg font-semibold",
            popup: "rounded-xl px-6 py-4",
            confirmButton: "bg-white text-blue-900 font-bold px-4 py-2 rounded-full hover:bg-gray-200",
            htmlContainer: "text-white text-sm mt-2",
          },
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Erreur",
        text: error.response?.data?.message || "Une erreur est survenue, réessayez plus tard.",
        background: "#1e3a8a",
        iconColor: "#fff",
        color: "#fff",
        confirmButtonText: "Fermer",
        customClass: {
          title: "text-white text-lg font-semibold",
          popup: "rounded-xl px-6 py-5",
          confirmButton: "bg-white text-blue-900 font-bold px-4 py-2 rounded-full hover:bg-gray-200",
          htmlContainer: "text-white text-sm mt-2",
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-black">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md px-8 py-10 bg-white border border-black shadow-md rounded-2xl"
      >
        <h1 className="text-3xl font-semibold text-center text-black">Connexion</h1>
        <p className="mt-2 text-sm text-center text-black">Connectez-vous pour continuer</p>

        <div className="mt-8 space-y-4">
          <div className="flex items-center h-12 gap-2 px-4 bg-white border border-black rounded-full">
            <input
              type="email"
              placeholder="Adresse email"
              className="w-full text-sm text-black placeholder-black bg-transparent outline-none"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
          </div>

          <div className="flex items-center h-12 gap-2 px-4 bg-white border border-black rounded-full">
            <input
              type="password"
              placeholder="Mot de passe"
              className="w-full text-sm text-black placeholder-black bg-transparent outline-none"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
            />
          </div>
        </div>

        <div className="mt-4 text-sm text-right">
          <a className="font-bold text-blue-900 hover:underline" href="#">
            Mot de passe oublié ?
          </a>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full mt-6 font-medium text-white transition-opacity bg-blue-900 rounded-full h-11 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Connexion..." : "Se connecter"}
        </button>

        <p className="mt-6 text-sm text-center text-black">
          Vous n'avez pas de compte ?{" "}
          <Link className="font-bold text-blue-900 hover:underline" to="/inscription">
            Créer un compte
          </Link>
        </p>
      </motion.form>
    </div>
  );
}
