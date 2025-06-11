import React, { useState } from 'react'

import Header from './Header'
import Navbar from './Navbar'
import UserCard from './UserCard'
import SidebarInfo from './SidebarInfo'
import TabMenu from './TabMenu'
import TabContent from './TabContent'
import AttachmentsList from './AttachmentsList'
import SettingsModal from './SettingsModal'

const Dashboard = () => {
  // Données mock
  const userMock = {
    id: '123',
    name: 'Enock Mbanda',
    profession: 'Développeur Full-Stack et Data Analyst',
    scoreIA: 87,
    statutDemande: 'Accepté',
    email: 'enock@example.com',
    creditHistory: [
      { id: 1, date: '2024-01-15', montant: 1000, status: 'Terminé' },
      { id: 2, date: '2024-03-20', montant: 500, status: 'En cours' },
    ],
    attachments: [
      { id: 'a1', nom: 'Contrat.pdf' },
      { id: 'a2', nom: 'Relevé bancaire.pdf' },
    ],
  }

  const [user, setUser] = useState(userMock)
  const [activeTab, setActiveTab] = useState('Infos')
  const tabs = ['Infos', 'Historiques Credit', 'Documents']

  const [settingsOpen, setSettingsOpen] = useState(false)
  const [editData, setEditData] = useState(userMock)

  const handleSave = () => {
    // Ici on peut juste fermer la modal pour tester
    setSettingsOpen(false)
    // Optionnel: simuler update user
    setUser(editData)
  }

  return (
    <>
      <Header />
      <Navbar />

      <main className="grid grid-cols-1 gap-6 p-6 mx-auto max-w-7xl md:grid-cols-4">
        <div className="space-y-6 md:col-span-3">
          <UserCard user={user} onSettingsClick={() => setSettingsOpen(true)} />

          <TabMenu tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />

          <TabContent
            activeTab={activeTab}
            tabData={
              activeTab === 'Infos' ? user :
              activeTab === 'Credit History' ? user.creditHistory :
              activeTab === 'Documents' ? user.attachments :
              {}
            }
          />

          {activeTab === 'Documents' && <AttachmentsList attachments={user.attachments} />}
        </div>

        <SidebarInfo user={user} />
      </main>

      {settingsOpen && (
        <SettingsModal
          editData={editData}
          setEditData={setEditData}
          onClose={() => setSettingsOpen(false)}
          onSave={handleSave}
        />
      )}
    </>
  )
}

export default Dashboard
