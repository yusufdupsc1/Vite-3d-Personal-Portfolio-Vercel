import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  // Base path (important for correct asset URLs on Vercel)
  base: '/',

  plugins: [react()],

  build: {
    target: 'es2020',          // modern browsers, matches Node >= 14+
    minify: 'esbuild',         // fastest minifier
    sourcemap: false,          // set true if you want production debugging
    outDir: 'dist',            // Vercel serves from dist by default

    rollupOptions: {
      output: {
        // Split heavy deps into separate chunks for better caching
        manualChunks: {
          vendor: ['react', 'react-dom'],
          three: ['three', '@react-three/fiber', '@react-three/drei'],
          motion: ['framer-motion'],
          utils: ['maath']
        }
      }
    },

    chunkSizeWarningLimit: 1200 // raise limit because three.js is big
  },

  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@components': resolve(__dirname, './src/components'),
      '@assets': resolve(__dirname, './src/assets'),
      '@utils': resolve(__dirname, './src/utils'),
      '@constants': resolve(__dirname, './src/constants'),
      '@hoc': resolve(__dirname, './src/hoc')
    }
  },

  optimizeDeps: {
    // Force pre-bundling of these deps for faster dev server startup
    include: [
      'react',
      'react-dom',
      'three',
      '@react-three/fiber',
      '@react-three/drei',
      'framer-motion',
      'maath'
    ]
  },

  server: {
    port: 5173,
    open: true,
    strictPort: true
  },

  preview: {
    port: 4173,
    open: true
  }
});