import React from "react";
import HomeSection from "../components/HomeSection";
import projectData from "../components/projectData";
import SingleProject from "../components/SingleProject";

const FeaturedProjects = () => {
	return (
		<section className="mb-32">
			<HomeSection
				title="Featured Projects"
				spacing="space-y-8 xsm:space-y-14 xl:space-y-20"
			>
				{/* projects container */}
				<div className="flex flex-col space-y-28">
					{projectData.map((obj) => (
						<SingleProject
							key={obj.id}
							img={obj.img}
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
