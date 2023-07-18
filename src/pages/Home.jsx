import React from "react";
import Hero from "../containers/Hero";
import AboutMe from "../containers/AboutMe";
import DesignProcess from "../containers/DesignProcess";
import FeaturedProjects from "../containers/FeaturedProjects";

const Home = () => {
	return (
		<main className="container mx-auto mt-12 px-9 md:px-10 xl:px-24">
			<Hero />
			<AboutMe />
			<DesignProcess />
			<FeaturedProjects />
		</main>
	);
};

export default Home;
