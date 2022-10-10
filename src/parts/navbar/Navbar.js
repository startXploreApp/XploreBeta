
import { Link, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { faDiscord, faInstagram, faTelegram, faTwitter } from "@fortawesome/free-brands-svg-icons";
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
    width: 150px;
    height: 49.5px;
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

    const navigate = useNavigate();

    const [lightMode, setLightMode] = useState(true)

    const [navbarLogo, setNavbarLogo] = useState(null);

    useEffect(() => {
        switch (currentPage) {
            case "/":
                setLightMode(false);
                setNavbarLogo(require("../../assets/logo_white.svg").default);
                break;
            case "/how-to-play":
                setLightMode(false);
                setNavbarLogo(require("../../assets/logo_white.svg").default);
                break;
            case "/litepaper":
                setLightMode(true);
                setNavbarLogo(require("../../assets/logo_black.svg").default);
                break;
            case "/team":
                setLightMode(true);
                setNavbarLogo(require("../../assets/logo_black.svg").default);
                break;
            default:
                setLightMode(true);
                setNavbarLogo(null);
                break;
        }
    }, [currentPage])

    const tabs = [
        ["/", "Accueil"],
        ["/how-to-play", "Comment jouer"],
        ["/litepaper", "Litepaper"],
        ["/team", "L'équipe"]
    ]

    return (
        <NavbarWrapper backgroundColor={lightMode ? "#fff" : "none"}>
            {navbarLogo !== null ?
                <NavbarLogo
                    src={navbarLogo} alt="logo_navbar" /> : null
            }

            <NavbarList>
                {tabs.map((item) => (
                    <NavbarListItem
                        lightMode={lightMode}
                        active={currentPage === item[0]}
                        onClick={() => {
                            setCurrentPage(item[0])
                            navigate(item[0])
                        }}>
                        <h6> {item[1]} </h6>
                    </NavbarListItem>
                ))}
            </NavbarList>

            <NavbarCol>
                <NavbarRow style={{ gap: "1rem" }}>
                    <Icon
                        lightMode={lightMode}
                        icon={faDiscord}
                        style={{ fontSize: "28px" }} />
                    <Icon
                        lightMode={lightMode}
                        icon={faTwitter}
                        style={{ fontSize: "28px" }} />
                </NavbarRow>
                <NavbarRow style={{ gap: "1rem" }}>
                    <Icon
                        lightMode={lightMode}
                        icon={faInstagram}
                        style={{ fontSize: "28px" }} />
                    <Icon
                        lightMode={lightMode}
                        icon={faTelegram}
                        style={{ fontSize: "28px" }} />
                </NavbarRow>
            </NavbarCol>

            <Button primary style={{ position: "relative" }}>
                <h6>
                    Partir à l'aventure
                </h6>
            </Button>
        </NavbarWrapper>
    );

}

export default Navbar;