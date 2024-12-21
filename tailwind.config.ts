import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'var(--font-geist-sans)', 'sans-serif'], 
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      
      container:{
        padding: {
          DEFAULT: '10%',  
          sm: '5%',       
          md: '8%',        
          lg: '10%',       
          xl: '12%',       
        },
      },
      colors: {
        primary: '#292929', 
        secondary: '#a0a0a0', 
        accent: '#8b85ff',
        link: '#3B82F6', 
        border: '#E5E7EB', 
      },
      
      
    },
  },
  plugins: [],
} satisfies Config;
