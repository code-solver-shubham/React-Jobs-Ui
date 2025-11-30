import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/React-Jobs-Ui/", // 👈 important for GitHub Pages
})
