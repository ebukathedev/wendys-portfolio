const ColorBlock = ({ topText, bottomText, bgColor }) => {
	return (
		<div className="text-[10px] flex flex-col space-y-1 text-veryPaleWhite md:text-xs items-center">
			<div>{topText}</div>

			<div className="w-24 space-y-1 xl:w-28">
				<div className={`rounded-md h-10 md:h-14 ${bgColor}`}></div>
				<div className="text-center">{bottomText}</div>
			</div>
		</div>
	);
};

export default ColorBlock;
