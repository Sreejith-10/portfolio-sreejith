import styled from "styled-components";
import {PageSub, PageTitle} from "../utils/CommonCompnents";
import ContactForm from "./ContactForm";
import {SetState} from "../types/lib";

const SectionContainer = styled.div`
	width: 100%;
	height: 100vh;
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
	@media (max-width: 600px) {
		width: 95%;
	}
`;
const FormContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

type ContactProps = {
	setMessage: SetState<string>;
	setPopup: SetState<boolean>;
};

const Contact = ({setMessage, setPopup}: ContactProps) => {
	return (
		<SectionContainer id="Contact">
			<ContactWrapper>
				<PageTitle>Contact</PageTitle>
				<PageSub>Feel free to reach out</PageSub>
				<FormContainer>
					<ContactForm setMessage={setMessage} setPopup={setPopup} />
				</FormContainer>
			</ContactWrapper>
		</SectionContainer>
	);
};

export default Contact;
