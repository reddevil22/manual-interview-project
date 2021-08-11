module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                'montserrat': ['"Montserrat"', 'Helvetica'],
                'helvetica': ['Helvetica'],
                'open-sans': ['"Open Sans"', 'Helvetica'],
            }
        },
        colors: {
            'pine-green': '#0c3c3d',
            'hero-button': '#34d1d1'
        },
        height: {
            'xxl': '680px'
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}