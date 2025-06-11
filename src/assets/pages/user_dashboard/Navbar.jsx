import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="flex items-center justify-between px-4 py-3 mx-auto max-w-7xl">
        <ul className="flex space-x-4 text-sm font-medium text-gray-300">
          <li><a href="#" className="px-3 py-2 rounded-md hover:bg-gray-700 hover:text-white">Acceuil</a></li>
          <li><a href="#" className="px-3 py-2 rounded-md hover:bg-gray-700 hover:text-white">Mes Informations</a></li>
          <li><a href="#" className="px-3 py-2 rounded-md hover:bg-gray-700 hover:text-white">Demande</a></li>
          <li><a href="#" className="px-3 py-2 rounded-md hover:bg-gray-700 hover:text-white">Forum</a></li>
          <li><a href="#" className="px-3 py-2 rounded-md hover:bg-gray-700 hover:text-white">Blog</a></li>
        </ul>
        <div className="hidden md:flex">
          <div className="relative flex items-center w-64 h-8 overflow-hidden bg-gray-600 border border-gray-500 rounded-sm">
            <span className="px-2 text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Rechercher..."
              className="w-full px-2 text-gray-300 bg-gray-600 focus:outline-none"
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
