import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BsChevronDoubleRight } from "react-icons/bs";

const SingleProject = ({
	imgSm,
	imgLg,
	title,
	type,
	description,
	link,
	even,
}) => {
	useEffect(() => {
		AOS.init();
	}, []);
	//
	return (
		<div className="flex even:md:flex-row-reverse md:flex-row flex-col space-y-6 md:space-y-0 md:gap-x-4 lg:gap-x-5 xl:gap-x-6 md:items-center lg:items-stretch">
			<div
				className="md:w-1/2"
				data-aos="fade-up"
				data-aos-duration="1000"
			>
				<img src={imgSm} alt={title} className="md:hidden w-full rounded-lg" />

				<img
					src={imgLg}
					alt={title}
					className="hidden md:block w-full rounded-lg"
				/>
			</div>
			{/* text container */}
			<div className="md:w-1/2">
				<div
					className="flex flex-col space-y-7 text-veryPaleWhite md:max-w-md xl:max-w-xl md:h-full lg:space-y-0 lg:justify-evenly"
					data-aos="fade-down"
					data-aos-duration="1000"
				>
					<div className="flex flex-col space-y-7 md:space-y-1">
						<h5 className="uppercase font-semibold text-sm font-workSans tracking-wider xl:text-xl">
							{title}
						</h5>
						<h6 className="font-normal text-sm capitalize xl:text-lg">
							{type}
						</h6>
					</div>
					<p className="text-lg font-medium hidden lg:block xl:text-2xl">
						{description}
					</p>
					<div className="flex flex-col space-y-8 lg:space-y-0">
						<p className="text-lg font-medium lg:hidden">
							{description}
						</p>
						<a
							href={link}
							className="flex py-3 px-4 space-x-1 items-center text-white border-2 border-solid border-white rounded-lg self-start xl:space-x-2 xl:py-4 xl:px-5"
						>
							<span className="text-lg font-bold xl:text-2xl">
								View case study
							</span>
							<BsChevronDoubleRight className="text-xl text-white xl:text-2xl" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleProject;
