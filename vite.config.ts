import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.gif', '**/*.png', '**/*.jpg', '**/*.jpeg'],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 1000,
  },
});