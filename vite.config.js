import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),],
  server: { allowedHosts: ['caa8-137-255-68-47.ngrok-free.app'] },
})