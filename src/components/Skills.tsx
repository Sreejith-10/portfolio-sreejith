import styled from "styled-components";
import {PageSub, PageTitle} from "../utils/CommonCompnents";
import {skills} from "../constants/UserData";

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
const SkillBox = styled.div`
		width: 60%;
		height: auto;
		border: rgba(242, 243, 244, 0.5) solid 1px;
		border-radius: 20px;
		box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
		padding: 20px;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 20px;
		@media (max-width: 600px) {
			width: 95%;
		}
	`;
const SkillItem = styled.div`
		width: fit-content;
		border: 0.5px solid white;
		border-radius: 14px;
		padding: 10px 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 20px;
		font-size: 1.2rem;
		color: gray;
		@media (max-width: 600px) {
			font-size: 16px;
			padding: 6px 12px;
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

const Skills = () => {
	
	return (
		<SkillContianer id="skills">
			<SkillWrapper>
				<PageTitle>Skills</PageTitle>
				<PageSub>
					Here are some of my skills that I have been working on
				</PageSub>
				<SkillBox>
					{skills.map((item, idx) => {
						return (
							<SkillItem key={idx}>
								<SkillIcon src={item.link} />
								{item.skill}
							</SkillItem>
						);
					})}
				</SkillBox>
			</SkillWrapper>
		</SkillContianer>
	);
};

export default Skills;
