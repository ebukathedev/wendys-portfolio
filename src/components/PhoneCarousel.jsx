import { useState, useEffect } from "react";
import { BiSolidChevronLeft, BiSolidChevronRight } from "react-icons/bi";

const PhoneCarousel = ({
	children: images,
	autoSlide = false,
	autoSlideInterval = 3000,
}) => {
	const [current, setCurrent] = useState(0);
	const prev = () => {
		setCurrent((current) =>
			current === 0 ? images.length - 1 : current - 1
		);
	};

	const next = () => {
		setCurrent((current) =>
			current === images.length - 1 ? 0 : current + 1
		);
	};

	useEffect(() => {
		if (!autoSlide) return;
		const slideInterval = setInterval(next, autoSlideInterval);
		return () => clearInterval(slideInterval);
	}, []);

	return (
		<div>
			<div className="overflow-hidden relative">
				{/* image container */}
				<div
					className="flex transition-transform ease-out duration-500"
					style={{
						transform: `translateX(-${current * 100}%)`,
					}}
				>
					{images}
				</div>
				{/* button container */}
				<div className="absolute inset-0 flex items-center justify-between p-4">
					<button
						onClick={prev}
						className="p-1 rounded-full shadow bg-black/30 hover:bg-black/60 ease-in-out"
					>
						<BiSolidChevronLeft size={30} />
					</button>
					<button
						onClick={next}
						className="p-1 rounded-full shadow bg-black/30 hover:bg-black/60 ease-in-out"
					>
						<BiSolidChevronRight size={30} />
					</button>
				</div>
			</div>
			{/* indicators */}
			<div className="mt-2">
				<div className="flex items-center justify-center gap-2">
					{images.map((_, index) => (
						<div
							key={index}
							className={`transition-all w-3 h-1 bg-white rounded-xl ease-in-out duration-500 ${
								current === index ? "w-7" : "bg-opacity-50"
							}`}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default PhoneCarousel;
