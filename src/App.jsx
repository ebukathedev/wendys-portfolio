import { Route, Routes } from "react-router-dom";
import Footer from "./containers/Footer";
import Navbar from "./containers/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import KeoWallet from "./pages/Projects/KeoWallet";
import ObiWezy from "./pages/Projects/ObiWezy";
import Rondo from "./pages/Projects/Rondo";
import Zukky from "./pages/Projects/Zukky";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
	return (
		<>
			<Navbar />
			<ScrollToTop />
			<ScrollToTopButton />
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
