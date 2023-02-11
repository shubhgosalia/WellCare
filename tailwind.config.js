/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Background colors
        "dark-900": "#F1F5F9",
        "dark-800": "#E2E8F0",
        "dark-700": "#CBD5E1",
        "dark-600": "#94A3B8",
        "dark-500": "#64748B",
        "dark-400": "#475569",
        "dark-300": "#1E293B",
        "dark-200": "#0F172A",
        "dark-100": "#0d1117",

        // text color
        "neon-orange": "#FF6700",
        "neon-purple": "#b026ff",
        "neon-green": "#39ff14",
        "neon-yellow": "#ffff00",
        "neon-blue": "#04d9ff",

        // primary
        "primary-blue": "#0284C7",
        "secondary-blue": "#0369A1",
      },
      fontFamily: {
        "head-primary": ["Knewave"],
        "body-primary": ["Ubuntu"],
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
