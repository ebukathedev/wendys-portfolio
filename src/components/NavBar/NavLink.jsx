import { Link, useMatch, useResolvedPath } from "react-router-dom";

const linkStyle = `font-medium text-lg text-white hover:text-orange ease-in-out duration-300`;
const active = "text-orange";

const NavLink = ({ name, to, toggleMenu}) => {
	const resolvedPath = useResolvedPath(to);
	const isActive = useMatch({ path: resolvedPath.pathname, end: true });

	return (
		<Link className={`${linkStyle} ${isActive ? active : ""}`} to={to} onClick={toggleMenu}>
			{name}
		</Link>
	);
};

export default NavLink;
