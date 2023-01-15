import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import wavingHand from "../assets/images/waving_hand.svg";
import coderGirl from "../assets/images/coder_girl.svg";
import avatar from "../assets/images/avatar.svg";
import ContactLink from "../components/ContactLink";

const Hero = () => {
	return (
		<section>
			<div className="flex flex-col space-y-8 md:space-y-6 xl:space-x-4">
				<div className="space-y-6">
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
				<h2 className="flex items-center space-x-3 font-bold text-2xl sm:text-3xl md:text-[40px] md:space-x-4 md:items-start">
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
				<div className="flex flex-col space-y-3 text-paleWhite">
					<ContactLink
						name="chiwendy1@gmail.com"
						href="mailto:chiwendy1@gmail.com"
					>
						<CiMail className="text-2xl xl:text-3xl" />
					</ContactLink>
					<ContactLink
						name="linkedin.com/in/wendy-enyinnaya"
						href="https://www.linkedin.com/in/wendy-enyinnaya"
					>
						<CiLinkedin className="text-2xl xl:text-3xl" />
					</ContactLink>
				</div>
			</div>
			<div className="relative mt-14 mb-16 py-6 md:py-8 md:my-20 lg:mb-24">
				<div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gradient-bg rounded-full blur-2xl w-1/2 h-full md:w-1/3 xl:w-1/4"></div>
				<div className="flex justify-center">
					<img
						src={avatar}
						alt="3d avatar"
						className="relative z-10 md:w-36 lg:w-44"
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
