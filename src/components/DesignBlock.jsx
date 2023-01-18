import React from "react";

// py-8 px-9

const DesignBlock = ({ icon, bgColor, name }) => {
	return (
		<div
			className={`flex flex-col space-y-4 py-5 items-center justify-center rounded-2xl ${bgColor} min-[360px]:w-[47%] xsm:w-[46%] xsm:py-8 md:py-8 md:w-[25.5%] lg:py-12 lg:w-[27%] xl:w-[20%]`}
		>
			<div className="flex justify-center">
				<img src={icon} alt="icon" className="md:w-10" />
			</div>
			<span className="font-medium text-lg lg:text-xl xl:text-2xl">
				{name}
			</span>
		</div>
	);
};

export default DesignBlock;
