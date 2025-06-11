import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const TabContent = ({ activeTab, tabData }) => {
  if (!tabData) return null

  const renderInfosTable = () => (
    <table className="min-w-full mt-2 border border-collapse border-gray-300 table-auto">
      <tbody>
        {Object.entries(tabData).map(([key, value]) => {
          if (Array.isArray(value) || typeof value === 'object') return null
          return (
            <tr key={key} className="border border-gray-300">
              <th className="px-4 py-2 text-left capitalize bg-gray-100 border border-gray-300">
                {key.replace(/([A-Z])/g, ' $1')}
              </th>
              <td className="px-4 py-2 border border-gray-300">{value}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )

  const renderCreditHistoryTable = () => (
    <table className="min-w-full mt-2 border border-collapse border-gray-300 table-auto">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2 border border-gray-300">Date</th>
          <th className="px-4 py-2 border border-gray-300">Montant</th>
          <th className="px-4 py-2 border border-gray-300">Statut</th>
        </tr>
      </thead>
      <tbody>
        {tabData.length === 0 ? (
          <tr>
            <td colSpan="3" className="px-4 py-2 text-center">Aucun historique</td>
          </tr>
        ) : (
          tabData.map((item) => (
            <tr key={item.id} className="border border-gray-300">
              <td className="px-4 py-2 border border-gray-300">{item.date}</td>
              <td className="px-4 py-2 border border-gray-300">{item.montant} €</td>
              <td className="px-4 py-2 border border-gray-300">{item.status}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  )

  const renderDocumentsTable = () => (
    <table className="min-w-full mt-2 border border-collapse border-gray-300 table-auto">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2 border border-gray-300">Nom du document</th>
        </tr>
      </thead>
      <tbody>
        {tabData.length === 0 ? (
          <tr>
            <td className="px-4 py-2 text-center">Aucun document</td>
          </tr>
        ) : (
          tabData.map((doc) => (
            <tr key={doc.id} className="border border-gray-300">
              <td className="px-4 py-2 border border-gray-300">{doc.nom}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  )

  return (
    <div className="bg-white p-6 rounded-b shadow min-h-[150px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="mb-4 text-xl font-semibold">{activeTab} Information</h3>
          {activeTab === 'Infos' && renderInfosTable()}
          {activeTab === 'Credit History' && renderCreditHistoryTable()}
          {activeTab === 'Documents' && renderDocumentsTable()}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default TabContent
