module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      gilroy: ["Inter"],
    },
    boxShadow: {
      DEFAULT: "0px 0px 20px 3px #F2EFF1",
      none: "0px 0px 0px 0px #000000",
    },
    transitionTimingFunction: {
      "out-quad": "cubic-bezier(0.5, 1, 0.89, 1)",
    },
    colors: {
      black: "#000000",
      black_dark: "#0A0A0B",
      black_medium: "#121417",
      black_light: "#1C1F22",
      gray_dark: "#DEE2E6",
      gray_medium: "#E9ECEF",
      gray_light: "#F8F9FA",
      main: "#ED2939",
      alt: "#40E0D0",
      white: "#FFFFFF",
      transparent: "transparent",
    },
    borderRadius: {
      DEFAULT: "0.25rem",
      "4xl": "2rem",
      "3xl": "1.5rem",
      "2xl": "1rem",
      xl: "0.75rem",
      lg: "0.5rem",
      full: "9999px",
    },
  },
  variants: {
    extend: {},
  },
}
