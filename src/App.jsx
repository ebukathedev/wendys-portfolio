import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Navbar from "./containers/Navbar";

function App() {
	return (
		<>
			<Navbar />
			<main className="container mx-auto mt-12  px-9 md:px-10 xl:px-24">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/projects" element={<Projects />} />
				</Routes>
			</main>
		</>
	);
}

export default App;
