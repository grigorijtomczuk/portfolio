import "@/components/homepage/styles/placeholderCard.css";

import Card from "@/components/common/card";
import { faCloudDownload } from "@fortawesome/free-solid-svg-icons";

const PlaceholderCard = () => {
	return (
		<div className="placeholder-card">
			<Card icon={faCloudDownload} title="Здесь могла быть Ваша реклама" body={<div className="placeholder-card-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus enim tempore debitis numquam, blanditiis unde natus ea delectus nobis harum provident. Voluptatum distinctio fugiat odio animi! Soluta temporibus nesciunt ratione harum rem!</div>} />
		</div>
	);
};

export default PlaceholderCard;
