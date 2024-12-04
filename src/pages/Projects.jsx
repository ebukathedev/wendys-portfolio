import React from "react";
import FeaturedProjects from "../containers/FeaturedProjects";

const Projects = ({ additionalClass }) => {
	return (
		<main className="container mx-auto px-5 md:px-10 xl:px-24 mt-[150px] md:mt-[180px]">
			<FeaturedProjects>
				<div className="font-semibold text-[1rem] xsm:text-xl tracking-[4px] flex flex-col space-y-2 md:hidden">
					<p>Designing with passion.</p>
					<p>Creating with purpose.</p>
				</div>
			</FeaturedProjects>
		</main>
	);
};

export default Projects;
