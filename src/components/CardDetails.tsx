import styled from "styled-components";
import {Close, GitHub} from "@mui/icons-material";
import {Typography} from "@mui/material";
import {darkTheme} from "../utils/Theme";
import {CardData, SetState} from "../types/lib";

type CardDetailsType = {
	setShowDetails: SetState<boolean>;
	cardData: CardData;
};

const BOX = styled.div`
	width: 100%;
	z-index: 99;
	height: 100%;
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const CardDetailsContainer = styled.div`
	max-width: 800px;
	width: 100%;
	height: 100%;
	border-radius: 16px;
	margin: 50px 12px;
	height: min-content;
	max-height: 80%;
	background-color: rgb(23, 23, 33);
	color: rgb(242, 243, 244);
	padding: 20px;
	display: flex;
	flex-direction: column;
	align-items: start;
	justify-content: center;
	position: absolute;
	gap: 20px;
	z-index: 99;
`;
const CardTech = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
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
const CardSubTitle = styled.div`
	color: ${darkTheme.text_secondary};
	font-size: 20px;
	font-weight: 400;
`;
const Info = styled.div`
	width: 100%;
	height: auto;
	overflow: auto;
`;
const IconBox = styled.div`
	width: 50px;
	height: 50px;
	position: absolute;
	top: 30px;
	right: 30px;
	border: solid 2px ${({theme}) => theme.primary};
	border-radius: 12px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: all ease .5s;
	&:hover{
		background: ${({theme})=>theme.bgLight};
	}
	`;
const ButtonSection = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	@media(max-width:600px){
		gap: 20px;
	}
`;
const ViewCode = styled.a`
	width: 300px;
	height: auto;
	padding: 15px;
	border-radius: 8px;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 30px;
	text-decoration: none;
	color: white;
	background: ${darkTheme.bg};
`;
const LiveApp = styled.a`
	width: 300px;
	height: auto;
	padding: 15px;
	color: white;
	border-radius: 8px;
	text-align: center;
	background: ${darkTheme.primary};
	text-decoration: none;
`;
const UL = styled.ul`
	width: 100%;
	height: auto;
	font-size: 18px;
	font-weight: 300;
`;
const List = styled.li`
	width: 100%;
	list-style: inside;
	color: white;
`;
const ImgWrapper = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 20px;
`;
const MiniImg = styled.img`
	width: 100%;
	padding: 10px;
	height: auto;
`;
const CardImages = styled.img`
	width: 100%;
	height: 280px;
	object-fit: cover;
	object-position: 50% 50%;
`;
const CardDetails = ({setShowDetails, cardData}: CardDetailsType) => {
	return (
		<BOX>
			<CardDetailsContainer>
				<IconBox onClick={() => setShowDetails(false)}>
					<Close sx={{ width: "40px", height: "40px", float: "right", fill:"#854CE6;"}}/>
				</IconBox>
				<CardImages src={cardData.projectImg} />
				<CardTech>
					{cardData.tech.map((item, id) => {
						return <Span key={id}>{item}</Span>;
					})}
				</CardTech>
				<Typography color={darkTheme.text_secondary} variant="h5">
					{cardData.projectTitle}
				</Typography>
				<Info>
					<CardSubTitle>{cardData.description}</CardSubTitle>
					<Typography marginTop={3}>Features</Typography>
					<UL>
						{cardData.features.map((item) => {
							return <List>{item}</List>;
						})}
					</UL>
					<Typography fontSize={20} marginTop={3}>
						Images
					</Typography>
					<ImgWrapper>
						{cardData.images.map((item) => {
							return <MiniImg src={item} />;
						})}
					</ImgWrapper>
				</Info>
				<ButtonSection>
					<ViewCode href={cardData.github}>
						View Code <GitHub sx={{fill: "#854CE6"}} />
					</ViewCode>
					<LiveApp href={cardData.live}>View Live App</LiveApp>
				</ButtonSection>
			</CardDetailsContainer>
		</BOX>
	);
};

export default CardDetails;
