// tailwind.config.js
// noinspection JSUnusedGlobalSymbols

import daisyui from "daisyui"

/** @type {import("tailwindcss").Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    fontFamily: {
      sans: ["Pretendard"]
    }
  },
  plugins: [daisyui],
  daisyui: {
    darkTheme: false,
    themes: [
      {
        light: {
          primary: "#0071ff",
          secondary: "#5699f2",
          accent: "#f59e0b",
          neutral: "#3D4451",
          "base-100": "#f2f2f2",
          error: "#e44143",
          warning: "#eca700",
          success: "#46ba61",
          info: "#3b8bf6"
        }
      }
    ]
  }
}
