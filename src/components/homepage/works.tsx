import "@/components/homepage/styles/works.css";

import Card from "@/components/common/card";
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
						<div className="work">
							<img className="work-image" src={SchoolLogo} alt="" draggable="false" />
							<div className="work-title">Школа №212</div>
							<div className="work-subtitle">Ученик</div>
							<div className="work-duration">2016 &ndash; 2023 </div>
						</div>

						<div className="work">
							<img className="work-image" src={SuaiLogo} alt="" draggable="false" />
							<div className="work-title">ГУАП</div>
							<div className="work-subtitle">Студент</div>
							<div className="work-duration">2023 &ndash; Сегодня</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
