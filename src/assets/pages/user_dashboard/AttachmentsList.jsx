import React, { useEffect, useState } from "react";
import axios from "axios";

const AttachmentsList = () => {
  const [attachments, setAttachments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAttachments = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/attachments"
        ); // 🔁 adapte l’URL
        setAttachments(response.data); // ou `response.data.attachments` selon ton backend
      } catch (err) {
        setError("Erreur lors du chargement des fichiers.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAttachments();
  }, []);

  if (loading) return <p className="p-6">Chargement des fichiers…</p>;
  if (error) return <p className="p-6 text-red-600">{error}</p>;

  return (
    <div className="p-6 mt-6 bg-white rounded shadow">
      <h3 className="mb-4 text-xl font-semibold text-gray-800">
        Fichiers et pièces jointes
      </h3>
      <ul className="divide-y divide-gray-200">
        {attachments.length > 0 ? (
          attachments.map((file) => (
            <li key={file.id || file.name} className="py-3">
              <a
                href={file.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {file.name}
              </a>
            </li>
          ))
        ) : (
          <li className="py-3 text-gray-500">Aucun fichier attaché</li>
        )}
      </ul>
    </div>
  );
};

export default AttachmentsList;
