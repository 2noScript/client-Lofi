const plugin = require('tailwindcss/plugin')
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx}',
		'./node_modules/flowbite-react/**/*.js',
	],
	theme: {
		extend: {
			colors: {
				'primary-white': '#fcfcfc',
				'primary-light': '#f4f4f8',
				'primary-dark': '#292929',
			},
			zIndex: {
				default: '0',
				low: '10',
				medium: '100',
				hight: '1000',
				'very-hight': '10000',
			},
		},
	},
	plugins: [
		plugin(function ({ addBase, addComponents, addUtilities, theme }) {
			addBase({})
			addComponents({})
			addUtilities({
				'.flex-center ': {
					display: 'flex',
					'justify-content': 'center',
					'align-items': 'center',
				},
			})
		}),
	],
}
