/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				chestnut: {
					DEFAULT: '#BA4949',
					50: '#ECCECE',
					100: '#E7BFBF',
					200: '#DCA2A2',
					300: '#D08484',
					400: '#C56767',
					500: '#BA4949',
					600: '#933838',
					700: '#6A2828',
					800: '#421919',
					900: '#190A0A',
				},
				paradiso: {
					DEFAULT: '#38858A',
					50: '#A1D5D9',
					100: '#92CFD3',
					200: '#75C2C7',
					300: '#58B5BB',
					400: '#44A1A7',
					500: '#38858A',
					600: '#285F62',
					700: '#18383A',
					800: '#071212',
					900: '#000000',
				},
				calypso: {
					DEFAULT: '#397097',
					50: '#A9C8DF',
					100: '#9ABFD9',
					200: '#7DACCE',
					300: '#5F99C3',
					400: '#4486B5',
					500: '#397097',
					600: '#2A526E',
					700: '#1A3446',
					800: '#0B151D',
					900: '#000000',
				},
			},
		},
	},
	safelist: [
		'bg-chestnut',
		'bg-paradiso',
		'bg-calypso',
		'text-chestnut',
		'text-paradiso',
		'text-calypso',
	],
	plugins: [],
};
