import dottedCircle from "../../assets/images/dotted_circle.svg";
import TextSection from "../../components/Rondo/TextSection";
import DesktopDisplay from "../../components/Rondo/WireFrames/DesktopDisplay";
import MobileDisplay from "../../components/Rondo/WireFrames/MobileDisplay";
import TabletDisplay from "../../components/Rondo/WireFrames/TabletDisplay";
import phoneData from "../../components/Rondo/phoneData";

const {
	wire_frames: { mobileImages, desktopImages, doubleImages },
} = phoneData;

const { group1: bigPhones, group2: smallPhones } = desktopImages;

const WireFrames = () => {
	return (
		<section className="relative mt-28 lg:mt-48">
			<div className="flex flex-col space-y-10 lg:space-y-20">
				<div className="container mx-auto px-9 md:px-10 xl:px-24">
					<div className="flex flex-col space-y-8">
						<TextSection title="Low-fidelity Wireframes">
							The low fidelity were designed for better interface.
						</TextSection>

						<MobileDisplay />
					</div>
				</div>
				<TabletDisplay />
				<DesktopDisplay />

				{/* background illustration*/}
				<div className="hidden md:block xl:hidden absolute top-72 right-0 w-32 lg:w-44">
					<img src={dottedCircle} alt="dotted circle" />
				</div>
			</div>
		</section>
	);
};

export default WireFrames;
