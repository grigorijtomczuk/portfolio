import "@/pages/styles/404.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "@/components/common/footer";
import { Link } from "react-router-dom";
import Logo from "@/components/common/logo";
import NavBar from "@/components/common/navBar";
import { faFaceSadTear } from "@fortawesome/free-regular-svg-icons";
import info from "@/data/user";
import { useEffect } from "react";

const NotFound = () => {
	useEffect(() => {
		document.title = `404 ${info.main.titleSeparator} ${info.main.title}`;
	}, []);

	return (
		<>
			<div className="page-content">
				<div className="content-wrapper">
					<NavBar />
					<div className="notfound-logo-container">
						<div className="notfound-logo">
							<Logo width={40} />
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
				<div className="page-footer">
					<Footer />
				</div>
			</div>
		</>
	);
};

export default NotFound;
