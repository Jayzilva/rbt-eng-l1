import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// D9: Vite serves the demo/ Settings page that Cypress drives (index.html is the entry point).
export default defineConfig({
  root: 'demo',
  plugins: [react()],
  server: { port: 5173, strictPort: true },
  preview: { port: 4173, strictPort: true },
  build: { outDir: '../dist', emptyOutDir: true },
});
