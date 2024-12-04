import React from "react";
import Hero from "../containers/Hero";
import AboutMe from "../containers/AboutMe";
import DesignProcess from "../containers/DesignProcess";
import FeaturedProjects from "../containers/FeaturedProjects";

const Home = () => {
	return (
		<main className="container mx-auto px-5 md:px-10 xl:px-24 mt-[150px] md:mt-[180px]">
			<Hero />
			<AboutMe />
			<DesignProcess />
			<FeaturedProjects />
		</main>
	);
};

export default Home;
