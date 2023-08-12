import DoublePhoneCarousel from "../../components/DoublePhoneCarousel";
import PhoneCarousel from "../../components/PhoneCarousel";
import Heading from "../../components/Rondo/Heading";
import phoneData from "../../components/Rondo/phoneData";
import dottedCircle from "../../assets/images/dotted_circle.svg";

const {
	wire_frames: { mobileImages, desktopImages, doubleImages },
} = phoneData;

const { group1: bigPhones, group2: smallPhones } = desktopImages;

const WireFrames = () => {
	return (
		<section className="relative mt-28 lg:mt-48 mb-28">
			<div className="container mx-auto px-9 md:p-10 xl:px-24">
				<div className="flex flex-col space-y-8">
					<div className="flex flex-col space-y-2 text-center">
						<Heading title="Low-fidelity Wireframes" />
						<p className="text-lg font-medium xl:text-2xl text-center">
							The low fidelity were designed for better interface.
						</p>
					</div>

					{/* carousel: mobile */}
					<div className="md:hidden">
						<PhoneCarousel>
							{mobileImages.map((image, index) => (
								<img
									key={index}
									src={image}
									alt={`phone ${index}`}
								/>
							))}
						</PhoneCarousel>
					</div>
				</div>
			</div>
			{/* carousel: tablet */}
			<div className="hidden md:block max-w-[658px] mx-auto lg:hidden">
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
			{/* images: desktop */}
			<div className="hidden lg:block px-10 space-y-8">
				<div className="flex justify-center space-x-4 mlg:flex-wrap">
					{bigPhones.map((image, index) => (
						<div
							key={index}
							className="max-w-[296px] mlg:max-w-full"
						>
							<img src={image} alt={`phone ${index}`} />
						</div>
					))}
				</div>
				<div className="flex justify-center space-x-4 mlg:flex-wrap">
					{smallPhones.map((image, index) => (
						<div
							key={index}
							className="max-w-[270px] mlg:max-w-full"
						>
							<img src={image} alt={`phone ${index}`} />
						</div>
					))}
				</div>
			</div>
			{/* background illustration*/}
			<div className="absolute top-20 right-0 -z-10 w-32">
				<img src={dottedCircle} alt="dotted circle" />
			</div>
		</section>
	);
};

export default WireFrames;
