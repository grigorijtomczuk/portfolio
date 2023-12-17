import "@/pages/styles/contact.css";

import Footer from "@/components/common/footer";
import INFO from "@/data/user";
import Logo from "@/components/common/logo";
import NavBar from "@/components/common/navBar";
import Socials from "@/components/about/socials";
import { renderHtml } from "@/utils/utils";
import { useEffect } from "react";

const Contact = () => {
	// Scroll into top page view when switching nav tabs (in case the page is longer than 1 viewport hight)
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		document.title = `Связаться ${INFO.main.titleSeparator} ${INFO.main.title}`;
	}, []);

	return (
		<>
			<div className="page-content">
				<div className="content-wrapper">
					<NavBar active="contact" />
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={40} />
						</div>
					</div>

					<div className="contact-main">
						<div className="contact-container">
							<div className="title contact-title">{INFO.contact.title}</div>
							<div className="subtitle contact-subtitle">{renderHtml(INFO.contact.description)}</div>
						</div>
						<div className="socials-container">
							<div className="contact-socials">
								<Socials />
							</div>
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

export default Contact;
