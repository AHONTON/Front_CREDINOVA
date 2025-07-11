import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const TabMenu = ({ activeTab, tabData }) => {
  if (!tabData) return null

  const tableContainer = 'overflow-x-auto w-full rounded shadow border border-gray-200'
  const tableStyles = 'min-w-full table-auto text-sm text-left border-collapse'
  const thStyles = 'px-4 py-3 bg-gray-100 text-gray-700 font-semibold border border-gray-300'
  const tdStyles = 'px-4 py-2 text-gray-600 border border-gray-200'

  const renderInfosTable = () => (
    <div className={tableContainer}>
      <table className={tableStyles}>
        <tbody>
          {Object.entries(tabData).map(([key, value]) => {
            if (Array.isArray(value) || typeof value === 'object') return null
            return (
              <tr key={key}>
                <th className={thStyles}>{key.replace(/([A-Z])/g, ' $1')}</th>
                <td className={tdStyles}>{value || '-'}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )

  const renderCreditHistoryTable = () => (
    <div className={tableContainer}>
      <table className={tableStyles}>
        <thead>
          <tr>
            <th className={thStyles}>Date</th>
            <th className={thStyles}>Montant</th>
            <th className={thStyles}>Statut</th>
          </tr>
        </thead>
        <tbody>
          {tabData.length === 0 ? (
            <tr>
              <td colSpan="3" className={`${tdStyles} text-center`}>Aucun historique</td>
            </tr>
          ) : (
            tabData.map((item) => (
              <tr key={item.id}>
                <td className={tdStyles}>{item.date}</td>
                <td className={tdStyles}>{item.montant} €</td>
                <td className={tdStyles}>{item.status}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )

  const renderDocumentsTable = () => (
    <div className={tableContainer}>
      <table className={tableStyles}>
        <thead>
          <tr>
            <th className={thStyles}>Nom du document</th>
          </tr>
        </thead>
        <tbody>
          {tabData.length === 0 ? (
            <tr>
              <td className={`${tdStyles} text-center`}>Aucun document</td>
            </tr>
          ) : (
            tabData.map((doc) => (
              <tr key={doc.id}>
                <td className={tdStyles}>{doc.nom}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
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
          <h3 className="mb-4 text-xl font-semibold text-blue-800">
            {activeTab} Information
          </h3>
          {activeTab === 'Infos' && renderInfosTable()}
          {activeTab === 'Credit History' && renderCreditHistoryTable()}
          {activeTab === 'Documents' && renderDocumentsTable()}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default TabMenu
