/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2C3E50',  // Biru Tua (untuk elemen utama seperti tombol atau link)
        secondary: '#FFFFFF',  // Putih Gading (untuk background utama)
        accent: '#D2B48C',  // Coklat Muda (untuk elemen aksen yang membutuhkan perhatian)
      },
      fontFamily: {
        roboto: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}