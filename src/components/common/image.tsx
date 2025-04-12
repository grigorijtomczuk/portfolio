import Skeleton from "@/components/common/skeleton";
import { useState } from "react";

type ImageProps = {
	noSkeleton?: boolean;
} & React.ComponentProps<"img">;

const Image = ({ src, alt, onLoad, noSkeleton, ...props }: ImageProps): React.JSX.Element => {
	const [isLoading, setIsLoading] = useState(true);

	const handleLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
		onLoad && onLoad(event);
		setIsLoading(false);
	};

	if (noSkeleton)
		return (
			<img src={src} alt={alt} draggable="false" onLoad={handleLoad} style={{ maxWidth: "100%" }} {...props} />
		);

	return (
		<div style={{ overflow: "hidden" }} {...props}>
			<div style={{ width: "100%", height: "100%" }}>
				{isLoading && <Skeleton />}
				<img
					src={src}
					alt={alt}
					draggable="false"
					onLoad={handleLoad}
					style={{
						display: isLoading ? "none" : "block",
						maxWidth: "100%",
					}}
				/>
			</div>
		</div>
	);
};

export default Image;
