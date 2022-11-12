/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        "dark-900": "#e5e5e5",
        "dark-800": "#cccccc",
        "dark-700": "#b2b2b2",
        "dark-600": "#999999",
        "dark-500": "#7f7f7f",
        "dark-400": "#666666",
        "dark-300": "#4c4c4c",
        "dark-200": "#323232",
        "dark-100": "#191919",
        // text color
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
