import ProjectHero from "../../components/Project/ProjectHero";
import caseStudyData from "../../components/Project/caseStudyData";
import Mockups from "../../containers/Rondo/Mockups";
import RondoIntro from "../../containers/Rondo/RondoIntro";
import UserPersona from "../../containers/Rondo/UserPersona";
import WireFrames from "../../containers/Rondo/WireFrames";

const { rondo } = caseStudyData;

const Rondo = () => {
	return (
		<main className="overflow-hidden">
			<ProjectHero {...rondo} />
			<RondoIntro />
			<UserPersona />
			<WireFrames />
			<Mockups />
		</main>
	);
};

export default Rondo;
