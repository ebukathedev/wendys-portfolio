import React from "react";
import Hero from "../containers/Hero";
import AboutMe from "../containers/AboutMe";
import DesignProcess from "../containers/DesignProcess";
import FeaturedProjects from "../containers/FeaturedProjects";

const Home = () => {
	return (
		<>
			<Hero />
			<AboutMe />
			<DesignProcess />
			<FeaturedProjects />
		</>
	);
};

export default Home;
