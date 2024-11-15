/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['Twemoji Country Flags', 'Helvetica Neue', 'Helvetica', 'Arial', 'system-ui', '-apple-system', 'sans-serif'],
			  },
		}
	},

	plugins: []
};
