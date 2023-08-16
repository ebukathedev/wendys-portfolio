import Heading from "./Heading"

const TextSection = ({ title, children }) => {
	return (
		<div className="flex flex-col space-y-2 md:space-y-4 text-center">
			<Heading title={title} />
			<p className="text-lg font-medium xl:text-2xl text-center">
				{children}
			</p>
		</div>
	);
};

export default TextSection;
