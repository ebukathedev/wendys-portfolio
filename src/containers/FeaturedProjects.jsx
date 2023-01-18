import React from "react";
import HomeSection from "../components/HomeSection";
import projectData from "../components/projectData";
import SingleProject from "../components/SingleProject";

const FeaturedProjects = ({ children }) => {
	return (
		<section className="mb-32">
			<HomeSection
				title="Featured Projects"
				spacing="space-y-9 xsm:space-y-14 md:space-y-20 xl:space-y-28"
			>
				{children}
				{/* projects container */}
				<div className="flex flex-col space-y-28 xl:space-y-40">
					{projectData.map((obj) => (
						<SingleProject
							key={obj.id}
							imgSm={obj.imgSm}
							imgLg={obj.imgLg}
							title={obj.title}
							type={obj.type}
							description={obj.description}
							link={obj.link}
							even={obj.even}
						/>
					))}
				</div>
			</HomeSection>
		</section>
	);
};

export default FeaturedProjects;

/*https://ik.imagekit.io/ebukathedev/avatar.svg 
https://ik.imagekit.io/ebukathedev/rondo.svg
https://ik.imagekit.io/ebukathedev/keo_wallet.svg
https://ik.imagekit.io/ebukathedev/zukky.svg*/
