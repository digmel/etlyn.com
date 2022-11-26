module.exports = {
  content: [
    "./pages/*.{js,ts,jsx,tsx}",
    "./components/*.{js,ts,jsx,tsx}",
    "./icons/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        section: "#132742",
        screen: "#11395E",
        light: "#E8EDF0",
        highlight: "#00B5FF",
        button: "#39BAF0",
        "button-text": "#003654",
        accent: "#90D2EE",
      },
    },
    container: {
      center: true,
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
  },
  plugins: [],
};
