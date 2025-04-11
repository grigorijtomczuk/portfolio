import "@/components/homepage/styles/downloads.css";

import Card from "@/components/common/card";
import { faCloudDownload } from "@fortawesome/free-solid-svg-icons";
import info from "@/data/user";

const Downloads = () => {
	return (
		<div className="downloads">
			<Card icon={faCloudDownload} title="Загрузки">
				<div className="downloads-body">{info.homepage.downloads}</div>
				{/* TODO: add a PDF Resume */}
			</Card>
		</div>
	);
};

export default Downloads;
