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
							<Link className="nav-item-link" to="/">
								<span className="nav-item-label">Главная</span>
								<span className="nav-item-icon-container">
									<FontAwesomeIcon className="nav-item-icon" icon={faHome} />
								</span>
							</Link>
						</li>
						<li className={currentPath === "/about" ? "nav-item active" : "nav-item"}>
							<Link className="nav-item-link" to="/about">
								<span className="nav-item-label">Обо мне</span>
								<span className="nav-item-icon-container">
									<FontAwesomeIcon className="nav-item-icon" icon={faNoteSticky} />
								</span>
							</Link>
						</li>
						<li className={currentPath === "/projects" ? "nav-item active" : "nav-item"}>
							<Link className="nav-item-link" to="/projects">
								<span className="nav-item-label">Проекты</span>
								<span className="nav-item-icon-container">
									<FontAwesomeIcon className="nav-item-icon" icon={faListCheck} />
								</span>
							</Link>
						</li>
						<li className={currentPath === "/contact" ? "nav-item active" : "nav-item"}>
							<Link className="nav-item-link" to="/contact">
								<span className="nav-item-label">Контакты</span>
								<span className="nav-item-icon-container">
									<FontAwesomeIcon className="nav-item-icon" icon={faPhone} />
								</span>
							</Link>
						</li>
					</ul>

					<div className="theme-switch-container">
						<ThemeSwitchButton />
					</div>
				</nav>
				<div className="theme-switch-container-mobile">
					<ThemeSwitchButton />
				</div>
			</div>
		</>
	);
};

export default NavBar;
