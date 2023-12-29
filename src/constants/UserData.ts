
type  ProjectCardType = {
	projectId : string
	projectImg:string
	projectTitle:string
	tech:string[]
	description:string
}[]

export const userInfo = {
	name: "Sreejith",
	role: "Front End Developer",
	description:
		"A passoionate and motivated individual eager to embark on a journy as a Fron-End Developer. With a strong foundation in HTML,CSS,JavaScript,React Js,I am exicted to learn and grow in the filed of web develpoment",
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

export const projectCard:ProjectCardType = [
	{
		projectId: "git_1",
		projectImg: "/images/projectImg/e-com.png",
		projectTitle: "E-commerce website",
		tech: ["React JS", "JavaScript", "Tailwind", "Redux", "Firebase"],
		description:
			"This is an e-commerce website made with react and firebase with all basic features needed in an e-commerce website.",
	},
	{
		projectId: "git_2",
		projectImg: "/images/projectImg/chat1.png",
		projectTitle: "Chat Zone",
		tech: ["React JS", "JavaScript", "Tailwind", "Firebase"],
		description:
			"Chat zone is an web application made with react and firebase which users can add friends and message them.",
	},
	{
		projectId: "git_3",
		projectImg: "/images/projectImg/food.png",
		projectTitle: "Food-Recipe App",
		tech: ["React JS", "HTML", "CSS"],
		description:
			"This is project helps users to find there favorite recipes with the help of MealDB api.Users can filter dishes,serach dishes,etc.",
	},
	{
		projectId: "git_4",
		projectImg: "/images/projectImg/todo.png",
		projectTitle: "Todo App",
		tech: ["React JS", "HTML", "CSS"],
		description:
			"This is a simple todo app made with react js with crud operations",
	},
	{
		projectId: "git_5",
		projectImg: "/images/projectImg/tic.png",
		projectTitle: "Tic-Tac-Toe",
		tech: ["React JS", "HTML", "CSS"],
		description:
			"A fun tic-tac-toe game made for having a fun time with friends.The players can see live scores and winners",
	},
];


// e-commerce : https://github.com/Sreejith-10/E-commerce
//  https://e-commerce-app-54e4a.web.app/

// Chat app
// https://github.com/Sreejith-10/Chat-app
// https://chat-app-167f4.firebaseapp.com/


// Food 
// https://github.com/Sreejith-10/Food-Recipe-App
// https://sreejith-10.github.io/Food-Recipe-App/

// Todo
// https://github.com/Sreejith-10/TodoApp-React
// https://sreejith-10.github.io/TodoApp-React/

// Tic-Tac-Toe
// https://github.com/Sreejith-10/Tic-Tac-Toe
// https://sreejith-10.github.io/Tic-Tac-Toe/