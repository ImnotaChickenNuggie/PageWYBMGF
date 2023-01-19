/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				rachelya: ['RACHELYA', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
