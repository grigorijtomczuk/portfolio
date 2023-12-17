import AboutImage from "@/assets/images/about.jpg";
import HomepageImage from "@/assets/images/homepage.jpg";
import Logo from "@/assets/images/logo.jpg";

class INFO {
	main: { title: string; titleSeparator: string; name: string; email: string; logo: any };
	socials: { github: string; linkedin: string; stackoverflow: string; telegram: string };
	homepage: { title: string; description: string; image: any };
	about: { title: string; description: string; image: any };
	projects: { title: string; description: string; projectsList: { title: string; description: string; logo: string; linkText: string; link: string }[] };
	contact: { title: string; description: string };

	constructor() {
		this.main = {
			title: "Grigory Tomchuk",
			titleSeparator: "•",
			name: "Grigory Tomchuk",
			email: "grigorijtomczuk@gmail.com",
			logo: Logo,
		};

		this.socials = {
			github: "https://github.com/grigorijtomczuk",
			linkedin: "https://www.linkedin.com/in/grigorijtomczuk",
			stackoverflow: "https://stackoverflow.com/users/18726695/grigory-tomchuk",
			telegram: "https://t.me/grigorijtomczuk",
		};

		this.homepage = {
			title: "Просто студент и хороший человек.",
			description: `У Вас имеются претензии к заголовку? Вы не согласны? Тогда прошу написать мне на <a class="general-link" href="mailto:${this.main.email}">почту</a>. В любом случае, спасибо что зашли на этот сайт! Здесь вы можете узнать обо мне, о моей деятельности и о способах связаться со мной.`,
			image: HomepageImage,
		};

		this.about = {
			title: "Меня зовут Григорий и я из Санкт-Петербурга.",
			description: `Не люблю рассказывать о себе в подробностях публично. Может быть, нам стоит познакомиться поближе? Ладно, шутки в сторону. За все время, которе я провел на сервере "Земля", я успел научиться многим вещам и полюбил многие занятия. В первую очередь я занимаюсь веб-разработкой. Изучаю немного backend и чуть больше frontend (и кайфую). Во вторую очередь я музыкант и доморощенный музыкальный продюсер. И тем, и тем я занимаюсь уже практически ${Math.round((Date.now() - new Date("2020-12-01").getTime()) / (1000 * 60 * 60 * 24 * 365))} года (или же ${Math.round((Date.now() - new Date("2020-12-01").getTime()) / (1000 * 60 * 60 * 24))} дней) и получаю нереальное удовольствие.`,
			image: AboutImage,
		};

		this.projects = {
			title: "Мои штучки.",
			description: `За годы работы и практики из моей интеллектуальной мастерской вышло приличное количество готовых и не совсем готовых проектов. С полным перечнем можно ознакомиться на моем <a class="general-link" href="${this.socials.github}" target="_blank">GitHub</a>, где также можно создать форк и внести свои предложения в любой проект.`,
			projectsList: [
				{
					title: "Backend API TypeScript",
					description: "Базовый RESTful API с аутентификацией, написанный на Node, Express, TypeScript и MongoDB.",
					logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/typescript/typescript.png",
					linkText: "Открыть",
					link: "https://github.com/grigorijtomczuk/backend-api-ts",
				},
				{
					title: "Pig Website",
					description: "Вебсайт, который я разрабатываю веселья ради вместе с моей девушкой, одновременно практикуясь в веб-разработке. ",
					logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
					linkText: "Открыть",
					link: "https://github.com/grigorijtomczuk/pig-website",
				},
				{
					title: "Floppa The Bird",
					description: "Простая 2D игра на Unity по типу Flappy Bird про птичку, которую зовут Флопа. Музыка и все спрайты авторские.",
					logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/csharp/csharp.png",
					linkText: "Открыть",
					link: "https://github.com/grigorijtomczuk/floppa-the-bird",
				},
			],
		};

		this.contact = {
			title: "Давайте знакомиться.",
			description: `Спасибо за проявленный интерес и желание связаться со мной! Справа Вы можете найти все способы связаться со мной. Обращайтесь ко мне по любому поводу, будь то коммерческое предложение или же исключительно технический вопрос. Если Ваше сообщение не требует скорейшего ответа, я прошу Вас написать мне на <a class="general-link" href="mailto:${this.main.email}">почту</a>. В противном случае, пишите мне в <a class="general-link" href="${this.socials.telegram}" target="_blank">Telegram</a>, я почти всегда готов ответить.`,
		};
	}
}
export default new INFO();
