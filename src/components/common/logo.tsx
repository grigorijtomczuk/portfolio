import "@/components/common/styles/logo.css";

import Image from "@/components/common/image";
import { Link } from "react-router-dom";
import info from "@/data/user";

type LogoProps = {
	size: number;
	noLink?: boolean;
};

const Logo = ({ size, noLink, ...props }: LogoProps) => {
	const imageElement = <Image className="logo" src={info.main.logo} />;

	if (noLink)
		return (
			<div className="logo" style={{ width: size, height: size }} {...props}>
				{imageElement}
			</div>
		);

	return (
		<Link className="logo" to="/" style={{ width: size, height: size }} {...props}>
			{imageElement}
		</Link>
	);
};

export default Logo;
