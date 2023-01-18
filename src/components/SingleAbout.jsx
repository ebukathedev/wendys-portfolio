import React from "react";

const SingleAbout = ({ title, description, descriptionContinued }) => {
	return (
		<div className="flex even:flex-row-reverse gap-x-5">
			<div className="text-lg font-medium gradient-text w-2/5 xsm:text-center md:text-xl">
				{title}
			</div>
			<div className="w-3/5">
				<p className="text-lg font-medium xl:text-3xl">{description}</p>
				<p className="text-lg font-medium">{descriptionContinued}</p>
			</div>
		</div>
	);
};

export default SingleAbout;
