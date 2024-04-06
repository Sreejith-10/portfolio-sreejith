import {useRef} from "react";
import {PageSub, PageTitle} from "../utils/CommonCompnents";
import {skills} from "../constants/UserData";
import {motion} from "framer-motion";
import styled from "styled-components";
import "../App.css";
import Tile from "./Tile";

const SkillContianer = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: 400px) {
		height: 130vh;
	}
`;
const SkillWrapper = styled.div`
	width: 65%;
	padding: 80px 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 20px;
	@media (max-width: 600px) {
		width: 100%;
		padding: 20px 20px;
	}
	@media (max-width: 960px) {
		width: 100%;
		padding: 20px 20px;
	}
`;

const CardTitle = styled.div`
	width: 100%;
	height: auto;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 2.4rem;
	font-weight: 500;
	margin-bottom: 50px;
	color: ${({theme}) => theme.text_primary};
	@media (max-width: 600px) {
		margin-bottom: 10px;
	}
`;

const CardContainer = styled.div`
	width: 100%;
	max-width: 500px;
	background: rgb(23, 23, 33);
	border: 0.1px solid rgb(133, 76, 230);
	box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
	border-radius: 16px;
	padding: 18px 36px;
`;

const CardWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	margin-top: 30px;
	gap: 30px;
	-webkit-box-pack: center;
	justify-content: center;
`;
const Skills = () => {
	const ref = useRef(null);

	return (
		<SkillContianer id="Skills">
			<SkillWrapper>
				<PageTitle>Skills</PageTitle>
				<PageSub>
					Here are some of my skills that I have been working on
				</PageSub>
				<CardWrapper>
					{skills.map((items, idx) => (
						<CardContainer key={idx}>
							<CardTitle>{items.skillName}</CardTitle>
							<motion.ul
								ref={ref}
								variants={{
									hidden: {
										opacity: 1,
										scale: 0,
									},
									visible: {
										opacity: 1,
										scale: 1,
										transition: {
											delayChildren: 0.8,
											staggerChildren: 0.5,
											type: "spring",
										},
									},
								}}
								initial="hidden"
								whileInView="visible"
								viewport={{once: true}}
								className="SkillBox">
								{items.skillArray.map((arrItem, index) => (
									<motion.li
										variants={{
											hidden: {
												y: 20,
												opacity: 0,
											},
											visible: {
												y: 0,
												opacity: 1,
											},
										}}
										key={index}
										style={{
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											gap: "20px",
											listStyle: "none",
										}}>
										<Tile item={arrItem} />
									</motion.li>
								))}
							</motion.ul>
						</CardContainer>
					))}
				</CardWrapper>
			</SkillWrapper>
		</SkillContianer>
	);
};

export default Skills;
