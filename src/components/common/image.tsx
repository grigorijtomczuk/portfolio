import Skeleton from "@/components/common/skeleton";
import { useState } from "react";

const Image = ({ src, alt, ...props }: React.ComponentProps<"img">): React.JSX.Element => {
	const [isLoading, setIsLoading] = useState(true);

	const handleLoad = () => {
		setIsLoading(false);
	};

	return (
		<div {...props} style={{ overflow: "hidden" }}>
			<div style={{ width: "100%", height: "100%" }}>
				{/* <Skeleton /> */}
				{isLoading && <Skeleton />}
				<img
					src={src}
					alt={alt}
					draggable="false"
					style={{
						display: isLoading ? "none" : "block",
						maxWidth: "100%",
					}}
					onLoad={handleLoad}
				/>
			</div>
		</div>
	);
};

export default Image;
