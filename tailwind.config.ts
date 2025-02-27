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
        borderGradient: "var(--border-gradient)",
        navbg: "var(--navbg)",
      },
      animation: {
        bounceArrow: "bounceArrow 1s infinite ease-in-out",
        sway: "horizontal-sway 2s ease-in-out infinite",
        swayout: "horizontalSwayOut 2s ease-in-out infinite",
        oscillate: "horizontalOscillate 2s ease-in-out infinite",
      },
      keyframes: {
        bounceArrow: {
          "0%, 100%": {transform: "translateY(0)"},
          "50%": {transform: "translateY(-5px)"},
        },
        "horizontal-sway": {
          "0%, 100%": {transform: "translateX(0)"},
          "50%": {transform: "translateX(10px)"},
        },
        horizontalSwayOut: {
          "0%, 100%": {transform: "translateX(0)"},
          "50%": {transform: "translateX(-10px)"},
        },
        horizontalOscillate: {
          "0%, 100%": {transform: "translateX(0)"},
          "25%": {transform: "translateX(10px)"},
          "50%": {transform: "translateX(0)"},
          "75%": {transform: "translateX(-10px)"},
        },
      },
    },
  },
  plugins: [],
} satisfies Config
