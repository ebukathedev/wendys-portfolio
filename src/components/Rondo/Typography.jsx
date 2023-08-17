import Heading from "./Heading";
import FontInfoHeading from "./FontInfoHeading";

const Typography = () => {
	return (
		<div className="md:w-1/2">
			<Heading title="Typography" />
			<div className="mt-5 md:mt-10">
				{/* font info */}
				<div className="flex items-center lg:items-end">
					<div className="text-6xl text-inter text-lightGray sm:text-7xl lg:text-9xl mlg:text-[10rem]">
						<span className="font-bold">A</span>
						<span className="font-normal">a</span>
					</div>
					<div className="flex items-center space-x-1 lg:items-end lg:-translate-y-4 lg:space-x-4 mlg:-translate-x-2 mlg:-translate-y-6 mlg:space-x-1">
						<span className="text-4xl text-grayPrimary font-extrabold mt-3 lg:mt-0 origin-bottom lg:rotate-[10deg] lg:text-5xl mlg:text-[4rem] mlg:rotate-0">
							/
						</span>
						<div className="font-bold text-md lg:text-xl -mb-2 mlg:-mb-0 mlg:text-2xl">
							<span className="text-darkGray">
								Typeface <br /> by{" "}
							</span>
							<span className="text-rondoPrimary">Inter</span>
						</div>
					</div>
				</div>

				{/* paragraph */}
				<div className="flex flex-col mt-3 space-y-1 mlg:space-y-2">
					<FontInfoHeading title="Heading" />
					<p className="text-lg mlg:text-xl xl:text-2xl">
						A good amount of time was spent on choosing the typeface
						and color to help users have a seamless experience
					</p>
				</div>
			</div>
		</div>
	);
};

export default Typography;
