import "./styles/about.css";

import AboutImage from "../assets/images/about.jpg";
import Footer from "../components/common/footer";
import INFO from "../data/user";
import Logo from "../components/common/logo";
import NavBar from "../components/common/navBar";
import Socials from "../components/about/socials";
import { useEffect } from "react";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		document.title = `Обо мне | ${INFO.main.title}`;
	}, []);

	return (
		<>
			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">{INFO.about.title}</div>

								<div className="subtitle about-subtitle">{INFO.about.description}</div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img className="about-image" src={AboutImage} alt="about" draggable="false" />
									</div>
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
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
