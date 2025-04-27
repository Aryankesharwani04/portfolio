import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://aryankesharwani04.onrender.com',
        changeOrigin: true,
      }
    }
  }
})
