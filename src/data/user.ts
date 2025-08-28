import AboutImage from "@/assets/images/about.jpg";
import EmsLogo from "@/assets/images/ems.png";
import HomepageImage from "@/assets/images/homepage.jpg";
import Logo from "@/assets/images/logo.jpg";
import { ReactComponent as QRCode } from "@/assets/images/qr-code.svg";
import SuaiLogo from "@/assets/images/suai.svg";
import type { UserData } from "types/types";

const experienceYears = Math.round(
	(Date.now() - new Date("2022-06-01").getTime()) / (1000 * 60 * 60 * 24 * 365)
);

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
	leetcode: "https://leetcode.com/u/grigorijtomczuk",
	telegram: "https://t.me/grigorijtomczuk",
};

const info: UserData = {
	main: mainInfo,
	socials: socialsInfo,

	homepage: {
		title: "Программист. Дизайнер. Иногда просто человек.",
		description:
			"Этот сайт — о том, чем я живу: разработка, дизайн и идеи. \
			Я верю, что технологии должны быть простыми и полезными. \
			Если думаете так же — добро пожаловать, у нас уже есть общий язык.",
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
		downloads: [
			{
				title: "Томчук Григорий Сергеевич (Fullstack-разработчик).pdf",
				path:
					process.env.PUBLIC_URL +
					"/downloads/tomchuk-grigory-sergeevich-fullstack-developer.pdf",
			},
			{
				title: "Томчук Григорий Сергеевич (Frontend-разработчик).pdf",
				path:
					process.env.PUBLIC_URL +
					"/downloads/tomchuk-grigory-sergeevich-frontend-developer.pdf",
			},
		],
	},

	about: {
		title: "Меня зовут Григорий, я из Санкт-Петербурга",
		description: `Моя основная деятельность связана с веб&#8209;разработкой. Я работаю с
		<span class="code-span">frontend</span>&#8209;технологиями, изучаю <span class="code-span">
		backend</span> и стремлюсь создавать проекты, которые сочетают
		удобство, функциональность и современный дизайн. Опыт в этой сфере у меня уже почти
		<span class="code-span">${experienceYears}&nbsp;${
			experienceYears === 1 ? "год" : experienceYears < 5 ? "года" : "лет"
		}</span>.
		<div class="space"><div/>
		Помимо разработки, я занимаюсь музыкой и ведением настольных ролевых игр.
		Эти занятия помогают развивать креативное мышление и находить новые подходы
		к работе над проектами. Для меня важно постоянно учиться и совершенствовать навыки,
		а также находить решения, которые делают технологии простыми и полезными.`,
		image: AboutImage,
	},

	projects: {
		title: "Мои проекты",
		description: `Здесь собраны результаты моей работы и практики — от полноценных решений до
			экспериментальных идей. Большая часть проектов доступна на моем
			<a class="general-link" href="${socialsInfo.github}" target="_blank">GitHub</a>.
			Там Вы можете посмотреть код, ознакомиться с деталями реализации и при желании
			внести свои предложения.`,
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
				description:
					"Telegram-бот, который имеет некоторую практическую и эстетическую ценность.",
				logos: ["python"],
				linkText: "Исходный код",
				link: "https://github.com/grigorijtomczuk/strawberrette-pig",
			},
			{
				title: "TODO React TypeScript",
				description:
					"Простое TODO приложение, написанное на Vite React в связке с TypeScript.",
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
		description: `Спасибо за проявленный интерес и желание связаться со мной. Здесь Вы сможете \
			найти мои контакты. Обращайтесь ко мне по любому поводу: будь то деловое предложение или же \
			исключительно технический вопрос.
			<div class="space"></div>
			Пишите мне на <a class="general-link" href="mailto:${mainInfo.email}">почту</a> или
			в <a class="general-link" href="${socialsInfo.telegram}" target="_blank">Telegram</a> —
			буду рад обсудить любые вопросы, связанные с проектами, работой или сотрудничеством.`,
		qrCode: QRCode,
	},
};

export default info;
