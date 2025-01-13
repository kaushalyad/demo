/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        min_mobile: "250px", //mini_mobile
        mobile: "360px", //mobile
        large_mobile: "640px", // lerge mobile
        tablet: "768px", // tablet
        laptop: "1024px", // laptop
        desktop: "1280px", // desktop
        large_desktop: "1536px", // large desktop
      },
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"], // Add Urbanist font
      },
      fontSize: {
        "24px": "24px", // Custom font size
      },
      lineHeight: {
        28.8: "28.8px", // Custom line height
      },
      colors: {
        Neutral70: "#3D4966", // Replace with your desired color hex code
      },
    },
  },
  plugins: [],
};
