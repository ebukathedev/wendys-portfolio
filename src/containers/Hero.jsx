import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import wavingHand from "../assets/images/waving_hand.svg";
import coderGirl from "../assets/images/coder_girl.svg";
import ContactLink from "../components/ContactLink";

const Hero = () => {
	return (
		<section>
			<div className="flex flex-col space-y-8">
				<div className="space-y-6">
					<h4 className="flex items-center font-semibold text-xl">
						<span>Hi there</span>
						<div className="ml-2">
							<img src={wavingHand} alt="waving hand" />
						</div>
					</h4>
					<h1 className="font-bold text-5xl leading-[55px] tracking-[4px]">
						I’m Wendy Enyinnaya
					</h1>
				</div>
				<h2 className="flex items-center space-x-3 font-bold text-2xl xsm:text3xl">
					<span className="gradient-text">A UI/UX Designer</span>
					<div>
						<img src={coderGirl} alt="coding girl" />
					</div>
				</h2>
				<div className="flex flex-col space-y-3 text-paleWhite">
					<ContactLink
						name="chiwendy1@gmail.com"
						href="mailto:chiwendy1@gmail.com"
					>
						<CiMail className="text-2xl" />
					</ContactLink>
					<ContactLink
						name="linkedin.com/in/wendy-enyinnaya"
						href="https://www.linkedin.com/in/wendy-enyinnaya"
					>
						<CiLinkedin className="text-2xl" />
					</ContactLink>
				</div>
			</div>
		</section>
	);
};

export default Hero;
