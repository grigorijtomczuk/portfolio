import "@/components/projects/styles/allProjects.css";

import INFO from "@/data/user";
import Project from "@/components/projects/project";

const AllProjects = (props: { quantity?: number }) => {
	return (
		<div className="all-projects-container">
			{INFO.projects.projectsList.slice(0, props ? props.quantity : -1).map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project logo={project.logo} title={project.title} description={project.description} linkText={project.linkText} link={project.link} />
				</div>
			))}
		</div>
	);
};

export default AllProjects;
