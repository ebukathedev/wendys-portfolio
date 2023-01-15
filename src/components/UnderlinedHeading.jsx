import React from "react";

const UnderlinedHeading = ({ name }) => {
	return (
		<h3 className="font-bold text-2xl underline text-center md:text-4xl">
			{name}
		</h3>
	);
};

export default UnderlinedHeading;
