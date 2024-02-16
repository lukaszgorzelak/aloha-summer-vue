// import { fileURLToPath, URL } from 'node:url'

// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'

// // https://vitejs.dev/config/
// export default defineConfig({
//   base: '/aloha-summer-vue/',
//   plugins: [
//     vue(),
//   ],
//   css: {
//     devSourcemap: true,
//   },
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url))
//     },
//   }
// })


import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path'; // Importujesz moduł 'path' do obsługi ścieżek

export default defineConfig({
  base: '/aloha-summer-vue/',
  plugins: [
    vue(),
  ],
  css: {
    devSourcemap: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') // Używasz path.resolve do uzyskania pełnej ścieżki do folderu src
    },
  }
});
