import DesignListComponent from "./DesignListComponent";

const DesignList = ({ list, title }) => {
	return (
		<>
			<h3 className="text-[28px] font-medium text-graySecondary">
				{title}
			</h3>
			<div className="flex flex-col mt-3 space-y-4">
				{list.groups.map((obj) => (
					<DesignListComponent
						title={`${title} ${obj.id}`}
						fontSize={obj.fontSize}
					/>
				))}
			</div>
		</>
	);
};

export default DesignList;
