import styled from "styled-components";
import { PageTitle } from "../utils/CommonCompnents";
import {
    GitHub,
    Instagram,
    LinkedIn,
    Telegram,
    Twitter,
} from "@mui/icons-material";

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
		font-size: 15px;
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
                    <a href="https://github.com/Sreejith-10">
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
                    <a href="http://www.linkdin.com/in/sreejith-t-s63858024a">
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
                    <a href="https://www.instagram.com/unknown_us.e.r?igsh=OGQ5Dc@Ok@Za==">
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
                    <a href="https://twitter.com/sreejith_101?t=iqPeUmq4m4Wi4Lk8Y6cjmA&s=09">
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
                    <a href="https://t.me/killua1_0">
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
                <FooterCopyRight></FooterCopyRight>
            </FooterWrapper>
        </FooterContainer>
    );
};

export default Footer;
