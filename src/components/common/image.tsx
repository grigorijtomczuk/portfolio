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

	// FIXME: Grouped images randomly don't get their skeleton removed at all in Firefox
	useEffect(() => {
		if (!isLoading && isShown) setIsDisplayed(true);
	}, [isLoading, isShown]);

	return (
		<div style={{ position: "relative", overflow: "hidden" }} {...props}>
			{!isDisplayed && <Skeleton />}
			<img
				src={src}
				alt={alt}
				draggable="false"
				onLoad={handleLoad}
				style={{
					width: "100%",
					height: "100%",
				}}
			/>
		</div>
	);
};

export default Image;
