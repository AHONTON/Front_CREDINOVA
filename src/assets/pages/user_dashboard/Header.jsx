import React from 'react'
import { motion } from 'framer-motion'

const bubbles = new Array(10).fill(null)

const Header = ({ user }) => {
  return (
    <div className="relative overflow-hidden [perspective:1000px]">
      <motion.header
        className="origin-left bg-blue-900 shadow"
        initial={{ rotateY: -90, opacity: 0 }}
        animate={{ rotateY: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.68, -0.6, 0.32, 1.6] }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="relative flex items-center justify-start px-6 py-2 space-x-4">
          <img
            src="/logo.png"
            alt="Logo CREDINova"
            className="object-contain rounded-md w-14 h-14"
          />
          <div className="absolute transform -translate-x-1/2 left-1/2">
            <h1 className="flex items-center space-x-2 text-xl font-semibold text-white md:text-2xl">
              <span>
                Bienvenue{user?.name ? `, ${user.name}` : ''} sur votre Espace
              </span>
              <span className="px-4 py-1 font-bold text-blue-900 bg-white rounded-md shadow-sm">
                CREDINova
              </span>
            </h1>
          </div>
        </div>
      </motion.header>

      {/* Bubbles animées */}
      {bubbles.map((_, index) => (
        <motion.div
          key={index}
          className="absolute bottom-0 w-3 h-3 bg-white rounded-full opacity-20"
          initial={{
            x: Math.random() * 100 + '%',
            y: 0,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{ y: ['0%', '-150%'] }}
          transition={{
            duration: Math.random() * 6 + 4,
            repeat: Infinity,
            ease: 'linear',
            delay: index * 0.5,
          }}
          style={{ left: `${Math.random() * 100}%` }}
        />
      ))}
    </div>
  )
}

export default Header
