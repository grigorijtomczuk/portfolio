import "@/pages/styles/contact.css";

import Footer from "@/components/common/footer";
import INFO from "@/data/user";
import Logo from "@/components/common/logo";
import NavBar from "@/components/common/navBar";
import Socials from "@/components/about/socials";
import { useEffect } from "react";

const Contact = () => {
	useEffect(() => {
		document.title = `Связаться | ${INFO.main.title}`;
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
							<div className="subtitle contact-subtitle">{INFO.contact.description}</div>
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
