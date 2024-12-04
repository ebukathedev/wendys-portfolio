import { twMerge } from "tailwind-merge";

const Button = ({className, children, href }) => {
	return (
		<a
			href={href}
			target="_blank"
			rel="noreferrer"
			className="p-[1px] bg-gradient-text rounded-[13px] w-fit block"
		>
			<div
				className={twMerge(
					"font-medium text-lg text-white hover:text-orange transition-colors ease-in-out py-2 px-5 bg-blurryBlue rounded-xl xl:text-2xl w-fit",
					className
				)}
			>
				{children}
			</div>
		</a>
	);
};

export default Button;
