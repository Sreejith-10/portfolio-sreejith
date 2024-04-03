import styled from "styled-components";

export const PageTitle = styled.h1`
	font-size: 40px;
	text-align: center;
	font-weight: 600;
	margin-top: 20px;
	color: ${({theme})=>theme.text_primary};
	@media (max-width: 600px) {
		font-size: 32px;
	}
`;

export const PageSub = styled.p`
	font-size: 18px;
	margin: 40px 0px;
	text-align: center;
	max-width: 600px;
	color: ${({theme})=>theme.text_primary};
`;

export const CardImage = styled.img`
		width: 100%;
		height: 180px;
		background-color: rgb(255, 255, 255);
		border-radius: 10px;
		object-fit: fill;
	`;