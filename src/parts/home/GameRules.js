import styled, {css} from "styled-components";
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
        <Panel style={{ alignItems: "flex-start", height: "auto", backgroundColor: "#F8F9FA"}}>
            <Column style={{ width: "100%", gap: "24px" }}>
                <h3>Règles du jeu</h3>
                <Column style={{ width: "100%", padding: "0" }}>
                    <Column style={{ padding: "0", width: "100%" }}>
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
                    <PhasesWrapper>
                        <PhaseRect width="200px" height="200px" firstOne>
                            <div style={{ position: "absolute", width: "100%", top: "100%", marginTop: "0.5rem", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                <h6>PHASE 1</h6>
                                <p>7390 tickets</p>
                                <p>20 villes</p>
                            </div>
                        </PhaseRect>
                        {
                            [...Array(5).keys()].map(j => (
                                <StepRect key={j}>
                                    <Tooltip>
                                        Phase 1<br/>Enigme {j+1}
                                    </Tooltip>
                                </StepRect>
                            ))
                        }
                        <PhaseRect width="150px" height="150px">
                            <div style={{ position: "absolute", width: "100%", top: "100%", marginTop: "0.5rem", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                <h6>PHASE 2</h6>
                                <p>739 tickets</p>
                                <p>Régional</p>
                            </div>
                        </PhaseRect>
                        {
                            [...Array(5).keys()].map(j => (
                                <StepRect key={j}>
                                    <Tooltip>
                                        Phase 2<br/>Enigme {j+1}
                                    </Tooltip>
                                </StepRect>
                            ))
                        }
                        <PhaseRect width="100px" height="100px">
                            <div style={{ position: "absolute", width: "100%", top: "100%", marginTop: "0.5rem", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                <h6>PHASE 3</h6>
                                <p>74 tickets</p>
                                <p>National</p>
                            </div>
                        </PhaseRect>
                        {
                            [...Array(5).keys()].map(j => (
                                <StepRect key={j}>
                                    <Tooltip>
                                        Phase 3<br/>Enigme {j+1}
                                    </Tooltip>
                                </StepRect>
                            ))
                        }
                        <PhaseRect width="75px" height="75px">
                            <div style={{ position: "absolute", width: "100%", top: "100%", marginTop: "0.5rem", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                <h6>PHASE 4</h6>
                                <p>8 tickets</p>
                                <p>National</p>
                            </div>
                        </PhaseRect>
                        {
                            [...Array(5).keys()].map(j => (
                                <StepRect key={j}>
                                    <Tooltip>
                                        Phase 4<br/>Enigme {j+1}
                                    </Tooltip>
                                </StepRect>
                            ))
                        }
                        <PhaseRect width="50px" height="50px">
                        <div style={{ position: "absolute", width: "100%", top: "100%", marginTop: "0.5rem", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                <h6>FIN</h6>
                                <p style={{ width: "max-content" }}>1 TRÉSOR</p>
                            </div>
                        </PhaseRect>
                    </PhasesWrapper> 
                    <Row style={{ width: "100%", justifyContent: "flex-end", padding: "0", marginTop: "5rem" }}>
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

const Tooltip = styled.div`
    position: absolute;
    display: inline-block;
    visibility: hidden;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 0.75rem;
    padding: 5px 5px;
    position: absolute;
    z-index: 1;
    translate: -50%;
    top: -65px;
    left: 50%;
    width: 5.5rem;

    &::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: black transparent transparent transparent;
    }

`;

const PhasesWrapper = styled.div`
    position: relative;
    padding: 0;
    box-sizing: border-box;
    width: 100%;
    display: grid;
    grid-template-rows: 1;
    /* gap: 15px; */
    grid-template-columns: repeat(25, 1fr);
    align-items: center;
    align-content: center;

    &::after {
        content: '';
        width: 97%;
        position: absolute;
        border-bottom: 2px solid #7CC295;
        left:0;
        top: 50%;
        z-index: 0;
    }
`;

const StepRect = styled.div`
    width: 20px;
    height: 18px;
    z-index: 1;
    background: #7CC295;
    border-radius: 2px;
    position: relative;
    justify-self: center;
    position: relative;
    transition: all 0.2s ease-in;

    &:hover {
        cursor: pointer;

        ${Tooltip} {
            visibility: visible;
        }
    }
`;

const PhaseRect = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    background: #7CC295;
    border-radius: ${props => `calc(0.16 * ${props.width})`};
    position: relative;
    
    ${
        props => props.firstOne && css`
            &::before {
                content: '';
                width: 100%;
                position: absolute;
                border-bottom: 2px solid #7CC295;
                left: -100%;
                top: 50%;
                z-index: -1;
            }
    `};
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