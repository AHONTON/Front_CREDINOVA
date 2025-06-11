import React from 'react'

const SettingsModal = ({ editData, setEditData, onClose, onSave }) => {
  const handleChange = (e) => {
    setEditData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

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
          onSubmit={e => {
            e.preventDefault()
            onSave()
          }}
          className="space-y-4"
        >
          <div>
            <label className="block font-medium text-gray-700">Nom complet</label>
            <input
              name="name"
              type="text"
              value={editData.name || ''}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border rounded"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Profession</label>
            <input
              name="profession"
              type="text"
              value={editData.profession || ''}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border rounded"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Email</label>
            <input
              name="email"
              type="email"
              value={editData.email || ''}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border rounded"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Téléphone</label>
            <input
              name="phone"
              type="text"
              value={editData.phone || ''}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border rounded"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Statut Demande</label>
            <input
              name="requestStatus"
              type="text"
              value={editData.requestStatus || ''}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border rounded"
            />
          </div>

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
  )
}

export default SettingsModal
