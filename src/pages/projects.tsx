import "@/pages/styles/projects.css";

import AllProjects from "@/components/projects/allProjects";
import Footer from "@/components/common/footer";
import INFO from "@/data/user";
import Logo from "@/components/common/logo";
import NavBar from "@/components/common/navBar";
import { renderHtml } from "@/utils/utils";
import { useEffect } from "react";

const Projects = () => {
	// Scroll into top page view when switching nav tabs (in case the page is longer than 1 viewport hight)
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		document.title = `Проекты ${INFO.main.titleSeparator} ${INFO.main.title}`;
	}, []);

	return (
		<>
			<div className="page-content">
				<div className="content-wrapper">
					<NavBar active="projects" />
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={40} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">{INFO.projects.title}</div>

						<div className="subtitle projects-subtitle">{renderHtml(INFO.projects.description)}</div>

						<div className="projects-list">
							<AllProjects />
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

export default Projects;
