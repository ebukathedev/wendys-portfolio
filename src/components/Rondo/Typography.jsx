import Heading from "./Heading";

const Typography = () => {
	return (
		<div className="md:w-1/2">
			<Heading title="Typography" />
			<div className="mt-5 md:mt-10">
				{/* font info */}
				<div className="flex items-center lg:items-end">
					<div className="text-6xl text-inter text-lightGray sm:text-7xl lg:text-9xl">
						<span className="font-bold">A</span>
						<span className="font-normal">a</span>
					</div>
					<div className="flex items-center lg:items-end lg:-translate-y-4 space-x-1 lg:space-x-4">
						<span className="text-4xl text-grayPrimary font-extrabold mt-3 lg:mt-0 origin-bottom lg:rotate-[10deg] lg:text-5xl">
							/
						</span>
						<div className="font-bold text-[16px] lg:text-xl -mb-2">
							<span className="text-darkGray">
								Typeface <br /> by{" "}
							</span>
							<span className="text-rondoPrimary">Inter</span>
						</div>
					</div>
				</div>

				{/* paragraph */}
				<div className="flex flex-col space-y-1 mt-3">
					<h3 className="text-[28px] font-medium text-graySecondary font-inter">
						Heading
					</h3>
					<p className="text-lg xl:text-2xl">
						A good amount of time was spent on choosing the typeface
						and color to help users have a seamless experience
					</p>
				</div>
			</div>
		</div>
	);
};

export default Typography;
