import { useState } from "react";
import { BiSolidChevronUp } from "react-icons/bi";

const buttonStyles =
	"bg-blurryBlue rounded-full flex p-1 hover:text-orange transition-colors ease-in-out";

const ScrollToTopButton = () => {
	const [count, setCount] = useState(0);

	const handleClick = () => {
		setCount(count + 1);
		console.log(`scroll button clicked: ${count}`);
		window.scrollTo(0, 0);
	};

	return (
		<div className="z-50 fixed p-[2px] bg-gradient-text rounded-full bottom-10 right-5 md:right-10 animate-bounce-slow">
			<button className={buttonStyles} onClick={handleClick}>
				<BiSolidChevronUp size={30} />
			</button>
		</div>
	);
};

export default ScrollToTopButton;
