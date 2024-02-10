import styled from "styled-components";
import {PageSub, PageTitle} from "../utils/CommonCompnents";
import {motion} from "framer-motion";
import "../App.css";

const EducationContainer = styled.div`
	width: 100%;
	margin-top: 100px;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	@media (max-width: 600px) {
		margin-top: 100px;
	}
`;
const Wrapper = styled.div`
	width: 65%;
	height: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	@media (max-width: 600px) {
		width: 100%;
	}
`;
const CardSection = styled.div`
	width: 100%;
	height: auto;
	margin-top: 70px;
	margin-bottom: 100px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 20px;
	@media (max-width: 600px) {
		gap: 300px;
	}
`;
const EducationCard = styled.div`
	width: 60%;
	height: auto;
	padding: 30px 20px;
	background: ${({theme}) => theme.bg_light};
	border: solid 1px ${({theme}) => theme.primary};
	border-radius: 16px;
	box-shadow: ${({theme}) => theme.bgLight} 0px 4px 24px;
	display: flex;
	flex-direction: column;
	align-items: start;
	gap: 20px;
	@media (max-width: 600px) {
		width: 90%;
	}
`;

const Education = () => {
	return (
		<EducationContainer id="Education">
			<Wrapper>
				<PageTitle>Education</PageTitle>
				<PageSub>Educational qualification</PageSub>
				<motion.div
					variants={{
						hidden: {opacity: 0, x: -100},
						visible: {opacity: 1, x: 0},
					}}
					initial="hidden"
					whileInView={"visible"}
					transition={{duration: 0.5, delay: 0.5}}
					viewport={{once: true}}>
					<CardSection>
						<EducationCard>
							<h1 style={{color: "white"}}>
								Government Polytechnic College Perumbavoor
							</h1>
							<h1 style={{color: "white"}}>
								Diploma in Electronics and Communication
							</h1>
							<h1 style={{color: "white", fontSize: "25px"}}>2020-2023</h1>
							<h1 style={{color: "white", fontSize: "20px"}}>CGPA : 8.03</h1>
							<p style={{color: "white", fontSize: "25px"}}>
								I completed my 3 year diploma in Electronics and communication
								from Government Polytechnic College Perumbavoor.
							</p>
						</EducationCard>
					</CardSection>
				</motion.div>
			</Wrapper>
		</EducationContainer>
	);
};

export default Education;
