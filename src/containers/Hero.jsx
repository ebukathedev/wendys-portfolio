import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { ImBehance2 } from "react-icons/im";
import { IoLogoLinkedin } from "react-icons/io5";
import { Link } from "react-router-dom";
import avatar from "../assets/images/avatar.svg";
import coderGirl from "../assets/images/coder_girl.svg";
import wavingHand from "../assets/images/waving_hand.svg";
import Button from "../components/ui/Button";

const Hero = () => {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<section>
			<div className="flex flex-col space-y-8 md:space-y-6 xl:space-x-4">
				<div
					className="space-y-6"
					data-aos="fade-up"
					data-aos-duration="1000"
				>
					<h4 className="flex items-center font-semibold text-xl">
						<span>Hi there</span>
						<div className="ml-2">
							<img src={wavingHand} alt="waving hand" />
						</div>
					</h4>
					<h1 className="font-bold text-5xl leading-[55px] tracking-[4px] md:text-6xl lg:text-7xl xl:text-8xl">
						I’m Wendy Enyinnaya
					</h1>
				</div>
				<h2
					className="flex items-center space-x-3 font-bold text-2xl sm:text-3xl md:text-[40px] md:space-x-4 md:items-start"
					data-aos="fade-up"
					data-aos-duration="1500"
				>
					<span className="gradient-text md:py-2">
						A UI/UX Designer
					</span>
					<div>
						<img
							src={coderGirl}
							alt="coding girl"
							className="md:w-10"
						/>
					</div>
				</h2>
				<div
					className="flex text-paleWhite gap-3 flex-wrap md:gap-4"
					data-aos="fade-up"
					data-aos-duration="1500"
				>
					<Button
						href="mailto:chiwendy1@gmail.com"
						className="py-3 px-8"
					>
						Get in touch
					</Button>
					<div className="flex gap-3 md:gap-4">
						<Button
							href="https://www.linkedin.com/in/wendy-enyinnaya"
							className="py-2 px-5 md:px-8 text-2xl h-full items-center flex justify-center"
						>
							<IoLogoLinkedin />
						</Button>
						<Button
							href="https://www.behance.net/chichiwendy"
							className="py-[14px] px-5 md:px-8 text-2xl h-full items-center flex justify-center"
						>
							<ImBehance2 />
						</Button>
					</div>
				</div>
			</div>
			<div
				className="relative mt-14 mb-16 py-6 md:py-8 md:my-20 lg:mb-24"
				data-aos="zoom-in"
				data-aos-duration="1500"
			>
				<div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gradient-bg rounded-full blur-2xl w-1/2 h-full md:w-1/3 xl:w-1/4"></div>
				<div className="flex justify-center">
					<img
						src={avatar}
						width={135}
						height={132}
						alt="3d avatar"
						className="relative z-10 md:w-36 lg:w-44"
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
