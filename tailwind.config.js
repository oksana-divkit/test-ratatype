/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1.25rem",
        lg: "2rem",
      },
    },
    fontFamily: {
      sans: ["Manrope", "Arial", "Helvetica", "sans-serif"],
    },
    variants: {
      extends: {
        backgroundColor: ["disabled"],
        textColor: ["disabled"],
      },
    },
    extend: {
      colors: {},
      maxWidth: {
        xl: "614px",
      },
      boxShadow: {
        btn: "0px 4px 0px 0px currentColor",
        "btn-hover": "0px 6px 0px 0px currentColor",
      },
    },
  },
  plugins: [],
};
