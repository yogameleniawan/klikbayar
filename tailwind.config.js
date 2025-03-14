const {heroui} = require('@heroui/theme');
import { transform } from 'lodash';
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
    "./storage/framework/views/*.php",
    "./resources/views/**/*.blade.php",
    "./resources/js/**/*.jsx",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/components/(toast|spinner).js"
  ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', ...defaultTheme.fontFamily.sans],
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(-20px)' },
                    '25%': { opacity: '0', transform: 'translateY(-10px)' },
                    '50%': { opacity: '1', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0px)' },
                },
                moveLoop: {
                    "0%, 100%": { transform: "translate(1rem, 1rem)" },
                    "50%": { transform: "translate(0, 0)" },
                },
                transaction: {
                    "0%": { transform: "scale(1)", opacity: "0" },
                    "50%": { transform: "scale(1.2)", opacity: "0.8" },
                    "100%": { transform: "scale(1.2)", opacity: "1" },
                },
                bayar: {
                    "0%, 100%": { transform: "translateX(0%)" },
                    "50%": { transform: "translateX(10%)", rotate: "0deg" },
                    "60%": { transform: "translateX(10%)", rotate: "10deg" },
                    "70%": { transform: "translateX(10%)", rotate: "0deg" },
                    "80%": { transform: "translateX(10%)", rotate: "-10deg" },
                    "90%": { transform: "translateX(10%)", rotate: "0deg" },
                },
                gradient: {
                    '0%, 100%': {
                        'background-size': '200% 200%',
                        'background-position': 'left center'
                    },
                    '50%': {
                        'background-size': '200% 200%',
                        'background-position': 'right center'
                    },
                },
                float: {
                    '0%': {
                        transform: 'translateY(100vh) scale(1)',
                        opacity: 0,
                    },
                    '5%': {
                        opacity: 0.3,
                    },
                    '95%': {
                        opacity: 0,
                    },
                    '100%': {
                        transform: 'translateY(-20vh) scale(1.5)',
                        opacity: 0,
                    },
                },
                bell: {
                    '0%': { transform: 'rotate(0deg)' },
                    '25%': { transform: 'rotate(-2deg)' },
                    '50%': { transform: 'rotate(2deg)' },
                    '75%': { transform: 'rotate(-2deg)' },
                    '100%': { transform: 'rotate(0deg)' },
                  },
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                "move-loop": "moveLoop 2s ease-in-out infinite",
                transaction: "transaction 1.5s ease-in-out 1.5s",
                bayar: "bayar 1.5s ease-in-out infinite",
                'gradient': 'gradient 5s linear infinite',
                'float': 'float 8s ease-in infinite',
                bell: 'bell 1s ease-in-out infinite',
            },
        },
    },

    darkMode: "class",
  plugins: [heroui()],
};
