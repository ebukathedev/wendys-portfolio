const colors = [
	"bg-rondoPrimary-100",
	"bg-rondoPrimary-200",
	"bg-rondoPrimary-300",
	"bg-rondoPrimary-400",
	"bg-rondoPrimary-500",
];

const ColorBlockList = () => {
	return (
		<div className="text-[10px] flex flex-col space-y-1 text-veryPaleWhite md:text-xs">
			<div>Shades</div>
			<div className="rounded-md w-60 h-10 md:h-14 flex">
				{colors.map((color) => (
					<div className={`${color} flex-1`}></div>
				))}
			</div>
		</div>
	);
};

export default ColorBlockList;
