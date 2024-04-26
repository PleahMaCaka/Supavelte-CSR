import { sveltekit } from "@sveltejs/kit/vite"
import { defineConfig } from "vitest/config"

export default defineConfig({
    clearScreen: false,
    plugins: [sveltekit()],
    test: {
        include: ["tests/**/*.{test,spec}.{js,ts}"]
    },
    server: {
        strictPort: true
    }
})
