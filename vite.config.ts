import vue from '@vitejs/plugin-vue'
import { join } from 'path'
import { defineConfig } from 'vite'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    server: {
        port: 33440,
        hmr: {
            host: 'localhost',
            port: 33440,
            protocol: 'ws',
        },
    },
    build: {
        // generate manifest.json in outDir
        manifest: true,
        rollupOptions: {
            // overwrite default .html entry
            input: join(__dirname, '/src/main.ts'),
        },
    },
})
