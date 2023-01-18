import React from "react";
import FeaturedProjects from "../containers/FeaturedProjects";

const Projects = ({ additionalClass }) => {
	return (
		<FeaturedProjects>
			<div className="font-semibold text-[1rem] xsm:text-xl tracking-[4px] flex flex-col space-y-2 md:hidden">
				<p>Designing with passion.</p>
				<p>Creating with purpose.</p>
			</div>
		</FeaturedProjects>
	);
};

export default Projects;
