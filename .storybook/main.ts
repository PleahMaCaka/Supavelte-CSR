import type { StorybookConfig } from "@storybook/sveltekit"

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|ts|svelte)"],
  addons: [
    "@storybook/addon-svelte-csf",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions"
  ],
  framework: {
    name: "@storybook/sveltekit",
    options: {}
  },
  staticDirs: ["../static"]
}

// noinspection JSUnusedGlobalSymbols
export default config
