import "@/components/homepage/styles/downloads.css";

import { faCloudDownload, faFile, faFilePdf } from "@fortawesome/free-solid-svg-icons";

import Card from "@/components/common/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import info from "@/data/user";

const Downloads = () => {
	return (
		<div className="downloads">
			<Card icon={faCloudDownload} title="Резюме">
				<div className="downloads-body">
					{info.homepage.downloads.map((downloadItem, key) => (
						<a
							className="download-item"
							href={downloadItem.path}
							// download={downloadItem.title}
							target="_blank"
							key={key}
						>
							<FontAwesomeIcon
								icon={
									downloadItem.path.split(".").pop() === "pdf"
										? faFilePdf
										: faFile
								}
								className="download-item-icon"
							/>
							<p className="download-item-title">{downloadItem.title}</p>
						</a>
					))}
				</div>
			</Card>
		</div>
	);
};

export default Downloads;
