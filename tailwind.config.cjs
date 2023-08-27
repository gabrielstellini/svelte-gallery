const daisyui = require('daisyui');

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	daisyui: {
		themes: [
			{
				mytheme: {
					"primary": "#641ae6",
					"secondary": "#d926a9",
					"accent": "#1fb2a6",
					"neutral": "#2a323c",
					"base-100": "#1d232a",
					"info": "#3abff8",
					"success": "#36d399",
					"warning": "#fbbd23",
					"error": "#f87272",
				},
			},
		],
	},
	theme: {
		extend: {}
	},

	plugins: [daisyui]
};

module.exports = config;
