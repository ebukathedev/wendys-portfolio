import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import HomeSection from "../../components/HomeSection";
import AboutSection from "./AboutSection";

const profilePic =
	"https://res.cloudinary.com/drtebxtdt/image/upload/v1733314324/wendys%20portfolio/thumbnails/profile_pic_2_ynxidj.png";
const AboutHero = () => {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<section className="mb-60">
			<HomeSection
				// title="About me"
				spacing="space-y-12 xsm:space-y-14 md:space-y-20 xl:space-y-28"
			>
				<div className="flex flex-col space-y-20 md:space-y-32 xl:space-y-40">
					{/* hero */}
					<div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-10 lg:gap-14">
						<div
							className="w-[80%] xsm:max-w-xs mx-auto md:max-w-[280px] lg:max-w-[330px]"
							data-aos="fade-left"
							data-aos-duration="1000"
						>
							<img
								src={profilePic}
								alt="profile pic"
								className="w-full"
								width={341}
								height={341}
							/>
						</div>
						<div
							className="font-semibold text-base xsm:text-xl tracking-[4px] flex flex-col gap-2 md:text-2xl items-center xl:text-4xl max-[359px]:text-sm md:items-start md:gap-4 md:flex-1 lg:text-[2rem] lg:gap-6"
							data-aos="fade-up"
							data-aos-duration="1000"
						>
							<p>Designing with passion</p>
							<p>Creating with purpose</p>
						</div>
					</div>
					<AboutSection />
				</div>
			</HomeSection>
		</section>
	);
};

export default AboutHero;
