const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bluegray: colors.blueGray,
        coolgray: colors.coolGray,
        truegray: colors.trueGray,
        warmgray: colors.warmGray,
        orange: colors.orange,
        amber: colors.amber,
        lime: colors.lime,
        emerald: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan,
        sky: colors.sky,
        violet: colors.violet,
        fuchsia: colors.fuchsia,
        rose: colors.rose,
        fbgray: {
          dark: "#151616",
          DEFAULT: "#242526",
          semilight: "#3a3b3c",
          light: "#484a4d",
          lighter: "#b0b3b8",
          lighter2: "#dadce1",
          lightest: "#e4e6eb",
        },
      },
      padding: {
        30: "7.5rem",
        13: "3.2rem",
      },
      minHeight: {
        0: "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
        screen: "100vh",
      },
      maxHeight: {
        0: "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
        screen: "100vh",
      },
      animation: {
        "pulse-slower": "pulse 1300ms cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "pulse-slow": "pulse 1100ms cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "pulse-fast": "pulse 900ms cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "pulse-faster": "pulse 700ms cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  variants: {
    extend: {
      scale: ["hover", "active"],
      backgroundColor: ["active"],
      brightness: ["active", "hover"],
    },
  },
  plugins: [],
};
