import "@/components/projects/styles/project.css";

import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "@/components/common/image";
import { Link } from "react-router-dom";
import { faLink } from "@fortawesome/free-solid-svg-icons";

type ProjectProps = {
	logos: string[];
	title: string;
	description: string;
	linkText: string;
	link: string;
};

type ProjectWithLoadProps = ProjectProps & {
	logosShown?: boolean;
	onLoad?: () => void;
};

const Project = ({
	logos,
	title,
	description,
	linkText,
	link,
	logosShown,
	onLoad,
	...props
}: ProjectWithLoadProps) => {
	const [loadedLogos, setLoadedLogos] = useState(0);
	const totalLogos = logos.length;

	const handleLogoLoad = () => setLoadedLogos((prev) => prev + 1);

	// Check if all logos are loaded
	useEffect(() => {
		if (loadedLogos === totalLogos) onLoad?.();
	}, [loadedLogos, totalLogos]);

	return (
		<div className="project" {...props}>
			<Link to={link} target="_blank">
				<div className="project-container">
					<div className="project-info">
						<div className="project-logos">
							{logos.map((logo, index) => (
								<Image
									className="project-logo"
									src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/
										${logo}/${logo}-original.svg`}
									key={index}
									isShown={logosShown} // Show skeletons until logosShown is true
									onLoad={handleLogoLoad}
								/>
							))}
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
