import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("framer-motion")) return "motion-vendor";
            if (id.includes("lucide-react")) return "icons-vendor";
            if (id.includes("react-dom") || id.includes("/react/")) return "react-vendor";
            return "vendor";
          }
        },
      },
    },
  },
})
