/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        ring: "hsl(var(--ring))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          dark: "hsl(var(--primary-dark))",
          border: "hsl(var(--primary-border))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          border: "hsl(var(--secondary-border))",
        },
        tertiary: {
          DEFAULT: "hsl(var(--tertiary))",
          foreground: "hsl(var(--tertiary-foreground))",
          border: "hsl(var(--tertiary-border))",
        },
      },
      animation: {
        move: "move 1s linear infinite",
      },
      keyframes: {
        move: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(100%)" },
        },
      },
      fontFamily: {
        sans: ["Galano Grotesque Font", "sans-serif"],
      },
    },
  },
  plugins: [],
};
