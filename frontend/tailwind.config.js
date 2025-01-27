/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "360px", // Extra small devices (custom breakpoint)
        sm: "540px", // Small devices (default Tailwind)
        md: "768px", // Medium devices (default Tailwind)
        lg: "1024px", // Large devices (default Tailwind)
        xl: "1280px", // Extra large devices (default Tailwind)
        "2xl": "1536px", // 2x Extra large devices (default Tailwind)
        "3xl": "1920px", // Custom breakpoint for 3K screens
        "4xl": "2560px", // Custom breakpoint for 4K screens
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
