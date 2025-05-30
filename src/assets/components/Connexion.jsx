import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function Connexion() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/api/users/login", {
        email,
        password,
      });

      if (response.data.success) {
        Swal.fire({
          icon: "success",
          title: "Connexion réussie",
          text: response.data.message || "Bienvenue !",
          timer: 2000,
          showConfirmButton: false,
        });

        localStorage.setItem("token", response.data.token);
        navigate("/dashboard"); // Redirection après connexion
      } else {
        Swal.fire({
          icon: "error",
          title: "Erreur",
          text: response.data.message || "Identifiants invalides",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Erreur",
        text:
          error.response?.data?.message ||
          "Une erreur est survenue, réessayez plus tard.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md px-8 py-10 bg-white border border-gray-200 shadow-md rounded-2xl"
      >
        <h1 className="text-3xl font-semibold text-center text-gray-900">
          Connexion
        </h1>
        <p className="mt-2 text-sm text-center text-gray-500">
          Connectez-vous pour continuer
        </p>

        <div className="mt-8 space-y-4">
          <div className="flex items-center h-12 gap-2 px-4 bg-white border border-gray-300 rounded-full">
            <svg
              width="16"
              height="11"
              viewBox="0 0 16 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 .55.571 0H15.43l.57.55v9.9l-.571.55H.57L0 10.45zm1.143 1.138V9.9h13.714V1.69l-6.503 4.8h-.697zM13.749 1.1H2.25L8 5.356z"
                fill="#6B7280"
              />
            </svg>
            <input
              type="email"
              aria-label="Adresse email"
              placeholder="Adresse email"
              className="w-full text-sm text-gray-700 placeholder-gray-400 bg-transparent outline-none"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
          </div>

          <div className="flex items-center h-12 gap-2 px-4 bg-white border border-gray-300 rounded-full">
            <svg
              width="13"
              height="17"
              viewBox="0 0 13 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z"
                fill="#6B7280"
              />
            </svg>
            <input
              type="password"
              aria-label="Mot de passe"
              placeholder="Mot de passe"
              className="w-full text-sm text-gray-700 placeholder-gray-400 bg-transparent outline-none"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
            />
          </div>
        </div>

        <div className="mt-4 text-sm text-right">
          <a className="text-indigo-500 hover:underline" href="#">
            Mot de passe oublié ?
          </a>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full mt-6 font-medium text-white transition-opacity bg-indigo-500 rounded-full h-11 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Connexion..." : "Se connecter"}
        </button>

        <p className="mt-6 text-sm text-center text-gray-500">
          Vous n'avez pas de compte ?{" "}
          <a className="text-indigo-500 hover:underline" href="/inscription">
            Créer un compte
          </a>
        </p>
      </form>
    </div>
  );
}
