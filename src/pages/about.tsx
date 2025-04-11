import "@/pages/styles/about.css";

import Footer from "@/components/common/footer";
import Image from "@/components/common/image";
import Logo from "@/components/common/logo";
import Socials from "@/components/about/socials";
import info from "@/data/user";
import { renderHtml } from "@/utils/utils";
import { useEffect } from "react";

const About = () => {
	// Scroll into top page view when switching nav tabs (in case the page is longer than 1 viewport hight)
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		document.title = `Обо мне ${info.main.titleSeparator} ${info.main.title}`;
	}, []);

	return (
		<>
			<div className="page-content">
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={40} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-left-side">
								<div className="title about-title">{info.about.title}</div>
								<div className="subtitle about-subtitle">{renderHtml(info.about.description)}</div>
							</div>

							<div className="about-right-side">
								<div className="about-image-container">
									<Image className="about-image" src={info.about.image} />
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
