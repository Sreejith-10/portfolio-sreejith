import styled from "styled-components";
import {darkTheme} from "../utils/Theme";
import {links, userInfo} from "../constants/UserData";
import {motion} from "framer-motion";
import "../App.css";
import HeroBg from "./HeroBg";

const HeroContainer = styled.div`
	width: 100%;
	height: 100vh;
	/* background: ${darkTheme.card_light}; */
	display: flex;
	align-items: center;
	justify-content: center;
	clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
	/* xls: {
		max: "1536px";
	}
	,
				xl: {
		max: "1280px";
	}
	,
				lg: {
		max: "1024px";
	}
	,
				md: {
		max: "768px";
	}
	,
				sm: {
		max: "640px";
	} */

	@media (max-width: 1280px) {
		height: 100dvh;
	}

	@media (max-width: 600px) {
		height: 100dvh;
	}
`;
const HeroWrapper = styled.div`
	width: 65%;
	padding: 80px 30px;
	display: flex;
	gap: 20px;

	@media (max-width: 760px) {
		width: 80%;
	}

	@media (max-width: 1024px) {
		width: 100%;
	}

	@media (max-width: 600px) {
		width: 100%;
		align-items: center;
		justify-content: center;
		padding: 20px 20px;
	}
	@media (max-width: 940px) {
		width: 100%;
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
		z-index: 99;
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
	@media (max-width: 600px) {
		text-align: center;
		font-size: 3.2rem;
	}
`;
const HeroImage = styled.img`
	width: 100%;
	height: 100%;
`;
const ResumeButton = styled.a`
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
	text-decoration: none;
	transition: all 0.2s ease-in-out 0s !important;
	&:hover {
		transform: scale(1.05);
	}
	@media (max-width: 600px) {
		margin-top: 35px;
		margin-bottom: 25px;
	}
	@media (max-width: 600px) {
	}
`;

const HeroInfoStart = styled.h4`
	color: white;
	font-weight: 600;
	display: flex;
	text-align: center;
	font-size: 1.5rem;
	gap: 10px;
	margin-top: 2px;
	@media (max-width: 600px) {
		white-space: nowrap;
		font-size: 25px;
	}
`;
const HeroJob = styled.h4`
	color: ${darkTheme.primary};
	font-weight: 700;
	@media (max-width: 600px) {
		font-size: 25px;
	}
`;
const HeroSelf = styled.p`
	color: grey;
	margin-top: 50px;
	font-size: 2rem;
	margin-bottom: 40px;
	@media (max-width: 900px) {
		margin-bottom: 50px;
		font-size: 2rem;
		text-align: start;
	}
	@media (max-width: 600px) {
		margin-bottom: 10px;
		font-size: 20px;
		text-align: center;
	}
`;

const Hero = () => {
	return (
		<>
			<div style={{width: "100%", height: "100dvh", position: "relative"}}>
				<HeroBg />
				<HeroContainer id="About">
					<HeroWrapper>
						<HeroLeft>
							<motion.div
								className="left-hero"
								variants={{
									hidden: {opacity: 0, x: -75},
									visible: {opacity: 1, x: 0},
								}}
								initial="hidden"
								animate="visible"
								transition={{duration: 1, delay: 1}}>
								<Title>Hi,I am {userInfo.name}</Title>
								<HeroInfoStart>
									I am a <HeroJob>{userInfo.role}</HeroJob>
								</HeroInfoStart>
								<HeroSelf>{userInfo.description}</HeroSelf>
								<ResumeButton target="display" href={links.resume}>
									Resume
								</ResumeButton>
							</motion.div>
						</HeroLeft>
						<HeroRight>
							<HeroImage alt="not found" src="/images/mainIconsdark.svg" />
						</HeroRight>
					</HeroWrapper>
				</HeroContainer>
			</div>
		</>
	);
};

export default Hero;
