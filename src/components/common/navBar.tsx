import "@/components/common/styles/navBar.css";

import { Link, useLocation } from "react-router-dom";
import { faHome, faListCheck, faNoteSticky, faPhone } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ThemeSwitchButton from "@/components/common/themeSwitchButton";

const NavBar = () => {
	const location = useLocation();
	const currentPath = location.pathname;

	return (
		<>
			<div className="nav-container">
				<nav className="navbar">
					<ul className="nav-list">
						<li className={currentPath === "/" ? "nav-item active" : "nav-item"}>
							<Link to="/">Главная</Link>
							<FontAwesomeIcon className="nav-item-icon" icon={faHome} />
						</li>
						<li className={currentPath === "/about" ? "nav-item active" : "nav-item"}>
							<Link to="/about">Обо мне</Link>
							<FontAwesomeIcon className="nav-item-icon" icon={faNoteSticky} />
						</li>
						<li className={currentPath === "/projects" ? "nav-item active" : "nav-item"}>
							<Link to="/projects">Проекты</Link>
							<FontAwesomeIcon className="nav-item-icon" icon={faListCheck} />
						</li>
						<li className={currentPath === "/contact" ? "nav-item active" : "nav-item"}>
							<Link to="/contact">Контакты</Link>
							<FontAwesomeIcon className="nav-item-icon" icon={faPhone} />
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
