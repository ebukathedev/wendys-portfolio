import React from "react";

const buttonStyles = `font-medium text-lg text-white hover:text-orange transition-colors ease-in-out py-2 px-5 bg-blurryBlue rounded-xl xl:text-2xl`;

const ContactButton = ({ additionalClass }) => {
	return (
		<div
			className={`p-[1px] bg-gradient-text rounded-[13px] ${additionalClass}`}
		>
			<button className={buttonStyles}>Contact me</button>
		</div>
	);
};

export default ContactButton;
