import styled from "styled-components";
import {motion} from "framer-motion";
import "../App.css";
import {FormEvent} from "react";
import {SetState} from "../types/lib";

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
	height: 200px;
	resize: none;
	font-size: 18px;
	color: ${({theme}) => theme.white};
	border-radius: 12px;
	padding: 12px 16px;
	background: inherit;
	border: solid 1px ${({theme}) => theme.primary};
	text-align: start;
`;
const Submit = styled.button`
	width: 100%;
	height: 50px;
	border: none;
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
	transition: ease-in 0.4s;
	&:active {
		scale: 0.8;
	}
`;

type FormProps = {
	setMessage: SetState<string>;
	setPopup: SetState<boolean>;
};

const ContactForm = ({setMessage, setPopup}: FormProps) => {
	const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);

		formData.append("access_key", "61a216ff-4b40-48f9-8d75-b487dee97f85");

		const response = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			body: formData,
		});

		const data = await response.json();

		if (data.success) {
			event.currentTarget.reset();
			setMessage("Mail sent successfully");
			setPopup(true);
		} else {
			console.log("Error", data);
			setMessage("Error, try again");
			setPopup(true);
		}
	};
	return (
		<motion.form
			onSubmit={onSubmit}
			className="FormWrapper"
			initial={{scale: 0}}
			viewport={{once: true}}
			whileInView={{rotate: 360, scale: 1}}
			transition={{type: "spring", stiffness: 260, damping: 20}}>
			<FormTitle>Reach me</FormTitle>
			<input
				type="hidden"
				name="access_key"
				value="61a216ff-4b40-48f9-8d75-b487dee97f85"
			/>
			<FormInput placeholder="Your email" type="email" name="email" required />
			<FormInput placeholder="Your name" type="text" name="name" required />
			<FormText placeholder="Subject" name="message" required />
			<Submit type="submit">Send</Submit>
		</motion.form>
	);
};

export default ContactForm;
