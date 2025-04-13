import "@/components/common/styles/themeSwitchButton.css";

import { ReactComponent as DarkModeIcon } from "@/assets/icons/dark-mode.svg";
import { ReactComponent as LightModeIcon } from "@/assets/icons/light-mode.svg";
import { useRef } from "react";

type Theme = "dark" | "light";

const themeSwitchButton = () => {
	function getTheme(): Theme | null {
		return localStorage.getItem("theme") as Theme | null;
	}

	function setTheme(theme: Theme) {
		switch (theme) {
			case "dark": {
				document.body.classList.add("darkmode");
				localStorage.setItem("theme", "dark");
				break;
			}
			case "light": {
				document.body.removeAttribute("class");
				localStorage.setItem("theme", "light");
				break;
			}
		}
	}

	function toggleTheme() {
		if (getTheme() == "dark") {
			setTheme("light");
		} else {
			setTheme("dark");
		}
	}

	function onThemeSwitchButtonClick() {
		toggleTheme();
		Array.from(button.current!.children).forEach((icon: Element) => {
			if (icon.classList.contains("rotate")) return;
			icon.classList.add("rotate");
			setTimeout(() => {
				icon.classList.remove("rotate");
			}, 500); // Match the duration of the animation
		});
	}

	const theme = getTheme();
	const button = useRef<HTMLButtonElement>(null);
	const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

	// Global theme detection logic is inside this button component - bad?
	if (theme) {
		setTheme(theme);
	} else if (prefersDarkScheme.matches) {
		setTheme("dark");
	} else {
		setTheme("light");
	}

	prefersDarkScheme.addEventListener("change", (event) => {
		event.matches ? setTheme("dark") : setTheme("light");
	});

	return (
		<button ref={button} id="theme-switch" onClick={onThemeSwitchButtonClick}>
			<DarkModeIcon />
			<LightModeIcon />
		</button>
	);
};

export default themeSwitchButton;
