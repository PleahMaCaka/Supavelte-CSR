import { defineConfig } from "vite"
import { sveltekit } from "@sveltejs/kit/vite"

const host = process.env.TAURI_DEV_HOST

export default defineConfig({
  plugins: [await sveltekit()],
  clearScreen: false,
  server: {
    host: host || false,
    port: 1420,
    strictPort: true,
    hmr: host
      ? {
        protocol: "ws",
        host: host,
        port: 1430
      }
      : undefined
  },
  test: {
    include: [
      "**/*.test.ts"
    ]
  },
  optimizeDeps: {
    include: ["@iconify/svelte"],
    force: true
  }
})
