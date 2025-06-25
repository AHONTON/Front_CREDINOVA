import React, { useEffect } from "react";
import axios from "axios";

const SettingsModal = ({ editData, setEditData, onClose, onSave }) => {
  // Charger les données du profil au montage (optionnel si déjà fait ailleurs)
  useEffect(() => {
    axios
      .get("/api/profile") // adapte l’URL
      .then((res) => setEditData(res.data))
      .catch((err) => console.error("Erreur chargement profil:", err));
  }, [setEditData]);

  const handleChange = (e) => {
    setEditData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = () => {
    // Envoi les données modifiées au backend
    axios
      .put("/api/profile", editData) // adapte l’URL et méthode HTTP
      .then((res) => {
        onSave(); // callback parent pour fermer modal / refresh
      })
      .catch((err) => console.error("Erreur sauvegarde profil:", err));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="relative w-full max-w-lg p-6 bg-white rounded shadow-lg">
        <button
          onClick={onClose}
          className="absolute text-gray-500 top-4 right-4 hover:text-gray-800"
          aria-label="Close settings modal"
        >
          &times;
        </button>
        <h2 className="mb-4 text-2xl font-semibold">Modifier le profil</h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSave();
          }}
          className="space-y-4"
        >
          {/* ... tes inputs inchangés ... */}
          <div>
            <label className="block font-medium text-gray-700">
              Nom complet
            </label>
            <input
              name="name"
              type="text"
              value={editData.name || ""}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border rounded"
            />
          </div>
          {/* répète pour tous les autres champs... */}

          <div className="flex justify-end mt-6 space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
            >
              Enregistrer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SettingsModal;
