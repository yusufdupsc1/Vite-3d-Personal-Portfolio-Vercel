import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Build configuration (Vercel uses this)
  build: {
    target: 'es2020', // More compatible than esnext
    minify: 'esbuild',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          three: ['three', '@react-three/fiber', '@react-three/drei'],
          motion: ['framer-motion'],
          utils: ['maath']
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    // Add these for better Vercel compatibility
    outDir: 'dist',
    assetsDir: 'assets'
  },
  
  // Path resolution (keep this)
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
  
  // Optimization (keep this)
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'three',
      '@react-three/fiber',
      '@react-three/drei',
      'framer-motion'
    ]
  },
  
  // Environment variables (keep this)
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version)
  }
})
