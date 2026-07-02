import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import TanStackRouterPlugin from '@tanstack/router-plugin/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [TanStackRouterPlugin(), react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
