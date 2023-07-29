import Heading from "../Heading";
import ColorBlock from "./ColorBlock";
import ColorBlockList from "./ColorBlockList";

const ColorPalette = () => {
	return (
		<div>
			<Heading title="Color Palette" />
			<div className="mt-5 font-inter font-bold">
				<div>
					<div className="flex flex-wrap gap-8 ">
						<ColorBlock
							topText="Primary Color"
							bottomText="7F2BC2"
							bgColor="bg-rondoPrimary"
						/>
						<ColorBlockList />
						<ColorBlock
							topText="Background Color"
							bottomText="FAFAFA"
							bgColor="bg-colorPaletteBg"
						/>
						<div className="flex space-x-8 lg:ml-auto">
							<ColorBlock
								topText="Black"
								bottomText="000000"
								bgColor="bg-black"
							/>
							<ColorBlock
								topText="White"
								bottomText="FFFFFF"
								bgColor="bg-white"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ColorPalette;
