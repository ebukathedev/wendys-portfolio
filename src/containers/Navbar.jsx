import React from "react";
import { Link } from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";

const Navbar = () => {
	return (
		<nav className="container flex mx-auto bg-darkBlue py-8 px-9 md:p-10">
			{/* logo and hamburger menu */}
			<div className="flex justify-between items-center flex-1">
				{/* logo */}
				<Link
					to="/"
					className="font-bold text-2xl gradient-text md:text-4xl"
				>
					W.E
                </Link>
                <IoMenuOutline className="text-white text-4xl md:hidden"/>
			</div>
		</nav>
	);
};

export default Navbar;
