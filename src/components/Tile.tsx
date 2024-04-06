import {useState} from "react";
import styled from "styled-components";
import ToolTip from "./ToolTip";

const SkillItem = styled.div`
	position: relative;
	font-size: 16px;
	font-weight: 400;
	color: rgba(242, 243, 244, 0.5);
	border: 1px solid rgba(242, 243, 244, 0.5);
	border-radius: 12px;
	padding: 16px 16px;
	display: flex;
	-webkit-box-align: center;
	align-items: center;
	-webkit-box-pack: center;
	justify-content: center;
	gap: 8px;
	@media (max-width: 600px) {
		font-size: 16px;
		padding: 8px 12px;
	}
`;
const SkillIcon = styled.img`
	width: 35px;
	height: 35px;
	@media (max-width: 600px) {
		width: 25px;
		height: 25px;
	}
`;

type TileProps = {
	item: {
		skill: string;
		link: string;
	};
};

const Tile = ({item}: TileProps) => {
	const [showToolTip, setShowToolTip] = useState(false);

	return (
		<SkillItem
			onMouseEnter={() => setShowToolTip(true)}
			onMouseLeave={() => setShowToolTip(false)}>
			<SkillIcon alt="not found" src={item.link} />
			<ToolTip text={item.skill} show={showToolTip} />
		</SkillItem>
	);
};

export default Tile;
