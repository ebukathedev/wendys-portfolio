/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			xsm: "428px",
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		extend: {
			colors: {
				paleWhite: "#E9F5FF",
				veryPaleWhite: "#E3E4E6",
				transparentWhite: "rgba(255,255,255,0.1)",
				darkBlue: "#09172E",
				lighterDarkBlue: "#0E2345",
				blurryBlue: "#202C41",
				orange: "#F15A24",
				discover: "#FFAB5E1A",
				define: "#3F1F2C6B",
				ideate: "#22343C66",
				strategize: "#2938366B",
				implement: "#22343C82",
				rondoPrimary: "#7F2BC2",
				softPink: "#FFE6E2",
				softPurple: "#C985FF",
				rondoBlack: "#263238",
				keoPrimary: "#374988",
			},
			backgroundImage: {
				"gradient-text":
					"linear-gradient(114.98deg, #FF7363 14.74%, rgba(214, 136, 64, 0.93) 32.7%, rgba(245, 114, 216, 0.92) 90.8%)",
				"gradient-bg":
					"linear-gradient(138.64deg, rgba(89, 34, 98, 0.72) 15.69%, rgba(144, 185, 220, 0.45) 83.8%)",
			},
			fontFamily: {
				raleway: ["Raleway", "sans-serif"],
				workSans: ["Work Sans", "sans-serif"],
				audioWide: ["Audiowide", "sans-serif"],
			},
		},
	},
	plugins: [],
};
