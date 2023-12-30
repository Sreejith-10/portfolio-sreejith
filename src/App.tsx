import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Theme.js";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero.js";
import Skills from "./components/Skills.js";
import Project from "./components/Project.js";
import Education from "./components/Education.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";

const Body = styled.div`
	background-color: ${({ theme }) => theme.bg};
	width: 100%;
	overflow-x: hidden;
`;

const Wrapper = styled.div`
	background: linear-gradient(
			38.73deg,
			rgba(204, 0, 187, 0.15) 0%,
			rgba(201, 32, 184, 0) 50%
		),
		linear-gradient(
			141.27deg,
			rgba(0, 70, 709, 0) 50%,
			rgba(0, 70, 209, 0.15) 100%
		);
	width: 100%;
	clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

const App = () => {
	return (
		<ThemeProvider theme={darkTheme}>
			<NavBar />
			<Body>
				<Hero />
				<Wrapper>
					<Skills />
					<Project />
				</Wrapper>
				<Wrapper>
					<Education />
					<Contact />
				</Wrapper>
				<Footer />
			</Body>
		</ThemeProvider>
	);
};

export default App;
