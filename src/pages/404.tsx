import "./styles/404.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import INFO from "../data/user";
import { Link } from "react-router-dom";
import Logo from "../components/common/logo";
import NavBar from "../components/common/navBar";
import { faFaceSadTear } from "@fortawesome/free-regular-svg-icons";
import { useEffect } from "react";

const Notfound = () => {
	useEffect(() => {
		document.title = `404 | ${INFO.main.title}`;
	}, []);

	return (
		<>
			<div className="not-found page-content">
				<NavBar />
				<div className="content-wrapper">
					<div className="notfound-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="notfound-container">
						<div className="notfound-message">
							<div className="notfound-title">
								Опа... <FontAwesomeIcon icon={faFaceSadTear} />
							</div>
							<div className="not-found-message">Ссылка не работает!</div>
							<Link className="not-found-link" to={"/"}>
								На главную
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Notfound;
