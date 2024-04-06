import {Close} from "@mui/icons-material";
import styled from "styled-components";
import {SetState} from "../types/lib";
import {useEffect} from "react";

const PopUpContainer = styled.div`
	width: 300px;
	height: auto;
	background: rgb(23, 23, 33);
	border: 0.1px solid rgb(133, 76, 230);
	box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
	border-radius: 16px;
	padding: 18px 16px;
	z-index: 99;
	color: white;
	position: relative;
`;

const Btn = styled.span`
	position: absolute;
	top: 5px;
	right: 5px;
	cursor: pointer;
`;

type PopUpProps = {
	message: string;
	setPopup: SetState<boolean>;
};

const PopUp = ({message, setPopup}: PopUpProps) => {
	useEffect(() => {
		const closePopUp = () => {
			setTimeout(() => {
				setPopup(false);
			}, 5000);
		};

		closePopUp();
	}, [message]);

	return (
		<PopUpContainer>
			<Btn onClick={() => setPopup(false)}>
				<Close />
			</Btn>
			<span>{message}</span>
		</PopUpContainer>
	);
};

export default PopUp;
