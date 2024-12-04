import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Button from "../components/ui/Button";

const year = new Date().getFullYear();

const Footer = () => {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<footer className="pt-7 pb-4 bg-lighterDarkBlue lg:pt-9 lg:pb-5 xl:pt-12 xl:pb-10">
			<div
				className="flex flex-col items-center space-y-10"
				data-aos="fade-in"
				data-aos-duration="1000"
			>
				<div className="flex flex-col items-center space-y-2 xl:space-y-4">
					<h3 className="font-semibold text-2xl md:text-4xl xl:text-5xl">
						Let’s connect!
					</h3>
					<p className="text-lg text-center font-medium xl:text-3xl">
						Want to connect with me?
						<br />
						Say hi
					</p>
				</div>
				<Button href="mailto:chiwendy1@gmail.com">Contact me</Button>
				<span className="text-sm font-medium mt-4 xl:text-lg">
					All rights reserved © Wendy Enyinnaya {year}
				</span>
			</div>
		</footer>
	);
};

export default Footer;
