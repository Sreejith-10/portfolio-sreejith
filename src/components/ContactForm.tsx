import styled from "styled-components";
import { motion } from "framer-motion";
import "../App.css"
import { FormEvent } from "react";

const FormTitle = styled.h1`
	font-size: 20px;
	color: ${({ theme }) => theme.white};
`;
const FormInput = styled.input`
	width: 100%;
	height: 40px;
	padding: 12px 16px;
	font-size: 18px;
	border: solid 1px ${({ theme }) => theme.primary};
	border-radius: 12px;
	background: inherit;
	color: ${({ theme }) => theme.white};
`;
const FormText = styled.textarea`
	width: 100%;
	height: 80px;
	font-size: 18px;
	color: ${({ theme }) => theme.white};
	border-radius: 12px;
	padding: 12px 16px;
	background: inherit;
	border: solid 1px ${({ theme }) => theme.primary};
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
`;

const ContactForm = () => {
	const onSubmitHandler = (e: FormEvent) => {
		console.log(e);
	}
	return (
		<motion.form onSubmit={onSubmitHandler} className="FormWrapper" initial={{ scale: 0 }} whileInView={{ rotate: 360, scale: 1 }} transition={{ type: "spring", stiffness: 260, damping: 20 }}>
			<FormTitle>Email me</FormTitle>
			<FormInput placeholder="Your email" required type="email" />
			<FormInput placeholder="Your name" required type="text" />
			<FormText placeholder="Subject" />
			<Submit type="submit">Send</Submit>
		</motion.form>
	);
};

export default ContactForm;
