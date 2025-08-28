export interface UserData {
	main: {
		title: string;
		titleSeparator: string;
		name: string;
		email: string;
		logo: string;
	};
	socials: {
		github: string;
		linkedin: string;
		leetcode: string;
		telegram: string;
	};
	homepage: {
		title: string;
		description: string;
		image: string;
		works: {
			image: string;
			title: string;
			subtitle: string;
			duration: string;
		}[];
		downloads: {
			title: string;
			path: string;
		}[];
	};
	about: {
		title: string;
		description: string;
		image: string;
	};
	projects: {
		title: string;
		description: string;
		projectsList: {
			title: string;
			description: string;
			logos: string[];
			linkText: string;
			link: string;
		}[];
	};
	contact: {
		title: string;
		description: string;
		qrCode: React.ElementType;
	};
}
