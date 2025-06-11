import React from 'react'

const SidebarInfo = ({ user }) => (
  <aside className="p-6 space-y-4 text-sm text-white bg-blue-900 rounded shadow">
    <h3 className="mb-3 text-lg font-semibold">Informations Client</h3>
    <ul className="space-y-2">
      <li><strong>Email:</strong> {user.email || '-'}</li>
      <li><strong>Téléphone:</strong> {user.phone || '-'}</li>
      <li><strong>Profession:</strong> {user.profession || '-'}</li>
      <li><strong>Adresse:</strong> {user.address || '-'}</li>
      <li><strong>Date de création:</strong> {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : '-'}</li>
      <li><strong>Status Demande:</strong> {user.requestStatus || '-'}</li>
    </ul>
  </aside>
)

export default SidebarInfo
