import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuração padrão do Vite com suporte a React (JSX + Fast Refresh)
export default defineConfig({
  plugins: [react()],
})
