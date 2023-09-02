/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				smoke:"#e9e9eb",
				main:"#116B36",
			  },
		},
	},
	plugins: [],
}
