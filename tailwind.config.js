/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // backgroundImage: {
    //     'gradient-175': 'var(linear-gradient(175deg, #159C98 0%, #138F9E 100%))',
    // },
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px',
    },
    extend: {
      colors: {
        blueBg: "#0A5783",
        base_green:"#159C98",
        dark_green:"#138F9E",
      },
      // fontFamily:{
      //   poppins:['Poppins', 'sans-serif'],
      // },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
