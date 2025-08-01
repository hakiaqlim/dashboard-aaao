// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // Add any custom theme extensions here
    },
  },
  plugins: [
  require("tailwind-scrollbar")({ nocompatible: true }),
],

}


