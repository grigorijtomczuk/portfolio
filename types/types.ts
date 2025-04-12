export interface UserData {
	main: {
		title: string;
		titleSeparator: string;
		name: string;
		email: string;
		logo: any;
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
		image: any;
		works: {
			image: any;
			title: string;
			subtitle: string;
			duration: string;
		}[];
		downloads: string;
	};
	about: {
		title: string;
		description: string;
		image: any;
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
	};
}
