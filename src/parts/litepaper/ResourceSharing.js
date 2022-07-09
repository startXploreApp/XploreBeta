import styled from "styled-components";
import Column from "../../components/Column";
import Panel from "../../components/Panel";
import Row from "../../components/Row";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../components/Button";

const SharingCard = styled(Column)`
    justify-content: space-between;
    align-items: center;
    padding: 4rem 0.5rem;
    gap: 0.5rem;
    color: ${props => props.isProject ? "white": "black"};
    border-left: ${props => props.borderLeft ? "2px solid #000" : "none"};
    border-right: ${props => props.borderRight ? "2px solid #000" : "none"};
    background: ${props => props.backgroundColor};
`;

const SharingCardTitle = styled.h5`
    text-align: center;
`;

const sharings = [
    {
        title: ["Trésor", "final"],
        subtitle: "10%",
        backgroundColor: "#B9DFC7",
        isProject: false,
        borderRight: false,
        borderLeft: false
    },
    {
        title: ["Récompense", "phase 4"],
        subtitle: "13%",
        backgroundColor: "#96CFAB",
        isProject: false,
        borderRight: false,
        borderLeft: false
    },
    {
        title: ["Récompense", "phase 3"],
        subtitle: "13%",
        backgroundColor: "#73BF8F",
        isProject: false,
        borderRight: false,
        borderLeft: false
    },
    {
        title: ["Récompense", "phase 2"],
        subtitle: "13%",
        backgroundColor: "#50AF73",
        isProject: false,
        borderRight: true,
        borderLeft: false
    },
    {
        title: ["Trésorerie"],
        subtitle: "10%",
        backgroundColor: "#408C5C",
        isProject: true,
        borderRight: false,
        borderLeft: true
    },
    {
        title: ["Marketing"],
        subtitle: "20%",
        backgroundColor: "#306945",
        isProject: true,
        borderRight: false,
        borderLeft: false
    },
    {
        title: ["Team", "X'PLORE"],
        subtitle: "21%",
        backgroundColor: "#20462E",
        isProject: true,
        borderRight: false,
        borderLeft: false
    }
]

const ResourceSharing = () => {
    return (
        <Panel style={{ height: "auto" }} backgroundColor="#F8F9FA">
            <Column style={{width: "100%"}}>
                <h3>Répartition des ressources</h3>
                <Column style={{ width: "100%", gap: "0", padding: "0"}}>
                    <div style={{ width: "100%", display: "grid", gridTemplateColumns: "10% 13% 13% 13% 10% 20% 21%"}}>
                        { sharings.map(element => (
                            <SharingCard
                                    isProject={element.isProject}
                                    backgroundColor={element.backgroundColor}
                                    borderLeft={element.borderLeft}
                                    borderRight={element.borderRight}>
                                <SharingCardTitle>
                                    {element["title"].length === 1 ?
                                        element["title"] :
                                        element["title"].map(title_elt => (
                                            [title_elt, <br/>]
                                        ))
                                    }
                                </SharingCardTitle>
                                <h2>
                                    {element.subtitle}
                                </h2>
                            </SharingCard>
                        ))}
                    </div>
                    <div style={{ color: "white", backgroundColor: "#1F2B3A", width: "100%", display: "grid", gridTemplateColumns: "49% 51%" }}>
                        <Row style={{ borderRight: "2px solid #000", justifyContent: "center"}}>
                            <h5>Redistribution</h5>
                            <h2>49%</h2>
                        </Row>
                        <Row style={{ borderLeft: "2px solid #000", justifyContent: "center"}}>
                            <h5>Projet</h5>
                            <h2>51%</h2>
                        </Row>
                    </div>
                </Column>
                <Row style={{ width: "100%", justifyContent: "flex-end" }}>
                    <Button primary>
                        <p style={{ fontFamily: "Poppins", fontSize: "1rem", fontWeight: "500" }}>
                            Acheter un ticket maintenant
                        </p>
                        <FontAwesomeIcon icon={faArrowRight} size={"xl"} />
                    </Button>
                </Row>
            </Column>
        </Panel>
    );
}

export default ResourceSharing;