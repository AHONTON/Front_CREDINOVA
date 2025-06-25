import React from 'react'
import { FaUser } from 'react-icons/fa'

const UserCard = ({ user, onSettingsClick }) => (
  <div
    className="flex flex-col items-center p-6 space-y-4 transition-shadow duration-300 bg-white rounded-xl md:flex-row md:items-center md:space-y-0 md:space-x-6"
    style={{ boxShadow: '0 12px 24px rgba(0, 0, 0, 0.45)' }}
  >
    {/* Avatar avec icône */}
    <div className="relative">
      <div
        className="flex items-center justify-center w-32 h-32 text-white bg-blue-900 rounded-full"
        style={{ boxShadow: '0 12px 24px rgba(0, 0, 0, 0.6)' }}
      >
        <FaUser size={64} />
      </div>
      {/* Statut en ligne/hors ligne */}
      <span
        className={`absolute bottom-2 right-2 w-4 h-4 rounded-full ring-2 ring-white ${
          user?.isActive ? 'bg-green-500' : 'bg-red-500'
        }`}
        title={user?.isActive ? 'En ligne' : 'Hors ligne'}
      />
    </div>

    {/* Informations utilisateur */}
    <div className="flex-grow text-center md:text-left">
      <div className="flex flex-col justify-center md:flex-row md:items-center md:space-x-3 md:justify-start">
        <h2 className="text-3xl font-semibold text-gray-900">
          {user?.nom || 'Nom Inconnu'}
        </h2>
        <div className="flex items-center mt-1 space-x-1 md:mt-0">
          <span
            className={`inline-block w-3 h-3 rounded-full ${
              user?.isActive ? 'bg-green-500' : 'bg-red-500'
            }`}
          />
          <span className="text-sm text-gray-600">
            {user?.isActive ? 'En ligne' : 'Hors ligne'}
          </span>
        </div>
      </div>

      <p className="text-blue-900">{user?.email || '-'}</p>
      <p className="mt-1 text-gray-600">
        Membre depuis{' '}
        {user?.dateInscription
          ? new Date(user.dateInscription).toLocaleDateString()
          : '-'}
      </p>
    </div>

    {/* Actions */}
    <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
      <button className="px-4 py-2 text-white transition bg-blue-900 rounded-md shadow hover:bg-blue-800">
        Nouvelle demande
      </button>
      <button
        onClick={onSettingsClick}
        className="px-4 py-2 text-white transition bg-red-500 rounded-md shadow hover:bg-red-600"
      >
        Modifier mon profil
      </button>
    </div>
  </div>
)

export default UserCard
