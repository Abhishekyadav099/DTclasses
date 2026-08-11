/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0f172a',    // slate-900
          nav: '#1e293b',     // slate-800
          primary: '#3b82f6', // blue-500
          accent: '#10b981',  // emerald-500
          text: '#f8fafc',    // slate-50
          muted: '#94a3b8',   // slate-400
        }
      }
    },
  },
  plugins: [],
}
