import styled from "styled-components";
import Panel from "./Panel";
import Column from "./Column";
import Row from "./Row";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { NavbarList, NavbarListItem } from "../parts/navbar/Navbar";
import { faDiscord, faInstagram, faTelegram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

    const handleClickFooter = () => {

    }

    return(
        <Panel style={{ height: "67vh", backgroundColor: "#000" }}>
            <Row style={{ width: "100%", height: "100%", justifyContent: "space-between", padding: "2.5rem 3.75rem" }}>
                <Column style={{ justifyContent: "space-between", height: "100%" }}>
                    <img style={{ width: "150px", height: "auto", objectFit: "contain" }} src={ require("../assets/logo_white.svg").default } />
                    <h2 style={{ color: "white", fontFamily: "Inter", fontWeight: "700", fontSize: "1rem"}}>
                        @Copyright 2022<br/>
                        X'PLORE
                    </h2>
                </Column>
                <Column style={{ alignContent: "center", alignItems: "center"}}>
                    <NavbarList style={{ gap: "2rem", alignContent: "center", alignItems: "center"}}>
                        <>
                        { navbar_tabs.map((item) => (
                            <NavbarListItem
                                style={{ color: "white" }}
                                active={currentPage == item[0] ? true : false}
                                onClick={ (event) => handleClickFooter(item[0]) }>
                                <h6> { item[1] } </h6>
                            </NavbarListItem>
                        ))}
                        <Button primary>
                            <h6>Partir à l'aventure</h6>
                            <FontAwesomeIcon icon={faRocket} size={"xl"} />
                        </Button>
                        </>
                    </NavbarList>
                    <Divider />
                    <NavbarList style={{ gap: "2rem", alignContent: "center", alignItems: "center"}}>
                        { footer_tabs.map((item) => (
                            <NavbarListItem
                                style={{ color: "white" }}
                                active={currentPage == item[0] ? true : false}
                                onClick={ (event) => handleClickFooter(item[0]) }>
                                <h6> { item[1] } </h6>
                            </NavbarListItem>
                        ))}
                    </NavbarList>
                </Column>
                <Column style={{ alignContent: "center", alignItems: "center"}}>
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