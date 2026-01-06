import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL': JSON.stringify(process.env.VITE_GOOGLE_APPS_SCRIPT_URL),
    'import.meta.env.VITE_GOOGLE_APPS_SCRIPT_SECRET': JSON.stringify(process.env.VITE_GOOGLE_APPS_SCRIPT_SECRET),
  },
})
