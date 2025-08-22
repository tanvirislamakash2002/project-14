import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",   // App Router
    "./pages/**/*.{js,jsx,ts,tsx,mdx}", // Pages Router
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],   
  daisyui: {
    themes: ["light"],
  },
};

export default config;
