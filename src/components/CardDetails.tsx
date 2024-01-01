import styled from "styled-components";
import { Close, GitHub } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { CardData, SetState } from "../types/lib";
import { motion } from "framer-motion";
import "../App.css";
import { useEffect, useState } from "react";

type CardDetailsType = {
	setShowDetails: SetState<boolean>;
	cardData: CardData;
	layoutId: string;
};

const BOX = styled.div`
	width: 100%;
	height: 100%;
	z-index: 99;
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	@media (max-width:600px) {
		width: 100vw;
		height: 100vh;
	}
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
	color: ${({ theme }) => theme.text_primary};
	border: ${({ theme }) => theme.primary} 1px solid;
	padding: 2px 8px;
	border-radius: 20px;
`;
const CardSubTitle = styled.div`
	color: ${({ theme }) => theme.text_secondary};
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
	border: solid 2px ${({ theme }) => theme.primary};
	border-radius: 12px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: all ease 0.5s;
	&:hover {
		background: ${({ theme }) => theme.bgLight};
	}
`;
const ButtonSection = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	@media (max-width: 600px) {
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
	background: ${({ theme }) => theme.bg};
`;
const LiveApp = styled.a`
	width: 300px;
	height: auto;
	padding: 15px;
	color: white;
	border-radius: 8px;
	text-align: center;
	background: ${({ theme }) => theme.primary};
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
const CardDetails = ({ setShowDetails, cardData, layoutId }: CardDetailsType) => {
	const [scrolling, setScrolling] = useState(false);
	useEffect(() => {
		scrolling
			? (document.body.style.overflow = "hidden")
			: (document.body.style.overflow = "");
	}, [scrolling]);
	return (
		<BOX>
			<motion.div className="CardContainer" layoutId={layoutId}>
				<IconBox onClick={() => setShowDetails(false)}>
					<Close
						sx={{
							width: "40px",
							height: "40px",
							float: "right",
							fill: "#854CE6;",
						}}
					/>
				</IconBox>
				<CardImages src={cardData.projectImg} />
				<CardTech>
					{cardData.tech.map((item, id) => {
						return <Span key={id}>{item}</Span>;
					})}
				</CardTech>
				<Typography variant="h5">{cardData.projectTitle}</Typography>
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
					<ImgWrapper
						onMouseEnter={() => setScrolling(true)}
						onMouseLeave={() => setScrolling(false)}>
						{cardData.images.map((item) => {
							return <MiniImg src={item} />;
						})}
					</ImgWrapper>
				</Info>
				<ButtonSection>
					<ViewCode href={cardData.github}>
						View Code <GitHub sx={{ fill: "#854CE6" }} />
					</ViewCode>
					<LiveApp href={cardData.live}>View Live App</LiveApp>
				</ButtonSection>
			</motion.div>
		</BOX>
	);
};

export default CardDetails;
