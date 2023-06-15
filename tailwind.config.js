/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        colors: {
            grayLink: "#C6C6C6",
            blueLink: "#93D8EE",
            footer: "#323232",
            iconBg: "#4B545C"
        },
        screens: {
            mini: "400px"
        }
    }
  },
  plugins: [],
}
