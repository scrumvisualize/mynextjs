/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        splitRotateJoin: {
          '0%, 100%': { 
            transform: 'rotate(0deg) translateX(0)', 
            opacity: 1
          },
          '25%': {
            transform: 'rotate(90deg) translateX(-50px)', 
            opacity: 0
          },
          '50%': {
            transform: 'rotate(180deg) translateX(50px)',
            opacity: 0
          },
          '75%': {
            transform: 'rotate(90deg) translateX(-50px)',
            opacity: 0
          },
        },
      },
      animation: {
        splitRotateJoin: 'splitRotateJoin 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

