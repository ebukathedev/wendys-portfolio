import PhoneCarousel from "../../components/PhoneCarousel";
import Heading from "../../components/Rondo/Heading";
import phoneData from "../../components/Rondo/phoneData";

const {
	wire_frames: { mobileImages },
} = phoneData;

const WireFrames = () => {
	return (
		<section className="mt-28 lg:mt-48 mb-28">
			<div className="container mx-auto px-9 md:p-10 xl:px-24">
				<div className="flex flex-col space-y-16">
					<div className="flex flex-col space-y-2 text-center">
						<Heading title="Low-fidelity Wireframes" />
						<p className="text-lg font-medium xl:text-2xl text-center">
							I developed the user persona by performing
							qualitative research.
						</p>
					</div>
					<div className="max-w-xs mx-auto">
						<PhoneCarousel autoSlide={true}>
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
		</section>
	);
};

export default WireFrames;
