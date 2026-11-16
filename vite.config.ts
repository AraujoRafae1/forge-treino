import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    host: true, // Listen on all local IPs so iPhone/Android can access on local Wi-Fi
    port: 5173
  }
});
