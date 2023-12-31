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
}[]

export const userInfo = {
	name: "Sreejith",
	role: "Front End Developer",
	description:
		"A passoionate and motivated individual eager to embark on a journy as a Front-End Developer. With a strong foundation in HTML,CSS,JavaScript,React Js,I am exicted to learn and grow in the filed of web develpoment",
	reusme: "link",
};

export const skills = [
	{skill: "JavaScript", link: "/images/js.png"},
	{skill: "TypeScript", link: "/images/ts.png"},
	{skill: "React Js", link: "/images/react.png"},
	{skill: "Redux", link: "/images/redux.png"},
	{skill: "HTML", link: "/images/html.png"},
	{skill: "CSS", link: "/images/css.png"},
	{skill: "Tailwind", link: "/images/tailwind.png"},
	{skill: "SASS", link: "/images/pngwing.com.png"},
];

export const projectCard:CardData = [
	{
		projectId: "git_1",
		projectImg: "/images/projectImg/e-com.png",
		projectTitle: "E-commerce website",
		tech: ["React JS", "JavaScript", "Tailwind", "Redux", "Firebase"],
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
			"/images/projectImg/e-com.png",
			"/images/projectImg/e-com2.png",
			"/images/projectImg/e-com4.png",
			"/images/projectImg/e-com5.png",
			"/images/projectImg/ecom6.png",
		],
		github: "https://github.com/Sreejith-10/E-commerce",
		live: "https://e-commerce-app-54e4a.web.app/",
	},
	{
		projectId: "git_2",
		projectImg: "/images/projectImg/chat1.png",
		projectTitle: "Chat Zone",
		tech: ["React JS", "JavaScript", "Tailwind", "Firebase"],
		description:
			"Chat zone is an web application made with react and firebase which users can add friends and message them.",
		features: ["Real time chat", "Search friends", "Upload images"],
		images: ["/images/projectImg/chat1.png"],
		github: "https://github.com/Sreejith-10/Chat-app",
		live: "https://chat-app-167f4.firebaseapp.com/",
	},
	{
		projectId: "git_3",
		projectImg: "/images/projectImg/food.png",
		projectTitle: "Food-Recipe App",
		tech: ["React JS", "HTML", "CSS"],
		description:
			"This is project helps users to find there favorite recipes with the help of MealDB api.Users can filter dishes,serach dishes,etc.",
		features: [
			"Search,filter recipes",
			"get all ingredients and cooking instruction",
		],
		images: [
			"/images/projectImg/food.png",
			"/images/projectImg/food1.png",
			"/images/projectImg/food2.png",
			"/images/projectImg/food3.png",
		],
		github: "https://github.com/Sreejith-10/Food-Recipe-App",
		live: "https://sreejith-10.github.io/Food-Recipe-App/",
	},
	{
		projectId: "git_4",
		projectImg: "/images/projectImg/todo.png",
		projectTitle: "Todo App",
		tech: ["React JS", "HTML", "CSS"],
		description:
			"This is a simple todo app made with react js with crud operations",
		features: ["Basic Crud operations like add task,edit,delete"],
		images: ["/images/projectImg/todo.png"],
		github: "https://github.com/Sreejith-10/TodoApp-React",
		live: "https://sreejith-10.github.io/TodoApp-React/",
	},
	{
		projectId: "git_5",
		projectImg: "/images/projectImg/tic.png",
		projectTitle: "Tic-Tac-Toe",
		tech: ["React JS", "HTML", "CSS"],
		description:
			"A fun tic-tac-toe game made for having a fun time with friends.The players can see live scores and winners",
		features: ["Score board"],
		images: ["/images/projectImg/tic.png"],
		github: "https://github.com/Sreejith-10/Tic-Tac-Toe",
		live: "https://sreejith-10.github.io/Tic-Tac-Toe/",
	},
];

export const links = {
	resume : "https://drive.google.com/file/d/1j0TGri2qeiA54czEZC2Usijn6rgyCQ6A/view?usp=drive_link",
	github: "https://github.com/Sreejith-10",
	linkdin:"http://www.linkdin.com/in/sreejith-t-s63858024a",
	instagram:"https://www.instagram.com/unknown_us.e.r?igsh=OGQ5Dc@Ok@Za==",
	twitter:"https://twitter.com/sreejith_101?t=iqPeUmq4m4Wi4Lk8Y6cjmA&s=09",
	telegram:"https://t.me/killua1_0"
}
