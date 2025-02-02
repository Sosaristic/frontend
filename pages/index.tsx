import { Button, ProgressBar } from "@/components/ui";
import { BaseLayout } from "@/layouts";
import {
	avatar1,
	avatar2,
	avatar3,
	createCampaignImage1,
	createCampaignImage2,
	createCampaignImage3,
	crowdFund,
	dropbox,
	envato,
	globalCommunity,
	google,
	happyPeople,
	hero,
	joinnUs,
	netflix,
	senville,
	testimonialImage1,
	testimonialImage2,
	timeCamp,
} from "@/public/assets/images/landing-page";
import Image from "next/image";
import { useState } from "react";

const HomePage = () => {
	const trustedPioneers = [
		timeCamp,
		senville,
		google,
		dropbox,
		netflix,
		envato,
	]; // Trusted Pioneers images

	// State to manage the visibility of each question's answer
	const [expanded, setExpanded] = useState<boolean[]>([]);

	const toggleAnswer = (index: number) => {
		setExpanded((prevExpanded) => {
			const newExpanded = [...prevExpanded];
			newExpanded[index] = !newExpanded[index]; // Toggle the visibility of the answer when the '+' or '-' icon is clicked
			return newExpanded;
		});
	};

	// FAQ data (questions and answers)
	const faqData = [
		{
			question: "How can  I make a donation?",
			answer: "We will let you know soon...",
		},
		{
			question: "Is my donation tax deductible?",
			answer: "We will let you know soon...",
		},
		{
			question: "Can i donate in honor of someone?",
			answer: "We will let you know soon...",
		},
		{
			question: "How will my donation be used?",
			answer: "We will let you know soon...",
		},
		{
			question: "Can i set up a recurring donation?",
			answer: "We will let you know soon...",
		},
	];

	const urgentFundraisers = [
		{
			image: happyPeople,
			title: "Bringing Dental Care to Undeserved Communities",
			name: "Locs Designer",
			proffession: "Health and Welness",
			amountRaised: "$2,000,000",
		},
		{
			image: happyPeople,
			title: "Bringing Dental Care to Undeserved Communities",
			name: "Locs Designer",
			proffession: "Health and Welness",
			amountRaised: "$2,000,000",
		},
		{
			image: happyPeople,
			title: "Bringing Dental Care to Undeserved Communities",
			name: "Locs Designer",
			proffession: "Health and Welness",
			amountRaised: "$2,000,000",
		},
		{
			image: happyPeople,
			title: "Bringing Dental Care to Undeserved Communities",
			name: "Locs Designer",
			proffession: "Health and Welness",
			amountRaised: "$2,000,000",
		},
	];

	const testimonials = [
		{
			image: testimonialImage1,
			name: "Jonathan Doe",
			greeting: "Thanks AHM",
			text: "Join the effortless way to raise funds and make a difference and empower your cause with Abeghelp.me",
		},
		{
			image: testimonialImage2,
			name: "Sandra Doe",
			greeting: "Thanks AHM",
			text: "Join the effortless way to raise funds and make a difference and empower your cause with Abeghelp.me",
		},
		{
			image: testimonialImage1,
			name: "William Doe",
			greeting: "Thanks AHM",
			text: "Join the effortless way to raise funds and make a difference and empower your cause with Abeghelp.me",
		},
	];

	const campaignCard = [
		{
			index: 1,
			image: createCampaignImage1,
			heading: "Create Your Campaign",
			text: "Share your vision. In just a few clicks, set up your fundraising page and tell us what you're passionate about.",
		},
		{
			index: 2,
			image: createCampaignImage2,
			heading: "Share you story",
			text: "Spread the word with our easy sharing tools. Reach out to friends, family, and beyond.",
		},
		{
			index: 3,
			image: createCampaignImage3,
			heading: "Collect Donations",
			text: "See generosity in action. Our secure platform makes donating simple, so you can focus on your cause.",
		},
		{
			index: 4,
			image: createCampaignImage1,
			heading: "Be Happy",
			text: "Change lives With the funds raised, take the steps to turn your dream project into reality.",
		},
	];
	return (
		<BaseLayout>
			<div
				className="flex items-center md:py-10 lg:h-screen"
				style={{
					backgroundImage: `url(/assets/images/landing-page/background.png)`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<div className="justify-center px-5 text-gray-50 md:items-center md:justify-between md:px-20 lg:flex lg:gap-20">
					<div className="mt-5 space-y-5 lg:mt-0">
						<h1 className="pr-5 text-5xl font-bold md:pr-0 md:text-6xl">
							Start your journey into fundraising with ease
						</h1>
						<p className="pr-10 text-lg text-gray-50 md:pr-5">
							Join the effortless way to raise funds and make a difference and
							empower your cause with Abeghelp.me
						</p>
						<div className="flex space-x-10 py-5 md:pt-20">
							<Button className="text-md bg-gray-50 font-semibold text-abeg-primary outline-none">
								Start fundraiser
							</Button>
							<Button className="text-md border border-gray-200 bg-transparent font-semibold text-gray-100 outline-none">
								Donate now
							</Button>
						</div>
					</div>
					<Image
						src={hero}
						alt="hero image"
						width={500}
						height={500}
						className="ml-[-1.5rem] flex w-full justify-center py-10 md:justify-start lg:py-0"
					/>
				</div>
			</div>
			<div className="px-5 pb-10 pt-10 md:px-20 md:pt-20">
				<div className="w-full space-y-5 md:justify-between lg:flex lg:space-y-0 lg:divide-x-2 lg:divide-slate-500">
					<div className="space-y-5 md:pr-20">
						<h4 className="text-xl text-gray-500">How it works</h4>
						<h1 className="text-4xl font-bold md:text-5xl">
							A Path to Making <br /> a Difference.
						</h1>
					</div>
					<div className="w-full flex-1 items-center justify-between gap-10 lg:flex lg:pl-20 xl:w-1/3">
						<p className="text-2xl text-gray-500">
							Join the effortless way to raise funds <br /> and make a
							difference and empower <br /> your cause with Abeghelp.me
						</p>
						<Button className="mt-5 border border-gray-500 font-semibold text-gray-500 outline-none">
							Explore campaigns
						</Button>
					</div>
				</div>

				<div className="hide-scrollbar gap-5 space-y-5 overflow-x-scroll py-10 md:flex md:space-y-0 md:py-20">
					{campaignCard.map((card, index) => (
						<div
							key={index}
							className="relative flex-shrink-0 flex-grow-0 space-y-3 rounded-xl bg-gray-200 p-5 md:w-[45%] lg:w-[30%]"
						>
							<h1 className="text-2xl font-bold">{card.heading}</h1>
							<p className="text-md font-medium">{card.text}</p>
							<div className="flex">
								<Image
									src={card.image}
									alt="Create campaign card image"
									width={200}
									height={200}
								/>
								<p className="absolute bottom-0 left-0 right-[-1.5rem] top-[8rem] flex justify-end text-end text-[13rem] font-bold text-white">
									{card.index}
								</p>
							</div>
						</div>
					))}
				</div>

				<div
					className="flex justify-center rounded-xl py-20 text-white lg:px-20"
					style={{
						backgroundImage: `url(/assets/images/landing-page/background.png)`,
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				>
					<div className="space-y-5 md:px-10">
						<p className="flex justify-center text-center text-xl font-light">
							Let&apos;s Help you start your Journey
						</p>
						<h1 className="flex justify-center px-5 text-center text-4xl font-bold sm:px-10 md:px-0 lg:text-5xl">
							Together We are Stronger
						</h1>
						<div className="space-y-20 py-14 md:flex md:gap-10 md:space-y-0 lg:px-10">
							<div className="space-y-5 px-16 md:px-0">
								<h1 className="flex justify-center text-4xl font-bold lg:text-5xl">
									50K
								</h1>
								<p className="flex text-center text-xl font-light">
									Reach more people and hit your goals faster
								</p>
							</div>
							<div className="space-y-5 px-16 md:px-0">
								<h1 className="flex justify-center  text-4xl font-bold lg:text-5xl">
									15+
								</h1>
								<p className="flex text-center text-xl font-light">
									Get donations across 15 different countries
								</p>
							</div>
							<div className="space-y-5 px-16 md:px-0">
								<h1 className="flex justify-center  text-4xl font-bold lg:text-5xl">
									20M
								</h1>
								<p className="flex text-center text-xl font-light">
									More than 20M naira donated everyday
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="items-center justify-between py-16 lg:flex lg:gap-20 lg:py-20">
					<div className="mb-8 space-y-5 lg:mb-0">
						<p className="text-xl">Let&apos;s Help you start your Journey</p>
						<h1 className="text-4xl font-bold md:text-5xl">
							A Path to Making a Difference.
						</h1>
						<div className="border-t-2 border-gray-400"></div>
						<div className="space-y-10">
							<div className="flex items-start gap-5">
								<Image
									src={globalCommunity}
									alt="hero image"
									width={50}
									height={50}
								/>
								<div className="space-y-2">
									<h1 className="text-xl font-bold">Global Community</h1>
									<p className="text-gray-400">
										Join the effortless way to raise funds and make a difference
										and empower your cause with Abeghelp.me
									</p>
								</div>
							</div>
							<div className="flex items-start gap-5">
								<Image
									src={crowdFund}
									alt="hero image"
									width={50}
									height={50}
								/>
								<div className="space-y-2">
									<h1 className="text-xl font-bold">Crowd Funding</h1>
									<p className="text-gray-400">
										Join the effortless way to raise funds and make a difference
										and empower your cause with Abeghelp.me
									</p>
								</div>
							</div>
						</div>
						<div className="relative flex w-56 items-center rounded-full bg-teal-300 p-3 md:w-72">
							<div className="relative">
								<Image
									src={avatar1}
									alt="Avatar 1"
									width={50}
									height={50}
									className="relative z-10 rounded-full md:h-full md:w-full"
								/>
								<Image
									src={avatar2}
									alt="Avatar 2"
									width={50}
									height={50}
									className="absolute left-10 top-0 z-20 rounded-full md:left-14 md:h-full md:w-full"
								/>
								<Image
									src={avatar3}
									alt="Avatar 3"
									width={50}
									height={50}
									className="absolute left-20 top-0 z-30 rounded-full md:left-28 md:h-full md:w-full"
								/>
								<p className="absolute left-32 top-2 ml-2 text-3xl font-semibold text-white md:left-48 md:top-4">
									8k+
								</p>
							</div>
						</div>
					</div>
					<Image src={joinnUs} alt="hero image" width={600} height={600} />
				</div>
				<div>
					<h1 className="md-block hidden px-32 text-center text-5xl font-bold">
						Hear from some of our users we&apos;ve helped reach their goals
					</h1>
					<h1 className="text-center text-4xl font-bold md:hidden">
						Some of our users we&apos;ve helped reach their goals
					</h1>
					<div className="hide-scrollbar flex w-full gap-5 overflow-x-auto">
						{testimonials.map((card, index) => (
							<div
								key={index}
								className="mt-16 w-[90%] flex-shrink-0 flex-grow-0 items-center justify-center rounded-xl p-4 text-white md:p-7 lg:mt-20 lg:flex lg:gap-20"
								style={{
									backgroundImage: `url(/assets/images/landing-page/background.png)`,
									backgroundSize: "cover",
									backgroundPosition: "center",
								}}
							>
								<Image
									src={card.image}
									alt="hero image"
									width={400}
									height={400}
									className="w-full"
								/>
								<div className="mt-5 lg:mt-0">
									<p className=" text-2xl font-extralight text-gray-200 md:text-3xl">
										{card.text}
									</p>
									<h1 className="mt-10 text-3xl font-bold md:text-4xl lg:mt-20">
										{card.greeting}
									</h1>
									<h1 className="text-xl font-normal md:text-2xl">
										{card.name}
									</h1>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="py-20">
					<div className="md:items-center md:justify-between lg:flex">
						<div className="mb-5 space-y-5">
							<h4 className="text-xl text-gray-500">Donate today</h4>
							<h1 className="text-4xl font-bold md:text-5xl">
								Urgent Fundraisers
							</h1>
							<p className="text-xl text-gray-500">
								Join our community of change makers and make an impact today
							</p>
						</div>
						<Button className="border border-gray-500 font-semibold text-gray-500 outline-none">
							Explore campaigns
						</Button>
					</div>

					<div className="hide-scrollbar mt-14 gap-5 overflow-x-auto md:flex">
						{urgentFundraisers.map((item: any, index) => (
							<div
								key={index}
								className="mb-5 flex-shrink-0 flex-grow-0 space-y-4 md:mb-0 md:w-[45%] lg:w-[30%]"
							>
								<Image
									src={item.image}
									alt={item.name}
									priority
									width={400}
									height={400}
									className="h-60 w-full rounded-md object-cover"
								/>
								<h3 className="text-md text-base font-semibold xl:pr-10 xl:text-lg">
									{item.title}
								</h3>
								<p className="text-xs">
									By: {item.name} - {item.proffession}
								</p>
								<ProgressBar
									value={70}
									className="rounded-full progress-unfilled:h-1 progress-unfilled:bg-teal-400 progress-filled:bg-abeg-primary"
								/>

								<p className="pt-2 text-xs text-abeg-primary">
									{item.amountRaised} raised
								</p>
							</div>
						))}
					</div>
				</div>

				<div>
					<h1 className="text-center text-4xl font-bold md:px-32 md:text-5xl">
						Trusted By Pioneers
					</h1>
					<div className="flex flex-wrap justify-center gap-10 py-10 md:justify-normal">
						{trustedPioneers.map((item: any, index) => (
							<Image key={index} src={item} alt={""} width={150} height={150} />
						))}
					</div>
				</div>

				<div className="mt-10">
					<p className="text-xl text-gray-500">Wanna know more?</p>
					<h1 className="mb-10 mt-5 text-4xl font-bold md:mb-20 md:text-5xl">
						Freequently asked questions
					</h1>
					{faqData.map((item, index) => (
						<div key={index} className="mb-4 space-y-2 bg-white p-4">
							<div className="flex items-center justify-between">
								<h3 className="text-4xl font-semibold">{item.question}</h3>
								<span
									className="mr-2 cursor-pointer text-3xl"
									onClick={() => toggleAnswer(index)}
								>
									{expanded[index] ? "−" : "+"}
								</span>
							</div>
							{expanded[index] && <p className="mt-2">{item.answer}</p>}
							<div className="mt-2 border-t-2 border-gray-300"></div>
						</div>
					))}
				</div>
			</div>
		</BaseLayout>
	);
};

export default HomePage;
