const DesignListComponent = ({ title, fontSize }) => {
	return (
		<div className={fontSize}>
			<div className="font-normal">{title} - Regular</div>
			<div className="font-medium">{title} - Medium</div>
			<div className="font-bold">{title} - Bold</div>
		</div>
	);
};

export default DesignListComponent;
