import React from "react";
import TextSection from "../../components/Rondo/TextSection";
import phoneData from "../../components/Rondo/phoneData";
import Heading from "../../components/Rondo/Heading";

const { mockups } = phoneData;

const Mockups = () => {
	return (
		<section className="relative mt-28 lg:mt-48">
			<div className="text-center flex flex-col space-y-16 md:space-y-8 lg:space-y-16 md:px-4 lg:px-8">
				<Heading title="High fidelity Mockups" />
				{/* <TextSection title="High fidelity Mockups" /> */}
				<div className="flex flex-col items-center space-y-20 md:flex-row mlg:flex-wrap md:justify-between md:space-y-0 md:items-start mlg:w-full mlg:max-w-[1168px] xl:max-w-[1200px] mx-auto">
					{mockups.map(({ image, style, id }) => (
						<div
							key={id}
							className="flex flex-col gap-4 items-center md:flex-col-reverse md:gap-8"
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
