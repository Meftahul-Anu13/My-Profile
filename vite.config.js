import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // For GitHub Pages project site deployment, set base to '/<repo-name>/'
  base: process.env.NODE_ENV === 'production' ? '/My-Profile/' : '/',
})

