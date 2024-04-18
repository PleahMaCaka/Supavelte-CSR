/** @type { import("eslint").Linter.Config } */
module.exports = {
    root: true,
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:svelte/recommended"
    ],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    parserOptions: {
        sourceType: "module",
        ecmaVersion: 2020,
        extraFileExtensions: [".svelte", ".ts", ".json", ".yml"]
    },
    env: {
        browser: true,
        es2017: true,
        node: true
    },
    rules: {
        "semi": ["error", "never"],
        "quotes": ["error", "double"],
        "indent": ["error", 4, {"SwitchCase": 1}],
        "object-curly-spacing": ["error", "always"],
        "eol-last": ["error", "always"]
    },
    overrides: [
        {
            files: ["*.svelte"],
            parser: "svelte-eslint-parser",
            parserOptions: {
                parser: "@typescript-eslint/parser"
            }
        },
        {
            files: ["*.json", "*.yml"],
            rules: {
                "indent": ["error", 2]
            }
        }
    ]
}
