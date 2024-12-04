import NavLink from "./NavLink";
import Button from "../ui/Button";

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
			<Button href="mailto:chiwendy1@gmail.com">Contact me</Button>
		</div>
	);
};

export default DesktopMenu;
