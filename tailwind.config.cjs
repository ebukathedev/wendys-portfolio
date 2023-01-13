/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		extend: {
			colors: {
				paleWhite: "#E9F5FF",
				darkBlue: "#09172E",
				orange: "#F15A24",
				discover: "#FFAB5E",
				define: "#3F1F2C",
				ideate: "#22343C",
				strategize: "#293836",
				implement: "#22343C",
			},
			backgroundImage: {
				"gradient-text":
					"linear-gradient(114.98deg, #FF7363 14.74%, rgba(214, 136, 64, 0.93) 32.7%, rgba(245, 114, 216, 0.92) 90.8%)",
				"gradient-bg":
					"linear-gradient(138.64deg, rgba(89, 34, 98, 0.72) 15.69%, rgba(144, 185, 220, 0.45) 83.8%)",
			},
			fontFamily: {
				raleway: "Raleway",
			},
		},
	},
	plugins: [],
};
