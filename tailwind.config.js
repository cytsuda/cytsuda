module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  // purge: [
  //   // Use *.tsx if using TypeScript
  //   "./pages/**/*.js",
  //   "./components/**/*.js",
  // ],
  theme: {
    fontFamily: {
      "serif": ["Libre Baskerville"],
      "sans": ["Montserrat"],
    },
    extend: {
      colors: {
        primary: {
          50: "#cceff0",
          100: "#b3e6e9",
          200: "#80d6da",
          300: "#4dc6cb",
          400: "#1ab5bc",
          500: "#00ADB5",
          600: "#009ca3",
          700: "#008a91",
          800: "#00797f",
          900: "#00686d"
        },
      }
    },
  },
  plugins: [],
};