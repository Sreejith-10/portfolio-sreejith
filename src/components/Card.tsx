import styled from "styled-components";
import {Typography} from "@mui/material";
import {CardImage} from "../utils/CommonCompnents";
import {CardData, SetState} from "../types/lib";

type ItemType = {
	projectId?: string | undefined;
	projectImg?: string | undefined;
	projectTitle?: string | undefined;
	tech?: string[] | undefined;
	description?: string | undefined;
};

type CardType = {
	item: ItemType;
	setShowDetails: SetState<boolean>;
	setCardData: SetState<CardData>;
	setLayoutId: SetState<string>;
};

const ProjectCard = styled.div`
	width: 300px;
	height: 450px;
	background-color: ${({theme}) => theme.bg};
	cursor: pointer;
	border: solid 1px ${({theme}) => theme.primary};
	border-radius: 20px;
	box-shadow: ${({theme}) => theme.bgLight} 0px 0px 12px 4px;
	overflow: hidden;
	padding: 26px 20px;
	display: flex;
	flex-direction: column;
	gap: 14px;
	transition: all 0.5s ease-in-out 0s;
	&:hover {
		transform: translateY(-10px);
		box-shadow: ${({theme}) => theme.black} 0px 0px 50px 4px;
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
	align-items: center;
	gap: 10px;
	overflow-y: auto;
	&::-webkit-scrollbar {
		display: none;
	}
`;
const Span = styled.span`
	font-size: 18px;
	font-weight: 400;
	white-space: nowrap;
	display: flex;
	text-align: center;
	color: ${({theme}) => theme.primary};
	border: ${({theme}) => theme.primary} 1px solid;
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
	color: ${({theme}) => theme.text_secondary};
	font-weight: 400;
	overflow: hidden;
	margin-top: 8px;
	display: -webkit-box;
	max-width: 100%;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	text-overflow: ellipsis;
`;

const Card = ({item, setShowDetails, setCardData, setLayoutId}: CardType) => {
	const cardClickHandler = (item: any) => {
		setShowDetails(true);
		setCardData(item);
		setLayoutId(item.projectId);
	};
	return (
		<ProjectCard onClick={() => cardClickHandler(item)}>
			<CardImage alt="not found" src={item.projectImg} />
			<CardTech>
				{item?.tech?.map((t, id) => {
					return <Span key={id}>{t}</Span>;
				})}
			</CardTech>
			<CardDescription>
				<Typography variant="h5" color={"white"}>
					{item.projectTitle}
				</Typography>
				<CardSubTitle>{item.description}</CardSubTitle>
			</CardDescription>
		</ProjectCard>
	);
};

export default Card;
