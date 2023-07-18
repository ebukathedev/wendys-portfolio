import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Heading = ({ name }) => {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<h3
			className="font-bold text-2xl text-center md:text-4xl"
			data-aos="fade-up"
			data-aos-duration="1000"
		>
			{name}
		</h3>
	);
};

export default Heading;
