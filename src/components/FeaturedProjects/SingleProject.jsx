import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BsChevronDoubleRight } from "react-icons/bs";
import { Link } from "react-router-dom";

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
		<div className="flex flex-col space-y-6 even:md:flex-row-reverse md:flex-row md:space-y-0 md:gap-x-4 lg:gap-x-5 xl:gap-x-6 md:items-center lg:items-stretch">
			<div
				className="md:w-1/2"
				data-aos="fade-up"
				data-aos-duration="1000"
			>
				<img
					src={imgSm}
					alt={title}
					className="w-full rounded-lg md:hidden"
				/>

				<img
					src={imgLg}
					alt={title}
					className="hidden w-full rounded-lg md:block"
				/>
			</div>
			{/* text container */}
			<div className="md:w-1/2">
				<div
					className="flex flex-col space-y-7 text-veryPaleWhite md:max-w-md xl:max-w-xl md:h-full lg:space-y-0 lg:justify-evenly"
					data-aos="fade-up"
					data-aos-duration="1000"
				>
					<div className="flex flex-col space-y-7 md:space-y-1">
						<h5 className="text-sm font-semibold tracking-wider uppercase font-workSans xl:text-xl">
							{title}
						</h5>
						<h6 className="text-sm font-normal capitalize xl:text-lg">
							{type}
						</h6>
					</div>

					{/* text: Desktop */}
					<p className="hidden text-lg font-medium lg:block xl:text-2xl">
						{description}
					</p>

					{/* text and button: Mobile */}
					<div className="flex flex-col space-y-8 lg:space-y-0">
						<p className="text-lg font-medium lg:hidden">
							{description}
						</p>
						<Link
							to={link}
							className="flex items-center self-start px-4 py-3 space-x-1 text-white duration-300 ease-in-out border-2 border-white border-solid rounded-lg xl:space-x-2 xl:py-4 xl:px-5 hover:bg-transparentWhite"
						>
							<span className="text-lg font-bold xl:text-2xl">
								View case study
							</span>
							<BsChevronDoubleRight className="text-xl text-white xl:text-2xl" />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleProject;
