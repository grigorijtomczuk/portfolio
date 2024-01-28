import "@/components/common/styles/logo.css";

import { Link } from "react-router-dom";
import info from "@/data/user";

const Logo = (props: { width: any; link?: any }) => {
	let { width, link } = props;

	if (link === undefined) {
		link = true;
	}

	const imageElement = <img className="logo" src={info.main.logo} alt="logo" width={width} draggable="false" />;

	return (
		<>
			{link ? (
				<Link className="logo" to="/">
					{imageElement}
				</Link>
			) : (
				imageElement
			)}
		</>
	);
};

export default Logo;
