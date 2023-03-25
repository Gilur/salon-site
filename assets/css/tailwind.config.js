module.exports = {
  theme: {
    extend: {
      colors: { primary: "#fbde5c", pink: '#ffdcf0' },
      width: {
        half: "calc(50% - 1rem)",
        third: "calc(33% - 1rem)",
        quarter: "calc(25% - 1rem)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
        },
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
