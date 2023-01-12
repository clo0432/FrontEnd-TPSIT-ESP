/** @type {import('tailwindcss').Config} */
module.exports = {
    content: {
        files: ["./index.html", "./src/**/*.{js,jsx}"],
        transform: (content) => content.replace(/taos:/g, ""),
    },
    mode: "jit",
    theme: {
        container: {
            center: true,
        },
        extend: {
            colors: {
                primary: "#1D092C",
                secondaryFlash: "#9A4ECD",
                secondaryDim: "#674C72",
                accent: "#FA7929",
                accentHover: "#FEC29A",
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
        },
    },
    screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
    },
    plugins: [require("@headlessui/tailwindcss"), require("taos/plugin")],
    safelist: [
        "!duration-0",
        "!delay-0",
        'html.js :where([class*="taos:"]:not(.taos-init))',
    ],
};
