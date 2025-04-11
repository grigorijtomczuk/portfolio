import "@/components/projects/styles/project.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "@/components/common/image";
import { Link } from "react-router-dom";
import type { ProjectProps } from "types/types";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const Project = (props: ProjectProps) => {
	const { logos, title, description, linkText, link } = props;
	return (
		<div className="project">
			<Link to={link} target="_blank">
				<div className="project-container">
					<div className="project-info">
						<div className="project-logos">
							{logos.map((logo, key) => {
								return (
									<Image
										className="project-logo"
										src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/
											${logo}/${logo}-original.svg`}
										key={key}
									/>
								);
							})}
						</div>
						<div className="project-title">{title}</div>
						<div className="project-description">{description}</div>
					</div>
					<div className="project-link">
						<div className="project-link-icon">
							<FontAwesomeIcon icon={faLink} />
						</div>
						<div className="project-link-text">{linkText}</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default Project;
