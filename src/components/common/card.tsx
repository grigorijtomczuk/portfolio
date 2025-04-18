import "@/components/common/styles/card.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";

type CardProps = React.PropsWithChildren<{
	icon: IconProp;
	title: string;
}>;

const Card = ({ children, icon, title }: CardProps) => {
	return (
		<div className="card">
			<div className="card-container">
				<div className="card-header">
					<div className="card-icon">
						<FontAwesomeIcon icon={icon} />
					</div>
					<div className="card-title">{title}</div>
				</div>
				<div className="card-body">
					<div className="card-text">{children}</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
