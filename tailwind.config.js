/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        fontSize: {
            'hero': '7rem'
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
            "oversize-1": "110%",
            "os-flat":"30rem",
            'fill-all': '200rem'
        },
        colors: {
            'inverted-cyan' : '#ff1a00'
        }
    }},
  plugins: [],
}
