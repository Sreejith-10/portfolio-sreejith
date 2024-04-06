import styled, {ThemeProvider} from "styled-components";
import {darkTheme} from "./utils/Theme.js";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero.js";
import Skills from "./components/Skills.js";
import Project from "./components/Project.js";
import Education from "./components/Education.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";
import {useState} from "react";
import CardDetails from "./components/CardDetails.js";
import PopUp from "./components/PopUp.js";
import {motion} from "framer-motion";

const Body = styled.div`
	background-color: ${({theme}) => theme.bg};
	width: 100%;
	height: auto;
	overflow-x: hidden;
	position: relative;
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
const OutSide = styled.div`
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	background: #1c1c27f0;
	overflow: hidden;
`;
const App = () => {
	const [cardData, setCardData] = useState({
		projectId: "",
		projectImg: "",
		projectTitle: "",
		tech: [""],
		description: "",
		features: [""],
		images: [""],
		github: "",
		live: "",
	});
	const [layoutId, setLayoutId] = useState("");
	const [showDetails, setShowDetails] = useState(false);

	const [popup, setPopup] = useState(false);
	const [message, setMessage] = useState("");

	return (
		<>
			<ThemeProvider theme={darkTheme}>
				<NavBar />
				<Body>
					<motion.div
						variants={{
							hidden: {
								translateX: 400,
							},
							show: {
								translateX: 0,
							},
						}}
						initial={"hidden"}
						animate={popup ? "show" : "hidden"}
						style={{position: "fixed", top: 100, right: 30, zIndex: 10}}>
						<PopUp message={message} setPopup={setPopup} />
					</motion.div>
					<Hero />
					<Wrapper>
						<Skills />
						<Project
							setShowDetails={setShowDetails}
							setCardData={setCardData}
							setLayoutId={setLayoutId}
						/>
					</Wrapper>
					<Wrapper>
						<Education />
						<Contact setMessage={setMessage} setPopup={setPopup} />
					</Wrapper>
					<Footer />
					{showDetails && (
						<OutSide>
							<CardDetails
								cardData={cardData}
								setShowDetails={setShowDetails}
								layoutId={layoutId}
							/>
						</OutSide>
					)}
				</Body>
			</ThemeProvider>
		</>
	);
};

export default App;
