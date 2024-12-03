import { Link } from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";
import DesktopMenu from "../components/NavBar/DesktopMenu";
import MobileMenu from "../components/NavBar/MobileMenu";
import { useState } from "react";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleMenu = () => setIsOpen(!isOpen);

	return (
		<nav className="container flex mx-auto bg-darkBlue py-8 px-9 md:p-10 xl:px-24">
			{/* logo and hamburger menu */}
			<div className="flex justify-between items-center flex-1 md:flex-grow-0">
				{/* logo */}
				{/* <Link
					to="/"
					className="font-bold text-2xl gradient-text md:text-4xl xl:text-[42px]"
				>
					W.E
				</Link> */}
				<Link
					to="/"
					className="font-bold text-lg gradient-text flex gap-1 gap-y-0"
				>
					<span>Wendy</span> <span>Enyinnaya</span>
				</Link>
				<IoMenuOutline
					className="text-white text-4xl md:hidden"
					onClick={toggleMenu}
				/>
			</div>
			{/* Menu */}

			<MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
			<DesktopMenu />
		</nav>
	);
};

export default Navbar;
