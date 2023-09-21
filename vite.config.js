import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    rollupOptions: {
      // Add the external option to specify modules to exclude from bundling
      external: ["react-icons/bi"],
    },
  },
});
