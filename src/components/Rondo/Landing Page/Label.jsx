const Label = (props) => {
	return (
		<div
			className={`flex flex-col space-y-1 lg:max-w-[230px] mlg:max-w-[250px] ${props.labelPosition}`}
		>
			<div className="flex items-center space-x-2 lg:text-sm mlg:text-md">
				{props.icon && (
					<span>
						<img src={props.icon} alt="icon" />
					</span>
				)}
				<span
					id={props.title.replace(" ", "")}
					className={`${props.txtColor} capitalize font-bold`}
				>
					{props.title}
				</span>
			</div>
			<p className="lg:text-sm mlg:text-md">{props.description}</p>
		</div>
	);
};

export default Label;
