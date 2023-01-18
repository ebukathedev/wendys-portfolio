import React from "react";
import HomeSection from "../components/HomeSection";
import DesignBlock from "../components/DesignBlock";
import designBlockData from "../components/designBlocksData";

// gap-x-7 gap-y-14

const DesignProcess = () => {
	return (
		<section className="my-28 lg:my-32 xl:mb-52">
			<HomeSection
				title="My Design Process"
				spacing="space-y-8 xsm:space-y-14 xl:space-y-20"
			>
				<div className="flex flex-col gap-x-4 gap-y-8 min-[360px]:flex-row min-[360px]:flex-wrap min-[360px]:justify-center xsm:gap-x-7 xsm:gap-y-14 md:gap-20 xl:gap-[8rem]">
					{designBlockData.map((obj) => (
						<DesignBlock
							key={obj.id}
							icon={obj.icon}
							bgColor={obj.bgColor}
							name={obj.name}
						/>
					))}
				</div>
			</HomeSection>
		</section>
	);
};

export default DesignProcess;
