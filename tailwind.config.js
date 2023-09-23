/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // NORD THEME
        background: "#2e3441",
        foreground: "#e5e9f0",
        gray: "#3b4253",
        red: "#c16069",
        green: "#a2bf8a",
        yellow: "#edcc87",
        blue: "#80a0c2",
        purple: "#b58dae",
        cyan: "#86c0d1",
      },
    },
  },
  plugins: [],
};
