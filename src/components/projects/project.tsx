import "@/components/projects/styles/project.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const Project = (props: { logo: any; title: any; description: any; linkText: any; link: any }) => {
	const { logo, title, description, linkText, link } = props;

	return (
		<>
			<div className="project">
				<Link to={link} target="_blank">
					<div className="project-container">
						<div className="project-info">
							<div className="project-logo">
								<img src={logo} alt="logo" draggable="false" />
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
		</>
	);
};

export default Project;
