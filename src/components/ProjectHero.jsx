import ProjectHeading from "./ProjectHeading";
import ProjectBanner from "./ProjectBanner";

const ProjectHero = () => {
	return (
		<header className="flex flex-col space-y-5 md:space-y-8 mt-12 lg:space-y-12 xl:space-y-14">
			<ProjectHeading
				title="RONDO"
				description="Making finance fun"
				color="text-rondoPrimary"
			/>
			<ProjectBanner />
		</header>
	);
};

export default ProjectHero;
