import { useState, useEffect } from "react";
import { BiSolidChevronUp } from "react-icons/bi";

const buttonStyles =
	"bg-blurryBlue rounded-full flex p-1 hover:text-orange transition-colors ease-in-out";

const ScrollToTopButton = () => {
	const [showTopBtn, setShowTopBtn] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 500) {
				setShowTopBtn(true);
			} else {
				setShowTopBtn(false);
			}
		});
	}, []);

	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		showTopBtn && (
			<div className="z-50 fixed p-[2px] bg-gradient-text rounded-full bottom-10 right-5 md:right-10 animate-bounce-slow">
				<button className={buttonStyles} onClick={goToTop}>
					<BiSolidChevronUp size={30} />
				</button>
			</div>
		)
	);
};

export default ScrollToTopButton;
