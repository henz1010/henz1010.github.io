module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "index.html"
  ],
  theme: {
    screens: {
      'sm': '350px',
      'md': '768px',
      'smdesktop': '1360px',
      'halfdesktop': '678px',
      'laptop': '1536px',
      'halflaptop': '767px',
    },
    extend: {
      fontFamily: {
        'sans': ['Rubik Regular', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
