import phoneData from "../phoneData";
import Label from "./Label";
import LabelPointer from "./LabelPointer";

const {
	landing_page: { landingPhone, labels },
} = phoneData;

const MobileDisplay = () => {
	return (
		<div className="flex flex-col space-y-16 lg:hidden">
			<div className="px-4">
				<div className="relative max-w-[322px] mx-auto">
					<img src={landingPhone} alt="phone" />
					{labels.map((label) => (
						<LabelPointer {...label} key={label.id} />
					))}
				</div>
			</div>
			<div className="flex flex-col px-9 md:px-10 space-y-6 md:grid md:grid-cols-2 md:space-y-0 md:gap-8">
				{labels.map((label) => (
					<Label {...label} key={label.id} />
				))}
			</div>
		</div>
	);
};

export default MobileDisplay;
