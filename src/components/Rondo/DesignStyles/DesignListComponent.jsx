const DesignListComponent = ({ title, fontSize }) => {
	return (
		<div className={`flex flex-col mlg:space-y-2 ${fontSize}`} >
			<div className="font-normal">{title} - Regular</div>
			<div className="font-medium">{title} - Medium</div>
			<div className="font-bold">{title} - Bold</div>
		</div>
	);
};

export default DesignListComponent;
