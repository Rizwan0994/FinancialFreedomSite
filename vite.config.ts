import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'client/src')
    }
  },
  root: 'client',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    sourcemap: false,
    minify: 'esbuild',
    chunkSizeWarningLimit: 1000,
    target: 'esnext',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['framer-motion', '@tanstack/react-query'],
          icons: ['react-icons/fa']
        }
      }
    },
    // Compress assets
    assetsInlineLimit: 4096,
    // Enable compression
    reportCompressedSize: true
  },
  server: {
    port: 5173,
    host: true
  },
  esbuild: {
    target: 'esnext',
    platform: 'browser'
  }
})