import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import svgr from "vite-plugin-svgr"

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr({
      // Optional: Configure svgr options
      svgrOptions: {
        icon: true, // This makes SVGs inherit size from parent
      },
    })
  ],
})