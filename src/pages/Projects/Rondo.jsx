import ProjectHero from "../../components/Project/ProjectHero";
import caseStudyData from "../../components/Project/caseStudyData";
import RondoIntro from "../../containers/Rondo/RondoIntro";

const {
	rondo: { title, description, color, mobileBanner, desktopBanner },
} = caseStudyData;

const Rondo = () => {
	return (
		<>
			<ProjectHero
				title={title}
				description={description}
				color={color}
				mobileBanner={mobileBanner}
				desktopBanner={desktopBanner}
			/>
			<main>
				<RondoIntro />
			</main>
		</>
	);
};

export default Rondo;
