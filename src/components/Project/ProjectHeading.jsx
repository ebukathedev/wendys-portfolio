const ProjectHeading = ({ title, description, color }) => {
	return (
		<div className="flex flex-col space-y-2 text-center md:space-y-3 xl:space-y-5">
			<h3
				className={`text-2xl font-bold md:text-4xl xl:text-5xl ${color}`}
			>
				{title}
			</h3>
			<p className="text-lg font-medium px-4 xl:text-2xl">{description}</p>
		</div>
	);
};

export default ProjectHeading;
