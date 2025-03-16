import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// https://stackoverflow.com/a/77643886
export default defineConfig({
  plugins: [react()],
  base: "/learningstories-xet1309/",
  optimizeDeps: {
    esbuildOptions: {
      target: 'esnext'
    }
  },
  build: {
    target: 'esnext'
  },
})
