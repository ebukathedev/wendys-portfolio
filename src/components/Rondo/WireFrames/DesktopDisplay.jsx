import phoneData from "../phoneData";
import dottedCircle from "../../../assets/images/dotted_circle.svg";

const {
	wire_frames: { desktopImages },
} = phoneData;

const { group1: bigPhones, group2: smallPhones } = desktopImages;

const DesktopDisplay = () => {
	return (
		<div className="hidden lg:block px-10 space-y-14">
			<div className="relative flex justify-center space-x-8 mlg:flex-wrap xl:max-w-[1370px] xl:mx-auto">
				{bigPhones.map((image, index) => (
					<div key={index} className="max-w-[296px] mlg:max-w-full">
						<img src={image} alt={`phone ${index}`} />
					</div>
				))}
				{/* background illustration*/}
				<div className="hidden xl:block absolute top-44 right-0 w-44">
					<img src={dottedCircle} alt="dotted circle" />
				</div>
			</div>
			<div className="flex justify-center space-x-4 mlg:flex-wrap">
				{smallPhones.map((image, index) => (
					<div key={index} className="max-w-[270px] mlg:max-w-full">
						<img src={image} alt={`phone ${index}`} />
					</div>
				))}
			</div>
		</div>
	);
};

export default DesktopDisplay;
