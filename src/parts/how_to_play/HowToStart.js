import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "../../components/Button";
import Column from "../../components/Column";
import Panel from "../../components/Panel";
import Row from "../../components/Row";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";

const ArrowStep = styled.img`
    @media (max-width: ${({theme}) => theme.screen.large}) {
        display: none;
    }
`;


const Step = ({ text1, text2, button = false }) => {
    return (<div style={{ display: "flex", flexDirection: "row", position: "relative" }}>
        <ArrowStep
            src={require("../../assets/arrow_1.svg").default}
            style={{ height: "18vh", paddingTop: 5, marginRight: 30 }} />
        <StepWrapper style={{ display: "flex", justifyContent: 'space-between', flexDirection: "column" }}>
            {button === "text1" ? (<Row style={{ marginTop: '-0.75rem' }}>
                <p>{text1}</p>
                <Button style={{ fontSize: "0.9rem" }} ghost>Découvrir comment</Button>
            </Row>) : (<p>{text1}</p>)}

            <div>
                {button === "text2" ? (<Row style={{ marginBottom: "-0.75rem" }}>
                    <p>{text2}</p>
                    <Button style={{ fontSize: "0.9rem" }} ghost>Découvrir comment</Button>
                </Row>) : (<p>{text2}</p>)}
            </div>
        </StepWrapper>
    </div>)
}

const Grandma = styled.img`
    height: 100vh;
    object-fit: contain;

    @media (max-width: ${({theme}) => theme.screen.large}) {
        display: none;
    }
`;

const StepWrapper = styled.div`
    @media (max-width: ${({theme}) => theme.screen.large}) {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
`;


const HowToStart = () => {

    const { height, width } = useWindowDimensions();

    return (
        <Panel backgroundColor={"#1F2B3A"} style={{ color: "white" }}>
            <Grandma
                src={require("../../assets/pexels-anna-shvets-5257268.jpg")}
                style={{  }} />
            <Column style={{ width: "100%" }}>
                <h2 style={{ lineHeight: "42px", marginBottom: "5vh" }}>
                    Comment démarrer l’aventure ?
                </h2>
                { width >= 768 ? 
                    <StepWrapper>
                        <Step
                            text1="Créer un portefeuille Maiar"
                            text2="Acheter le jeton EGLD"
                            button="text1" />
                        <ArrowStep
                            src={require("../../assets/arrow_2.svg").default}
                            style={{ height: "17vh", marginLeft: "50%", marginTop: "-3%", marginBottom: "-5%" }} />
                        <Step
                            text1="Se connecter à l’application avec son portefeuille"
                            text2="Échanger des jetons EGLD contre un ticket"
                            button="text2" />
                        <ArrowStep
                            src={require("../../assets/arrow_3.svg").default}
                            style={{ height: "13vh", marginLeft: "55%", marginTop: "3%", marginBottom: "-5%" }} />
                        <p style={{ marginLeft: "5rem" }}>Partir en quête du monde !</p>
                    </StepWrapper> : 
                    <Column>
                        <Step
                            text1="Créer un portefeuille Maiar"
                            text2="Acheter le jeton EGLD"
                            button="text1" />
                        <Step
                            text1="Se connecter à l’application avec son portefeuille"
                            text2="Échanger des jetons EGLD contre un ticket"
                            button="text2" />
                    </Column>
                }
                <div style={{ alignSelf: "end" }}>
                    <p>Vous avez déjà un portefeuille Maiar ?</p>
                    <Button primary>
                        <h6>Acheter un ticket maintenant</h6>
                        <FontAwesomeIcon icon={faArrowRight} size={"xl"} />
                    </Button>
                </div>
            </Column>
        </Panel>
    );
}

export default HowToStart;


