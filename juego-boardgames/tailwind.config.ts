import type { Config } from "tailwindcss";

const config: Config = {
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
      textUnderlineOffset: {
        20:'20px',
        10:'10px',
      },
      fontFamily: {
        bree: ['var(--font-bree)', 'serif'],
      },
      translate: {
        'custom-y-303': '303px',
      },
    },
  },
  plugins: [],
};
export default config;
