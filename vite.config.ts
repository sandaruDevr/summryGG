import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/app/', // 👈 IMPORTANT: All assets will load from /app/
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist', // (default is dist, can be skipped if unchanged)
  },
})

