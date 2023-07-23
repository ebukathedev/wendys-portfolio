import ProjectHero from "../../components/Project/ProjectHero";
import caseStudyData from "../../components/Project/caseStudyData";
import KeoIntro from "../../containers/Keo/KeoIntro";

const {
	keoWallet: { title, description, color, mobileBanner, desktopBanner },
} = caseStudyData;

const KeoWallet = () => {
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
				<KeoIntro />
			</main>
		</>
	);
};

export default KeoWallet;
