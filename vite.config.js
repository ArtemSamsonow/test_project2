import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/<REPO>/',
  build: {
    rollupOptions: {
      input: './src/App.jsx',
    },
  },
  optimizeDeps: {
    include: [
      '@reduxjs/toolkit',
      'axios',
      'react',
      'react-dom',
      'react-hook-form',
      'react-redux',
      'react-router-dom',
      '@types/react',
      '@types/react-dom',
    ],
  },
  server: {
    port: 8080,
  },
})
