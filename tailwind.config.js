/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        inputFieldBoxShadow:
          "inset 0px 3px 3px #FFFDFD40, 3px 3px 3px #4A494947",
        employeeBox: "inset 0px 4px 0px #00000040",
      },

      colors: {
        greenHeader: "#36A546CC",
        inputFieldText: "#1F191966",
        inputFieldBackground: "#1F191966",
      },
      height: {
        inputFiledHeight: "42px",
      },
      width: {
        inputFieldWidth: "238px",
      },
    },
  },
  plugins: [],
};
