import { useEffect, useState } from "react";

import Skeleton from "@/components/common/skeleton";

type ImageProps = {
	isShown?: boolean;
} & React.ComponentProps<"img">;

const Image = ({ src, alt, onLoad, isShown = true, ...props }: ImageProps): React.JSX.Element => {
	const [isLoading, setIsLoading] = useState(true);
	const [isDisplayed, setIsDisplayed] = useState(false);

	const handleLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
		onLoad?.(event);
		setIsLoading(false);
	};

	useEffect(() => {
		if (!isLoading && isShown) setIsDisplayed(true);
	}, [isLoading, isShown]);

	return (
		<div style={{ overflow: "hidden" }} {...props}>
			<div style={{ width: "100%", height: "100%" }}>
				{!isDisplayed && <Skeleton />}
				<img
					src={src}
					alt={alt}
					draggable="false"
					onLoad={handleLoad}
					style={{
						display: isDisplayed ? "block" : "none",
						maxWidth: "100%",
					}}
				/>
			</div>
		</div>
	);
};

export default Image;
