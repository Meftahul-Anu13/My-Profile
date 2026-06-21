// Trigger build for repository rename to Anu.dev
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


const repo = process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.split('/')[1] : ''
const base = repo && repo !== 'github.io' && repo.includes('.github.io') ? '/' : repo ? `/${repo}/` : '/'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: base,
})




