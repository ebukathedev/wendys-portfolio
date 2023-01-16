import React from "react";
import { BsChevronDoubleRight } from "react-icons/bs";

const SingleProject = ({ img, title, type, description, link, even }) => {
	return (
		<div
			className={`flex flex-col space-y-6 md:space-y-0 md:space-x-4 md:items-center ${
				even ? "md:flex-row-reverse md:space-x-reverse" : "md:flex-row"
			}`}
		>
			<div className="md:w-1/2 bg-blue-400">
				<img src={img} alt={title} className="md:block" />
			</div>
			{/* text container */}
			<div className=" md:w-1/2">
				<div className="flex flex-col space-y-7 text-veryPaleWhite md:max-w-md">
					<div className="flex flex-col space-y-7 md:space-y-1">
						<h5 className="uppercase font-semibold text-sm font-workSans tracking-wider">
							{title}
						</h5>
						<h6 className="font-normal text-sm capitalize">
							{type}
						</h6>
					</div>
					<div className="flex flex-col space-y-8">
						<p className="text-lg font-medium">{description}</p>
						<a
							href={link}
							className="flex py-3 px-4 space-x-1 items-center text-white border-2 border-solid border-white rounded-lg self-start"
						>
							<span className="text-lg font-bold">
								View case study
							</span>
							<BsChevronDoubleRight className="text-xl text-white" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleProject;
