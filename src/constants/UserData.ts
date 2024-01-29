type CardData = {
	projectId: string;
	projectImg: string;
	projectTitle: string;
	tech: string[];
	description: string;
	features: string[];
	images: string[];
	github: string;
	live: string;
}[];

type WorkingProjectsType = {
	projectId?: string;
	projectImg?: string;
	projectTitle?: string;
	tech?: string[];
	description?: string;
	features?: string[];
	images?: string[];
	github?: string;
	live?: string;
}[];

export const userInfo = {
	name: "Sreejith",
	role: "MERN Stack Developer",
	description:
		"A self taught,passoionate and motivated individual eager to embark on a journey as a Web Develper. With a strong foundation in both front end and backend,i'm waiting for opportunity to show my skills.I am exicted to learn and grow in the filed of web develpoment.",
	reusme:
		"https://drive.google.com/file/d/1jRDf2_tpbr4RP9WYpn5yPy7H_sqpLedF/view?usp=drivesdk",
};

export const skills = [
	{
		skillName: "Front end",
		skillArray: [
			{skill: "JavaScript", link: "/images/js.png"},
			{skill: "TypeScript", link: "/images/ts.png"},
			{skill: "React Js", link: "/images/react.png"},
			{skill: "Redux", link: "/images/redux.png"},
			{skill: "HTML", link: "/images/html.png"},
			{skill: "CSS", link: "/images/css.png"},
			{skill: "Tailwind", link: "/images/tailwind.png"},
			{skill: "SASS", link: "/images/pngwing.com.png"},
		],
	},
	{
		skillName: "Back end",
		skillArray: [
			{
				skill: "Node js",
				link: "/images/nodejs-icon.svg",
			},
			{
				skill: "express",
				link: "/images/express-109.svg",
			},
			{skill: "MongoDB", link: "/images/mongodb-icon-2.svg"},
			{skill: "Firebase", link: "/images/Firebase.png"},
		],
	},
	{
		skillName: "Development Tools",
		skillArray: [
			{skill: "Github", link: "/images/github-logo.png"},
			{skill: "Vscode", link: "/images/1705574507137.png"},
		],
	},
];

export const projectCard: CardData = [
	{
		projectId: "git_0",
		projectImg: "https://drive.google.com/file/d/1kgQE85PVvToHGEsBx1ZX2-OnwUp9MHbV/view?usp=drive_link",
		projectTitle: "Blogify Hub",
		tech: [
			"ReactJS",
			"TypeScript",
			"TailwindCSS",
			"NodeJS",
			"Express",
			"MongoDB",
			"Mongoose",
		],
		description:
			"A blgoing webisite to share moments in life.A place to get latest info about thechnology,travel,etc",
		features: [
			"MVC Architecture",
			"Interations between users",
			"Follow favorite bloggers",
			"Push notifications",
			"React to the posts",
		],
		github: "",
		images: [
			"https://drive.google.com/file/d/1kgQE85PVvToHGEsBx1ZX2-OnwUp9MHbV/view?usp=drive_link",
			"https://drive.google.com/file/d/1kgOjrw7EgXNcmX69YrIX8rZSoCQ3mK1o/view?usp=drive_link",
			"https://drive.google.com/file/d/1kdZKppvXDfRUEBG45DDVAs8mwmje9giJ/view?usp=drive_link","https://drive.google.com/file/d/1kcuBPg9aOORGS_0v1l99mC03E7H_zUTR/view?usp=drive_link","https://drive.google.com/file/d/1k_srxwtQfKlua24MuY5BwBIo0zBjKR8Z/view?usp=drive_link"
			
		],
		live: "",
	},
	{
		projectId: "git_1",
		projectImg: "https://drive.google.com/file/d/1kx-HrnPOxOUQuGEOj5iUVOQYJOKjvbl2/view?usp=drive_link",
		projectTitle: "E-commerce website",
		tech: ["ReactJs", "JavaScript", "TailwindCSS", "Redux", "Firebase"],
		description:
			"This is an e-commerce website made with react and firebase with all basic features needed in an e-commerce website.",
		features: [
			"Realtime updates",
			"Admin Dashboard",
			"Set notification for out of stcok produts",
			"Rate and review produts",
			"serach produts",
			"Sort and filter",
		],
		images: [
			"https://drive.google.com/file/d/1kx-HrnPOxOUQuGEOj5iUVOQYJOKjvbl2/view?usp=drive_link","https://drive.google.com/file/d/1kuau8WCl7OkIgeAlvlEcu0lJaj1dygCl/view?usp=drive_link","https://drive.google.com/file/d/1kvb4ZakXmetlI1fZ6V-5ksWdFbHs8fTw/view?usp=drive_link",
			"https://drive.google.com/file/d/1kv9QI-E7s8gZp6a7G2xmOfd_QuVRQhjO/view?usp=drive_link","https://drive.google.com/file/d/1ktBmAkiivPuwnu3h1FIWryXiSc2Ov7Q9/view?usp=drive_link"
		],
		github: "https://github.com/Sreejith-10/E-commerce",
		live: "https://e-commerce-app-54e4a.web.app/",
	},
	{
		projectId: "git_2",
		projectImg: "",
		projectTitle: "Chat Zone",
		tech: ["ReactJS", "JavaScript", "Tailwind", "Firebase"],
		description:
			"Chat zone is an web application made with react and firebase which users can add friends and message them.",
		features: ["Real time chat", "Search friends", "Upload images"],
		images: [],
		github: "https://github.com/Sreejith-10/Chat-app",
		live: "https://chat-app-167f4.firebaseapp.com/",
	},
	{
		projectId: "git_3",
		projectImg: "/images/projectImg/food.png",
		projectTitle: "Food-Recipe App",
		tech: ["ReactJS", "HTML", "CSS"],
		description:
			"This is project helps users to find there favorite recipes with the help of MealDB api.Users can filter dishes,serach dishes,etc.",
		features: [
			"Search,filter recipes",
			"get all ingredients and cooking instruction",
		],
		images: [
		
		],
		github: "https://github.com/Sreejith-10/Food-Recipe-App",
		live: "https://sreejith-10.github.io/Food-Recipe-App/",
	},
	{
		projectId: "git_4",
		projectImg: "",
		projectTitle: "Todo App",
		tech: ["ReactJS", "HTML", "CSS"],
		description:
			"This is a simple todo app made with react js with crud operations",
		features: ["Basic Crud operations like add task,edit,delete"],
		images: [],
		github: "https://github.com/Sreejith-10/TodoApp-React",
		live: "https://sreejith-10.github.io/TodoApp-React/",
	},
	{
		projectId: "git_5",
		projectImg: "/images/projectImg/tic.png",
		projectTitle: "Tic-Tac-Toe",
		tech: ["ReactJS", "HTML", "CSS"],
		description:
			"A fun tic-tac-toe game made for having a fun time with friends.The players can see live scores and winners",
		features: ["Score board"],
		images: [],
		github: "https://github.com/Sreejith-10/Tic-Tac-Toe",
		live: "https://sreejith-10.github.io/Tic-Tac-Toe/",
	},
];

export const workingProjects : WorkingProjectsType = [];

export const links = {
	resume:
		"https://drive.google.com/file/d/1jRDf2_tpbr4RP9WYpn5yPy7H_sqpLedF/view?usp=drivesdk",
	github: "https://github.com/Sreejith-10",
	linkdin: "http://www.linkdin.com/in/sreejith-t-s63858024a",
	instagram: "https://www.instagram.com/unknown_us.e.r?igsh=OGQ5Dc@Ok@Za==",
	twitter: "https://twitter.com/sreejith_101?t=iqPeUmq4m4Wi4Lk8Y6cjmA&s=09",
	telegram: "https://t.me/killua1_0",
};
