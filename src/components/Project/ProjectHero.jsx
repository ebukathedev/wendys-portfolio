import ProjectHeading from "./ProjectHeading";
import ProjectBanner from "./ProjectBanner";

const ProjectHero = ({ title, description, color, mobileBanner, desktopBanner }) => {
	return (
		<header className="flex flex-col space-y-5 md:space-y-8 mt-12 lg:space-y-12 xl:space-y-14">
			<ProjectHeading
				title={title}
				description={description}
				color={color}
			/>
			<ProjectBanner mobileBanner={mobileBanner} desktopBanner={desktopBanner} />
		</header>
	);
};

export default ProjectHero;
