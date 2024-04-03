import styled from "styled-components";
import {darkTheme} from "../utils/Theme";
import {Close, Menu} from "@mui/icons-material";
import {useEffect, useState} from "react";
import {motion} from "framer-motion";
import "../App.css";
import {links} from "../constants/UserData";

const Nav = styled.div`
	background-color: transparent;

	width: 100%;
	height: 8vh;
	position: fixed;
	z-index: 99;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: ease 0.4s;

	&.top {
		background-color: ${({theme}) => theme.bg};
	}
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
const Title = styled.a`
	font-size: 2rem;
	font-weight: bold;
	text-decoration: none;
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
	@media (max-width: 992px) {
		display: none;
	}
`;

const GithubLink = styled.a`
	/* background: ${({theme}) => theme.bg}; */
	width: 250px;
	max-width: 50%;
	padding: 10px 20px;
	color: ${({theme}) => theme.text_primary};
	border: solid 2px #854ce6;
	border-radius: 10px;
	font-size: 1.2rem;
	font-weight: 500;
	z-index: 50;
	text-align: center;
	text-decoration: none;
	position: relative;
	isolation: isolate;
	&::after {
		content: "";
		position: absolute;
		z-index: -1;
		/* border-radius: 50px; */
		background: ${({theme}) => theme.primary};
		inset: 0;
		scale: 0 1;
		transform-origin: right;
		transition: scale 450ms;
	}
	&:hover::after,
	&:focus-visible::after {
		scale: 1 1;
		transform-origin: left;
	}
	@media (max-width: 992px) {
		display: none;
	}
	@media (max-width: 1366px) {
		display: none;
	}
`;
const GithubLinkRes = styled.a`
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
	text-align: center;
	text-decoration: none;
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

const parent = {
	hidden: {
		opacity: 0,
		y: -100,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			delayChildren: 0.5,
			staggerChildren: 0.5,
		},
	},
};
const child = {
	hidden: {
		x: 100,
		opacity: 0,
	},
	visible: {
		x: 0,
		opacity: 1,
	},
};

const NavBar = () => {
	const [open, setOpen] = useState<boolean>(false);
	const [active, setActive] = useState<string>("About");
	const pageLinks = ["About", "Skills", "Projects", "Education", "Contact"];

	const linkHandler = (id: string) => {
		setActive(id);
		setOpen(false);
		location.hash = id;
	};

	const [top, setTop] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setTop(window.scrollY > 50);
		};

		document.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, [top]);

	return (
		<>
			<Nav id="nav-bar" className={`${top ? "top" : ""}`}>
				<NavWrapper>
					<NavIconContainer>
						<Title href="#About">Portfolio</Title>
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
						{pageLinks.map((item) => (
							<button
								key={item}
								className={active.replace("#", "") === item ? "active" : "link"}
								onClick={() => linkHandler(item)}>
								{item}
							</button>
						))}
					</NavItems>
					<GithubLink target="display" href={links.github}>
						Github profile
					</GithubLink>
				</NavWrapper>
				{open && (
					<motion.ul
						variants={parent}
						initial="hidden"
						animate={open && "visible"}
						transition={{delay: 0.5, duration: 0.5}}
						className="NavMobileItems">
						{pageLinks.map((item) => (
							<motion.li
								key={item}
								style={{listStyle: "none"}}
								variants={child}>
								<button
									className={
										active.replace("#", "") === item ? "active" : "link"
									}
									onClick={() => linkHandler(item)}>
									{item}
								</button>
							</motion.li>
						))}
						<GithubLinkRes target="display" href={links.github}>
							Github profile
						</GithubLinkRes>
					</motion.ul>
				)}
			</Nav>
		</>
	);
};

export default NavBar;
