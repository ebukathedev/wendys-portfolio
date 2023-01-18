import React from "react";
import HomeSection from "../components/HomeSection";
import AboutSection from "./AboutSection";

const profilePic = "https://ik.imagekit.io/ebukathedev/profile_pic.png";
const AboutHero = () => {
	return (
		<section className="mb-32">
			<HomeSection
				title="About me"
				spacing="space-y-12 xsm:space-y-14 md:space-y-20 xl:space-y-28"
			>
				<div className="flex flex-col space-y-20 md:space-y-32">
					{/* hero */}
					<div className="flex flex-col space-y-8 md:flex-row-reverse md:space-y-0 justify-between">
						<div>
							<img
								src={profilePic}
								alt="profile pic"
								className="w-full xsm:max-w-xs xsm:mx-auto"
							/>
						</div>
						<div className="font-semibold text-[1rem] xsm:text-xl tracking-[4px] flex flex-col space-y-2 md:text-2xl md:space-y-0 md:flex-1 items-center">
							<p className="hidden md:flex md:flex-col md:justify-between md:h-full">
								<span>Designing </span>
								<span>with </span>
								<span>passion.</span>
								<span>Creating </span>
								<span>with </span>
								<span>purpose.</span>
							</p>
							<p className="md:hidden">Designing with passion.</p>
							<p className="md:hidden">Creating with purpose.</p>
						</div>
					</div>
					<AboutSection />
				</div>
			</HomeSection>
		</section>
	);
};

export default AboutHero;
