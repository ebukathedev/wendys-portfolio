import bannerImage from "../assets/images/rondo_banner_lg.png"

const ProjectBanner = () => {
	return (
		<div>
			{/* <img
				src="https://res.cloudinary.com/drtebxtdt/image/upload/v1688628160/wendys%20portfolio/thumbnails/rondo_lg_m5xnvm.jpg"
				alt="banner"
				className="w-full"
			/> */}
			<img
				src={bannerImage}
				alt="banner"
				className="w-full"
			/>
		</div>
	);
};

export default ProjectBanner;
