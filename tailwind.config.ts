import defaultTheme from 'tailwindcss/defaultTheme';

function withOpacity(colorValue: string) {
	return ({ opacityValue }: { opacityValue: string }) => {
		if (opacityValue !== undefined) {
			return `rgba(${colorValue}, ${opacityValue})`;
		}
		return `rgb(${colorValue})`;
	};
}

function fromVariable(variableName: string) {
	return withOpacity(`var(${variableName})`);
}

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				background: {
					100: fromVariable('--color-background-100'),
					200: fromVariable('--color-background-200'),
					300: fromVariable('--color-background-300')
				},
				primary: {
					400: fromVariable('--color-primary-400'),
					700: fromVariable('--color-primary-700'),
					900: fromVariable('--color-primary-900')
				},
				accent: {
					600: fromVariable('--color-accent-600')
				},
				neutral: {
					100: fromVariable('--color-neutral-100'),
					700: fromVariable('--color-neutral-700'),
					900: fromVariable('--color-neutral-900'),
					950: fromVariable('--color-neutral-950')
				}
			},
			textColor: {
				theme: {
					heading: fromVariable('--color-neutral-950'),
					body: fromVariable('--color-neutral-950'),
					muted: fromVariable('--color-neutral-900'),
					'muted-hover': fromVariable('--color-primary-700')
				}
			},
			borderColor: {
				theme: {
					div: fromVariable('--color-background-300')
				}
			},
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
				sang: ['SangBleu', ...defaultTheme.fontFamily.sans]
			},
			fontSize: {
				'6xl': ['3.75rem', { lineHeight: '1.1' }],
				'5xl': ['2.5rem', { lineHeight: '1.1' }],
				'4xl': ['2.25rem', { lineHeight: '1.1' }],
				'lg-heading': ['1.125rem', { lineHeight: '2rem', fontWeight: '500' }],
				lg: ['1.125rem', { lineHeight: '2rem', fontWeight: '300' }],
				'xl-summary': ['1.125rem', { lineHeight: '28px', fontWeight: '300' }],
				'2xl-summary': ['1.375rem', { lineHeight: '36px', fontWeight: '300' }],
				base: ['1rem', { lineHeight: '1.5rem', fontWeight: '300' }]
			}
		}
	},

	plugins: []
};
