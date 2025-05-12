
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
				sans: ['"Inter"', 'sans-serif'],
				'playfair': ['Playfair Display', 'serif'],
				'cinzel': ['Cinzel', 'serif'],
				'futura': ['Futura', 'Helvetica Neue', 'sans-serif'],
				'orbitron': ['Orbitron', 'sans-serif'],
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
				cinema: {
					'romantic': '#f8e9dd',
					'mafia': '#1a1a1a',
					'psycho': '#ffffff',
					'blade': '#0a192f',
					'neon': '#00b3ff',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				'fade-in-slow': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				'pulse-glow': {
					'0%, 100%': { 
						textShadow: '0 0 8px rgba(0, 179, 255, 0.4), 0 0 12px rgba(0, 179, 255, 0.3)' 
					},
					'50%': { 
						textShadow: '0 0 18px rgba(0, 179, 255, 0.6), 0 0 22px rgba(0, 179, 255, 0.5)' 
					},
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'float-delayed': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-6px)' },
				},
				'film-grain': {
					'0%, 100%': { transform: 'translateX(0) translateY(0)' },
					'25%': { transform: 'translateX(3px) translateY(-3px)' },
					'50%': { transform: 'translateX(-3px) translateY(3px)' },
					'75%': { transform: 'translateX(3px) translateY(-3px)' },
				},
				'rain': {
					'0%': { transform: 'translateY(-100vh)' },
					'100%': { transform: 'translateY(100vh)' },
				},
				'glitch': {
					'0%': { transform: 'translate(0)' },
					'20%': { transform: 'translate(-2px, 1px)' },
					'40%': { transform: 'translate(-1px, -1px)' },
					'60%': { transform: 'translate(1px, 1px)' },
					'80%': { transform: 'translate(2px, -1px)' },
					'100%': { transform: 'translate(0)' },
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 1s ease-in forwards',
				'fade-in-slow': 'fade-in-slow 2.5s ease-in forwards',
				'pulse-glow': 'pulse-glow 2s infinite',
				'float': 'float 6s ease-in-out infinite',
				'float-delayed': 'float-delayed 4s ease-in-out infinite 1s',
				'film-grain': 'film-grain 0.4s steps(1) infinite',
				'rain': 'rain 15s linear infinite',
				'glitch': 'glitch 0.2s ease-in forwards',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
