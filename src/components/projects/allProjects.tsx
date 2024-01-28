import "@/components/projects/styles/allProjects.css";

import Project from "@/components/projects/project";
import info from "@/data/user";

const AllProjects = (props: { quantity?: number }) => {
	return (
		<div className="all-projects-container">
			{info.projects.projectsList.slice(0, props ? props.quantity : -1).map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project logos={project.logos} title={project.title} description={project.description} linkText={project.linkText} link={project.link} />
				</div>
			))}
		</div>
	);
};

export default AllProjects;
