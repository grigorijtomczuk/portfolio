import "./styles/logo.css";

import INFO from "../../data/user";
import { Link } from "react-router-dom";

const Logo = (props: { width: any; link?: any }) => {
	let { width, link } = props;

	if (link === undefined) {
		link = true;
	}

	const imageElement = <img className="logo" src={INFO.main.logo} alt="logo" width={width} draggable="false" />;

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
