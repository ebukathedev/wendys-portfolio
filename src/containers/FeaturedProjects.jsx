import React from "react";
import HomeSection from "../components/HomeSection";
import rondo from "../assets/images/rondo.svg";

const FeaturedProjects = () => {
	return (
		<section>
			<HomeSection
				title="Featured Projects"
				spacing="space-y-7 xsm:space-y-14 xl:space-y-20"
			>
				{/* projects container */}
				<div className="flex flex-col space-y-14">
					{/* single project */}
					<div className="flex flex-col space-y-6">
						<div>
							<img src={rondo} alt="fintech app" />
						</div>
						{/* text container */}
						<div className="flex flex-col space-y-8 text-veryPaleWhite">
							<div className="flex flex-col space-y-8">
								<h5 className="uppercase font-semibold text-sm">
									fintech app
								</h5>
								<h6 className="font-normal text-sm capitalize">
									mobile design
								</h6>
							</div>
							<div className="flex flex-col space-y-8">
								<p className="text-lg font-medium">
									Rondo mobile bank app is a product that
									helps individuals keep track of their
									finances, save & invest, send money
									irrespective of location, perform other
									financial operations and achieve financial
									goals.
								</p>
								<a href="#" className="flex p-5 text-white border">
									<span className="text-lg font-bold">
										View message
									</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</HomeSection>
		</section>
	);
};

export default FeaturedProjects;
