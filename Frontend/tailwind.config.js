/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", // adjust as needed
  ],
  darkMode:'class',
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#3b82f6", // your primary color
          "secondary": "#f43f5e", // your secondary color
          "accent": "#1d4ed8", // your accent color
          "neutral": "#3d4451", // your neutral color
          "base-100": "#ffffff", // setting base background color to white
          "info": "#3abff8", // info color
          "success": "#36d399", // success color
          "warning": "#fbbd23", // warning color
          "error": "#f87272", // error color
        },
      },
      // You can add other themes here if needed
    ],
  },
};
