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

import landingPhone from "../../assets/images/landing page/landing_page_phone.png";
import landingPhoneLabeled from "../../assets/images/landing page/landing_page_phone_labeled.png";
import notificationIcon from "../../assets/images/landing page/notification.svg";
import accountsIcon from "../../assets/images/landing page/accounts.svg";
import statementsIcon from "../../assets/images/landing page/statements.svg";
import seeAllIcon from "../../assets/images/landing page/see_all.svg";
import homeIcon from "../../assets/images/landing page/home.svg";

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
			style: "w-10 h-10 text-lg bg-brightCyan",
		},
		{
			id: 2,
			image: mockup2,
			style: "w-12 h-12 text-xl bg-softPurple",
		},
		{
			id: 3,
			image: mockup3,
			style: "w-14 h-14 text-2xl bg-limeGreen",
		},
		{
			id: 4,
			image: mockup4,
			style: "w-16 h-16 text-3xl bg-goldenYellow",
		},
	],
	landing_page: {
		landingPhone,
		landingPhoneLabeled,
		labels: [
			{
				id: 1,
				icon: notificationIcon,
				title: "notification",
				description:
					"View transaction alerts and messages sent to you.",
				bgColor: "bg-warningRed",
				txtColor: "text-warningRed",
				pointerPosition: "top-[7.5%] right-[5.5%]",
				labelPosition:
					"top-[7.5%] right-[0%] mlg:right-[4%]",
			},
			{
				id: 2,
				icon: null,
				title: "account balance",
				description:
					"Hide and show your account balance on the click of a button.",
				bgColor: "bg-goldenYellow",
				txtColor: "text-goldenYellow",
				pointerPosition: "top-[22%] left-[15%]",
				labelPosition:
					"top-[14%] left-[7%] mlg:top-[16%] mlg:left-[11%]",
			},
			{
				id: 3,
				icon: statementsIcon,
				title: "statements",
				description: "View and download your account statement.",
				bgColor: "bg-softPurple",
				txtColor: "text-softPurple",
				pointerPosition: "top-[36%] right-[26%]",
				labelPosition:
					"top-[28%] right-[2%] mlg:right-[4%]",
			},
			{
				id: 4,
				icon: accountsIcon,
				title: "accounts",
				description: "See all the accounts you have available with us.",
				bgColor: "bg-limeGreen",
				txtColor: "text-limeGreen",
				pointerPosition: "top-[36%] left-[26%]",
				labelPosition:
					"top-[33%] left-[10%] mlg:top-[34%] mlg:left-[14%]",
			},
			{
				id: 5,
				icon: seeAllIcon,
				title: "see all",
				description:
					"View all transactions from a custom period and download receipt.",
				bgColor: "bg-brightCyan",
				txtColor: "text-brightCyan",
				pointerPosition: "top-[44%] right-[6%]",
				labelPosition:
					"top-[49%] right-[4%] mlg:right-[9%]",
			},
			{
				id: 6,
				icon: null,
				title: "transaction details card",
				description:
					"Contains the date, amount, and description of transaction. Click to see more details of transaction.",
				bgColor: "bg-darkViolet",
				txtColor: "text-darkViolet",
				pointerPosition: "top-[53%] left-[10%]",
				labelPosition:
					"top-[52%] left-[8%] mlg:left-[9%]",
			},
			{
				id: 7,
				icon: homeIcon,
				title: "home",
				description: "The landing page.",
				bgColor: "bg-seaBlue",
				txtColor: "text-seaBlue",
				pointerPosition: "bottom-[8%] left-[10%]",
				labelPosition:
					"bottom-[5%] left-[13%] mlg:bottom-[5%] mlg:left-[13%]",
			},
		],
	},
};

export default phoneData;
