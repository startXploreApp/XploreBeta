import styled, {css} from "styled-components";
import Button from "../../components/Button";
import Panel from "../../components/Panel";
import Column from "../../components/Column";
import Row from "../../components/Row";
import { faArrowRight, faBuilding, faTicketSimple, faClock, faQrcode, faTrophy, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RuleCardWrapper = styled.div`
    display: flex;
    border-radius: 2rem;
    height: 12.5rem;
    justify-content: center;
    padding: 4rem 2rem;
    color: white;
    background: linear-gradient(95.11deg, #12A04B -1.7%, #25313F 99.97%);
    box-shadow: inset 0px -4px 32px rgba(0, 0, 0, 0.25);
    width: 22rem;
`;

const RulePanelWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5rem;
    gap: 1rem;
    background: #F8F9FA;

    box-shadow: inset 0px -4px 32px rgba(0, 0, 0, 0.25);
    border-radius: 1.5rem;
`;

const RulePanelText = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.1rem;
    text-align: justify;

    color: rgba(0, 0, 0, 0.5);
`;


const GameRules = () => {
    return (
        <Panel style={{ alignItems: "flex-start", height: "auto", backgroundColor: "#F8F9FA"}}>
            <Column style={{ width: "100%", gap: "24px" }}>
                <h3>Règles du jeu</h3>
                <Column style={{ width: "100%", padding: "0" }}>
                    <div style={{ width: "100%", columnGap: "1rem", display: "grid", gridTemplateColumns: "50% 50%", gridTemplateRows: "1" }}>
                        <Column style={{ width: "100%", height: "auto", justifyContent: "center", gap: "3rem" }}>
                            <RuleCardWrapper style={{ position: "relative", left: "10%", top: "-7%" }}>
                                <div style={{display: "flex", gap: "0.5rem", alignItems: "center" }}>
                                    <FontAwesomeIcon style={{ fontSize: "4rem", marginRight: "0.75rem" }} icon={faBuilding} />
                                    <h3>Selectionne ta ville d'aventure</h3>
                                </div>
                                <RuleCardWrapper style={{ position: "absolute", bottom: "-70%", right: "-85%", zIndex: "2"}}>
                                    <div style={{display: "flex", gap: "0.5rem", alignItems: "center" }}>
                                        <FontAwesomeIcon style={{ fontSize: "4rem", marginRight: "0.75rem", transform: "rotate(-64deg)" }} icon={faTicketSimple} />
                                        <h3>Achète ton ticket</h3>
                                    </div>
                                </RuleCardWrapper>
                            </RuleCardWrapper>
                            <RuleCardWrapper style={{ position: "relative", left: "10%", top: "-7%" }}>
                                <div style={{display: "flex", gap: "0.5rem", alignItems: "center" }}>
                                    <FontAwesomeIcon style={{ fontSize: "4rem", marginRight: "0.75rem" }} icon={faClock} />
                                    <h3>Attends le top<br/> départ pour <br/>débuter la chasse</h3>
                                </div>
                                <RuleCardWrapper style={{ position: "absolute", bottom: "-70%", right: "-85%", zIndex: "2"}}>
                                    <div style={{display: "flex", gap: "0.5rem", alignItems: "center" }}>
                                        <FontAwesomeIcon style={{ fontSize: "4rem", marginRight: "0.75rem" }} icon={faQrcode} />
                                        <h3>Résous jusqu'à 20 énigmes</h3>
                                    </div>
                                </RuleCardWrapper>
                            </RuleCardWrapper>
                            <RuleCardWrapper style={{ position: "relative", left: "10%", top: "-7%" }}>
                                <div style={{display: "flex", gap: "0.5rem", alignItems: "center" }}>
                                    <FontAwesomeIcon style={{ fontSize: "4rem", marginRight: "0.75rem" }} icon={faTrophy} />
                                    <h3>Gagne des récompenses</h3>
                                </div>
                                <RuleCardWrapper style={{ position: "absolute", bottom: "-70%", right: "-85%", zIndex: "2"}}>
                                    <div style={{display: "flex", gap: "0.5rem", alignItems: "center" }}>
                                        <FontAwesomeIcon style={{ fontSize: "4rem", marginRight: "0.75rem" }} icon={faStar} />
                                        <h3>Deviens le grand vainqueur de l'édition</h3>
                                    </div>
                                </RuleCardWrapper>
                            </RuleCardWrapper>
                        </Column>
                        <Column style={{ height: "auto" }}>
                            <RulePanelWrapper>
                                <h3>Règles du jeu</h3>
                                <RulePanelText>
                                    X'Plore a pour ambition de devenir le plus grand jeu de piste au monde. 
                                    Le jeu se composera de plusieurs éditions. 
                                    Chacune des éditions aura lieu dans un pays différent. 
                                    Pour la première édition, <strong style={{color: "black"}}>20 villes de France</strong> ont été sélectionnées 
                                    pour servir de point de départ.
                                </RulePanelText>
                                <RulePanelText>
                                    Pour chaque ville un nombre limité de tickets sera disponible. 
                                    Il y aura <strong style={{color: "black"}}>7350 tickets</strong> mis en vente dans cette première édition, 
                                    chaque ville ayant un quota défini de tickets (environ 1 pour 1000 habitants). 
                                    De plus, <strong style={{color: "black"}}>40 tickets bonus</strong> vous seront offerts.
                                </RulePanelText>
                                <RulePanelText>
                                    Chaque ticket sera vendu pour l’équivalant en EGLD de <strong style={{color: "black"}}>100 euros</strong> (au moment de la snapshot). 
                                    Cet argent retournera en grande partie aux joueurs, 
                                    sous la forme de <strong style={{color: "black"}}>récompenses distribuées</strong> 
                                    à la fin de chaque phase pour les 10% les plus rapides.
                                </RulePanelText>
                            </RulePanelWrapper>
                            <RulePanelWrapper>
                                <h3>Énigmes</h3>
                                <RulePanelText>
                                    Non loin de chaque point d'intérêt est caché un QR code permettant de valider l'énigme et surtout de passer à la suivante. 
                                </RulePanelText>
                                <RulePanelText>
                                    Pour qu'un QR code délivre l'énigme suivante, il vous faudra avoir dans votre inventaire : <br />
                                        <ul style={{ paddingLeft: "1.25rem"}}>
                                            <li>un ticket d'entrée ou bien de phase validée</li>
                                            <li>l'énigme correspondante au QR code.</li>
                                        </ul>
                                </RulePanelText>
                                <RulePanelText>
                                    Le jeu X'Plore est <strong style={{ color: "black" }}>compétitif</strong>, à chaque phase, seuls 10% des joueurs 
                                    pourront passer au niveau supérieur et se voir récompensés. 
                                    Ce modèle se répète 4 fois pour ne laisser que les 8 meilleurs de la compétition en phase finale (phase 4). 
                                </RulePanelText>
                                <RulePanelText>
                                    Mais ne vous inquiétez pas, un ticket d'entrée vous permettra toujours de retenter votre chance lors des éditions suivantes.
                                </RulePanelText>
                                <RulePanelText style={{ fontWeight: "700"}}>
                                    Voici notre concept, le <strong style={{ color: "black" }}>Travel-To-Earn</strong> (voyager pour gagner).
                                    Bon courage pour votre aventure, vous en aurez besoin, et amusez-vous ! 
                                </RulePanelText>
                            </RulePanelWrapper>
                            <RulePanelWrapper>
                                <h3>Structure du jeu</h3>
                                <RulePanelText>
                                    Le jeu est organisé en <strong style={{ color: "black" }}>4 phases</strong>, chacune d'elle composée en <strong style={{ color: "black" }}>5 énigmes</strong>. <br/>
                                    Chaque phase se déroule dans un lieu différent, la phase 1 en ville, 
                                    la phase 2 dans les régions, les phases 3 et 4 dans toute la France. 
                                    Ces deux dernières phases mettent l'accent sur le dépassement de soi et 
                                    le fait de sortir de sa zone de confort.
                                </RulePanelText>
                                <RulePanelText>
                                    Le jeu est donc rythmé par les énigmes de chaque phase. 
                                    Le joueur devra les résoudre afin de découvrir les différents points d’intérêt.
                                </RulePanelText>
                            </RulePanelWrapper>
                        </Column>
                    </div>
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

export default GameRules;