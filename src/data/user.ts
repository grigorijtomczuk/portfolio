import AboutImage from "@/assets/images/about.jpg";
import HomepageImage from "@/assets/images/homepage.jpg";
import Logo from "@/assets/images/logo.jpg";

const INFO = {
	main: {
		title: "Grigory Tomchuk",
		name: "Grigory Tomchuk",
		email: "grigorijtomczuk@gmail.com",
		logo: Logo,
	},

	socials: {
		github: "https://github.com/grigorijtomczuk/multipage-portfolio",
		linkedin: "https://www.linkedin.com/in/grigorijtomczuk",
		stackoverflow: "https://stackoverflow.com/users/18726695/grigory-tomchuk",
		telegram: "https://t.me/grigorijtomczuk",
	},

	homepage: {
		title: "Просто студент и хороший человек.",
		description: "У Вас имеются претензии к заголовку? Вы не согласны? Тогда прошу написать мне на почту c помощью кнопки снизу. В любом случае, спасибо что зашли на этот сайт! Здесь вы можете узнать обо мне, о моей деятельности и о способах связаться со мной.",
		image: HomepageImage,
	},

	about: {
		title: "Меня зовут Григорий и я из Санкт-Петербурга.",
		description: `Не люблю рассказывать о себе в подробностях публично. Может быть, нам стоит познакомиться поближе? Ладно, шутки в сторону. За все время, которе я провел на сервере "Земля", я успел научиться многим вещам и полюбил многие занятия. В первую очередь я занимаюсь веб-разработкой. Изучаю немного backend и чуть больше frontend (и кайфую). Во вторую очередь я музыкант и доморощенный музыкальный продюсер. И тем, и тем я занимаюсь уже практически ${Math.round((Date.now() - new Date("2020-01-01").getTime()) / (1000 * 60 * 60 * 24 * 365))} года (или же ${Math.round((Date.now() - new Date("2020-01-01").getTime()) / (1000 * 60 * 60 * 24))} дней) и получаю нереальное удовольствие.`,
		image: AboutImage,
	},

	projects: {
		title: "Мои штучки.",
		description: "За годы работы и практики из моей интеллектуальной мастерской вышло приличное количество готовых и не совсем готовых проектов. С полным перечнем можно ознакомиться на моем GitHub, где также можно создать форк и внести свои предложения в любой проект.",
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
				// description: "A primitive 2D Unity game about a bird named Floppa.",
				description: "Простая 2D игра на Unity по типу Flappy Bird про птичку, которую зовут Флопа. Музыка и все спрайты авторские.",
				logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/csharp/csharp.png",
				linkText: "Открыть",
				link: "https://github.com/grigorijtomczuk/floppa-the-bird",
			},
		],
	},

	contact: {
		title: "Давайте знакомиться.",
		description: "Спасибо за проявленный интерес и желание связаться со мной! Справа Вы можете найти все способы связаться со мной. Обращайтесь ко мне по любому поводу, будь то коммерческое предложение или же исключительно технический вопрос. Если Ваше сообщение не требует скорейшего ответа, я прошу Вас написать мне на email. В противном случае, пишите мне в Telegram, я почти всегда готов ответить.",
	},
};

export default INFO;
