import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  // base: '/hackathon-react/',
    css: {
    preprocessorOptions: {
      scss: {
        additionalData: (content, filename) => {
          if (
            filename.includes('variables/') ||
            filename.includes('mixins/') ||
            filename.includes('functions/') ||
            filename.includes('fonts/') ||
            filename.includes('base/') ||
            filename.includes('utils/')
          ) {
            return content;
          }

          return `@use "@/assets/style/base/global" as *;

${content}`;
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      app: path.resolve(__dirname, './src/app'),
      pages: path.resolve(__dirname, './src/pages'),
      widgets: path.resolve(__dirname, './src/widgets'),
      features: path.resolve(__dirname, './src/features'),
      entities: path.resolve(__dirname, './src/entities'),
      shared: path.resolve(__dirname, './src/shared'),
    },
  },
});
