import type {Config} from "tailwindcss"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primaryGreen: "var(--primaryGreen)",
        textColor: "var(--textColor)",
        borderGradient: "var( --border-gradient)",
        navbg: "var(--navbg)",
      },
      animation: {
        bounceArrow: "bounceArrow 1s infinite ease-in-out",
      },
      keyframes: {
        bounceArrow: {
          "0%, 100%": {transform: "translateY(0)"},
          "50%": {transform: "translateY(-5px)"},
        },
      },
    },
  },
  plugins: [],
} satisfies Config
