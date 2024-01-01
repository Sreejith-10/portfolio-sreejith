import styled from "styled-components";
import {darkTheme} from "../utils/Theme";
import {Menu} from "@mui/icons-material";
import {useState} from "react";

const NavBar = () => {
	const [open, setOpen] = useState<boolean>(false);

	const Nav = styled.div`
		background-color: ${({theme}) => theme.bg};
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
		@media (max-width: 992px) {
			transform: ${open ? "translateX(0%)" : "translateX(-150%)"};
			transition: ease 1s;
			flex-direction: column;
			position: absolute;
			top: 65px;
			left: 0;
			width: 100%;
			height: auto;
			z-index: 99;
			background: ${({theme}) => theme.bg};
		}
		@media (max-width: 600px) {
			transition: ease 1s;
		}
	`;
	const Link = styled.a`
		cursor: pointer;
		color: ${({theme}) => theme.text_primary};
		font-size: 1.3rem;
		transition: ease 0.6s;
		text-decoration: none;
		&:hover {
			color: ${({theme}) => theme.primary};
		}
	`;
	const GithubLink = styled.button`
		background: ${({theme}) => theme.bg};
		width: 250px;
		max-width: 50%;
		padding: 10px 20px;
		color: ${({theme}) => theme.primary};
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
		background: ${({theme}) => theme.bg};
		width: 250px;
		max-width: 50%;
		padding: 10px 20px;
		cursor: pointer;
		color: ${({theme}) => theme.primary};
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
		<Nav>
			<NavWrapper>
				<NavIconContainer>
					<Title>Portfolio</Title>
				</NavIconContainer>
				<MobileNav>
					<Menu
						sx={{
							width: "45px",
							height: "50px",
							fill: {lg: "white", xs: "black"},
						}}
						onClick={() => setOpen(!open)}
					/>
				</MobileNav>
				<NavItems>
					<Link href="#about">About</Link>
					<Link href="#skills">Skills</Link>
					<Link href="#projects">Projects</Link>
					<Link href="#education">Education</Link>
					<Link href="#contact">Contact</Link>
					<GithubLinkRes>Github profile</GithubLinkRes>
				</NavItems>
				<GithubLink>Github profile</GithubLink>
			</NavWrapper>
		</Nav>
	);
};

export default NavBar;
