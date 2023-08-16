import PhoneCarousel from "../../PhoneCarousel";
import phoneData from "../phoneData";

const {
	wire_frames: { mobileImages, doubleImages },
} = phoneData;

const TabletDisplay = () => {
	return (
		<div className="hidden md:block lg:hidden">
			<PhoneCarousel
				isDouble={true}
				doubleImagesArray={doubleImages}
				autoSlide={true}
			>
				{mobileImages.map((image, index) => (
					<img key={index} src={image} alt={`phone ${index}`} />
				))}
			</PhoneCarousel>
		</div>
	);
};

export default TabletDisplay;
