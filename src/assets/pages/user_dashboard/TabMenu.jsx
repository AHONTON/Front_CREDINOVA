import React from 'react'

const TabMenu = ({ tabs, activeTab, onChange }) => (
  <nav className="overflow-x-auto">
    <ul className="inline-flex bg-white divide-x divide-gray-200 rounded-t shadow">
      {tabs.map(tab => (
        <li key={tab}>
          <button
            onClick={() => onChange(tab)}
            className={`px-4 py-2 rounded-t ${
              activeTab === tab
                ? 'bg-white border-b-2 border-blue-600 font-semibold text-blue-700'
                : 'text-blue-500 hover:text-blue-700'
            }`}
          >
            {tab}
          </button>
        </li>
      ))}
    </ul>
  </nav>
)

export default TabMenu
