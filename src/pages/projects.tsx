import "@/pages/styles/projects.css";

import AllProjects from "@/components/projects/allProjects";
import Footer from "@/components/common/footer";
import INFO from "@/data/user";
import Logo from "@/components/common/logo";
import NavBar from "@/components/common/navBar";
import { useEffect } from "react";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		document.title = `Проекты | ${INFO.main.title}`;
	}, []);

	return (
		<>
			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={40} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">Студент.</div>

						<div className="subtitle projects-subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta blanditiis ea recusandae, rerum, minima quo incidunt eaque veniam laudantium mollitia quam. Molestiae perferendis nemo tenetur pariatur asperiores sed blanditiis reiciendis magni quo cumque tempore praesentium iusto harum ab, sequi quia quos ducimus aut facere! At dolorem minus ea, eos excepturi harum modi obcaecati dolore quis ullam iure dolores veritatis sed.</div>

						<div className="projects-list">
							<AllProjects />
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

export default Projects;
