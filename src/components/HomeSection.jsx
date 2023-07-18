import Heading from "./Heading";

const HomeSection = ({ title, children, spacing }) => {
	return (
		<div className={`flex flex-col ${spacing}`}>
			<Heading name={title} />
			{children}
		</div>
	);
};

export default HomeSection;
