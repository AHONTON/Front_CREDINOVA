import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function DemandePretModal({
  isOpen,
  onClose,
  userId,
  demandeId,
}) {
  const [montant, setMontant] = useState("");
  const [duree, setDuree] = useState("");
  const [objet, setObjet] = useState("");
  const [typePret, setTypePret] = useState("Personnel");
  const [garanties, setGaranties] = useState("");
  const [personneRessource, setPersonneRessource] = useState("");
  const [numPersonneRessource, setNumPersonneRessource] = useState("");
  const [lienPersonneRessource, setLienPersonneRessource] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingData, setLoadingData] = useState(false);

  useEffect(() => {
    if (isOpen && demandeId) {
      // Chargement des données existantes
      setLoadingData(true);
      axios
        .get(`http://localhost:5000/api/demandes/${demandeId}`)
        .then((res) => {
          const d = res.data;
          setMontant(d.montant || "");
          setDuree(d.duree || "");
          setObjet(d.objet || "");
          setTypePret(d.typePret || "Personnel");
          setGaranties(d.garanties || "");
          setPersonneRessource(d.personneRessource || "");
          setNumPersonneRessource(d.numPersonneRessource || "");
          setLienPersonneRessource(d.lienPersonneRessource || "");
        })
        .catch((err) => {
          Swal.fire("Erreur", "Impossible de charger la demande", "error");
          onClose();
        })
        .finally(() => setLoadingData(false));
    } else if (isOpen && !demandeId) {
      // reset form en création
      setMontant("");
      setDuree("");
      setObjet("");
      setTypePret("Personnel");
      setGaranties("");
      setPersonneRessource("");
      setNumPersonneRessource("");
      setLienPersonneRessource("");
    }
  }, [isOpen, demandeId, onClose]);

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

    if (
      !montant ||
      !duree ||
      !objet.trim() ||
      !personneRessource.trim() ||
      !numPersonneRessource.trim()
    ) {
      Swal.fire(
        "Erreur",
        "Veuillez remplir tous les champs obligatoires",
        "error"
      );
      setLoading(false);
      return;
    }

    try {
      let response;
      const data = {
        userId,
        montant: Number(montant),
        duree: Number(duree),
        objet,
        typePret,
        garanties,
        personneRessource,
        numPersonneRessource,
        lienPersonneRessource,
      };

      if (demandeId) {
        // Modifier une demande existante (PUT)
        response = await axios.put(
          `http://localhost:5000/api/demandes/${demandeId}`,
          data
        );
      } else {
        // Créer une nouvelle demande (POST)
        response = await axios.post("http://localhost:5000/api/demandes", data);
      }

      if (response.data.success) {
        Swal.fire(
          "Succès",
          demandeId
            ? "Votre demande a été mise à jour"
            : "Votre demande a été envoyée",
          "success"
        );
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
        className="p-8 bg-white rounded shadow-lg w-96 max-h-[90vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="mb-4 text-xl font-bold">
          {demandeId
            ? "Modifier la demande de prêt"
            : "Faire une demande de prêt"}
        </h2>
        {loadingData ? (
          <p>Chargement...</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="number"
              placeholder="Montant souhaité *"
              value={montant}
              onChange={(e) => setMontant(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
              min={1}
            />
            <input
              type="number"
              placeholder="Durée en mois *"
              value={duree}
              onChange={(e) => setDuree(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
              min={1}
            />
            <input
              type="text"
              placeholder="Objet du prêt *"
              value={objet}
              onChange={(e) => setObjet(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
            <select
              value={typePret}
              onChange={(e) => setTypePret(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            >
              <option value="Personnel">Personnel</option>
              <option value="Immobilier">Immobilier</option>
              <option value="Consommation">Consommation</option>
              <option value="Auto">Auto</option>
              <option value="Etudiant">Etudiant</option>
              <option value="Autre">Autre</option>
            </select>
            <input
              type="text"
              placeholder="Garanties (optionnel)"
              value={garanties}
              onChange={(e) => setGaranties(e.target.value)}
              className="w-full px-3 py-2 border rounded"
            />
            <input
              type="text"
              placeholder="Personne ressource *"
              value={personneRessource}
              onChange={(e) => setPersonneRessource(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
            <input
              type="text"
              placeholder="Numéro de la personne ressource *"
              value={numPersonneRessource}
              onChange={(e) => setNumPersonneRessource(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
            <input
              type="text"
              placeholder="Lien vers la personne ressource (optionnel)"
              value={lienPersonneRessource}
              onChange={(e) => setLienPersonneRessource(e.target.value)}
              className="w-full px-3 py-2 border rounded"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 font-semibold text-white bg-blue-600 rounded hover:bg-blue-700 disabled:opacity-50"
            >
              {loading
                ? "Envoi..."
                : demandeId
                ? "Mettre à jour"
                : "Envoyer la demande"}
            </button>
          </form>
        )}
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
