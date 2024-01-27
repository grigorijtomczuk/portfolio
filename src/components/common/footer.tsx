import "@/components/common/styles/footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import packageJson from "@/../package.json";

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
						<Link className="alternative-link" to={"https://github.com/grigorijtomczuk/portfolio"} target="_blank">
							<FontAwesomeIcon icon={faCodeBranch} /> v{packageJson.version}
						</Link>{" "}
						&copy; {new Date().getFullYear()} grigorijtomczuk
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
