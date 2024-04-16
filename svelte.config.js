import adapter from "@sveltejs/adapter-static"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),
    kit: {
        adapter: adapter(),
        alias: {
            "@lib/*": "./src/lib/*",
            "@components/*": "./src/components/*",
            "@stores/*": "./src/lib/stores/*",
            "@types/*": "./src/lib/types/*",
            "@routes/*": "./src/routes/*",
        }
    }
}

export default config
