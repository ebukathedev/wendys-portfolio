import { Link } from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";
import DesktopMenu from "../components/NavBar/DesktopMenu";
import MobileMenu from "../components/NavBar/MobileMenu";
import { useState, useEffect } from "react";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [navbar, setNavbar] = useState(false);

	useEffect(() => {
		const changeHeight = () => {
			if (window.scrollY > 100) {
				setNavbar(true);
			} else {
				setNavbar(false);
			}
		};

		const onScroll = setTimeout(() => {
			window.addEventListener("scroll", changeHeight);
		}, 500);

		return () => {
			clearTimeout(onScroll);
			window.removeEventListener("scroll", null);
		};
	}, []);

	const toggleMenu = () => setIsOpen(!isOpen);

	return (
		<>
			<header
				className={`fixed bg-darkBlue/80 left-0 right-0 top-0 z-50 backdrop-blur-[10px] ease-in-out duration-300 ${
					navbar
						? "h-[78px] shadow-[0_10px_30px_-10px] shadow-[#060e1d] md:h-[100px]"
						: "h-[100px] md:h-[130px]"
				}`}
			>
				<nav className="container flex mx-auto px-5 md:p-10 xl:px-24 h-full">
					{/* logo and hamburger menu */}
					<div className="flex justify-between items-center flex-1 md:flex-grow-0">
						{/* logo */}
						<Link
							to="/"
							className="font-bold text-xl gradient-text md:text-lg lg:text-[1.75rem] whitespace-nowrap font-raleway"
						>
							Wendy Enyinnaya
						</Link>
						<IoMenuOutline
							className="text-white text-4xl md:hidden"
							onClick={toggleMenu}
						/>
					</div>
					{/* Menu */}
					<DesktopMenu />
				</nav>
			</header>
			<MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
		</>
	);
};

export default Navbar;
