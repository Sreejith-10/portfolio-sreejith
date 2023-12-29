import styled from "styled-components";

const ContactForm = () => {
	const FormWrapper = styled.div`
		background: ${({theme}) => theme.bg};
		width: 60%;
		height: auto;
		padding: 30px;
        margin-top: 50px;
		margin-bottom: 100px;
		display: flex;
		flex-direction: column;
		align-items: start;
		gap: 20px;
		border-radius: 18px;
		box-shadow: #175ce626 0px 4px 24px;
         @media(max-width:600px){
            width: 95%;
        }
	`;
	const FormTitle = styled.h1`
		font-size: 20px;
		color: ${({theme}) => theme.white};
	`;
	const FormInput = styled.input`
		width: 100%;
		height: 40px;
		padding: 12px 16px;
		font-size: 18px;
		border: solid 1px ${({theme}) => theme.primary};
		border-radius: 12px;
		background: inherit;
		color: ${({theme}) => theme.white};
	`;
	const FormText = styled.textarea`
		width: 100%;
		height: 80px;
		font-size: 18px;
		color: ${({theme}) => theme.white};
		border-radius: 12px;
		padding: 12px 16px;
		background: inherit;
		border: solid 1px ${({theme}) => theme.primary};
		text-align: start;
	`;
	const Submit = styled.div`
		width: 100%;
		height: 50px;
        border-radius: 12px;
        display: grid;
        place-content: center;
        color: white;
        font-size: 20px;
        font-weight: 500;
		background: linear-gradient(
			225deg,
			rgb(132, 0, 255) 0%,
			rgb(230, 0, 255) 100%
		);
		box-shadow: rgb(31, 38, 52) 20px 20px 60px, rgb(31, 38, 52) -20px -20px 60px;
	`;
	return (
		<FormWrapper>
			<FormTitle>Email me</FormTitle>
			<FormInput placeholder="Your email" />
			<FormInput placeholder="Your name" />
			<FormText placeholder="Subject" />
			<Submit>Send</Submit>
		</FormWrapper>
	);
};

export default ContactForm;
