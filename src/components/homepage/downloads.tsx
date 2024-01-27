import "@/components/homepage/styles/downloads.css";

import Card from "@/components/common/card";
import INFO from "@/data/user";
import { faCloudDownload } from "@fortawesome/free-solid-svg-icons";

const Downloads = () => {
	const cardBody = <div className="downloads-body">{INFO.homepage.downloads}</div>;
	return (
		<div className="downloads">
			<Card icon={faCloudDownload} title="Загрузки" body={cardBody} />
		</div>
	);
};

export default Downloads;
