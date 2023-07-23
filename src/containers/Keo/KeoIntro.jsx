import ProjectIntro from "../../components/Project/ProjectIntro";
import IntroList from "./IntroList";

const KeoIntro = () => {
	return (
		<ProjectIntro>
			<div className="flex flex-col space-y-3">
				<p>
					Keo wallet is the app that provides a seamless transaction
					experience to the uneducated and underbanked.
				</p>
				<p>
					After several studies, our team came up with a better way to
					make banking an easy experience which includes;
				</p>
				<IntroList />
			</div>
		</ProjectIntro>
	);
};

export default KeoIntro;
