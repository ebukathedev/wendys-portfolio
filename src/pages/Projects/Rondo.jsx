import ProjectHero from "../../components/ProjectHero";

const Rondo = () => {
	return (
		<>
			<ProjectHero />
			<main>
				<article className="container flex flex-col mx-auto mt-12 space-y-5 text-lg font-medium px-9 md:px-10 lg:px-12 xl:space-y-12 xl:text-2xl xl:px-[136px]">
					<p>
						Rondo mobile bank app is a product that helps
						individuals keep track of their finances, save & invest,
						send money irrespective of location, perform other
						financial operations and achieve financial goals.
					</p>
					<p>
						After several studies, our team came up with a better
						way to make banking an easy experience for everyone
						which makes Rondo brand priotize user experience,
						accessibility and user need. We provide an accessible
						and hitch free services which gives our users comfort
						and peace about their finance.
					</p>
				</article>
				
			</main>
		</>
	);
};

export default Rondo;
