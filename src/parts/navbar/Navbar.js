import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { faDiscord, faInstagram, faTelegram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Button from "../../components/Button";
import { useEffect, useState } from "react";

const NavbarWrapper = styled.div`
    border: 2px dashed red;
    padding: 2.5rem 3.5rem;
    width: 100%;
    height: 10rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    z-index : 1000;
    position : absolute;
    top:0;
    left:0;
`;

const NavbarLogo = styled.img`
    width: 150px;
    height: 49.5px;
    object-fit: cover;
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

const NavbarListItem = styled.li`
    list-style: none;
    transition: all 0.2s ease-in-out;
    color: ${props => props.active ? props.theme.colors.primary : props.lightMode ? "#000" : "#FFF"};

    &:hover {
        cursor: pointer;
        color: #19a544;
    }
`;

const NavbarList = styled.ul`
    display: flex;
    align-content: center;
    gap: 6rem;
`;

const NavbarIcon = styled(FontAwesomeIcon)`
    transition: color 0.2s ease-in-out;

    &:hover {
        cursor: pointer;
        color: ${props => props.theme.colors.primary};
    }
`;

const Navbar = ({ currentPage, setCurrentPage }) => {

    const navigate = useNavigate();

    const [lightMode, setLightMode] = useState(true)

    useEffect(() => {
        switch (currentPage) {
            case "/":
                setLightMode(true)
                break;
            case "/how-to-play":
                setLightMode(false)
                break;
            case "/litepaper":
                setLightMode(true)
                break;
            case "/team":
                setLightMode(true)
                break;
            default:
                setLightMode(true)
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
        <NavbarWrapper>
            <NavbarLogo
                src={require("../../assets/logo_color.svg").default} />

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
                    <NavbarIcon icon={faDiscord} style={{ fontSize: "28px" }} />
                    <NavbarIcon icon={faTwitter} style={{ fontSize: "28px" }} />
                </NavbarRow>
                <NavbarRow style={{ gap: "1rem" }}>
                    <NavbarIcon icon={faInstagram} style={{ fontSize: "28px" }} />
                    <NavbarIcon icon={faTelegram} style={{ fontSize: "28px" }} />
                </NavbarRow>
            </NavbarCol>

            <Button primary>
                <h6>Partir à l'aventure</h6>
            </Button>
        </NavbarWrapper>
    );

}

export default Navbar;