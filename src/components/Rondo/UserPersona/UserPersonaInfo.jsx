import Typography from "../Typography";
import DesignStyles from "../DesignStyles/DesignStyles";
import ColorPalette from "../ColorPalette/ColorPalette";
import star from "../../../assets/images/star.svg";
import wave3 from "../../../assets/images/wave3.svg";

const UserPersonaInfo = () => {
	return (
		<div className="relative">
			<div className="container flex flex-col mx-auto space-y-14 mt-28 lg:mt-48 px-9 md:px-10 xl:px-24">
				<div className="flex flex-col md:justify-between md:flex-row space-y-14 md:space-y-0 md:space-x-8 lg:space-x-16">
					<Typography />
					<DesignStyles />
				</div>
				<ColorPalette />
			</div>
			<div className="absolute hidden md:block -top-14 lg:-top-28 w-24 lg:w-32">
				<img src={star} alt="wave illustration" />
			</div>
			<div className="absolute hidden md:block w-20 ml:w-[86px] top-60 -left-2">
				<img src={wave3} alt="wave illustration" />
			</div>
		</div>
	);
};

export default UserPersonaInfo;
