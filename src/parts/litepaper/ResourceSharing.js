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
    background: ${props => props.backgroundColor};
`;

const SharingCardTitle = styled.h5`
    text-align: center;
`;

const ResourceSharing = () => {
    return (
        <Panel style={{ height: "auto" }} backgroundColor="#F8F9FA">
            <Column style={{width: "100%"}}>
                <h3>Répartition des ressources</h3>
                <Column style={{ width: "100%", gap: "0", padding: "0"}}>
                    <div style={{ width: "100%", display: "grid", gridTemplateColumns: "10% 13% 13% 13% 10% 20% 21%"}}>
                        <SharingCard backgroundColor="#B9DFC7">
                            <SharingCardTitle>
                                Trésor final
                            </SharingCardTitle>
                            <h2>10%</h2>
                        </SharingCard>
                        
                        <SharingCard backgroundColor="#96CFAB">
                            <SharingCardTitle>Récompense <br/>phase 4</SharingCardTitle>
                            <h2>13%</h2>
                        </SharingCard>
                        
                        <SharingCard backgroundColor="#73BF8F">
                            <SharingCardTitle>Récompense <br/>phase 3</SharingCardTitle>
                            <h2>13%</h2>
                        </SharingCard>
                        
                        <SharingCard style={{ borderRight: "2px solid #000" }} backgroundColor="#50AF73">
                            <SharingCardTitle>Récompense <br/>phase 2</SharingCardTitle>
                            <h2>13%</h2>
                        </SharingCard>
                        
                        <SharingCard style={{ borderLeft: "2px solid #000" }} isProject backgroundColor="#408C5C">
                            <SharingCardTitle>Trésorerie</SharingCardTitle>
                            <h2>10%</h2>
                        </SharingCard>
                        
                        <SharingCard isProject backgroundColor="#306945">
                            <SharingCardTitle>Marketing</SharingCardTitle>
                            <h2>20%</h2>
                        </SharingCard>
                        
                        <SharingCard isProject backgroundColor="#20462E">
                            <SharingCardTitle>Team <br/>X'PLORE</SharingCardTitle>
                            <h2>21%</h2>
                        </SharingCard>
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