/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
    extend: {
        fontSize: {
            'hero': '5rem',
            'hero-ratio': '5.5vw'
        },
        inset: {
            '100': '26rem',
            '120': '30rem',
            'extreme': '58rem',
            'extreme-x': '84rem',
            'fill-all': '200rem'
        },
        dropShadow: {
            'white': [
                '0 0px 7px rgba(255, 255, 255, 0.35)', '0 0px 25px rgba(255, 255, 255, 0.25)'
            ],
            'black': ['0 0px 7px rgba(0, 0, 0, 0.35)', '0 0px 25px rgba(0, 0, 0, 0.25)'],
            'cont': ['0 0px 7px rgba(0, 0, 0, 0)', '0 0px 25px rgba(0, 0, 0, 0)']
        },
        spacing: {
            "oversize-1": "115%",
            "oversize-2": "130%",
            "os-flat":"30rem",
            'fill-all': '200rem',
            'im-1':'45%'
        },
        colors: {
            'inverted-cyan' : '#ff1a00'
        }
    }},
  plugins: [],
}
