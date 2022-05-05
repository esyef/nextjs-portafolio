module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		fontFamily: {
			sans: ['Lato', 'sans-serif'],
		},
		extend: {
			colors: {
				primary: '#0B1120',
				white: '#FEFEFE',
			},
		},
	},
	plugins: [],
}
