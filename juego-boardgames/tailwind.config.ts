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
      boxShadow:{
        'item':'7px 7px 4px 0px rgba(0,0,0,0.25)',
        'bloc':'0px 6px 4px 0px rgba(0,0,0,0.25), 0px -6px 4px 0px rgba(0,0,0,0.25)',
        'bloc-down':'0px 6px 4px 0px rgba(0,0,0,0.25)',
        'bloc-top':'0px -6px 4px 0px rgba(0,0,0,0.25)',
        'item-phone':'3px 3px 4px 0px rgba(0,0,0,0.25)',
        'bloc-phone':'0px 3px 4px 0px rgba(0,0,0,0.25), 0px -3px 4px 0px rgba(0,0,0,0.25)',
        'bloc-down-phone':'0px 3px 4px 0px rgba(0,0,0,0.25)',
        'bloc-top-phone':'0px -3px 4px 0px rgba(0,0,0,0.25)',
      },
    },
  },
  plugins: [
  ],
};
export default config;
