/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['"Atkinson Hyperlegible"', ...defaultTheme.fontFamily.sans],
			},
		}
	},
	plugins: [typography],
}
