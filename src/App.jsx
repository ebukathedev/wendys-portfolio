import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Navbar from "./containers/Navbar";
import Footer from "./containers/Footer";
import Rondo from "./pages/Projects/Rondo";
import KeoWallet from "./pages/Projects/KeoWallet";
import Zukky from "./pages/Projects/Zukky";
import ObiWezy from "./pages/Projects/ObiWezy";

function App() {
	return (
		<>
			<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/projects/rondo" element={<Rondo />} />
					<Route path="/projects/keowallet" element={<KeoWallet />} />
					<Route path="/projects/zukky" element={<Zukky />} />
					<Route path="/projects/obiwezy" element={<ObiWezy />} />
				</Routes>
			
			 <Footer /> 
		</>
	);
}

export default App;
