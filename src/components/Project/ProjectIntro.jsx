import wave1 from "../../assets/images/wave1.svg";
import wave2 from "../../assets/images/wave2.svg";

const ProjectIntro = ({ children }) => {
	return (
		<article className="relative container mx-auto mt-12 text-lg font-medium px-9 md:px-10 lg:px-12 xl:text-2xl xl:px-[136px]">
			{children}
			<div className="absolute hidden md:block w-52 -right-8 top-10">
				<img src={wave1} alt="wave illustration" />
			</div>
			<div className="absolute hidden md:block w-60 -right-24">
				<img src={wave2} alt="wave illustration" />
			</div>
		</article>
	);
};

export default ProjectIntro;
