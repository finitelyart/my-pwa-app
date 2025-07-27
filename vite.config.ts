import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'], // Include any other assets you want cached
      manifest: {
        name: 'My Awesome PWA', // Your app's full name
        short_name: 'MyPWA',    // Short name for homescreen
        description: 'My awesome React TypeScript PWA!',
        theme_color: '#ffffff', // Theme color for the browser UI
        icons: [
          {
            src: '/pwa-192x192.png', // Path to your 192x192 PWA icon
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png', // Path to your 512x512 PWA icon
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      devOptions: {
        enabled: true, // Enable PWA in development for testing
      },
    }),
  ],
});

