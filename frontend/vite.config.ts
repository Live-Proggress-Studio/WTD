import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  // @Aliases
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src'),
      "@App": path.resolve(__dirname, './src/App'),
      "@Entities": path.resolve(__dirname, './src/Entities'),
      "@Pages": path.resolve(__dirname, './src/Pages'),
      "@Shared": path.resolve(__dirname, './src/Shared'),
      "@Hooks": path.resolve(__dirname, './src/Shared/Hooks'),
      "@Widgets": path.resolve(__dirname, './src/Widgets'),
      "@Features": path.resolve(__dirname, './src/Features'),
      "@Styles": path.resolve(__dirname, 'src/Shared/Styles'),
      "@Img": path.resolve(__dirname, './src/Shared/assets/img'),
      "@Icons": path.resolve(__dirname, './src/Shared/assets/icons'),
    },
  },
  // @Build advanced settings
  base: './',
  // @Plugins
  plugins: [react()],
})
