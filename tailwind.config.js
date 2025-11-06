/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'luxury-navy': '#0F172A',
        'luxury-charcoal': '#1E293B',
        'luxury-gold': '#C5A572',
        'luxury-champagne': '#E4C59E',
        'luxury-pearl': '#E5E7EB',
        'luxury-offwhite': '#F9FAFB',
        'luxury-smoke': '#F5F5F5',
        'luxury-black': '#111827',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
        'lato': ['Lato', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C5A572 0%, #E4C59E 100%)',
        'navy-gradient': 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
      },
    },
  },
  plugins: [],
}
