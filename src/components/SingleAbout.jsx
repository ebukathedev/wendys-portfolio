import React from "react";

const SingleAbout = ({ title, description, descriptionContinued }) => {
	return (
		<div className="flex even:flex-row-reverse gap-x-10">
			<div className="text-lg font-medium gradient-text w-1/4 md:text-center md:text-xl">
				{title}
			</div>
			<div className="w-3/4">
				<p className="text-lg font-medium">{description}</p>
				<p className="text-lg font-medium">{descriptionContinued}</p>
			</div>
		</div>
	);
};

export default SingleAbout;
