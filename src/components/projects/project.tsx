import "@/components/projects/styles/project.css";

import { useEffect, useRef, useState } from "react";

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
	const logosRef = useRef<HTMLDivElement>(null);

	const handleLogoLoad = () => setLoadedLogos((prev) => prev + 1);

	const animateLogos = async (enter: boolean) => {
		for (let logo of Array.from(logosRef.current!.children) as HTMLDivElement[]) {
			if (enter) logo.classList.add("project-logo-container-hover");
			else logo.classList.remove("project-logo-container-hover");
			await new Promise((r) => setTimeout(r, 50));
		}
	};

	// Check if all logos are loaded
	useEffect(() => {
		if (loadedLogos === totalLogos) onLoad?.();
	}, [loadedLogos, totalLogos]);

	return (
		<div
			className="project"
			onMouseEnter={() => animateLogos(true)}
			onMouseLeave={() => animateLogos(false)}
			{...props}
		>
			<Link to={link} target="_blank">
				<div className="project-container">
					<div className="project-info">
						<div className="project-logos" ref={logosRef}>
							{logos.map((logo, index) => (
								<div className="project-logo-container" key={index}>
									<Image
										className="project-logo"
										src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/
											${logo}/${logo}-original.svg`}
										isShown={logosShown} // Show skeletons until logosShown is true
										onLoad={handleLogoLoad}
									/>
								</div>
							))}
						</div>
						<div className="project-title">{title}</div>
						<div className="project-description">{description}</div>
					</div>
					<div className="project-link">
						<div className="project-link-icon">
							<FontAwesomeIcon icon={faLink} />
						</div>
						<div className="project-link-text">
							<sparkly-text number-of-sparkles="5">{linkText}</sparkly-text>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default Project;
