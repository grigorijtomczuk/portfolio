declare module "*.jpg";
declare module "*.png";
declare module "*.svg";

declare namespace React.JSX {
	interface IntrinsicElements {
		"sparkly-text": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
	}
}
