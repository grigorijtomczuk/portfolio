import "@/pages/styles/homepage.css";

import React, { useEffect, useState } from "react";
import { faGithub, faLinkedin, faTelegram } from "@fortawesome/free-brands-svg-icons";

import AllProjects from "@/components/projects/allProjects";
import Downloads from "@/components/homepage/downloads";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "@/components/common/footer";
import Image from "@/components/common/image";
import LeetCodeIcon from "@/components/icons/LeetCodeIcon";
import Logo from "@/components/common/logo";
import Works from "@/components/homepage/works";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import info from "@/data/user";
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
		document.title = info.main.title;
	}, []);

	return (
		<>
			<div className="page-content">
				<div className="content-wrapper">
					<div className="homepage-logo-container">
						<div className="homepage-logo" style={logoStyle}>
							<Logo size={logoSize} noLink />
						</div>
					</div>

					<div className="homepage-container">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="title homepage-title">{info.homepage.title}</div>
								<div className="subtitle homepage-subtitle">
									{renderHtml(info.homepage.description)}
								</div>
							</div>
							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<Image className="homepage-image" src={info.homepage.image} />
								</div>
							</div>
						</div>

						<div className="homepage-socials">
							<a
								className="homepage-social-icon"
								href={info.socials.github}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon icon={faGithub} />
							</a>
							<a
								className="homepage-social-icon"
								href={info.socials.linkedin}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon icon={faLinkedin} />
							</a>
							<a
								className="homepage-social-icon"
								href={info.socials.leetcode}
								target="_blank"
								rel="noreferrer"
							>
								<LeetCodeIcon />
							</a>
							<a
								className="homepage-social-icon"
								href={info.socials.telegram}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon icon={faTelegram} />
							</a>
							<a
								className="homepage-social-icon"
								href={`mailto:${info.main.email}`}
								rel="noreferrer"
							>
								<FontAwesomeIcon icon={faEnvelope} />
							</a>
						</div>

						<div className="homepage-projects">
							<AllProjects quantity={3} />
						</div>

						<div className="homepage-after-title">
							<Works />
							<Downloads />
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
