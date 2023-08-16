import React from "react";
import TextSection from "../../components/Rondo/TextSection";
import phoneData from "../../components/Rondo/phoneData";

const { mockups } = phoneData;

const Mockups = () => {
	return (
		<section className="relative mt-28 lg:mt-48 mb-28">
			<div className="flex flex-col space-y-16 container mx-auto lg:px-4">
				<TextSection title="High fidelity Mockups" />
				<div className="flex flex-col items-center space-y-20 lg:flex-row mlg:flex-wrap lg:justify-center lg:space-y-0 lg:items-start mlg:space-x-4">
					{mockups.map(({ image, style, id }) => (
						<div
							key={id}
							className="flex flex-col space-y-4 items-center lg:flex-col-reverse"
						>
							<div
								className={`font-bold rounded-full flex justify-center items-center ${style}`}
							>
								<span>{id}</span>
							</div>
							<div>
								<img src={image} alt={`phone ${id}`} />
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Mockups;
