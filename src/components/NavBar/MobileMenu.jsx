import NavLink from "./NavLink";
import ContactButton from "../ContactButton";
import { IoCloseOutline } from "react-icons/io5";

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
					<ContactButton additionalClass="self-start" />
				</div>
			</div>
		</div>
	);
};

export default MobileMenu;
