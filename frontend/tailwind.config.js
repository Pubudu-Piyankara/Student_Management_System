/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './src/**/*.{js,jsx,ts,tsx}',
  'node_modules/flowbite-react/lib/esm/**/*.js',
      
  'node_modules/flowbite-react/lib/esm/**/*.tsx'
 ,
],
  theme: {
    extend: {
      gridTemplateColumns: {
        
        '16': 'repeat(16, minmax(0, 1fr))',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

