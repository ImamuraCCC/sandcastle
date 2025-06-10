import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteStaticCopy } from 'vite-plugin-static-copy'

const cesiumSource = 'node_modules/cesium/Build/Cesium';

const dest = 'assets';
const destDev = 'node_modules/.vite/deps';

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  build: {
    outDir: './dist',
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    watch: {
      usePolling: true,
    },
  },
  plugins: [
    vue(),
    viteStaticCopy({
      targets: [
        {
          src: `${cesiumSource}/Assets`,
          dest: dest,
        },
        {
          src: `${cesiumSource}/Widgets`,
          dest: dest,
        },
        {
          src: `${cesiumSource}/ThirdParty`,
          dest: dest,
        },
        {
          src: `${cesiumSource}/Workers`,
          dest: dest,
        },
        {
          src: `${cesiumSource}/Assets`,
          dest: destDev,
        },
        {
          src: `${cesiumSource}/Widgets`,
          dest: destDev,
        },
        {
          src: `${cesiumSource}/ThirdParty`,
          dest: destDev,
        },
        {
          src: `${cesiumSource}/Workers`,
          dest: destDev,
        }
      ]
    })
  ],
})
