const LabelPointer = (props) => {
	return (
		<a
			className={`block absolute ${props.pointerPosition}`}
			href={`#${props.title.replace(" ", "")}`}
		>
			<div className="relative flex h-5 w-5 justify-center items-center">
				<span
					className={`animate-ping-slow absolute inline-flex h-full w-full rounded-full ${props.bgColor} opacity-75`}
				></span>
				<span
					className={`relative inline-flex h-3 w-3 rounded-full ${props.bgColor}`}
				></span>
			</div>
		</a>
	);
};

export default LabelPointer;
