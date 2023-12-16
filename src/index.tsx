// CSS reset breaks things, don't use it for now
// import "@/reset.css";

import "@/index.css";

import App from "@/App";
import { HashRouter } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// const rootDiv = document.getElementById("root") as Element;
const root = createRoot(document.getElementById("root")!);

root.render(
	<StrictMode>
		<HashRouter>
			<App />
		</HashRouter>
	</StrictMode>
);
