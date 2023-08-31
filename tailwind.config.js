/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "brand-primary": "#6131B4",
      "brand-primary-dark": "#330066",

      "brand-secondary": "#E7517E",
      "brand-secondary-dark": "#BA2E59",

      "neutral-lightest": "#FFFFFF",

      "gray-06": "#ACABB7",
      "gray-07": "#5B6067",
      "gray-08": "#464A50",
      
    },
    extend: {
      screens:{
        'sm': "360px",
        'lg': "1200px",
        'xl': "1366px",
      },
      width:{
        "screen-lg": "1200px"
      },
      boxShadow:{
        'sm': '0px -2px 10px 0px rgba(31, 7, 59, 0.20)'
      },
      borderWidth:{
        1: '1px'
      }
      
    },
  },
  plugins: [],
}

