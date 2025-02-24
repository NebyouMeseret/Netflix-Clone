import { defineConfig } from 'vite'
import env from "vite-plugin-env-compatible"
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    env()
  ],
})
