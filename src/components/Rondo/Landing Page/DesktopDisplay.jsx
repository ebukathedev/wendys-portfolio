import phoneData from "../phoneData";
import Label from "./Label";
import LabelPointer from "./LabelPointer";

const {
	landing_page: { landingPhoneLabeled, labels },
} = phoneData;

const DesktopDisplay = () => {
	return (
		<div>
			<div className="hidden lg:block relative w-full max-w-[976px] mlg:max-w-7xl px-4 mx-auto">
				<div className="w-full max-w-3xl mx-auto mlg:max-w-4xl">
					<img src={landingPhoneLabeled} alt="phone with labels" />
				</div>
				{labels.map((label) => (
					<Label
						{...label}
						key={label.id}
						labelPosition={`absolute ${label.labelPosition}`}
					/>
				))}
			</div>
		</div>
	);
};

export default DesktopDisplay;
