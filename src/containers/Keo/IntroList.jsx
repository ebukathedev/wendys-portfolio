import ellipse from "../../assets/images/ellipse .svg";
const listItems = [
	"Banking with your preferred language",
	"Help you save money",
	"Pay bills within the comfort of your home",
	"Keeps your 1k intact",
];

const IntroList = () => {
	return (
		<ul className="flex flex-col space-y-2">
			{listItems.map((item, index) => (
				<li className="flex items-center gap-2" key={index}>
					<img src={ellipse} alt="ellipse" className="w-2 md:w-3" />
					<span>{item}</span>
				</li>
			))}
		</ul>
	);
};

export default IntroList;
