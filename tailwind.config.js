module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      DEFAULT: "0 8px 48px rgba(0, 0, 0, 0.04)",
      sm: " 0px 4px 44px -5px rgba(39, 48, 62, 0.1)",
    },
    colors: {
      blue: {
        DEFAULT: "#518DDF",
        light: "#70A4EC",
      },
      gray: {
        DEFAULT: "#F2F2F2",
      },
      gray_blue: {
        DEFAULT: "#EAECEF",
      },
      gray_dark: {
        DEFAULT: "#40434A",
      },
      gray_light: {
        DEFAULT: "#84878D",
      },
      white: {
        DEFAULT: "#FFFFFF",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
}
