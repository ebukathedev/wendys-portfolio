import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const SingleAbout = ({ title, description, descriptionContinued }) => {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div className="flex even:flex-row-reverse gap-x-5 max-[359px]:flex-col max-[359px]:even:flex-col">
			<div
				className="text-lg font-medium gradient-text w-2/5 xsm:text-center md:text-xl xl:w-1/4 xl:text-3xl"
				data-aos="fade-up"
				data-aos-duration="1000"
			>
				{title}
			</div>
			<div
				className="w-3/5 xl:w-3/4 text-paleWhite max-[359px]:w-full"
				data-aos="fade-down"
				data-aos-duration="1000"
			>
				<p className="text-lg font-medium xl:text-3xl xl:leading-loose">
					{description}
				</p>
				<p className="text-lg font-medium xl:text-3xl xl:leading-loose">
					{descriptionContinued}
				</p>
			</div>
		</div>
	);
};

export default SingleAbout;
