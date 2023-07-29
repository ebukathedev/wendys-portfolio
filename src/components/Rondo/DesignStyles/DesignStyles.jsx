import Heading from "../Heading";
import designStylesData from "./designStylesData";
import DesignList from "./DesignList";

const { heading, body } = designStylesData;

const DesignStyles = () => {
	return (
		<div className="md:w-1/2">
			<Heading title="Design Styles" />
			<div className="mt-5 md:mt-10">
				<div className="flex flex-col sm:justify-between space-y-8 font-inter sm:flex-row sm:space-y-0 ">
					<div>
						<DesignList list={heading} title="Heading" />
					</div>
					<div>
						<DesignList list={body} title="Body" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default DesignStyles;
