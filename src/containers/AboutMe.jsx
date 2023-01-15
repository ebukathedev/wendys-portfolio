import React from "react";
import HomeSection from "../components/HomeSection";

const AboutMe = () => {
	return (
		<section>
			<HomeSection
				title="About me"
				spacing="space-y-7 lg:space-y-9 xl:space-y-12"
			>
				<div className="flex flex-col space-y-9 md:space-y-0 text-paleWhite mx-auto text-lg font-medium md:text-center max-w-2xl lg:text-xl lg:max-w-3xl xl:max-w-4xl xl:text-2xl md:font-normal">
					<p>
						Wendy is a UI/UX designer passionate about designing
						useable products that directly impact its users. She
						builds digital products (both web and mobile).
					</p>
					<p>
						Her area of specialization are User Experience Design,
						Visual design, Product design.
					</p>
				</div>
			</HomeSection>
		</section>
	);
};

export default AboutMe;
