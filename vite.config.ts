import { sveltekit } from "@sveltejs/kit/vite"
import { internalIpV4 } from "internal-ip"
import { defineConfig } from "vitest/config"

const isMobile =
    process.env.TAURI_PLATFORM === "android" ||
    process.env.TAURI_PLATFORM === "ios"

export default defineConfig({
    clearScreen: false,
    plugins: [sveltekit()],
    test: {
        include: ["tests/**/*.{test,spec}.{js,ts}"]
    },
    server: {
        host: "0.0.0.0",
        port: 5173,
        hmr: isMobile ?? {
            protocol: "ws",
            host: await internalIpV4(),
            port: 5174
        },
        strictPort: true
    },
    build: {
        // ES2021
        target: process.env.TAURI_PLATFORM == "windows" ? "chrome105" : "safari13",
        // Prevent minify for debug build
        minify: !process.env.TAURI_DEBUG ? "esbuild" : false,
        // Produce source maps for debug build
        sourcemap: !!process.env.TAURI_DEBUG,
    }
})
