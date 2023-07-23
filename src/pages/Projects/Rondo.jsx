import ProjectHero from "../../components/Project/ProjectHero";
import caseStudyData from "../../components/Project/caseStudyData";
import RondoIntro from "../../containers/Rondo/RondoIntro";
import UserPersona from "../../containers/Rondo/UserPersona";

const {
	rondo: { title, description, color, mobileBanner, desktopBanner },
} = caseStudyData;

const Rondo = () => {
	return (
		<main className="overflow-hidden">
			<ProjectHero
				title={title}
				description={description}
				color={color}
				mobileBanner={mobileBanner}
				desktopBanner={desktopBanner}
			/>
			<RondoIntro />
			<UserPersona />
		</main>
	);
};

export default Rondo;
