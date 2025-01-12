import defaultTheme from 'tailwindcss/defaultTheme';
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
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
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                "move-loop": "moveLoop 2s ease-in-out infinite",
                transaction: "transaction 1.5s ease-in-out 1.5s",
                bayar: "bayar 1.5s ease-in-out",
            },
        },
    },

    darkMode: "class",
    plugins: [nextui()],
};
