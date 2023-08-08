import DesignListComponent from "./DesignListComponent";
import FontInfoHeading from "../FontInfoHeading"

const DesignList = ({ list, title }) => {
	return (
		<>
			<FontInfoHeading title={title} />
			<div className="flex flex-col mt-3 space-y-4 mlg:mt-7 mlg:space-y-7">
				{list.groups.map((obj, index) => (
					<DesignListComponent
						key={index}
						title={`${title} ${obj.id}`}
						fontSize={obj.fontSize}
					/>
				))}
			</div>
		</>
	);
};

export default DesignList;
