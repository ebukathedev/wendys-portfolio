import ProjectHero from "../../components/Project/ProjectHero";
import caseStudyData from "../../components/Project/caseStudyData";

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
		</>
	);
};

export default KeoWallet;
