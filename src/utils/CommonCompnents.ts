import styled from "styled-components";
import {darkTheme} from "./Theme";

export const PageTitle = styled.h1`
	font-size: 42px;
	text-align: center;
	font-weight: 600;
	margin-top: 20px;
	color: ${darkTheme.text_primary};
`;

export const PageSub = styled.p`
	font-size: 18px;
	margin-top: 20px;
	text-align: center;
	max-width: 600px;
	color: ${darkTheme.text_secondary};
`;

export const CardImage = styled.img`
		width: 100%;
		height: 180px;
		background-color: rgb(255, 255, 255);
		border-radius: 10px;
		object-fit: fill;
	`;