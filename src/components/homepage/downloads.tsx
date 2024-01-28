import "@/components/homepage/styles/downloads.css";

import Card from "@/components/common/card";
import { faCloudDownload } from "@fortawesome/free-solid-svg-icons";
import info from "@/data/user";

const Downloads = () => {
	const cardBody = <div className="downloads-body">{info.homepage.downloads}</div>;
	return (
		<div className="downloads">
			<Card icon={faCloudDownload} title="Загрузки" body={cardBody} />
		</div>
	);
};

export default Downloads;
