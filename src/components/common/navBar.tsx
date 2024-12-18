import "@/components/common/styles/navBar.css";

import { Link } from "react-router-dom";

const NavBar = (props: { active?: any }) => {
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
				</nav>
			</div>
		</>
	);
};

export default NavBar;
