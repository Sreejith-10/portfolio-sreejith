import {useScroll} from "framer-motion";
import {useRef} from "react";
import {PageSub, PageTitle} from "../utils/CommonCompnents";
import {skills} from "../constants/UserData";
import {motion} from "framer-motion";
import styled from "styled-components";
import "../App.css";

const SkillContianer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
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

const SkillItem = styled.div`
	font-size: 16px;
	font-weight: 400;
	color: rgba(242, 243, 244, 0.5);
	border: 1px solid rgba(242, 243, 244, 0.5);
	border-radius: 12px;
	padding: 12px 16px;
	display: flex;
	-webkit-box-align: center;
	align-items: center;
	-webkit-box-pack: center;
	justify-content: center;
	gap: 8px;
	@media (max-width: 600px) {
		font-size: 16px;
		padding: 8px 12px;
	}
`;
const SkillIcon = styled.img`
	width: 40px;
	height: 40px;
	@media (max-width: 600px) {
		width: 25px;
		height: 25px;
	}
`;

const CardTitle = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 2.4rem;
	font-weight: 500;
	color: ${({theme}) => theme.text_primary};
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

const container = {
	hidden: {opacity: 0, scale: 0},
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			delayChildren: 0.5,
			staggerChildren: 0.5,
		},
	},
};

const item = {
	hidden: {y: 20, opacity: 0},
	visible: {
		y: 0,
		opacity: 1,
	},
};

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
	const {scrollYProgress}: any = useScroll({
		target: ref,
		offset: ["0 1", "1 1"],
	});
	return (
		<SkillContianer id="skills">
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
								style={{
									scale: scrollYProgress,
									opacity: scrollYProgress,
								}}
								className="SkillBox"
								variants={container}
								initial="hidden"
								whileInView={"visible"}>
								{items.skillArray.map((arrItem, index) => (
									<motion.li
										key={index}
										variants={item}
										style={{
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											gap: "20px",
											listStyle: "none",
										}}>
										<SkillItem>
											<SkillIcon src={arrItem.link} />
											{arrItem.skill}
										</SkillItem>
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
