import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // <-- Un punto y una diagonal resuelve el 404 de scripts y estilos
})