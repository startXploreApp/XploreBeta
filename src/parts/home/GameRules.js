import styled from "styled-components";
import Button from "../../components/Button";
import Panel from "../../components/Panel";
import Column from "../../components/Column";
import Row from "../../components/Row";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box } from "../../components/Box";
import { Text } from "../../components/Titles";

const GameRules = () => {
    return (
        <Panel style={{ alignItems: "flex-start" }}>
            <Column style={{ width: "100%", gap: "24px" }}>
                <h3>Règles du jeu</h3>
                <Column style={{ width: "100%" }}>
                    <Column style={{ width: "100%" }}>
                        <div style={{ width: "100%", columnGap: "1rem", display: "grid", gridTemplateColumns: "2fr 1fr 2fr", gridTemplateRows: "1" }}>
                            <Box>
                                <Text>
                                    4 Phases
                                </Text>
                            </Box>
                            <Box>
                                <Text>
                                    5 énigmes par phase
                                </Text>
                            </Box>
                            <Box>
                                <Text>
                                    Résoudre une énigme c'est trouver son QRCode associé
                                </Text>
                            </Box>
                        </div>
                        <div style={{ width: "100%", columnGap: "1rem", display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1" }}>
                            <Box>
                                <Text>
                                    Résoudre une énigme c'est accéder à la suivante
                                </Text>
                            </Box>
                            <Box>
                                <Text>Soyez le plus rapide, il y un nombre limité de places à chaque phase</Text>
                            </Box>
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

export default GameRules;