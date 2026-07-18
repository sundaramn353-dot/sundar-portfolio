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
          bg:          "#020409",
          secondary:   "#07090f",
          card:        "rgba(8,12,24,0.75)",
          border:      "rgba(0,229,255,0.08)",
          borderHover: "rgba(0,229,255,0.4)",
          blue:        "#00e5ff",
          purple:      "#7c3aed",
          violet:      "#a855f7",
          green:       "#00ff9d",
          graphite:    "#0a0e1a",
          dark:        "#07090f",
          gray:        "#111827",
        }
      },
      fontFamily: {
        sans:    ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
        display: ['Orbitron', 'sans-serif'],
      },
      animation: {
        'pulse-glow':    'pulse-glow 2s infinite',
        'radar-sweep':   'radar-sweep 15s linear infinite',
        'float':         'float 6s ease-in-out infinite',
        'float-reverse': 'float-reverse 8s ease-in-out infinite',
        'hex-rotate':    'hex-rotate 20s linear infinite',
        'glitch-1':      'glitch-1 3s steps(1) infinite',
        'glitch-2':      'glitch-2 3s steps(1) infinite',
        'shimmer':       'shimmer 2.5s ease infinite',
      },
    },
  },
  plugins: [],
}
