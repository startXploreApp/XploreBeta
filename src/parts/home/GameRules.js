import styled, {css} from "styled-components";
import Button from "../../components/Button";
import Panel from "../../components/Panel";
import Column from "../../components/Column";
import Row from "../../components/Row";
import { faArrowRight, faBuilding, faTicketSimple, faClock, faQrcode, faTrophy, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tooltip from "../../components/Tooltip";
import GreenCardWrapper, { GreyCardWrapper, GreyCardText} from "../../components/GreenCard";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";


const GridWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;

    @media (max-width: ${({theme}) => theme.screen.large}) {
        grid-template-columns: 1fr;
    }

    @media (max-width: ${({theme}) => theme.screen.medium}) {
        grid-template-columns: 1fr;
    }
    @media (max-width: ${({theme}) => theme.screen.small}) {
        grid-template-columns: 1fr;
    }
`;



const GameRules = () => {

    const {height, width} = useWindowDimensions();

    return (
        <Panel style={{ alignItems: "flex-start", height: "auto", backgroundColor: "#F8F9FA"}}>
            <Column style={{ width: "100%", gap: "24px" }}>
                <h3>Règles du jeu</h3>
                <Column style={{ width: "100%", padding: "0" }}>
                    <GridWrapper>
                        <Column style={{ padding: "0", marginTop: "-10rem", width: "100%", height: "auto", justifyContent: "center", gap: "3rem" }}>
                            {width >= 1280 ?
                                <>
                                    <GreenCardWrapper style={{ position: "relative" }}>
                                        <div style={{display: "flex", gap: "0.5rem", alignItems: "center" }}>
                                            <FontAwesomeIcon style={{ fontSize: "4rem", marginRight: "0.75rem" }} icon={faBuilding} />
                                            <h3>Selectionne ta ville d'aventure</h3>
                                        </div>
                                        <GreenCardWrapper style={{ position: "absolute", bottom: "-70%", right: "-85%", zIndex: "2"}}>
                                            <div style={{display: "flex", gap: "0.5rem", alignItems: "center" }}>
                                                <FontAwesomeIcon style={{ fontSize: "4rem", marginRight: "0.75rem", transform: "rotate(-64deg)" }} icon={faTicketSimple} />
                                                <h3>Achète ton ticket</h3>
                                            </div>
                                        </GreenCardWrapper>
                                    </GreenCardWrapper>
                                    <GreenCardWrapper style={{ position: "relative" }}>
                                        <div style={{display: "flex", gap: "0.5rem", alignItems: "center" }}>
                                            <FontAwesomeIcon style={{ fontSize: "4rem", marginRight: "0.75rem" }} icon={faClock} />
                                            <h3>Attends le top<br/> départ pour <br/>débuter la chasse</h3>
                                        </div>
                                        <GreenCardWrapper style={{ position: "absolute", bottom: "-70%", right: "-85%", zIndex: "2"}}>
                                            <div style={{display: "flex", gap: "0.5rem", alignItems: "center" }}>
                                                <FontAwesomeIcon style={{ fontSize: "4rem", marginRight: "0.75rem" }} icon={faQrcode} />
                                                <h3>Résous jusqu'à 20 énigmes</h3>
                                            </div>
                                        </GreenCardWrapper>
                                    </GreenCardWrapper>
                                    <GreenCardWrapper style={{ position: "relative" }}>
                                        <div style={{display: "flex", gap: "0.5rem", alignItems: "center" }}>
                                            <FontAwesomeIcon style={{ fontSize: "4rem", marginRight: "0.75rem" }} icon={faTrophy} />
                                            <h3>Gagne des récompenses</h3>
                                        </div>
                                        <GreenCardWrapper style={{ position: "absolute", bottom: "-70%", right: "-85%", zIndex: "2"}}>
                                            <div style={{display: "flex", gap: "0.5rem", alignItems: "center" }}>
                                                <FontAwesomeIcon style={{ fontSize: "4rem", marginRight: "0.75rem" }} icon={faStar} />
                                                <h3>Deviens le grand vainqueur de l'édition</h3>
                                            </div>
                                        </GreenCardWrapper>
                                    </GreenCardWrapper>
                                </> :
                                width >= 576 ?
                                <>
                                <Row style={{ justifySelf: "center", alignSelf: "center" }}>
                                    <GreenCardWrapper style={{ justifySelf: "center", alignSelf: "center"}}>
                                        <div style={{display: "flex", gap: "0.5rem", alignItems: "center" }}>
                                            <FontAwesomeIcon style={{ fontSize: "4rem", marginRight: "0.75rem" }} icon={faBuilding} />
                                            <h3>Selectionne ta ville d'aventure</h3>
                                        </div>
                                    </GreenCardWrapper>
                                    <GreenCardWrapper style={{ justifySelf: "center", alignSelf: "center"}}>
                                            <div style={{display: "flex", gap: "0.5rem", alignItems: "center" }}>
                                                <FontAwesomeIcon style={{ fontSize: "4rem", marginRight: "0.75rem", transform: "rotate(-64deg)" }} icon={faTicketSimple} />
                                                <h3>Achète ton ticket</h3>
                                            </div>
                                    </GreenCardWrapper>
                                </Row>
                                <Row style={{ justifySelf: "center", alignSelf: "center" }}>
                                    <GreenCardWrapper style={{ justifySelf: "center", alignSelf: "center"}}>
                                        <div style={{display: "flex", gap: "0.5rem", alignItems: "center" }}>
                                            <FontAwesomeIcon style={{ fontSize: "4rem", marginRight: "0.75rem" }} icon={faClock} />
                                            <h3>Attends le top<br/> départ pour <br/>débuter la chasse</h3>
                                        </div>
                                    </GreenCardWrapper>
                                    <GreenCardWrapper style={{ justifySelf: "center", alignSelf: "center"}}>
                                            <div style={{display: "flex", gap: "0.5rem", alignItems: "center" }}>
                                                <FontAwesomeIcon style={{ fontSize: "4rem", marginRight: "0.75rem" }} icon={faQrcode} />
                                                <h3>Résous jusqu'à 20 énigmes</h3>
                                            </div>
                                    </GreenCardWrapper>
                                </Row>
                                <Row style={{ justifySelf: "center", alignSelf: "center" }}>
                                    <GreenCardWrapper style={{ justifySelf: "center", alignSelf: "center"}}>
                                        <div style={{display: "flex", gap: "0.5rem", alignItems: "center" }}>
                                            <FontAwesomeIcon style={{ fontSize: "4rem", marginRight: "0.75rem" }} icon={faTrophy} />
                                            <h3>Gagne des récompenses</h3>
                                        </div>
                                    </GreenCardWrapper>
                                    <GreenCardWrapper style={{ justifySelf: "center", alignSelf: "center"}}>
                                            <div style={{display: "flex", gap: "0.5rem", alignItems: "center" }}>
                                                <FontAwesomeIcon style={{ fontSize: "4rem", marginRight: "0.75rem" }} icon={faStar} />
                                                <h3>Deviens le grand vainqueur de l'édition</h3>
                                            </div>
                                    </GreenCardWrapper>
                                </Row>
                            </> : 
                            <>
                                <GreenCardWrapper style={{ justifySelf: "center", alignSelf: "center"}}>
                                    <div style={{display: "flex", gap: "0.5rem", alignItems: "center" }}>
                                        <FontAwesomeIcon style={{ fontSize: "4rem", marginRight: "0.75rem" }} icon={faBuilding} />
                                        <h3>Selectionne ta ville d'aventure</h3>
                                    </div>
                                </GreenCardWrapper>
                                <GreenCardWrapper style={{ justifySelf: "center", alignSelf: "center"}}>
                                        <div style={{display: "flex", gap: "0.5rem", alignItems: "center" }}>
                                            <FontAwesomeIcon style={{ fontSize: "4rem", marginRight: "0.75rem", transform: "rotate(-64deg)" }} icon={faTicketSimple} />
                                            <h3>Achète ton ticket</h3>
                                        </div>
                                </GreenCardWrapper>
                                <GreenCardWrapper style={{ justifySelf: "center", alignSelf: "center"}}>
                                    <div style={{display: "flex", gap: "0.5rem", alignItems: "center" }}>
                                        <FontAwesomeIcon style={{ fontSize: "4rem", marginRight: "0.75rem" }} icon={faClock} />
                                        <h3>Attends le top<br/> départ pour <br/>débuter la chasse</h3>
                                    </div>
                                </GreenCardWrapper>
                                <GreenCardWrapper style={{ justifySelf: "center", alignSelf: "center"}}>
                                        <div style={{display: "flex", gap: "0.5rem", alignItems: "center" }}>
                                            <FontAwesomeIcon style={{ fontSize: "4rem", marginRight: "0.75rem" }} icon={faQrcode} />
                                            <h3>Résous jusqu'à 20 énigmes</h3>
                                        </div>
                                </GreenCardWrapper>
                                <GreenCardWrapper style={{ justifySelf: "center", alignSelf: "center"}}>
                                    <div style={{display: "flex", gap: "0.5rem", alignItems: "center" }}>
                                        <FontAwesomeIcon style={{ fontSize: "4rem", marginRight: "0.75rem" }} icon={faTrophy} />
                                        <h3>Gagne des récompenses</h3>
                                    </div>
                                </GreenCardWrapper>
                                <GreenCardWrapper style={{ justifySelf: "center", alignSelf: "center"}}>
                                        <div style={{display: "flex", gap: "0.5rem", alignItems: "center" }}>
                                            <FontAwesomeIcon style={{ fontSize: "4rem", marginRight: "0.75rem" }} icon={faStar} />
                                            <h3>Deviens le grand vainqueur de l'édition</h3>
                                        </div>
                                </GreenCardWrapper>
                            </>
                            }
                        </Column>
                        <Column style={{ padding: "0", height: "auto" }}>
                            <GreyCardWrapper>
                                <h3>Règles du jeu</h3>
                                <GreyCardText>
                                    X'Plore a pour ambition de devenir le plus grand jeu de piste au monde. 
                                    Le jeu se composera de plusieurs éditions. 
                                    Chacune des éditions aura lieu dans un pays différent. 
                                    Pour la première édition, <strong style={{color: "black"}}>20 villes de France</strong> ont été sélectionnées 
                                    pour servir de point de départ.
                                </GreyCardText>
                                <GreyCardText>
                                    Pour chaque ville un nombre limité de tickets sera disponible. 
                                    Il y aura <strong style={{color: "black"}}>7350 tickets</strong> mis en vente dans cette première édition, 
                                    chaque ville ayant un quota défini de tickets (environ 1 pour 1000 habitants). 
                                    De plus, <strong style={{color: "black"}}>40 tickets bonus</strong> vous seront offerts.
                                </GreyCardText>
                                <GreyCardText>
                                    Chaque ticket sera vendu pour l’équivalant en EGLD de <strong style={{color: "black"}}>100 euros</strong> (au moment de la snapshot). 
                                    Cet argent retournera en grande partie aux joueurs, 
                                    sous la forme de <strong style={{color: "black"}}>récompenses distribuées</strong> 
                                    à la fin de chaque phase pour les 10% les plus rapides.
                                </GreyCardText>
                            </GreyCardWrapper>
                            <GreyCardWrapper>
                                <h3>Énigmes</h3>
                                <GreyCardText>
                                    Non loin de chaque point d'intérêt est caché un QR code permettant de valider l'énigme et surtout de passer à la suivante. 
                                </GreyCardText>
                                <GreyCardText>
                                    Pour qu'un QR code délivre l'énigme suivante, il vous faudra avoir dans votre inventaire : <br />
                                        <ul style={{ paddingLeft: "1.25rem"}}>
                                            <li>un ticket d'entrée ou bien de phase validée</li>
                                            <li>l'énigme correspondante au QR code.</li>
                                        </ul>
                                </GreyCardText>
                                <GreyCardText>
                                    Le jeu X'Plore est <strong style={{ color: "black" }}>compétitif</strong>, à chaque phase, seuls 10% des joueurs 
                                    pourront passer au niveau supérieur et se voir récompensés. 
                                    Ce modèle se répète 4 fois pour ne laisser que les 8 meilleurs de la compétition en phase finale (phase 4). 
                                </GreyCardText>
                                <GreyCardText>
                                    Mais ne vous inquiétez pas, un ticket d'entrée vous permettra toujours de retenter votre chance lors des éditions suivantes.
                                </GreyCardText>
                                <GreyCardText style={{ fontWeight: "700"}}>
                                    Voici notre concept, le <strong style={{ color: "black" }}>Travel-To-Earn</strong> (voyager pour gagner).
                                    Bon courage pour votre aventure, vous en aurez besoin, et amusez-vous ! 
                                </GreyCardText>
                            </GreyCardWrapper>
                            <GreyCardWrapper>
                                <h3>Structure du jeu</h3>
                                <GreyCardText>
                                    Le jeu est organisé en <strong style={{ color: "black" }}>4 phases</strong>, chacune d'elle composée en <strong style={{ color: "black" }}>5 énigmes</strong>. <br/>
                                    Chaque phase se déroule dans un lieu différent, la phase 1 en ville, 
                                    la phase 2 dans les régions, les phases 3 et 4 dans toute la France. 
                                    Ces deux dernières phases mettent l'accent sur le dépassement de soi et 
                                    le fait de sortir de sa zone de confort.
                                </GreyCardText>
                                <GreyCardText>
                                    Le jeu est donc rythmé par les énigmes de chaque phase. 
                                    Le joueur devra les résoudre afin de découvrir les différents points d’intérêt.
                                </GreyCardText>
                            </GreyCardWrapper>
                        </Column>
                    </GridWrapper>
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
                                <h6 style={{ width: "max-content" }}>PHASE 3</h6>
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