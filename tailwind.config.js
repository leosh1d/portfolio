module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  darkMode: "media", // or 'media' or 'class'
  theme: {
    fontFamily: {
      gilroy: ["Gilroy"],
    },
    boxShadow: {
      DEFAULT: " 0px 0px 20px 3px #F2EFF1",
    },
    transitionTimingFunction: {
      "out-quad": "cubic-bezier(0.5, 1, 0.89, 1)",
    },
    colors: {
      black_coffee: "#382E35",
      black_coffee_light: "#43373F",
      black_coffee_dark: "#32292F",
      gray: "#F2EFF1",
      main: "#FE5F55",
      white: "#FFFFFF",
    },
  },
  variants: {
    extend: {},
  },
}
