import React from "react";
import ContactButton from "../components/ContactButton";

const Footer = () => {
	return (
		<footer className="pt-7 pb-4 bg-lighterDarkBlue lg:pt-9 lg:pb-5">
			<div className="flex flex-col items-center space-y-10">
				<div className="flex flex-col items-center space-y-2">
					<h3 className="font-semibold text-2xl md:text-4xl">
						Let’s connect!
					</h3>
					<p className="text-lg text-center font-medium">
						Want to connect with me?
						<br />
						Say hi
					</p>
				</div>
				<ContactButton />
				<span className="text-sm font-medium mt-4">
					All rights reserved © Wendy Enyinnaya 2023
				</span>
			</div>
		</footer>
	);
};

export default Footer;
