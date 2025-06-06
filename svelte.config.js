import adapter from "@sveltejs/adapter-static"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"

/** @type {import("@sveltejs/kit").Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: "build",
      assets: "build"
    }),
    alias: {
      "@lib/*": "./src/lib/*",
      "@components/*": "./src/lib/components/*",
      "@stores/*": "./src/lib/stores/*",
      "@typegen/*": "./src/lib/types/gen/*",
      "@routes/*": "./src/routes/*"
    }
  }
}

export default config
