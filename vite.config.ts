import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'   // <- add this

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),  // <- add this
    react()
  ],
})