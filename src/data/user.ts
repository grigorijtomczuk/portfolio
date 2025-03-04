import AboutImage from "@/assets/images/about.jpg";
import EmsLogo from "@/assets/images/ems.png";
import HomepageImage from "@/assets/images/homepage.jpg";
import Logo from "@/assets/images/logo.jpg";
import SuaiLogo from "@/assets/images/suai.svg";
import type { UserData } from "types/types";

const mainInfo = {
	title: "Grigory Tomchuk",
	titleSeparator: "•",
	name: "Grigory Tomchuk",
	email: "grigorijtomczuk@gmail.com",
	logo: Logo,
};

const socialsInfo = {
	github: "https://github.com/grigorijtomczuk",
	linkedin: "https://www.linkedin.com/in/grigorijtomczuk",
	stackoverflow: "https://stackoverflow.com/users/18726695/grigory-tomchuk",
	telegram: "https://t.me/grigorijtomczuk",
};

const info: UserData = {
	main: mainInfo,
	socials: socialsInfo,

	homepage: {
		title: "Просто студент и хороший человек",
		description: `У Вас имеются претензии к заголовку? Вы не согласны? Тогда прошу написать мне на \
			<a class="general-link" href="mailto:${mainInfo.email}">почту</a>. В любом случае, спасибо что \
			зашли на этот сайт! Здесь вы можете узнать обо мне, о моей деятельности и о способах связаться со мной.`,
		image: HomepageImage,
		works: [
			{
				image: SuaiLogo,
				title: "СПбГУАП",
				subtitle: "Студент",
				duration: "Сен 2023 – Сегодня",
			},
			{
				image: EmsLogo,
				title: "SUAI Embedded Systems Lab.",
				subtitle: "Веб-разработчик",
				duration: "Апр 2024 – Фев 2025",
			},
		],
		downloads: "Coming soon 🗓️",
	},

	about: {
		title: "Меня зовут Григорий и я из Санкт-Петербурга",
		description: `Не люблю рассказывать о себе в подробностях публично. Может быть, нам стоит познакомиться \
			поближе? Ладно, шутки в сторону. За все время, что я провел на сервере "Земля", я успел научиться \
			многим вещам и полюбил многие занятия. В первую очередь я занимаюсь веб-разработкой. Изучаю немного \
			<span class="code-span">backend</span> и чуть больше <span class="code-span">frontend</span> (и кайфую). \
			Еще я пишу музыку и вожу TTRPG игры. Разработкой я занимаюсь уже практически \
			<span class="code-span">\
			${Math.round((Date.now() - new Date("2020-12-01").getTime()) / (1000 * 60 * 60 * 24 * 365))}\
			&nbsp;года</span> (или же <span class="code-span">\
			${Math.round((Date.now() - new Date("2020-12-01").getTime()) / (1000 * 60 * 60 * 24))}\
			&nbsp;дней</span>) и получаю нереальное удовольствие (и деньги).`,
		image: AboutImage,
	},

	projects: {
		title: "Мои штучки",
		description: `За все время работы и практики из моей интеллектуальной мастерской вышло приличное количество \
			готовых и не совсем готовых проектов. С полным перечнем можно ознакомиться на моем \
			<a class="general-link" href="${socialsInfo.github}" target="_blank">GitHub</a>, где также можно \
			создать форк и внести свои предложения в любой проект.`,
		projectsList: [
			{
				title: "Backend API TypeScript",
				description:
					"Базовый RESTful API с аутентификацией, написанный на Node, Express, TypeScript и MongoDB.",
				logos: ["express", "mongodb", "typescript"],
				linkText: "Исходный код",
				link: "https://github.com/grigorijtomczuk/backend-api-ts",
			},
			{
				title: "Финансовый Компас",
				description:
					"Мобильное веб-приложение для отслеживания личных финансов. Командный продукт для \
					проектной дисциплины ВУЗа.",
				logos: ["vuejs", "sass", "typescript"],
				linkText: "Исходный код",
				link: "https://github.com/grigorijtomczuk/financial-compass",
			},
			{
				title: "Portfolio",
				description:
					"Проект этого сайта, мое портфолио. Здесь я публикую основную информацию о моей деятельности.",
				logos: ["react", "reactrouter", "typescript"],
				linkText: "Исходный код",
				link: "https://github.com/grigorijtomczuk/portfolio",
			},
			{
				title: "ЛовиЛанч",
				description:
					'Сайт для выдуманной сети ресторанов "ЛовиЛанч". Делался по ТЗ на заказ как работа \
					по дисциплине "Веб-технологии".',
				logos: ["html5", "javascript", "php"],
				linkText: "Онлайн развертка",
				link: "http://e99676if.beget.tech",
			},
			{
				title: "Floppa The Bird",
				description:
					"Простая 2D игра на Unity по типу Flappy Bird про птичку, которую зовут Флопа. \
					Музыка и все спрайты авторские.",
				logos: ["unity", "csharp"],
				linkText: "Исходный код",
				link: "https://github.com/grigorijtomczuk/floppa-the-bird",
			},
			{
				title: "Strawberrette The Pig",
				description: "Telegram-бот, который имеет некоторую практическую и эстетическую ценность.",
				logos: ["python"],
				linkText: "Исходный код",
				link: "https://github.com/grigorijtomczuk/strawberrette-pig",
			},
			{
				title: "TODO React TypeScript",
				description: "Простое TODO приложение, написанное на Vite React в связке с TypeScript.",
				logos: ["react", "typescript"],
				linkText: "Исходный код",
				link: "https://github.com/grigorijtomczuk/todo-react-ts",
			},
			{
				title: "Goofy Pet Feeder",
				description: `Проект моей курсовой работы 2021-2022 учебного года, когда я отучился один курс \
				в колледже по специальности "Мехатроника".`,
				logos: ["arduino", "cplusplus"],
				linkText: "Исходный код",
				link: "https://github.com/grigorijtomczuk/goofy-pet-feeder",
			},
		],
	},

	contact: {
		title: "Давайте знакомиться",
		description: `Спасибо за проявленный интерес и желание связаться со мной! Здесь Вы сможете \
			найти мои контакты. Обращайтесь ко мне по любому поводу, будь то деловое предложение или же \
			исключительно технический вопрос. Если Ваше сообщение не требует скорейшего ответа, я прошу Вас \
			написать мне на <a class="general-link" href="mailto:${mainInfo.email}">почту</a>. В противном случае, \
			пишите мне в <a class="general-link" href="${socialsInfo.telegram}" target="_blank">Telegram</a>, \
			я почти всегда готов ответить.`,
	},
};

export default info;
