import styled from "styled-components";
import Panel from "../../components/Panel";
import Column from "../../components/Column";
import Row from "../../components/Row";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { faDiscord, faInstagram, faTelegram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from "../../components/Icon";


export const FooterListItem = styled.li`
    list-style: none;
    transition: all 0.2s ease-in-out;
    color: ${props => props.active ? props.theme.colors.primary : "#FFF"};

    &:hover {
        cursor: pointer;
        color: #19a544;
    }
`;

export const FooterList = styled.ul`
    display: flex;
    align-content: center;
    gap: 6rem;
`;

const FooterWrapper = styled(Row)`
    width: 100%;
    height: 100%;
    justify-content: space-between;
    padding: 2.5rem 3.75rem;

    @media (max-width: ${({theme}) => theme.screen.large}) {
        flex-direction: column;
        justify-content: center;
        align-content: center;
        align-items: center;
    }
`;

const FooterLogo = styled.img`
    width: 150px;
    height: auto;
    object-fit: contain;

    @media (max-width: ${({theme}) => theme.screen.large}) {
        position: absolute;
        top: 5%;
        left: 2.5%;
        width: 100px;
    }

    @media (max-width: ${({theme}) => theme.screen.medium}) {
        display: none;
    }
`;

const CopyrightInfo = styled.h2`
    color: white;
    font-family: "Inter";
    font-weight: 700;
    font-size: 1rem;

    @media (max-width: ${({theme}) => theme.screen.large}) {
        position: absolute;

        bottom: 5%;
        left: 2.5%;
    }
`;

const LogoColumn = styled(Column)`
    align-content: center;
    align-items: center;
    gap: 4rem;
    padding: 0;

    @media (max-width: ${({theme}) => theme.screen.large}) {
        flex-direction: row;
    }
`;

const PlaceholderColumn = styled(Column)`
    justify-content: space-between;
    height: 100%;
    padding: 0;

    @media (max-width: ${({theme}) => theme.screen.large}) {
        height: auto;
    }
`;

const Footer = ({ currentPage, setCurrentPage }) => {
    
    const navigate = useNavigate();
    
    const navbar_tabs = [
        ["/", "Accueil"],
        ["/how-to-play", "Comment jouer"],
        ["/litepaper", "Litepaper"],
        ["/team", "L'équipe"]
    ]

    const footer_tabs = [
        ["", "FAQ"],
        ["", "Nous contacter"],
        ["", "Disclaimer"],
        ["", "Mentions légales"]
    ]

    return(
        <Panel style={{ height: "67vh", backgroundColor: "#000" }}>
            <FooterWrapper style={{ position: "relative" }}>
                <PlaceholderColumn>
                    <FooterLogo src={ require("../../assets/white.png") } />
                    <CopyrightInfo style={{ color: "white", fontFamily: "Inter", fontWeight: "700", fontSize: "1rem"}}>
                        @Copyright 2022<br/>
                        X'PLORE
                    </CopyrightInfo>
                </PlaceholderColumn>
                <Column style={{ alignContent: "center", alignItems: "center"}}>
                    <FooterList style={{ gap: "2rem", alignContent: "center", alignItems: "center"}}>
                        <>
                        { navbar_tabs.map((item) => (
                            <FooterListItem
                                active={currentPage === item[0]}
                                onClick={() => {
                                    setCurrentPage(item[0]);
                                    navigate(item[0]);
                                }}>
                                <h6> { item[1] } </h6>
                            </FooterListItem>
                        ))}
                        <Button primary>
                            <h6>Partir à l'aventure</h6>
                            <FontAwesomeIcon icon={faRocket} size={"xl"} />
                        </Button>
                        </>
                    </FooterList>
                    <Divider />
                    <FooterList style={{ gap: "2rem", alignContent: "center", alignItems: "center"}}>
                        { footer_tabs.map((item) => (
                            <FooterListItem>
                                <h6> { item[1] } </h6>
                            </FooterListItem>
                        ))}
                    </FooterList>
                </Column>
                <LogoColumn>
                    <a href={"https://discord.gg/B4jEZbAWbW"} target="_blank" rel="noreferrer">
                        <Icon
                            lightMode={false}
                            icon={faDiscord}
                            style={{ fontSize: "28px" }} />
                    </a>
                    <a href={"https://www.instagram.com/xplore.app.project/"} target="_blank" rel="noreferrer">
                        <Icon
                            lightMode={false}
                            icon={faInstagram}
                            style={{ fontSize: "28px" }} />
                    </a>
                    <a href={"https://twitter.com/app_xplore"} target="_blank" rel="noreferrer">
                        <Icon
                            lightMode={false}
                            icon={faTwitter}
                            style={{ fontSize: "28px" }} />
                    </a>
                    <a href={"https://t.me/XploreApp"} target="_blank" rel="noreferrer">
                        <Icon
                            lightMode={false}
                            icon={faTelegram}
                            style={{ fontSize: "28px" }} />
                    </a>
                </LogoColumn>
            </FooterWrapper>
        </Panel>
    );
}

const Divider = styled.div`
    width: 100%;
    border-bottom: 2px solid #1F2B3A;
`;


export default Footer;