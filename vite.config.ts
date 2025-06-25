import { defineConfig } from 'vite'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/how-cloudrun-request-work/' : '/',
  build: {
    outDir: 'docs', // Change from 'dist' to 'build'
    assetsDir: 'assets',
    emptyOutDir: true,
  },
  server: {
    port: 3000,
  },
})
