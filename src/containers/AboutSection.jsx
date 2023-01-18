import React from "react";
import aboutData from "../components/aboutData";
import SingleAbout from "../components/SingleAbout";

const AboutSection = () => {
	return (
		<div className="flex flex-col space-y-16 md:space-y-20">
			{aboutData.map((obj) => (
				<SingleAbout
					key={obj.id}
					title={obj.title}
					description={obj.description}
					descriptionContinued={obj.descriptionContinued}
				/>
			))}
		</div>
	);
};

export default AboutSection;
