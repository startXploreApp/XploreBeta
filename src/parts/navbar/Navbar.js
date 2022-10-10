
import { Link, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { faDiscord, faInstagram, faTelegram, faTwitter, faFacebookF, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import Button from "../../components/Button";
import { useEffect, useState } from "react";
import { Icon } from "../../components/Icon";

const NavbarWrapper = styled.div`
    padding: 2.5rem 3.5rem;
    width: 100%;
    height: 10rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    background-color: ${props => props.backgroundColor};
`;

const NavbarLogo = styled.img`
    width: 250px;
    height: 100px;
    object-fit: contain;
    &:hover {
        cursor: pointer;
    }
`;

const NavbarCol = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    gap: 1rem;
`;

const NavbarRow = styled.div`
    display: flex;
    align-content: center;
    gap: 1rem;
`;

export const NavbarListItem = styled.li`
    list-style: none;
    transition: all 0.2s ease-in-out;
    color: ${props => props.active ? props.theme.colors.primary : props.lightMode ? "#000" : "#FFF"};

    &:hover {
        cursor: pointer;
        color: #19a544;
    }
`;

export const NavbarList = styled.ul`
    display: flex;
    align-content: center;
    gap: 6rem;
`;


const Navbar = ({ currentPage, setCurrentPage }) => {

    const [lightMode, setLightMode] = useState(false)

    return (
        <NavbarWrapper backgroundColor={"none"}>
            <NavbarLogo
                src={require("../../assets/white.png")} alt="logo_navbar" />

            <NavbarCol>
                <NavbarRow style={{ gap: "1.5rem" }}>
                    <a href={"https://discord.gg/B4jEZbAWbW"} target="_blank" rel="noreferrer">
                        <Icon
                            lightMode={lightMode}
                            icon={faDiscord}
                            style={{ fontSize: "32px" }} />
                    </a>
                    <a href={"https://discord.gg/B4jEZbAWbW"} target="_blank" rel="noreferrer">
                        <Icon
                            lightMode={lightMode}
                            icon={faLinkedinIn}
                            style={{ fontSize: "32px" }} />
                    </a>
                    <a href={"https://twitter.com/app_xplore"} target="_blank" rel="noreferrer">
                        <Icon
                            lightMode={lightMode}
                            icon={faTwitter}
                            style={{ fontSize: "32px" }} />
                    </a>
                    <a href={"https://discord.gg/B4jEZbAWbW"} target="_blank" rel="noreferrer">
                        <Icon
                            lightMode={lightMode}
                            icon={faFacebookF}
                            style={{ fontSize: "32px" }} />
                    </a>
                    <a href={"https://www.instagram.com/xplore.app.project/"} target="_blank" rel="noreferrer">
                        <Icon
                            lightMode={lightMode}
                            icon={faInstagram}
                            style={{ fontSize: "32px" }} />
                    </a>
                    <a href={"https://t.me/XploreApp"} target="_blank" rel="noreferrer">
                        <Icon
                            lightMode={lightMode}
                            icon={faTelegram}
                            style={{ fontSize: "32px" }} />
                    </a>
                </NavbarRow>
            </NavbarCol>
        </NavbarWrapper>
    );

}

export default Navbar;