import { useScroll } from "framer-motion";
import { useRef } from "react";
import { PageSub, PageTitle } from "../utils/CommonCompnents";
import { skills } from "../constants/UserData";
import { motion } from "framer-motion";
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
`;

const SkillItem = styled.div`
	width: fit-content;
	border: 0.5px solid white;
	border-radius: 14px;
	padding: 10px 20px;
	font-size: 1.2rem;
	list-style: none;
	color: gray;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
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

const container = {
	hidden: { opacity: 0, scale: 0 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			delayChildren: .5,
			staggerChildren: .5,
		},
	},
};

const item = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
	},
};

const Skills = () => {
	const ref = useRef(null)
	const { scrollYProgress }:any = useScroll({
		target: ref,
		offset: ["0 1", "1 1"]
	})
	return (
		<SkillContianer id="skills">
			<SkillWrapper>
				<PageTitle>Skills</PageTitle>
				<PageSub>
					Here are some of my skills that I have been working on
				</PageSub>
				<motion.ul
					ref={ref}
					style={{
						scale: scrollYProgress,
						opacity: scrollYProgress
					}}
					className="SkillBox"
					variants={container}
					initial="hidden"
					whileInView={"visible"}>
					{skills.map((items, index) => (
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
								<SkillIcon src={items.link} />
								{items.skill}
							</SkillItem>
						</motion.li>
					))}
				</motion.ul>
			</SkillWrapper>
		</SkillContianer>
	);
};

export default Skills;
