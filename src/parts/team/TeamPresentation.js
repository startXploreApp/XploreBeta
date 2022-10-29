
import Column from "../../components/Column";
import { Icon } from "../../components/Icon";
import Panel from "../../components/Panel";
import Row from "../../components/Row";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faCode, faDiagramProject, faImage, faPaintbrush, faMobile, faProjectDiagram, faTrophy, faCrown, faComment, faChartColumn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";


const IconTitle = ({ icon, text }) => {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "1rem" }}>
            <FontAwesomeIcon icon={icon} style={{ fontSize: "28px", marginRight: "0.75rem" }} />
            <h6>{text}</h6>
        </div>
    );
}



const ProfilRow = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr;
    justify-items: center;

    @media (max-width: ${({theme}) => theme.screen.medium}) {
        grid-template-columns: 1fr;
        grid-gap: 2.5rem;
    }
`;

const Profil = ({ image = require("../../assets/grandma.jpg"), missions, coFounders=false, name, role, social_media, social_media_username, social_media_url, lightMode = true, icon }) => {
    return (
        <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", flexDirection: "row", width: "31.5rem", maxWidth: "31.5rem", gap: "0.5rem"}}>
            <img style={{ width: "12.5rem", height: "12.5rem", objectFit: "cover", borderRadius: "100%" }} src={image} alt="profil" />
            <Column style={{ gap: "0.25rem", height: "100%", padding: "0 1rem", justifyContent: "space-between" }}>
                <h5 style={{ fontSize: "1.75rem" }}>{name}</h5>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginTop: "0.5rem" }}>
                { coFounders ?
                    <IconTitle icon={faTrophy} text="Co-Fondateurs"/> : null
                }
                { role ?
                    <IconTitle
                        icon={
                            icon === "CEO" ? faCrown :
                            icon === "CPO" ? faMobile :
                            icon === "CTO" ? faCode :
                            icon === "CCO" ? faPaintbrush :
                            icon === "Mar" ? faChartColumn :
                            icon === "Com" ? faComment :
                            null}
                        text={role} /> :
                    null
                }
                </div>
                <div style={{ display: "flex", flexDirection: "column", paddingLeft: "0.5rem", alignItems: "flex-start", justifyContent: "center", marginTop: "0.5rem"}}>
                    {
                        missions.map((item, index) => 
                            <p>{item}</p>
                        )
                    }
                </div>
                <a href={social_media_url} target="_blank" rel="noopener noreferrer">
                    <IconTitle icon={social_media} text={social_media_username} />
                </a>
            </Column>
        </div>
    )
}

export const TeamPresentation = () => {
    return (
        <>
            <Column>
                <h2>L'équipe</h2>
            </Column>
            <Panel id="our-team" style={{ height: "min-content", width: "100%", backgroundColor: "#1F2B3A", color: "#FFF" }}>
                <Column style={{ width: "100%" }}>
                    <ProfilRow>
                        <Profil
                            image={require("../../assets/team_alex.jpg")}
                            lightMode={false}
                            icon="CEO"
                            name="Alexandre Siguret"
                            coFounders
                            missions={["Project lead", "Project owner"]}
                            role="Chief Executive Officer"
                            social_media={faLinkedin}
                            social_media_username="Alexandre Siguret"
                            social_media_url="https://www.linkedin.com/in/alexandre-siguret-74b09211a/" />
                        <Profil
                            image={require("../../assets/team_tom.jpg")}
                            lightMode={false}
                            icon="CPO"
                            name="Tom Orvain"
                            coFounders
                            missions={["Product designer", "UI/UX designer"]}
                            role="Chief Operating Officer"
                            social_media={faLinkedin}
                            social_media_username="Tom Orvain"
                            social_media_url="https://www.linkedin.com/in/tom-orvain-176437172/" />
                    </ProfilRow>
                </Column>
            </Panel>
            <Panel style={{ height: "min-content", width: "100%", backgroundColor: "#1F2B3A", color: "#FFF" }}>
                <Column style={{ width: "100%" }}>
                    <ProfilRow>
                        <Profil
                            image={require("../../assets/team_pierre.jpg")}
                            icon="CTO"
                            coFounders
                            name="Pierre Le Dez"
                            missions={["Technical lead", "Develop"]}
                            role="Chief Technical Officer"
                            social_media={faLinkedin}
                            social_media_username="Pierre LE DEZ"
                            social_media_url="https://www.linkedin.com/in/pierre-le-dez-111721158/" />
                        <Profil
                            image={require("../../assets/team_lise.jpg")}
                            coFounders
                            icon="CCO"
                            name="Lise"
                            missions={["3D artist", "2D/3D tatoo artist"]}
                            role="Chief Creative Officer"
                            social_media={faInstagram}
                            social_media_username="@_Globule"
                            social_media_url="https://www.instagram.com/_globule/" />
                    </ProfilRow>
                </Column>
            </Panel>
            <Panel style={{ height: "min-content", width: "100%", backgroundColor: "#1F2B3A", color: "#FFF" }}>
                <Column style={{ width: "100%" }}>
                    <ProfilRow>
                        <Profil
                            image={require("../../assets/team_ines.jpeg")}
                            icon="Mar"
                            name="Ines Zaïdi"
                            missions={["Marketing"]}
                            role="Marketing Manager"
                            social_media={faLinkedin}
                            social_media_username="Ines Zaïdi"
                            social_media_url="https://www.linkedin.com/in/in%C3%A8s-za%C3%AFdi-8a5169185/" />
                        <Profil
                            image={require("../../assets/team_math.jpg")}
                            icon="Com"
                            name="Mathieu Brousset"
                            missions={["Communication", "Social media"]}
                            role="Communication Manager"
                            social_media={faLinkedin}
                            social_media_username="Mathieu Brousset"
                            social_media_url="https://www.linkedin.com/in/mathieu-brousset/" />
                    </ProfilRow>
                </Column>
            </Panel>
            <Panel style={{ height: "min-content", width: "100%", backgroundColor: "#1F2B3A", color: "#FFF" }}>
                <Column style={{ width: "100%" }}>
                    <ProfilRow>
                        <Profil
                            image={require("../../assets/team_romain.jpg")}
                            icon="CTO"
                            lightMode={false}
                            name="Romain Martineau"
                            missions={["Develop"]}
                            role="Fullstack developer"
                            social_media={faLinkedin}
                            social_media_username="Romain Martineau"
                            social_media_url="https://www.linkedin.com/in/romain-martineau-352740a8/" />
                    </ProfilRow>
                </Column>
            </Panel>
        </>
    )
}