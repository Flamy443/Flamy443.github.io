import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Set the base to "/" if the project is hosted at the root
export default defineConfig({
  base: '/',
  plugins: [react()]
});
