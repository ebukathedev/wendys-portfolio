import React from "react";

const ContactLink = ({ children, href, name }) => {
	return (
		<div className="flex items-center space-x-4">
			{children}
			<a
				href={href}
				className="font-raleway font-normal text-[15px] xsm:text-lg hover:underline md:text-xl xl:text-2xl"
				target="_blank"
				rel="noreferrer"
			>
				{name}
			</a>
		</div>
	);
};

export default ContactLink;
