import styled from "styled-components";
import Panel from "../../components/Panel";
import Column from "../../components/Column";
import Row from "../../components/Row";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { faDiscord, faInstagram, faTelegram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


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
            <Row style={{ width: "100%", height: "100%", justifyContent: "space-between", padding: "2.5rem 3.75rem" }}>
                <Column style={{ justifyContent: "space-between", height: "100%", padding: "0" }}>
                    <img style={{ width: "150px", height: "auto", objectFit: "contain" }} src={ require("../../assets/logo_white.svg").default } />
                    <h2 style={{ color: "white", fontFamily: "Inter", fontWeight: "700", fontSize: "1rem"}}>
                        @Copyright 2022<br/>
                        X'PLORE
                    </h2>
                </Column>
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
                            <FooterListItem
                                active={currentPage === item[0]}
                                onClick={() => {
                                    setCurrentPage(item[0]);
                                    navigate(item[0]);
                                }}>
                                <h6> { item[1] } </h6>
                            </FooterListItem>
                        ))}
                    </FooterList>
                </Column>
                <Column style={{ alignContent: "center", alignItems: "center", gap: "4rem", padding: "0" }}>
                    <FontAwesomeIcon style={{ color: "white" }} icon={faDiscord} size={"xl"} />
                    <FontAwesomeIcon style={{ color: "white" }} icon={faInstagram} size={"xl"} />
                    <FontAwesomeIcon style={{ color: "white" }} icon={faTwitter} size={"xl"} />
                    <FontAwesomeIcon style={{ color: "white" }} icon={faTelegram} size={"xl"} />
                </Column>
            </Row>
        </Panel>
    );
}

const Divider = styled.div`
    width: 100%;
    border-bottom: 2px solid #1F2B3A;
`;


export default Footer;