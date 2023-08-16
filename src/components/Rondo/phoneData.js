import frame1 from "../../assets/images/wireframes/frame1.png";
import frame2 from "../../assets/images/wireframes/frame2.png";
import frame3 from "../../assets/images/wireframes/frame3.png";
import frame4 from "../../assets/images/wireframes/frame4.png";
import frame5 from "../../assets/images/wireframes/frame5.png";
import frame6 from "../../assets/images/wireframes/frame6.png";
import smallFrame1 from "../../assets/images/wireframes/sm-frame1.png";
import smallFrame2 from "../../assets/images/wireframes/sm-frame2.png";
import smallFrame3 from "../../assets/images/wireframes/sm-frame3.png";

import mockup1 from "../../assets/images/mockups/mockup-1.png";
import mockup2 from "../../assets/images/mockups/mockup-2.png";
import mockup3 from "../../assets/images/mockups/mockup-3.png";
import mockup4 from "../../assets/images/mockups/mockup-4.png";

const phoneData = {
	wire_frames: {
		doubleImages: [
			[frame1, frame2],
			[frame3, frame4],
			[frame5, frame6],
		],
		mobileImages: [frame1, frame2, frame3, frame4, frame5, frame6],
		desktopImages: {
			group1: [frame1, frame2, frame3],
			group2: [smallFrame1, smallFrame2, smallFrame3],
		},
	},
	mockups: [
		{
			id: 1,
			image: mockup1,
			style: "w-10 h-10 text-lg bg-mockup-100",
		},
		{
			id: 2,
			image: mockup2,
			style: "w-12 h-12 text-xl bg-mockup-200",
		},
		{
			id: 3,
			image: mockup3,
			style: "w-14 h-14 text-2xl bg-mockup-300",
		},
		{
			id: 4,
			image: mockup4,
			style: "w-16 h-16 text-3xl bg-mockup-400",
		},
	],
};

export default phoneData;
