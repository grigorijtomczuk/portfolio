import "@/components/common/styles/navBar.css";

import { Link } from "react-router-dom";
import ThemeSwitchButton from "@/components/common/themeSwitchButton";

const NavBar = (props: { active?: string }) => {
	const { active } = props;

	return (
		<>
			<div className="nav-container">
				<nav className="navbar">
					<ul className="nav-list">
						<li className={active === "home" ? "nav-item active" : "nav-item"}>
							<Link to="/">Главная</Link>
						</li>
						<li className={active === "about" ? "nav-item active" : "nav-item"}>
							<Link to="/about">Обо мне</Link>
						</li>
						<li className={active === "projects" ? "nav-item active" : "nav-item"}>
							<Link to="/projects">Проекты</Link>
						</li>
						<li className={active === "contact" ? "nav-item active" : "nav-item"}>
							<Link to="/contact">Контакты</Link>
						</li>
					</ul>
					{/* TODO: add mobile theme switch button */}
					<div className="theme-switch-container">
						<ThemeSwitchButton />
					</div>
				</nav>
			</div>
		</>
	);
};

export default NavBar;
