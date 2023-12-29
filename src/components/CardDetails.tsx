import styled from "styled-components";
import { CardImage } from "../utils/CommonCompnents";
import { Close, GitHub } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { darkTheme } from "../utils/Theme";
import { SetState } from "../types/lib";

type CardDetailsType = {
	setShowDetails: SetState<boolean>;
};

const CardDetails = ({ setShowDetails }: CardDetailsType) => {
	const BOX = styled.div`
		width: 100%;
		z-index: 99;
		height: 100%;
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
	`
	const CardDetailsContainer = styled.div`
		max-width: 800px;
		width: 100%;
		height: 100%;
		border-radius: 16px;
		margin: 50px 12px;
		height: min-content;
		max-height: 70%;
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
		font-weight: 400;
	`;
	const Info = styled.div`
		width: 100%;
		height: auto;
		overflow: auto;
	`;
	const IconBox = styled.div`
		width: 100%;
	`;
	const ButtonSection = styled.div`
		width: 100%;
		height: auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
	`;
	const ViewCode = styled.div`
		width: 300px;
		height: auto;
		padding: 15px;
		border-radius: 8px;
        display: flex;
		align-items: center;
		justify-content: center;
		gap: 30px;
		background: ${darkTheme.bg};
	`;
	const LiveApp = styled.div`
		width: 300px;
		height: auto;
		padding: 15px;
		border-radius: 8px;
        text-align: center;
		background: ${darkTheme.primary};
	`;
	return (
		<BOX>
			<CardDetailsContainer>
				<IconBox onClick={() => setShowDetails(false)}>
					<Close sx={{ width: "50px", height: "50px", float: "right" }} />
				</IconBox>
				<CardImage />
				<CardTech>
					<Span>React</Span>
				</CardTech>
				<Typography color={darkTheme.text_secondary} variant="h5">
					E-Commerce website
				</Typography>
				<Info>
					<CardSubTitle>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ullam
						iure, totam assumenda voluptates nihil blanditiis velit impedit
						debitis ducimus earum explicabo voluptas inventore. Eveniet nihil enim
						doloribus blanditiis excepturi sapiente eligendi consequuntur
						incidunt. Sit numquam aliquid reprehenderit minus eveniet accusamus,
						veniam vero corporis, illum maxime, vitae et voluptatibus ratione
						tempore atque ipsam provident ea nisi error! Tempora consequuntur
						consequatur a quibusdam enim consectetur laudantium excepturi quaerat
						culpa facilis odit corrupti nemo exercitationem quo dolore illum
						asperiores ipsa eum natus vero, sed tenetur? Nobis iure consequuntur
						inventore qui fugit possimus tempore eaque quasi numquam? Quas libero
						iusto molestias voluptatem, eaque alias, odio eum nam unde
						reprehenderit, consectetur illo accusantium iure veritatis fugiat
						sequi. Quos eligendi exercitationem vel ullam! Illo totam quas ipsam
						molestiae quam, at a, quis recusandae iste consequatur corrupti
						aliquam hic sapiente libero accusamus eaque! Nesciunt molestias
						corporis a ad cumque aspernatur quod optio eos consequuntur tempora
						sed, laboriosam corrupti, fugit voluptatum. Sit repudiandae impedit
						distinctio nisi doloribus vel, a autem illo quis incidunt soluta
						quisquam enim commodi deleniti et cupiditate temporibus sequi
						voluptas, accusamus exercitationem, eveniet repellat ut esse. Error
						tempore itaque quaerat eligendi nam cupiditate earum aperiam ducimus
						blanditiis doloremque, qui explicabo asperiores eveniet quasi facilis!
					</CardSubTitle>
				</Info>
				<ButtonSection>
					<ViewCode>View Code <GitHub sx={{ fill: "#854CE6" }} /></ViewCode>
					<LiveApp>View Live App</LiveApp>
				</ButtonSection>
			</CardDetailsContainer>
		</BOX>
	);
};

export default CardDetails;
