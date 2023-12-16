import "./app.css";

import { Route, Routes } from "react-router-dom";

import About from "./pages/about";
import Contact from "./pages/contact";
import Homepage from "./pages/homepage";
import Notfound from "./pages/404";
import Projects from "./pages/projects";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<Notfound />} />
			</Routes>
		</div>
	);
}

export default App;
