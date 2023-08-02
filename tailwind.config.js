/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
          //advice-gen
          "light-cyan": "hsl(193, 38%, 86%)",
          "neon-green": "hsl(150, 100%, 66%)",
          "grayish-blue": "hsl(217, 19%, 38%)",
          "dark-grayish": "hsl(217, 19%, 24%)",
          "dark-blue": "hsl(218, 23%, 16%)",
          //clipboard
          "light-blue-2": "hsl(233, 100%, 69%)",
          "strong-cyan": "hsl(171, 66%, 44%)",
          "dark-grayish-2": "hsl(210, 10%, 33%)",
          "grayish-blue-2": "hsl(201, 11%, 66%)",
          //notification
          "notice-red":"hsl(1, 90%, 64%)",
          "info-blue":"hsl(219, 85%, 26%)",
          "light-blue":"hsl(210, 60%, 98%)",
          "dark-grey":"hsl(219, 12%, 42%)",
          "very-blue":" hsl(224, 21%, 14%)",
          //results 
          "light-red": "hsl(var(--color-light-red)/<alpha-value>)",
          "orangey-yellow": "hsl(var(--color-orangey-yellow)/<alpha-value>)",
          "green-teal": "hsl(var(--color-green-teal)/<alpha-value>)",
          "cobalt-blue": "hsl(var(--color-cobalt-blue)/<alpha-value>)",
          "pale-blue": "hsl(var(--color-pale-blue)/<alpha-value>)",
          "light-lavender": "hsl(var(--color-light-lavender)/<alpha-value>)",
          "darkgray-blue": "hsl(var(--color-darkgray-blue)/<alpha-value>)",
          "g-c-violet":"hsla(256, 72%, 46%, 1)",
          "g-c-blue":"hsla(241, 72%, 46%, 0)",
          "g-slate":"hsl(252, 100%, 67%)",
          "g-royal":"hsl(241, 81%, 54%)"
      },
    },
  },
  plugins: [],
}
