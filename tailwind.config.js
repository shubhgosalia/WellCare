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

        // primary
        "primary-blue": "#0284C7",
        "secondary-blue": "#0369A1",
      },
      fontFamily: {
        "head-primary": ["Knewave"],
        "body-primary": ["Ubuntu"],
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
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
  variants: {
    opacity: ({ after }) => after(['disabled'])
  },
  // plugins: [require("tailwind-scrollbar")],
};
