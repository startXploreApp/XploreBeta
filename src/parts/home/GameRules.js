import styled, {css} from "styled-components";
import Button from "../../components/Button";
import Panel from "../../components/Panel";
import Column from "../../components/Column";
import Row from "../../components/Row";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box } from "../../components/Box";
import { Text } from "../../components/Titles";

const FirstRowRules = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr 2fr;
    grid-gap: 1rem;

    @media (max-width: ${({theme}) => theme.screen.medium}) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media (max-width: ${({theme}) => theme.screen.small}) {
        grid-template-columns: 1fr;
    }
`;

const SecondRowRules = styled.div`
    width: 100%;
    gap: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

const GameRules = () => {
    return (
        <Panel style={{ alignItems: "flex-start", height: "auto", backgroundColor: "#F8F9FA"}}>
            <Column style={{ width: "100%", gap: "24px" }}>
                <h3>Règles du jeu</h3>
                <Column style={{ width: "100%", padding: "0" }}>
                    <Column style={{ padding: "0", width: "100%" }}>
                        <FirstRowRules>
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
                        </FirstRowRules>
                        <SecondRowRules>
                            <Box>
                                <Text>
                                    Résoudre une énigme c'est accéder à la suivante
                                </Text>
                            </Box>
                            <Box>
                                <Text>Soyez le plus rapide, il y un nombre limité de places à chaque phase</Text>
                            </Box>
                        </SecondRowRules>
                    </Column>
                    <PhasesWrapper>
                        <PhaseRect width="12.5rem" height="12.5rem" firstOne>
                            <PhaseRectText>
                                <h6>PHASE 1</h6>
                                <p>7390 tickets</p>
                                <p>20 villes</p>
                            </PhaseRectText>
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
                        <PhaseRect width="9.375rem" height="9.375rem">
                            <PhaseRectText>
                                <h6 style={{ width: "max-content" }}>PHASE 2</h6>
                                <p style={{ width: "max-content" }}>739 tickets</p>
                                <p style={{ width: "max-content" }}>Régional</p>
                            </PhaseRectText>
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
                        <PhaseRect width="6.25rem" height="6.25rem">
                            <PhaseRectText>
                                <h6  style={{ width: "max-content" }}>PHASE 3</h6>
                                <p style={{ width: "max-content" }}>74 tickets</p>
                                <p style={{ width: "max-content" }}>National</p>
                            </PhaseRectText>
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
                        <PhaseRect width="4.688rem" height="4.688rem">
                            <PhaseRectText>
                                <h6 style={{ width: "max-content" }}>PHASE 4</h6>
                                <p style={{ width: "max-content" }}>8 tickets</p>
                                <p style={{ width: "max-content" }}>National</p>
                            </PhaseRectText>
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
                        <PhaseRect width="3.125rem" height="3.125rem">
                        <PhaseRectText>
                                <h6>FIN</h6>
                                <p style={{ width: "max-content" }}>1 TRÉSOR</p>
                            </PhaseRectText>
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

    @media (max-width: ${({theme}) => theme.screen.medium}) {
        display: flex;
        justify-content: space-between;
    }

    @media (max-width: ${({theme}) => theme.screen.small}) {
        height: auto;
        flex-direction: column;
        gap: 5rem;

        &::after {
            content: '';
            width: unset;
            height: 100%;
            position: absolute;
            border-left: 2px solid #7CC295;
            top: 0;
            left:50%;
            z-index: 0;
        }
    }

`;

const StepRect = styled.div`
    width: 1.25rem;
    height: 1.125rem;
    z-index: 1;
    background: #7CC295;
    border-radius: 2px;
    position: relative;
    justify-self: center;
    transition: all 0.2s ease-in;

    &:hover {
        cursor: pointer;

        ${Tooltip} {
            visibility: visible;
        }
    }

    @media (max-width: ${({theme}) => theme.screen.large}) {
        width: 0.85rem;
        height: 0.85rem;
    }

    @media (max-width: ${({theme}) => theme.screen.medium}) {
        display: none;
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

    @media (max-width: ${({theme}) => theme.screen.large}) {
        width: ${props => `calc(0.8 * ${props.width})`};
        height: ${props => `calc(0.8 * ${props.height})`};
        border-radius: ${props => `calc(0.16 * 0.8 * ${props.width})`};
    }
`;

const PhaseRectText = styled.div`
    position: absolute;
    width: 100%;
    margin-top: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 100%;

    @media (max-width: ${({theme}) => theme.screen.small}) {
        top: 50%;
        left: 10rem;
        transform: translate(0, -50%);
    }
`;

export default GameRules;