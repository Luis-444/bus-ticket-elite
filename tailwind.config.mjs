/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', 'node_modules/flowbite-react/lib/esm/**/*.js',],
	theme: {
		extend: {
			colors: {
				'primary': {
					'DEFAULT': '#E07B87',
					'hover': '#7a0c35',
					'text': '#9F2534',
				},
				'secondary': '#FBE8DA',
			}				
		},
	},
	plugins: [
		require('flowbite/plugin'),
	],
}
