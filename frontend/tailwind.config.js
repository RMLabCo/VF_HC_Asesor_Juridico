/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "text-main": "#FFFFFF",
        "primary-bg": "#0B1325",
        "accent-tech": "#00C3FF",
        "neutral-dark": "#111827",
        "navy": "#0A192F", // Added from original for compatibility
        "background-light": "#FFFFFF", // Added from original for compatibility
        "background-dim": "#F4F6F8", // Added from original for compatibility
      },
      fontFamily: {
        "display": ["Space Grotesk", "sans-serif"],
        "body": ["Space Grotesk", "sans-serif"],
      },
      boxShadow: {
        "brutal": "4px 4px 0px 0px #111827",
        "brutal-white": "4px 4px 0px 0px rgba(255, 255, 255, 1)",
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
