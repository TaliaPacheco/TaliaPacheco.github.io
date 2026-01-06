import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    plugins: [react()],
    define: {
      'import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL': JSON.stringify(env.VITE_GOOGLE_APPS_SCRIPT_URL),
      'import.meta.env.VITE_GOOGLE_APPS_SCRIPT_SECRET': JSON.stringify(env.VITE_GOOGLE_APPS_SCRIPT_SECRET),
    },
  }
})
