import styled from "styled-components";
import { PageSub, PageTitle } from "../utils/CommonCompnents";
import ContactForm from "./ContactForm";

const SectionContainer = styled.div`
		width: 100%;
		height: auto;
		display: flex;
        margin-top: 100px;
		align-items: center;
		justify-content: center;
	`;
const ContactWrapper = styled.div`
		width: 65%;
		height: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
        @media (max-width:600px){
            width: 95%;
        }
	`;
const FormContainer = styled.div`
		width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
	`;

const Contact = () => {

	return (
		<SectionContainer id="contact">
			<ContactWrapper>
				<PageTitle>Contact</PageTitle>
				<PageSub>Feel free to reach out</PageSub>
				<FormContainer>
					<ContactForm />
				</FormContainer>
			</ContactWrapper>
		</SectionContainer>
	);
};

export default Contact;
