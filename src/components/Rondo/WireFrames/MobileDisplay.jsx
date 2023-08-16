import PhoneCarousel from "../../PhoneCarousel";
import phoneData from "../phoneData";

const {
	wire_frames: { mobileImages },
} = phoneData;

const MobileDisplay = () => {
	return (
		<div className="md:hidden">
			<PhoneCarousel>
				{mobileImages.map((image, index) => (
					<img key={index} src={image} alt={`phone ${index}`} />
				))}
			</PhoneCarousel>
		</div>
	);
};

export default MobileDisplay;
