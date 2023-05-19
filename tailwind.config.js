/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          100: "#97DA97",
          200: "#8EB98E",
          300: "#577571",
          400: "#42615F",
          500: "#3D5B59",
          600: "#304A49",
          900: "#242D2A",
        },
      },
      fontFamily: {
        sans: ["var(--font-montserrat)"],
        mono: ["var(--font-space-mono)"],
      },
    },
  },
  plugins: [],
};
