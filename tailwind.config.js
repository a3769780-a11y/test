/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    base: '#FFFBF7',       // Warm Cream (Main Background)
                    surface: '#FFFFFF',    // White Surface
                    text: '#2D2D2D',       // Charcoal / Matte Black
                    muted: '#666666',      // Muted Grey
                    accent: '#B76E79',     // Old Rose (Primary Accent - Replaces Green)
                    accentHover: '#9F5F69', // Darker Rose
                    gold: '#C5A059',       // Gold for highlights
                    pink: '#FCE7F3',       // Soft Pink for backgrounds
                    lavender: '#E9E3FF',   // Soft Lavender
                    dark: '#1C1C1C',       // Dark section background
                }
            },
            fontFamily: {
                serif: ['Playfair Display', 'serif'],
                sans: ['Montserrat', 'sans-serif'],
                script: ['Great Vibes', 'cursive'],
            },
            animation: {
                'spin-slow': 'spin 15s linear infinite',
                'fade-in': 'fadeIn 0.5s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        }
    },
    plugins: [],
}
