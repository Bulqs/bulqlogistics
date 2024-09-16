import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
    
  ],
  theme: {
    
    extend: {
      objectFit: ['responsive', 'hover', 'focus'],
      colors: {
        appWhite: '#FFF',
        appBlack: '#000',
        appBanner: '#28A99E',
        appNav: '#008088',
        appTitleBgColor: '#114949',
        appRed: 'red',
        appYellow: '#eef21c',
        appLightBlack: '#1C1C1C',
        appBlue: '#000033',
      },
      boxShadow: {
        'custom': '10px 10px 30px rgba(0, 0, 0, 0.3)', // Custom shadow
      },
    },
  },
  plugins: [],
}
export default config