import "@/components/homepage/styles/works.css";

import { useEffect, useState } from "react";

import Card from "@/components/common/card";
import Image from "@/components/common/image";
import { faHourglassHalf } from "@fortawesome/free-solid-svg-icons";
import info from "@/data/user";

const Works = () => {
	const [loadedWorks, setLoadedWorks] = useState(0);
	const [allWorksLoaded, setAllWorksLoaded] = useState(false);
	const totalWorks = info.homepage.works.length;

	const handleWorkLoad = () => setLoadedWorks((prev) => prev + 1);

	// Check if all logos are loaded
	useEffect(() => {
		if (loadedWorks === totalWorks) setAllWorksLoaded(true);
	}, [loadedWorks, totalWorks]);

	return (
		<div className="works">
			<Card icon={faHourglassHalf} title="Таймлайн">
				<div className="works-body">
					{info.homepage.works.map((work, key) => {
						return (
							<div className="work" key={key}>
								<Image
									className="work-image"
									src={work.image}
									isShown={allWorksLoaded}
									onLoad={handleWorkLoad}
								/>
								<div className="work-title">{work.title}</div>
								<div className="work-subtitle">{work.subtitle}</div>
								<div className="work-duration">{work.duration}</div>
							</div>
						);
					})}
				</div>
			</Card>
		</div>
	);
};

export default Works;
