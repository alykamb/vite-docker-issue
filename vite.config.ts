import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {join} from 'path'
 // https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),],
  build: {
    // generate manifest.json in outDir
    manifest: true,
    rollupOptions: {
      // overwrite default .html entry
      input: join(__dirname, '/src/main.ts')
    }
  }
})
