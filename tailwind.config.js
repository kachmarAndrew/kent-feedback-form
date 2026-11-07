/** Токени дизайн-системи ЛР4. Збірка: npx tailwindcss@3.4.17 -i tailwind.input.css -o assets/css/styles.css --minify */
module.exports = {
  content: ['./index.html', './assets/js/validation.js'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'Segoe UI', 'Arial', 'sans-serif'] },
      colors: {
        brand: { 400: '#ff6b6b', 500: '#e31e24', 600: '#d71920', 700: '#b3141a' },
        kent: { bg: '#111111', alt: '#161616', card: '#1a1a1a', border: '#2e2e2e' },
      },
    },
  },
};
