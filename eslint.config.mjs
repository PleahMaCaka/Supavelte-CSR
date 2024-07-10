import typescriptEslint from "@typescript-eslint/eslint-plugin"
import globals from "globals"
import tsParser from "@typescript-eslint/parser"
import parser from "svelte-eslint-parser"
import path from "node:path"
import { fileURLToPath } from "node:url"
import js from "@eslint/js"
import { FlatCompat } from "@eslint/eslintrc"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
})

// noinspection JSUnusedGlobalSymbols
export default [{
    ignores: [
        "**/node_modules",
        "build",
        ".svelte-kit",
        "package",
        "**/.env",
        "**/.env.*",
        "!**/.env.example",
        "**/pnpm-lock.yaml",
        "**/package-lock.json",
        "**/.idea",
        "**/.fleet",
        "src-tauri",
        "src/lib/types/supabase.d.ts",
    ],
}, ...compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:svelte/recommended",
), {
    plugins: {
        "@typescript-eslint": typescriptEslint,
    },

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node,
        },

        parser: tsParser,
        ecmaVersion: 2020,
        sourceType: "module",

        parserOptions: {
            extraFileExtensions: [".svelte", ".ts", ".json", ".yml"],
        },
    },

    rules: {
        semi: ["error", "never"],
        quotes: ["error", "double"],

        indent: ["error", 4, {
            SwitchCase: 1,
        }],

        "object-curly-spacing": ["error", "always"],
        "eol-last": ["error", "always"],
    },
}, {
    files: ["**/*.svelte"],

    languageOptions: {
        parser: parser,
        ecmaVersion: 5,
        sourceType: "script",

        parserOptions: {
            parser: "@typescript-eslint/parser",
        },
    },
}, {
    files: ["**/*.json", "**/*.yml"],

    rules: {
        indent: ["error", 2],
    },
}]
