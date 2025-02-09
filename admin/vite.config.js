// filepath: /e:/ecommerce_new/admin/vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/postcss7-compat'
import autoprefixer from 'autoprefixer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { port: 5174 },
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
        autoprefixer(),
      ],
    },
  },
})