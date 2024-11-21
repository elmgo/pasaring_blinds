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
				'30': '30px',
				'32': '32px',
				'40': '40px',
				'50': '50px',
				'60': '60px',
				'70': '70px',
				'80': '80px',
				'90': '90px',
				'100': '100px',
				'200': '200px',
				'300': '300px',
				'400': '400px',
				'500': '500px',
				'600': '600px',
			},
			colors: {
				transparent: 'transparent',
				current: 'currentColor',

				// admin colors
				primary: '#561E1D',
				primaryDark: '#4A1817',
			},
			animation: {
				fadeUpSmall: 'fadeUpSmall 0.7s ease-in-out',
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
				fadeUpSmall: {
					'0%': {
						transform: 'translateY(5px)',
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
