import persona1 from "../../../assets/images/user_persona1.png";
import persona2 from "../../../assets/images/user_persona2.png";

const UserPersonaIntro = () => {
	return (
		<div className="flex flex-col mt-24 space-y-8 lg:mt-28">
			<div className="flex flex-col space-y-2">
				<h2 className="text-2xl font-bold text-center md:text-3xl">
					User Persona
				</h2>
				<p className="max-w-xl mx-auto text-lg font-medium text-left md:px-0 px-9 xl:text-2xl sm:text-center xl:max-w-3xl">
					I developed the user persona by performing qualitative
					research. I got to interview 2 potential end users to help
					develop a persona
				</p>
			</div>
			<div className="flex flex-col px-4 space-y-4 sm:max-w-lg sm:mx-auto md:max-w-7xl md:flex-row md:px-4 md:space-y-0 md:space-x-4 xl:space-x-6">
				<img src={persona1} alt="user persona 1" className="md:w-1/2" />
				<img src={persona2} alt="user persona 2" className="md:w-1/2" />
			</div>
		</div>
	);
};

export default UserPersonaIntro;
