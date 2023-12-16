import "./styles/footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<>
			<div className="footer">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
						<li className="footer-nav-link-item">
							<Link to="/">Главная</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/about">Обо мне</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/projects">Проекты</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/contact">Связаться</Link>
						</li>
					</ul>
				</div>

				<div className="footer-credits">
					<div className="footer-credits-text">
						Copyright &copy; {new Date().getFullYear()}{" "}
						<Link to={"https://github.com/grigorijtomczuk"} target="_blank">
							grigorijtomczuk
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
