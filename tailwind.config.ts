import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Theme-specific colors
				cosmic: {
					DEFAULT: 'hsl(var(--cosmic))',
					foreground: 'hsl(var(--cosmic-foreground))'
				},
				wildlife: {
					DEFAULT: 'hsl(var(--wildlife))',
					accent: 'hsl(var(--wildlife-accent))',
					foreground: 'hsl(var(--wildlife-foreground))'
				},
				marine: {
					DEFAULT: 'hsl(var(--marine))',
					accent: 'hsl(var(--marine-accent))',
					foreground: 'hsl(var(--marine-foreground))'
				},
				climate: {
					DEFAULT: 'hsl(var(--climate))',
					accent: 'hsl(var(--climate-accent))',
					foreground: 'hsl(var(--climate-foreground))'
				},
				dashboard: {
					DEFAULT: 'hsl(var(--dashboard))',
					accent: 'hsl(var(--dashboard-accent))',
					foreground: 'hsl(var(--dashboard-foreground))'
				},
				contact: {
					DEFAULT: 'hsl(var(--contact))',
					accent: 'hsl(var(--contact-accent))',
					foreground: 'hsl(var(--contact-foreground))'
				}
			},
			boxShadow: {
				'glow': '0 0 40px hsl(var(--accent) / 0.3)',
				'glass': '0 8px 32px rgba(0, 0, 0, 0.3)',
			},
			backdropBlur: {
				'glass': '10px',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-20px)'
					}
				},
				'glow': {
					'0%': {
						boxShadow: '0 0 20px hsl(var(--accent) / 0.3)'
					},
					'100%': {
						boxShadow: '0 0 40px hsl(var(--accent) / 0.6)'
					}
				},
				'twinkle': {
					'0%, 100%': {
						opacity: '0.3'
					},
					'50%': {
						opacity: '1'
					}
				},
				'spin-slow': {
					from: {
						transform: 'rotate(0deg)'
					},
					to: {
						transform: 'rotate(360deg)'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'glow': 'glow 3s ease-in-out infinite alternate',
				'twinkle': 'twinkle 4s ease-in-out infinite',
				'spin-slow': 'spin-slow 60s linear infinite',
				'fade-in': 'fade-in 0.3s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
