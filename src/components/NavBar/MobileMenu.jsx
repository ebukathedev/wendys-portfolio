import Button from "../ui/Button";
import NavLink from "./NavLink";
import { IoCloseOutline } from "react-icons/io5";

const menuStyles = `fixed top-0 left-0 right-0 bottom-0 z-50 bg-darkBlue md:hidden ease-in=out duration-300`;

const MobileMenu = ({ isOpen, toggleMenu }) => {
	return (
		<div
			className={`${menuStyles} ${
				isOpen ? "translate-x-0" : "translate-x-full"
			}`}
		>
			<div className="container mx-auto py-8 px-9">
				<div className="mb-24 flex justify-end">
					<IoCloseOutline
						className="text-white text-4xl"
						onClick={toggleMenu}
					/>
				</div>

				{/* links */}
				<div className="flex flex-col space-y-8">
					<NavLink to="/" name="Home" toggleMenu={toggleMenu} />
					<NavLink to="/about" name="About" toggleMenu={toggleMenu} />
					<NavLink
						to="/projects"
						name="Projects"
						toggleMenu={toggleMenu}
					/>
					{/* Button */}
					<Button href="mailto:chiwendy1@gmail.com">
						Contact me
					</Button>
				</div>
			</div>
		</div>
	);
};

export default MobileMenu;
