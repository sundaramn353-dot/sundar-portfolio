/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: "#030712",
          card: "rgba(17, 24, 39, 0.6)",
          border: "rgba(0, 240, 255, 0.1)",
          borderHover: "rgba(0, 240, 255, 0.35)",
          blue: "#00f0ff",
          purple: "#9d4edd",
          graphite: "#0f172a",
          dark: "#0b0f19",
          gray: "#1e293b",
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Orbitron', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s infinite',
        'radar-sweep': 'radar-sweep 15s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-reverse': 'float-reverse 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
