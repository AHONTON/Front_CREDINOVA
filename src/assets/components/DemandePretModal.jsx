import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function DemandePretModal({ isOpen, onClose, userId }) {
  const [montant, setMontant] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!userId) {
      Swal.fire(
        "Erreur",
        "Vous devez être connecté pour faire une demande",
        "error"
      );
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/demandes", {
        userId,
        montant,
      });

      if (response.data.success) {
        Swal.fire("Succès", "Votre demande a été envoyée", "success");
        onClose();
      } else {
        Swal.fire(
          "Erreur",
          response.data.message || "Erreur lors de l'envoi",
          "error"
        );
      }
    } catch (error) {
      Swal.fire("Erreur", error.message || "Erreur serveur", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="p-8 bg-white rounded shadow-lg w-96"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="mb-4 text-xl font-bold">Faire une demande de prêt</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            placeholder="Montant souhaité"
            value={montant}
            onChange={(e) => setMontant(e.target.value)}
            className="w-full px-3 py-2 mb-4 border rounded"
            required
            min={1}
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 font-semibold text-white bg-blue-600 rounded hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Envoi..." : "Envoyer la demande"}
          </button>
        </form>
        <button
          onClick={onClose}
          className="mt-4 text-sm text-black hover:text-gray-900"
        >
          Annuler
        </button>
      </div>
    </div>
  );
}
