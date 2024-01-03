import styled from "styled-components";
import { PageTitle } from "../utils/CommonCompnents";
import {
    CopyrightOutlined,
    GitHub,
    Instagram,
    LinkedIn,
    Telegram,
    Twitter,
} from "@mui/icons-material";
import { links } from "../constants/UserData";

const FooterContainer = styled.div`
	width: 100%;
	height: auto;
	margin-top: 70px;
	margin-bottom: 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
const FooterWrapper = styled.div`
	width: 65%;
	height: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 30px;
	@media (max-width: 600px) {
		width: 100%;
	}
`;
const FooterTitle = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const FooterNav = styled.div`
	width: 60%;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 20px;
`;
const FooterNavItems = styled.a`
	text-decoration: none;
	color: white;
	font-size: 20px;
	transition: all ease 0.5s;
	cursor: pointer;
	&:hover {
		color: ${({ theme }) => theme.primary};
	}
	@media (max-width: 600px) {
		font-size: 18px;
	}
`;
const FooterIcons = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 20px;
`;
const FooterCopyRight = styled.div`
	width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 50px;
    font-size: 1.5rem;
    color: lightgray;
    @media (max-width: 600px) {
		font-size: 1rem;
        margin-bottom: 20px;
	}
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterTitle>
                    <PageTitle>Sreejith T S</PageTitle>
                </FooterTitle>
                <FooterNav>
                    <FooterNavItems href="#about">About</FooterNavItems>
                    <FooterNavItems href="#skills">Skills</FooterNavItems>
                    <FooterNavItems href="#project">Project</FooterNavItems>
                    <FooterNavItems href="#education">Education</FooterNavItems>
                    <FooterNavItems href="#contact">Contact</FooterNavItems>
                </FooterNav>
                <FooterIcons>
                    <a target="display" href={links.github}>
                        <GitHub
                            sx={{
                                width: { lg: "45px", xs: "35px" },
                                height: { lg: "45px", xs: "35px" },
                                fill: "white",
                                ":hover": { fill: "#854CE6" },
                                transition: "all ease 1s",
                            }}
                        />
                    </a>
                    <a target="display" href={links.linkdin}>
                        <LinkedIn
                            sx={{
                                width: { lg: "45px", xs: "35px" },
                                height: { lg: "45px", xs: "35px" },
                                fill: "white",

                                ":hover": { fill: "#0a66c2" },
                                transition: "all ease 1s",
                            }}
                        />
                    </a>
                    <a target="display" href={links.instagram}>
                        <Instagram
                            sx={{
                                width: { lg: "45px", xs: "35px" },
                                height: { lg: "45px", xs: "35px" },
                                fill: "white",

                                ":hover": { fill: "#d62976" },
                                transition: "all ease 1s",
                            }}
                        />
                    </a>
                    <a target="display" href={links.twitter}>
                        <Twitter
                            sx={{
                                width: { lg: "45px", xs: "35px" },
                                height: { lg: "45px", xs: "35px" },
                                fill: "white",

                                ":hover": { fill: "#1da1f2" },
                                transition: "all ease 1s",
                            }}
                        />
                    </a>
                    <a target="display" href={links.telegram}>
                        <Telegram
                            sx={{
                                width: { lg: "45px", xs: "35px" },
                                height: { lg: "45px", xs: "35px" },
                                fill: "white",
                                ":hover": { fill: "#0088cc" },
                                transition: "all ease 1s",
                            }}
                        />
                    </a>
                </FooterIcons>
                <FooterCopyRight>
                    <CopyrightOutlined /> 2023 Sreejith. All rights reserved.
                </FooterCopyRight>
            </FooterWrapper>
        </FooterContainer>
    );
};

export default Footer;
