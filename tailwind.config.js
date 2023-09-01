/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "brand-lightest":"#DBC7FF",
      "brand-primary": "#6131B4",
      "brand-primary-dark": "#330066",
      "brand-primary-darkest": "#1F073B",

      "brand-secondary": "#E7517E",
      "brand-secondary-dark": "#BA2E59",
      
      "neutral-lightest": "#FFFFFF",

      "gray-light": "#F6F8FB",

      "gray-04":"#EAE9F0",
      "gray-05": "#DBC7FF",
      "gray-06": "#ACABB7",
      "gray-07": "#5B6067",
      "gray-08": "#464A50",
      
      
    },
    extend: {
      screens:{
        'sm': "600px",
        'md': '970px',
        'lg': "1140px",
        'xl': "1366px",
      },

      boxShadow:{
        'sm': '0px -2px 10px 0px rgba(31, 7, 59, 0.20)',
        'lg': '0px 2px 20px -1px rgba(0, 0, 0, 0.15)'
      },
      borderWidth:{
        1: '1px'
      }
      
    },
  },
  plugins: [],
}

