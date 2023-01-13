import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Navbar from "./containers/Navbar";

function App() {
	return (
		<>
			<Navbar />
			<main className="container mx-auto bg-red-500 mt-12 hidden">
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/about" element={<About />}></Route>
					<Route path="/projects" element={<Projects />}></Route>
				</Routes>
			</main>
		</>
	);
}

export default App;
