import { build, defineConfig } from "vite";
import { resolve } from "path";



export default defineConfig({
    root: "src",
    publicDir: '../public',
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'about/index.html')
              }

        }
    }
})