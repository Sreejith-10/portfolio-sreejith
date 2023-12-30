import styled from "styled-components";
import { PageSub, PageTitle } from "../utils/CommonCompnents";
import Card from "./Card";
import { projectCard } from "../constants/UserData";
import { useState } from "react";
import CardDetails from "./CardDetails";

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
	width: auto;
	height: 100%;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	margin: 100px 0px;
	gap: 20px;
	@media (max-width: 600px) {
		flex-direction: column;
		margin-top: 50px;
		gap: 30px;
	}
`;

const Project = () => {
	const [showDetails, setShowDetails] = useState<boolean>(false);
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

	return (
		<div id="projects">

			<ProjectContainer >
				{showDetails && (
					<CardDetails setShowDetails={setShowDetails} cardData={cardData} />
				)}
				<ProjectWrapper>
					<PageTitle>Projects</PageTitle>
					<PageSub>These are the projects that i have done</PageSub>
					<ProjectCardContainer>
						{projectCard?.map((item, id) => {
							return (
								<Card
									item={item}
									setShowDetails={setShowDetails}
									setCardData={setCardData}
									key={id}
								/>
							);
						})}
					</ProjectCardContainer>
				</ProjectWrapper>
			</ProjectContainer>
		</div>
	);
};

export default Project;
