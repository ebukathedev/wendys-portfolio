import React from "react";

const ContactLink = ({ children, href, name }) => {
	return (
		<div className="flex items-center space-x-4">
			{children}
			<a href={href} className=" font-normal text-lg font-raleway">
				{name}
			</a>
		</div>
	);
};

export default ContactLink;
