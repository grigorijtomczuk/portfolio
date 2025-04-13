import { Spinner } from "../vendor/spin.js";

let theme;

function setupBodyBackgorundColor() {
	const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
	const setBodyBackgroundColor = (color) => (document.body.style.backgroundColor = color);

	theme = localStorage.getItem("theme");

	switch (theme) {
		case "dark":
			setBodyBackgroundColor("#363639");
			break;
		case "light":
			setBodyBackgroundColor("#f8f8f8");
			break;
		default: {
			if (prefersDarkScheme.matches) {
				setBodyBackgroundColor("#363639");
				theme = "dark";
			} else {
				setBodyBackgroundColor("#f8f8f8");
				theme = "light";
			}
		}
	}
}

function setupSpinner() {
	const isDarkmode = theme === "dark";
	const spinnerConfig = {
		lines: 10,
		length: 0,
		width: 6,
		radius: 16,
		scale: 1,
		corners: 1,
		speed: 1,
		rotate: 0,
		animation: "spinner-line-shrink",
		direction: 1,
		color: isDarkmode ? "#6c6c75" : "#acacb4",
		fadeColor: "transparent",
		top: "50%",
		left: "50%",
		shadow: "0 0 1px transparent",
		zIndex: -100,
		className: "spinner",
		position: "absolute",
	};

	const target = document.getElementById("spinner");
	const spinner = new Spinner(spinnerConfig).spin(target);
}

setupBodyBackgorundColor();
setupSpinner();
