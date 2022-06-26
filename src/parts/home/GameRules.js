import styled from "styled-components";
import Button from "../../components/Button";
import Panel from "../../components/Panel";
import Column from "../../components/Column";
import Row from "../../components/Row";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GameRules = () => {
    return (
        <Panel style={{ alignItems: "flex-start" }}>
            <Column style={{ width: "100%", gap: "24px" }}>
                <h3>Règles du jeu</h3>
                <Column style={{ width: "100%" }}>
                    <Column style={{ width: "100%" }}>
                        <div style={{ width: "100%", columnGap: "1rem", display: "grid", gridTemplateColumns: "2fr 1fr 2fr", gridTemplateRows: "1"}}>
                            <CardRule>
                                <p style={{ fontFamily: "Inter", fontWeight: "700", lineHeight: "19px" }}>
                                    4 Phases
                                </p>
                            </CardRule>
                            <CardRule>
                                <p style={{ fontFamily: "Inter", fontWeight: "700", lineHeight: "19px" }}>
                                    5 énigmes par phase
                                </p>
                            </CardRule>
                            <CardRule>
                                <p style={{ fontFamily: "Inter", fontWeight: "700", lineHeight: "19px" }}>
                                    Résoudre une énigme c'est trouver son QRCode associé
                                </p>
                            </CardRule>
                        </div>
                        <div style={{ width: "100%", columnGap: "1rem", display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1"}}>
                            <CardRule>
                                <p style={{ fontFamily: "Inter", fontWeight: "700", lineHeight: "19px" }}>
                                    Résoudre une énigme c'est accéder à la suivante
                                </p>
                            </CardRule>
                            <CardRule>
                                <p style={{ fontFamily: "Inter", fontWeight: "700", lineHeight: "19px" }}>Soyez le plus rapide, il y un nombre limité de places à chaque phase</p>
                            </CardRule>
                        </div>
                    </Column>
                    <Row style={{ width: "100%" }}> 
                        <PhaseRect />
                    </Row>
                    <Row style={{ width: "100%", justifyContent: "flex-end" }}>
                        <Button secondary>
                            <p style={{ fontFamily: "Poppins", fontSize: "1rem", fontWeight: "500" }}>
                                Comment jouer ?
                            </p>
                        </Button>
                        <Button primary>
                            <p style={{ fontFamily: "Poppins", fontSize: "1rem", fontWeight: "500" }}>
                                Acheter un ticket maintenant
                            </p>
                            <FontAwesomeIcon icon={faArrowRight} size={"xl"} />
                        </Button>
                    </Row>
                </Column>
            </Column>
        </Panel>
    );
}

const PhaseRect = styled.div`
    width: 200px;
    height: 200px;
    background: #7CC295;
    border: 1px solid #F8F9FA;
    border-radius: 32px;
    position: relative;

    &::after {
        content: '';
        width: 100vw;
        position: absolute;
        border-bottom: 1px solid #7CC295;
        left: 0;
        top: 50%;
        z-index: 1;
    }
`;

const CardRule = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 2rem;
    gap: 0.5rem;
    border: 0.25rem solid #1f2b3a;
    box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
    border-radius: 24px;
`;

export default GameRules;