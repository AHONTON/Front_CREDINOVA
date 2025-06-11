import React from 'react'

const AttachmentsList = ({ attachments }) => (
  <div className="p-6 mt-6 bg-white rounded shadow">
    <h3 className="mb-4 text-xl font-semibold text-gray-800">Fichiers et pièces jointes</h3>
    <ul className="divide-y divide-gray-200">
      {attachments?.length > 0 ? (
        attachments.map(file => (
          <li key={file.id || file.name} className="py-3">
            <a href={file.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              {file.name}
            </a>
          </li>
        ))
      ) : (
        <li className="py-3 text-gray-500">Aucun fichier attaché</li>
      )}
    </ul>
  </div>
)

export default AttachmentsList
