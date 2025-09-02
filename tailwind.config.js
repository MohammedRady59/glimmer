/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.8rem",
          md: "5rem",
          lg: "8rem",
          xl: "12.5rem",
        },
      },
      colors: {
        primaryColor: "#CE9461",
        secondaryColor: "#1E3231",
      },
      fontFamily: {
        harmattan: ["Harmattan", "sans-serif"],
        baloo: ["Baloo Bhaijaan 2", "sans-serif"],
      },
    },
  },
  plugins: [],
};
