/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Background colors
        "dark-900": "#e5e5e5",
        "dark-800": "#cccccc",
        "dark-700": "#b2b2b2",
        "dark-600": "#999999",
        "dark-500": "#7f7f7f",
        "dark-400": "#666666",
        "dark-300": "#4c4c4c",
        "dark-200": "#1E293B",
        "dark-100": "#111827",
        // text color
        "neon-orange": "#FF6700",
        "neon-purple": "#b026ff",
        "neon-green": "#39ff14",
        "neon-yellow": "#ffff00",
        "neon-blue": "#04d9ff",
        // primary
        "primary-blue": "#1D4ED8",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        body: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },

      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
