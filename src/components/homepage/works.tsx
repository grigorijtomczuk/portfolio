import "@/components/homepage/styles/works.css";

import Card from "@/components/common/card";
import INFO from "@/data/user";
import SchoolLogo from "@/assets/images/school.jpg";
import SuaiLogo from "@/assets/images/suai.svg";
import { faHourglassHalf } from "@fortawesome/free-solid-svg-icons";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faHourglassHalf}
				title="Таймлайн"
				body={
					<div className="works-body">
						{INFO.homepage.works.map((work) => {
							return (
								<div className="work">
									<img className="work-image" src={work.image} alt="" draggable="false" />
									<div className="work-title">{work.title}</div>
									<div className="work-subtitle">{work.subtitle}</div>
									<div className="work-duration">{work.duration}</div>
								</div>
							);
						})}
					</div>
				}
			/>
		</div>
	);
};

export default Works;
