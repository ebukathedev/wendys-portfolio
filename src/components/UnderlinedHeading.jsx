import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const UnderlinedHeading = ({ name }) => {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<h3
			className="font-bold text-2xl underline text-center md:text-4xl"
			data-aos="fade-up"
			data-aos-duration="1000"
		>
			{name}
		</h3>
	);
};

export default UnderlinedHeading;
