import React, { useState } from "react";
import {
  BellIcon,
  EnvelopeIcon,
  Cog6ToothIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const menuItems = [
  "Acceuil",
  "Mes Demandes",
  "Score/IA",
  "Document",
  "Support",
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 text-white bg-gray-800 shadow">
      <div className="flex items-center justify-between px-6 py-3 mx-auto max-w-7xl">
        {/* Logo & Menus (Desktop) */}
        <div className="flex items-center space-x-4">
          <span className="px-2 py-1 text-xl font-extrabold tracking-wide text-blue-900 bg-white rounded">
            CREDINova
          </span>

          <div className="hidden space-x-4 text-sm font-medium sm:flex">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="relative inline-block px-3 py-2 overflow-hidden transition duration-500 rounded-md group"
              >
                <span className="absolute inset-0 left-0 w-0 transition-all duration-500 bg-white opacity-10 group-hover:w-full"></span>
                <span className="relative z-10">{item}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Search & Icons */}
        <div className="flex items-center space-x-4">
          <div className="relative items-center hidden w-56 overflow-hidden border border-white rounded-md sm:flex h-9">
            <span className="px-2 text-white">
              <MagnifyingGlassIcon className="w-5 h-5" />
            </span>
            <input
              type="text"
              placeholder="Rechercher..."
              className="w-full px-2 text-sm text-white placeholder-white bg-transparent focus:outline-none"
            />
          </div>

          {/* Icons */}
          {[BellIcon, EnvelopeIcon, Cog6ToothIcon].map((Icon, index) => (
            <div
              key={index}
              className="relative p-2 transition duration-500 rounded-full group hover:bg-white hover:bg-opacity-10"
            >
              <Icon className="w-5 h-5 text-white" />
              <span className="absolute inset-0 left-0 w-0 transition-all duration-500 bg-white rounded-full opacity-10 group-hover:w-full"></span>
            </div>
          ))}

          {/* Burger menu (Mobile) */}
          <button
            className="p-2 rounded-md sm:hidden hover:bg-white hover:bg-opacity-10"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="px-6 pb-3 sm:hidden">
          <ul className="space-y-2 text-sm font-medium">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="block px-4 py-2 transition duration-300 rounded-md hover:bg-white hover:bg-opacity-10"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
