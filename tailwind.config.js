

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-image-mobile':'url("/src/assets/home/background-home-mobile.jpg")',
        'home-image-tablet':'url("/src/assets/home/background-home-tablet.jpg")',
        'home-image-desktop':'url("/src/assets/home/background-home-desktop.jpg")',
        'destination-image-mobile':'url("/src/assets/destination/background-destination-mobile.jpg")',
        'destination-image-tablet':'url("/src/assets/destination/background-destination-tablet.jpg")',
        'destination-image-desktop':'url("/src/assets/destination/background-destination-desktop.jpg")',
        'crew-image-mobile':'url("/src/assets/crew/background-crew-mobile.jpg")',
        'crew-image-tablet':'url("/src/assets/crew/background-crew-tablet.jpg")',
        'crew-image-desktop':'url("/src/assets/crew/background-crew-desktop.jpg")',
        'technology-image-mobile':'url("/src/assets/technology/background-technology-mobile.jpg")',
        'technology-image-tablet':'url("/src/assets/technology/background-technology-tablet.jpg")',
        'technology-image-desktop':'url("/src/assets/technology/background-technology-desktop.jpg")',
      },
      colors:{
        'dark-blue':'#0b0d17',
        'light-blue':'#d0d6f9',
      },
      fontFamily:{
        'bellefair':['bellefair','sans-serif'],
        'barlow-condensed':['barlow_condensed','sans-serif']
      }
    },
  },
  plugins: [],
}

