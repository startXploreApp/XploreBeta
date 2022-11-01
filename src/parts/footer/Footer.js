import styled from "styled-components";
import Panel from "../../components/Panel";
import Column from "../../components/Column";
import Row from "../../components/Row";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { faDiscord, faInstagram, faTelegram, faTwitter, faTiktok, faFacebookF } from "@fortawesome/free-brands-svg-icons";
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

const FooterIcon = styled(Icon)`
    font-size: 28px;

    @media (max-width: ${({theme}) => theme.screen.medium}) {
        font-size: 24px;
    }

    @media (max-width: ${({theme}) => theme.screen.small}) {
        font-size: 20px;
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
        <Panel style={{ height: "75vh", backgroundColor: "#000" }}>
            <FooterWrapper style={{ position: "relative" }}>
                <PlaceholderColumn>
                    <FooterLogo src={ require("../../assets/white.png") } />
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
                        <a href={"https://linktr.ee/xplore_app"} target="_blank" rel="noopener noreferrer">
                            <FooterListItem>
                                <h6>Réseaux</h6>
                            </FooterListItem>
                        </a>
                        {/* <Button primary>
                            <h6>Partir à l'aventure</h6>
                            <FontAwesomeIcon icon={faRocket} size={"xl"} />
                        </Button> */}
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
                        <FooterIcon
                            lightMode={false}
                            icon={faDiscord} />
                    </a>
                    <a href={"https://www.instagram.com/xplore.app.project/"} target="_blank" rel="noreferrer">
                        <FooterIcon
                            lightMode={false}
                            icon={faInstagram} />
                    </a>
                    <a href={"https://twitter.com/app_xplore"} target="_blank" rel="noreferrer">
                        <FooterIcon
                            lightMode={false}
                            icon={faTwitter} />
                    </a>
                    <a href={"https://t.me/XploreApp"} target="_blank" rel="noreferrer">
                        <FooterIcon
                            lightMode={false}
                            icon={faTelegram} />
                    </a>
                    <a href={"https://www.facebook.com/Xplore-103664729071310"} target="_blank" rel="noreferrer">
                        <FooterIcon
                            lightMode={false}
                            icon={faFacebookF} />
                    </a>
                    <a href={"https://www.tiktok.com/@xplore_app"} target="_blank" rel="noreferrer">
                        <FooterIcon
                            lightMode={false}
                            icon={faTiktok} />
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