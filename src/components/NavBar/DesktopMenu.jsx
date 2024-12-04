import NavLink from "./NavLink";
import ContactButton from "../ContactButton";

const DesktopMenu = () => {
	return (
		<div className="hidden md:flex flex-1 items-center justify-between h-full">
			{/* links */}

			<div className="flex flex-1 justify-center space-x-14 lg:space-x-20 xl:space-x-28">
				<NavLink to="/" name="Home" />
				<NavLink to="/about" name="About" />
				<NavLink to="/projects" name="Projects" />
			</div>
			{/* Button */}
			<ContactButton />
		</div>
	);
};

export default DesktopMenu;
