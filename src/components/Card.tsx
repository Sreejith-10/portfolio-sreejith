import styled from "styled-components";
import { darkTheme } from "../utils/Theme";
import { Typography } from "@mui/material";
import { CardImage } from "../utils/CommonCompnents";
import { CardData, SetState } from "../types/lib";

type ItemType = {
	projectId: string;
	projectImg: string;
	projectTitle: string;
	tech: string[];
	description: string;
};

type CardType = {
	item: ItemType;
	setShowDetails: SetState<boolean>;
	setCardData: SetState<CardData>
};

const ProjectCard = styled.div`
	width: 300px;
	height: 450px;
	background-color: ${darkTheme.bg};
	cursor: pointer;
	border: solid 1px ${darkTheme.primary};
	border-radius: 10px;
	box-shadow: ${darkTheme.bgLight} 0px 0px 12px 4px;
	overflow: hidden;
	padding: 26px 20px;
	display: flex;
	flex-direction: column;
	gap: 14px;
	transition: all 0.5s ease-in-out 0s;
	&:hover {
		transform: translateY(-10px);
		box-shadow: ${darkTheme.black} 0px 0px 50px 4px;
		filter: brightness(1.1);
	}
	@media (max-width: 600px) {
		width: 350px;
	}
`;
const CardTech = styled.div`
	width: 100%;
	margin: 10px 0px;
	display: flex;
	flex-wrap: wrap;
	align-items: start;
	justify-content: start;
	gap: 10px;
`;
const Span = styled.span`
	font-size: 18px;
	font-weight: 400;
	color: ${darkTheme.primary};
	border: ${darkTheme.primary} 1px solid;
	padding: 2px 8px;
	border-radius: 20px;
`;
const CardDescription = styled.div`
	width: 100%;
	margin-top: 10px;
	display: flex;
	flex-direction: column;
	gap: 0px;
	padding: 0px 2px;
`;
const CardSubTitle = styled.div`
	color: ${darkTheme.text_secondary};
	font-weight: 400;
	overflow: hidden;
	margin-top: 8px;
	display: -webkit-box;
	max-width: 100%;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	text-overflow: ellipsis;
`;

const Card = ({ item, setShowDetails, setCardData }: CardType) => {
	const cardClickHandler = (item: any) => {
		setShowDetails(true);
		setCardData(item);
	};
	return (
		<ProjectCard onClick={() => cardClickHandler(item)}>
			<CardImage src={item.projectImg} />
			<CardTech>
				{item?.tech.map((t, id) => {
					return <Span key={id}>{t}</Span>;
				})}
			</CardTech>
			<CardDescription>
				<Typography color={darkTheme.text_secondary} variant="h5">
					{item.projectTitle}
				</Typography>
				<CardSubTitle>{item.description}</CardSubTitle>
			</CardDescription>
		</ProjectCard>
	);
};

export default Card;
