const ProjectBanner = ({ mobileBanner, desktopBanner }) => {
	return (
		<div>
			<img src={mobileBanner} alt="banner" className="w-full md:hidden" />
			<img
				src={desktopBanner}
				alt="banner"
				className="hidden w-full md:block"
			/>
		</div>
	);
};

export default ProjectBanner;
