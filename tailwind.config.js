/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#367F52",
        butter: "#fffefb",
        white: "#ffffff",
        black: "#4E5B53",
      },
      fontFamily: {
        "square-round": ["NanumSquareRound"],
      },
    },
  },
  plugins: [],
};
