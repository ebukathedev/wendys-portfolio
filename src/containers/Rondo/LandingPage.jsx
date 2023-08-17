import TextSection from "../../components/Rondo/TextSection";
import MobileDisplay from "../../components/Rondo/Landing Page/MobileDisplay";
import DesktopDisplay from "../../components/Rondo/Landing Page/DesktopDisplay";

const LandingPage = () => {
	return (
		<section className="mt-28 lg:mt-48 mb-28">
			<div className="flex flex-col space-y-16 container mx-auto">
				<div className="px-9 md:px-10 xl:px-24">
					<TextSection title="Landing Page">
						These are the main features of our landing page
					</TextSection>
				</div>
				{/* phone image */}
				<div>
					<MobileDisplay />
					<DesktopDisplay />
				</div>
			</div>
		</section>
	);
};

export default LandingPage;
