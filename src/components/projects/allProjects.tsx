import "@/components/projects/styles/allProjects.css";

import { useEffect, useState } from "react";

import Project from "@/components/projects/project";
import info from "@/data/user";

type AllProjectsProps = {
	quantity?: number;
};

const AllProjects = ({ quantity, ...props }: AllProjectsProps) => {
	const [loadedProjects, setLoadedProjects] = useState(0);
	const [allProjectsLoaded, setAllProjectsLoaded] = useState(false);

	const slicedProjects = info.projects.projectsList.slice(0, quantity || -1);
	const totalProjects = slicedProjects.length;

	const handleProjectLoad = () => setLoadedProjects((prev) => prev + 1);

	// Check if all projects are loaded
	useEffect(() => {
		if (loadedProjects === totalProjects) setAllProjectsLoaded(true);
	}, [loadedProjects, totalProjects]);

	return (
		<div className="all-projects-container" {...props}>
			{slicedProjects.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						logos={project.logos}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
						logosShown={allProjectsLoaded}
						onLoad={handleProjectLoad}
					/>
				</div>
			))}
		</div>
	);
};

export default AllProjects;
