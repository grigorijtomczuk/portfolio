import "@/pages/styles/homepage.css";

import React, { useEffect, useState } from "react";
import { faGithub, faLinkedin, faStackOverflow, faTelegram } from "@fortawesome/free-brands-svg-icons";

import AllProjects from "@/components/projects/allProjects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "@/components/common/footer";
import INFO from "@/data/user";
import Logo from "@/components/common/logo";
import NavBar from "@/components/common/navBar";
import PlaceholderCard from "@/components/homepage/placeholderCard";
import Works from "@/components/homepage/works";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { renderHtml } from "@/utils/utils";

const Homepage = () => {
	const initialLogoSize = 80;
	const endLogoSize = 40;
	const [logoSize, setLogoSize] = useState(initialLogoSize);
	const [stayLogo, setStayLogo] = useState(false);

	// Scroll into top page view when switching nav tabs (in case the page is longer than 1 viewport hight)
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			setLogoSize(initialLogoSize - window.scrollY * 0.35);

			if (window.scrollY > window.innerHeight * 0.125) {
				setLogoSize(endLogoSize);
				setStayLogo(true);
			} else {
				setStayLogo(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize]);

	const logoStyle = {
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
	} as React.CSSProperties;

	useEffect(() => {
		document.title = INFO.main.title;
	}, []);

	return (
		<>
			<div className="page-content">
				<div className="content-wrapper">
					<NavBar active="home" />

					<div className="homepage-logo-container">
						<div className="homepage-logo" style={logoStyle}>
							<Logo width={logoSize} link={false} />
						</div>
					</div>

					<div className="homepage-container">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="title homepage-title">{INFO.homepage.title}</div>
								<div className="subtitle homepage-subtitle">{renderHtml(INFO.homepage.description)}</div>
							</div>
							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<img className="homepage-image" src={INFO.homepage.image} alt="about" draggable="false" />
								</div>
							</div>
						</div>

						<div className="homepage-socials">
							<a className="homepage-social-icon" href={INFO.socials.github} target="_blank" rel="noreferrer">
								<FontAwesomeIcon icon={faGithub} />
							</a>
							<a className="homepage-social-icon" href={INFO.socials.linkedin} target="_blank" rel="noreferrer">
								<FontAwesomeIcon icon={faLinkedin} />
							</a>
							<a className="homepage-social-icon" href={INFO.socials.stackoverflow} target="_blank" rel="noreferrer">
								<FontAwesomeIcon icon={faStackOverflow} />
							</a>
							<a className="homepage-social-icon" href={INFO.socials.telegram} target="_blank" rel="noreferrer">
								<FontAwesomeIcon icon={faTelegram} />
							</a>
							<a className="homepage-social-icon" href={`mailto:${INFO.main.email}`} rel="noreferrer">
								<FontAwesomeIcon icon={faEnvelope} />
							</a>
						</div>

						<div className="homepage-projects">
							<AllProjects quantity={3} />
						</div>

						<div className="homepage-after-title">
							<Works />
							<PlaceholderCard />
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

export default Homepage;
