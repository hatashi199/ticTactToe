/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			boxShadow: {
				blackShadow: 'inset 0 -8px 0 rgba(15, 33, 43)',
				blueShadow: 'inset 0 -8px 0 #118c87',
				greyShadow: 'inset 0 -8px 0 #6B8997',
				yellowShadow: 'inset 0 -8px 0 #CC8B13'
			},
			colors: {
				crossColor: '#31c3bd',
				circleColor: '#ffc860',
				bgSquare: '#1f3641',
				bgDark: '#22323a',
				textDark: '#a8bfc9',
				subtextDark: '#647a85'
			}
		}
	},
	plugins: []
};
