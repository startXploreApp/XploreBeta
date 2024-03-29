
import { Link, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { faDiscord, faInstagram, faTelegram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Button from "../../components/Button";
import { useEffect, useState } from "react";
import { Icon } from "../../components/Icon";

const NavbarWrapper = styled.div`
    position: sticky;
    top: 0;
    padding: 2.5rem 3.5rem;
    width: 100%;
    height: ${props => props.scroll ? "6rem": "10rem"};
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    z-index:10;
    gap: 15rem;
    background-color: ${props => props.backgroundColor};
    transition: all 0.2s ease-out;

    @media (max-width: ${({theme}) => theme.screen.large}) {
        gap: 5rem;
    }

    @media (max-width: ${({theme}) => theme.screen.medium}) {
        padding: 1rem;
        flex-direction: column;
        gap: 1rem;
        height: auto;
        transition: all 0.2s ease-in;

        img {
            display: ${props => props.scroll ? "none" : "visible"};
        }
    }
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

    @media (max-width: ${({theme}) => theme.screen.medium}) {
        flex-direction: row;
    }
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

    @media (max-width: ${({theme}) => theme.screen.large}) {
        gap: 3rem;
    }
`;



const Navbar = ({ currentPage, setCurrentPage }) => {

    const navigate = useNavigate();

    const [scrolling, setScrolling] = useState(false);

    const [lightMode, setLightMode] = useState(true)

    const [navbarLogo, setNavbarLogo] = useState(null);

    const changeNavbarColor = () => {
        if (currentPage !== "/litepaper" && currentPage !== "/team") {
            if (window.scrollY > 100) {
                setLightMode(true);
                setScrolling(true);
                setNavbarLogo(require("../../assets/colored.png"));
            }
            else {
                setLightMode(false);
                setScrolling(false);
                setNavbarLogo(require("../../assets/white.png"));
            }
        } else {
            setLightMode(true);
            setNavbarLogo(require("../../assets/colored.png"));
        }
    }

    useEffect(() => {
        switch (currentPage) {
            case "/":
                setLightMode(false);
                setNavbarLogo(require("../../assets/white.png"));
                break;
            case "/how-to-play":
                setLightMode(false);
                setNavbarLogo(require("../../assets/white.png"));
                break;
            case "/litepaper":
                setLightMode(true);
                setNavbarLogo(require("../../assets/colored.png"));
                break;
            case "/team":
                setLightMode(true);
                setNavbarLogo(require("../../assets/colored.png"));
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

    window.addEventListener('scroll', changeNavbarColor);

    return (
        <NavbarWrapper backgroundColor={lightMode ? "#fff" : "none"} scroll={scrolling}>
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
                <a href={"https://linktr.ee/xplore_app"} target="_blank" rel="noopener noreferrer">
                    <NavbarListItem lightMode={lightMode}>
                        <h6>Réseaux</h6>
                    </NavbarListItem>
                </a>
            </NavbarList>

            {/* <NavbarCol>
                <NavbarRow style={{ gap: "1rem" }}>
                    <a href={"https://discord.gg/B4jEZbAWbW"} target="_blank" rel="noreferrer">
                        <Icon
                            lightMode={lightMode}
                            icon={faDiscord}
                            style={{ fontSize: "28px" }} />
                    </a>
                    <a href={"https://twitter.com/app_xplore"} target="_blank" rel="noreferrer">
                        <Icon
                            lightMode={lightMode}
                            icon={faTwitter}
                            style={{ fontSize: "28px" }} />
                    </a>
                </NavbarRow>
                <NavbarRow style={{ gap: "1rem" }}>
                    <a href={"https://www.instagram.com/xplore.app.project/"} target="_blank" rel="noreferrer">
                        <Icon
                            lightMode={lightMode}
                            icon={faInstagram}
                            style={{ fontSize: "28px" }} />
                    </a>
                    <a href={"https://t.me/XploreApp"} target="_blank" rel="noreferrer">
                        <Icon
                            lightMode={lightMode}
                            icon={faTelegram}
                            style={{ fontSize: "28px" }} />
                    </a>
                </NavbarRow>
            </NavbarCol> */}

            {/* <Button primary style={{ position: "relative" }}>
                <h6>
                    Partir à l'aventure
                </h6>
            </Button> */}
        </NavbarWrapper>
    );

}

export default Navbar;