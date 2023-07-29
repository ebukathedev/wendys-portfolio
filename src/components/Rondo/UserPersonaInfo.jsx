import Typography from "./Typography";
import DesignStyles from "./DesignStyles/DesignStyles";
import ColorPalette from "./ColorPalette/ColorPalette";

const UserPersonaInfo = () => {
	return (
		<div className="container flex flex-col mx-auto space-y-14 mt-28 lg:mt-48 px-9 md:p-10 xl:px-24">
			<div className="flex flex-col md:justify-between md:flex-row space-y-14 md:space-y-0 md:space-x-8 lg:space-x-16">
				<Typography />
				<DesignStyles />
			</div>
			<ColorPalette />
		</div>
	);
};

export default UserPersonaInfo;
