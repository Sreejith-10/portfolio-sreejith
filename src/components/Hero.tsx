import {Typography} from "@mui/material";
import styled from "styled-components";
import {darkTheme} from "../utils/Theme";
import { userInfo } from "../constants/UserData";

const HeroContainer = styled.div`
		width: 100%;
		height: auto;
		background: ${darkTheme.card_light};
		display: flex;
		align-items: center;
		justify-content: center;
		clip-path: polygon(0 0,100% 0, 100% 100%,70% 95%,0 100%);
		`;
const HeroWrapper = styled.div`
		width: 65%;
		padding: 80px 30px;
		display: flex;
		gap: 20px;
		@media (max-width: 600px) {
			width: 100%;
			align-items: center;
			justify-content: center;
			padding: 20px 20px;
		}
	`;
const HeroLeft = styled.div`
		width: 50%;
		height: 100%;
		@media (max-width: 600px) {
			width: 100%;
			position: relative;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
	`;
const HeroRight = styled.div`
		width: 50%;
		height: 100%;
		@media (max-width: 600px) {
			width: 100%;
			position: absolute;
			opacity: 20%;
		}
	`;
const Title = styled.h1`
		color: white;
		font-size: 3.5rem;
		@media (max-width:600px) {
			text-align: center;
			font-size: 3.2rem;
		}
	`;
const HeroImage = styled.img`
		width: 100%;
		height: 100%;
	`;
const ResumeButton = styled.button`
		width: 50%;
		background: linear-gradient(
			225deg,
			rgb(132, 0, 255) 0%,
			rgb(230, 0, 255) 100%
		);
		box-shadow: rgb(31, 38, 52) 20px 20px 60px, rgb(31, 38, 52) -20px -20px 60px;
		margin-top: 25px;
		padding: 15px 50px;
		border: none;
		border-radius: 30px;
		font-size: 1.5rem;
		color: white;
		transition: all 0.2s ease-in-out 0s !important;
		&:hover {
			transform: scale(1.05);
		}
		@media (max-width:600px) {
		margin-top: 35px;
		margin-bottom:25px;
		}
	`;

const Hero = () => {
	
	return (
		<HeroContainer id="about">
			<HeroWrapper>
				<HeroLeft>
					<Title>Hi,I am {userInfo.name}</Title>
					<Typography
						variant="h4"
						sx={{color: "white",fontSize:{xs:25}}}
						fontWeight={600}
						display={"flex"}
						gap={2}
						marginTop={2} textAlign={"center"}>
						I am a{" "}
						<Typography variant="h4" color={darkTheme.primary} fontWeight={700} sx={{fontSize: { xs: 25 } }}>
							{userInfo.role}
						</Typography>
					</Typography>
					<Typography variant="h4" color={"grey"} mt={5} sx={{fontSize:{xs:"20px",lg:"1.8rem"},textAlign:{xs:"center",lg:"start"}}}>
						{userInfo.description}
					</Typography>
					<ResumeButton>Resume</ResumeButton>
				</HeroLeft>
				<HeroRight>
					<HeroImage src="/images/mainIconsdark.svg" />
				</HeroRight>
			</HeroWrapper>
		</HeroContainer>
	);
};

export default Hero;
