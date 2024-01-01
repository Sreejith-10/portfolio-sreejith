import styled from "styled-components";
import { darkTheme } from "../utils/Theme";
import { Close, Menu } from "@mui/icons-material";
import { useState } from "react";
import { motion } from "framer-motion"
import "../App.css"

const NavBar = () => {
	const [open, setOpen] = useState<boolean>(false);

	const Nav = styled.div`
		background-color: ${({ theme }) => theme.bg};
		width: 100%;
		height: 8vh;
		position: sticky;
		z-index: 99;
		top: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	`;
	const NavWrapper = styled.div`
		width: 60%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	`;
	const NavIconContainer = styled.div`
		width: auto;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: start;
	`;
	const MobileNav = styled.div`
		display: none;
		position: absolute;
		top: 10px;
		right: 20px;
		@media (max-width: 992px) {
			display: block;
		}
	`;
	const Title = styled.h1`
		color: ${darkTheme.primary};
		@media (max-width: 600px) {
			margin-left: -45px;
		}
	`;
	const NavItems = styled.div`
		width: 100%;
		height: auto;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 50px;
		@media (max-width: 600px) {
			display: none;
		}
	`;
	const Link = styled.a`
		cursor: pointer;
		color: ${({ theme }) => theme.text_primary};
		font-size: 1.3rem;
		transition: ease 0.6s;
		text-decoration: none;
		&:hover {
			color: ${({ theme }) => theme.primary};
		}
	`;
	const GithubLink = styled.button`
		background: ${({ theme }) => theme.bg};
		width: 250px;
		max-width: 50%;
		padding: 10px 20px;
		color: ${({ theme }) => theme.primary};
		border: solid 2px #854ce6;
		border-radius: 50px;
		font-size: 1.2rem;
		font-weight: 500;
		transition: ease 0.6s;
		&:hover {
			background: #854ce6;
			color: white;
		}
		@media (max-width: 992px) {
			display: none;
		}
	`;
	const GithubLinkRes = styled.button`
		background: ${({ theme }) => theme.bg};
		width: 250px;
		max-width: 50%;
		padding: 10px 20px;
		cursor: pointer;
		color: ${({ theme }) => theme.primary};
		border: solid 2px #854ce6;
		border-radius: 50px;
		font-size: 1.2rem;
		font-weight: 500;
		transition: ease 0.6s;
		display: none;
		&:hover {
			background: #854ce6;
			color: white;
		}
		@media (max-width: 992px) {
			display: block;
			z-index: 99;
			margin-bottom: 30px;
		}
	`;
	return (
		<>
			<Nav>
				<NavWrapper>
					<NavIconContainer>
						<Title>Portfolio</Title>
					</NavIconContainer>
					<MobileNav>
						{!open ? (
							<Menu
								sx={{
									width: "45px",
									height: "50px",
									fill: "lightgray",
								}}
								onClick={() => setOpen(true)}
							/>
						) : (
							<Close
								sx={{
									width: "45px",
									height: "50px",
									fill: "lightgray",
								}}
								onClick={() => setOpen(false)}
							/>
						)}
					</MobileNav>
					<NavItems>
						<Link href="#about">About</Link>
						<Link href="#skills">Skills</Link>
						<Link href="#projects">Projects</Link>
						<Link href="#education">Education</Link>
						<Link href="#contact">Contact</Link>
					</NavItems>
					<GithubLink>Github profile</GithubLink>
				</NavWrapper>
				{open && (
					<motion.div variants={{hidden:{opacity:0,y:-100},visible:{opacity:1,y:0}}} initial="hidden" animate={open && "visible"} transition={{delay:.5,duration:.5}} className="NavMobileItems">
						<Link href="#about">About</Link>
						<Link href="#skills">Skills</Link>
						<Link href="#projects">Projects</Link>
						<Link href="#education">Education</Link>
						<Link href="#contact">Contact</Link>
						<GithubLinkRes>Github profile</GithubLinkRes>
					</motion.div>
				)}
			</Nav>
		</>
	);
};

export default NavBar;
