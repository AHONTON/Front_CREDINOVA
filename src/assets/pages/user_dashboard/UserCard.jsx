import React from 'react'

const UserCard = ({ user, onSettingsClick }) => (
  <div className="flex flex-col items-center p-6 space-y-4 bg-white rounded shadow-lg md:flex-row md:items-start md:space-y-0 md:space-x-6">
    <img
      className="object-cover w-32 h-32 rounded-full shadow-lg"
      src={user.photo || 'https://via.placeholder.com/150'}
      alt={user.name}
    />
    <div className="flex-grow text-center md:text-left">
      <h2 className="text-3xl font-semibold text-gray-900">{user.name || 'Nom Inconnu'}</h2>
      <p className="text-blue-900">{user.profession || ''}</p>
      <p className="mt-1 text-blue-900">Score IA : <span className="font-semibold">{user.scoreIA ?? 'N/A'}</span></p>
      <p className="mt-1 text-blue-900">Statut Demande : <span className="font-semibold">{user.requestStatus || 'N/A'}</span></p>
    </div>
    <div className="flex space-x-2">
      <button className="px-4 py-2 text-white bg-blue-900 rounded-md shadow hover:bg-blue-800">
        Demande de changement
      </button>
      <button
        onClick={onSettingsClick}
        className="px-4 py-2 text-white bg-red-500 rounded-md shadow hover:bg-red-600"
      >
        Paramètres
      </button>
    </div>
  </div>
)

export default UserCard
