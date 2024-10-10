// https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#007bff',
      },  
      height: {
        '140': '35rem', // Here's what I define h-140
      }
    },
  },
  plugins: [],
}


