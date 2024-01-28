import styled from "styled-components";
import {PageSub, PageTitle} from "../utils/CommonCompnents";
import Card from "./Card";
import {projectCard, workingProjects} from "../constants/UserData";
import {motion} from "framer-motion";
import {CardData, SetState} from "../types/lib";

const ProjectContainer = styled.div`
	width: 100%;
	height: 100%;
	margin-top: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const ProjectWrapper = styled.div`
	width: 65%;
	height: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	@media (max-width: 600px) {
		width: 90%;
	}
`;
const ProjectCardContainer = styled.div`
	display: flex;
	-webkit-box-pack: center;
	justify-content: center;
	-webkit-box-align: center;
	align-items: center;
	gap: 28px;
	flex-wrap: wrap;
	margin: 100px 0px;
	@media (max-width: 600px) {
		flex-direction: column;
		margin-top: 50px;
		gap: 30px;
	}
`;

type ProjectProps = {
	setShowDetails: SetState<boolean>;
	setCardData: SetState<CardData>;
	setLayoutId: SetState<string>;
};

const Project = ({setShowDetails, setCardData, setLayoutId}: ProjectProps) => {
	const Fadein = {
		hidden: {opacity: 0, x: 100},
		visible: (ind: number) => ({
			opacity: 1,
			x: 0,
			transition: {
				delay: 0.3 * ind,
			},
		}),
	};
	return (
		<div id="projects">
			<ProjectContainer>
				<ProjectWrapper>
					<PageTitle>Projects</PageTitle>
					<PageSub>These are the projects that i have done</PageSub>
					<ProjectCardContainer>
						{projectCard?.map((item, id) => (
							<motion.li
								layoutId={item.projectId}
								style={{listStyle: "none", cursor: "pointer"}}
								variants={Fadein}
								initial="hidden"
								whileInView="visible"
								viewport={{once: true}}
								custom={id}
								key={id}>
								<Card
									item={item}
									setShowDetails={setShowDetails}
									setCardData={setCardData}
									setLayoutId={setLayoutId}
								/>
							</motion.li>
						))}
					</ProjectCardContainer>
					<PageTitle>On going projects</PageTitle>
					<PageSub>I am corrently working on these projects</PageSub>
					<ProjectCardContainer>
						{workingProjects.length === 0 ? (
							<PageSub style={{fontSize: "30px"}}>
								Not working on any projects!
							</PageSub>
						) : (
							workingProjects?.map((item, id) => (
								<motion.li
									layoutId={item?.projectId}
									style={{listStyle: "none", cursor: "pointer"}}
									variants={Fadein}
									initial="hidden"
									whileInView="visible"
									viewport={{once: true}}
									custom={id}
									key={id}>
									<Card
										item={item}
										setShowDetails={setShowDetails}
										setCardData={setCardData}
										setLayoutId={setLayoutId}
									/>
								</motion.li>
							))
						)}
					</ProjectCardContainer>
					<br />
					<br />
					<br />
				</ProjectWrapper>
			</ProjectContainer>
		</div>
	);
};

export default Project;
