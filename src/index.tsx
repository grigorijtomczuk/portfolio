// CSS reset breaks things, don't use it for now
// import "@/reset.css";

import "@/index.css";

import App from "@/App";
import { HashRouter } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const rootDiv = document.getElementById("root") as HTMLDivElement;
const spinner = document.getElementById("spinner") as HTMLDivElement;
const root = createRoot(rootDiv);

// List of fonts to force-preload
const fontsToLoad = ["1rem Roboto", "1rem Roboto Slab", "1rem Roboto Mono"];

// Show root only when fonts finished loading
Promise.all([
	document.fonts.ready,
	...fontsToLoad.map((font) => {
		document.fonts.load(font, "englishрусский");
	}),
]).then(() => {
	rootDiv.style.opacity = "1";
	spinner.remove();
	// Remove transition: "none" and bg-color so they can be set in stylesheet
	document.body.removeAttribute("style");
});

root.render(
	<StrictMode>
		<HashRouter
			future={{
				v7_relativeSplatPath: true,
				v7_startTransition: true,
			}}
		>
			<App />
		</HashRouter>
	</StrictMode>
);
