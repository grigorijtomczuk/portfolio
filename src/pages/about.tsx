import "@/pages/styles/about.css";

import Footer from "@/components/common/footer";
import INFO from "@/data/user";
import Logo from "@/components/common/logo";
import NavBar from "@/components/common/navBar";
import Socials from "@/components/about/socials";
import { useEffect } from "react";

const About = () => {
	useEffect(() => {
		document.title = `Обо мне ${INFO.main.titleSeparator} ${INFO.main.title}`;
	}, []);

	return (
		<>
			<div className="page-content">
				<div className="content-wrapper">
					<NavBar active="about" />
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={40} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-left-side">
								<div className="title about-title">{INFO.about.title}</div>
								<div className="subtitle about-subtitle">{INFO.about.description}</div>
							</div>

							<div className="about-right-side">
								<div className="about-image-container">
									<img className="about-image" src={INFO.about.image} alt="about" draggable="false" />
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>

						<div className="about-socials-mobile">
							<Socials />
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

export default About;
