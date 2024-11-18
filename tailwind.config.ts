import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			screens: {
				sm: '500px',
				md: '768px',
				lg: '1024px',
				xl: '1440px',
				xxl: '1920px',
			},
			backgroundImage: {
				'slide-1': "url('/public/images/image_1.jpg')",
				'slide-2': "url('/public/images/image_1.jpg')",
				'slide-3': "url('/public/images/image_1.jpg')",
				'slide-4': "url('/public/images/image_1.jpg')",
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			fontFamily: {
				// primary: 'sans-serif',
				secondary: 'Roboto Flex',
			},
			spacing: {
				'0': '0px',
				'1': '1px',
				'2': '2px',
				'3': '3px',
				'4': '4px',
				'5': '5px',
				'6': '6px',
				'8': '8px',
				'10': '10px',
				'12': '12px',
				'14': '14px',
				'16': '16px',
				'18': '1[8px',
				'20': '20px',
				'24': '24px',
				'32': '32px',
				'40': '40px',
				'50': '50px',
				'80': '80px',
				'100': '100px',
			},
			colors: {
				transparent: 'transparent',
				current: 'currentColor',

				// admin colors
				red: '#e95444',
				green: '#29cb7f',
				blue: '#9FC2CC',
				primary: '#ffffff',
				primaryText: '#000000',
				primaryLight: '#ffffff',
				secondary: '#EEE0CB',
				secondaryDark: '#c9b392ff',

				// classroom colors
				crPrimary: '#F5EEE6',
				crBlue: '#4162C1',
				crPink: '#EE5A7E',
			},
			animation: {
				fadeUp: 'fadeUp 0.7s ease-in-out',
				fadeDown: 'fadeDown 0.7s ease-in-out',
				fadeIn: 'fadeIn 1s ease-in-out',
			},
			keyframes: {
				fadeUp: {
					'0%': {
						transform: 'translateY(10px)',
						opacity: '0',
					},
					'50%': {
						transform: 'translateY(0)',
						opacity: '1',
					},
				},
				fadeDown: {
					'0%': {
						transform: 'translateY(0)',
						opacity: '1',
					},
					'50%': {
						transform: 'translateY(10px)',
						opacity: '0',
					},
				},
				fadeIn: {
					'0%': {
						opacity: '0',
					},
					'50%': {
						opacity: '1',
					},
				},
			},
		},
	},
}
export default config
