import styled from "styled-components";
import Panel from "../../components/Panel";
import Column from "../../components/Column";
import Row from '../../components/Row';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceGrinBeam } from "@fortawesome/free-regular-svg-icons";

const missions = [
    {
        "logo": faFaceGrinBeam,
        "title": "Découverte",
        "content": "Explorez des villes et des lieux dont ne vous soupçonniez pas l’existence et partez à l’aventure."
    },
    {
        "logo": faFaceGrinBeam,
        "title": "Challenge",
        "content": "Résolvez des enigmes plus ou moins complexes et trouvez les QRCodes afin de remporter des récompenses uniques."
    },
    {
        "logo": faFaceGrinBeam,
        "title": "Éducation",
        "content": "Découvrez l'univers de la blockchain et ses utilisations possibles à travers un jeu innovant."
    },
    {
        "logo": faFaceGrinBeam,
        "title": "Rencontres",
        "content": "Résoudre des énigmes vous demandera parfois de rentrer en contact avec d'autres joueurs dans le but de poursuivre l'aventure."
    },
    {
        "logo": faFaceGrinBeam,
        "title": "Action",
        "content": "X'Plore vous motive à sortir de chez vous pour visiter votre pays."
    },
    {
        "logo": faFaceGrinBeam,
        "title": "Divertissement",
        "content": "Une grande diversité d'énigmes se présente à vous. Résolvez les seul, en équipe, avec vos amis ou votre famille pour partager cette aventure unique s'offrant à vous"
    }
]

const MissionTitle = styled.p`
    color: #1FCE55;
    font-family: "Praise";
    font-weight: normal;
    font-style: normal;
    font-size: 2.25rem;
    line-height: 43px;
    position: relative;

    &::after {
        content: "${props => props.children}";
        position: absolute;
        font-size: 4rem;
        opacity: 0.2;
        top: 40%;
        left: -6rem;
    }
`;

const MissionsGrid = styled.div`
    width: 100%;
    display: grid;
    gap: 4rem 12.125rem;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);

    @media (max-width: ${({theme}) => theme.screen.small}) {
        grid-template-columns: 1fr;
    }
`;

const Missions = () => {
    return (
        <Panel backgroundColor="#1F2B3A" style={{ height: "auto" }}>
            <Column style={{ height: "100%", width: "100%", gap: "24px" }}>
                <h3 style={{ fontSize: "1.75rem", color: "white" }}>
                    Nos missions
                </h3>
                <MissionsGrid>
                    { missions.map((element, index) => (
                        <Column style={{ padding: "0", gap: "1.25rem"}}>
                            <Row style={{ gap: "1rem"}}>
                                <FontAwesomeIcon icon={element.logo} style={{ color: "white", fontSize: "2.875rem"}} />
                                <MissionTitle>
                                    { element.title }
                                </MissionTitle>
                            </Row>
                            <p style={{ maxWidth: "90%", color: "white", fontFamily: "Inter", fontStyle: "normal", fontWeight: "400", fontSize: "1rem", lineHeight: "19px" }}>
                                { element.content }
                            </p>
                        </Column>
                    ))}
                </MissionsGrid>
            </Column>
        </Panel>
    );
}

export default Missions;