import styled from "styled-components";
import Button from "../../components/Button";
import Panel from "../../components/Panel";
import Column from "../../components/Column";
import Row from "../../components/Row";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { BackgroundImage } from "../../components/BackgroundImage";
import Tooltip from "../../components/Tooltip";

const RedDot = styled.div`
    width: 2.2rem;
    height: 2.2rem;
    background-color: #FF2521;
    border-radius: 50%;
    display: inline-block;
`;

const MainColumn = styled(Column)`
    isolation: isolate;
    margin-top: 2rem;
    align-content: flex-end;
    justify-content: flex-end;
    height: 85%;

    @media (max-width: ${({theme}) => theme.screen.medium}) {
        margin-top: 5rem;
        height: 100%;
        align-content: flex-start;
    }
`;

const StartExplore = () => {
    return (
        <Panel firstPage>
            <BackgroundImage
                opacity="20%"
                image={require("../../assets/pexels-tobias-aeppli-1125272.jpg")}
                imgStyle={{ transform: "scaleX(-1)"}}/>
            <MainColumn>

                {/* <Column style={{padding: "0"}}>
                    <Row>
                        <RedDot />
                        <h1 style={{ color: "white"}} >
                            Les tickets sont en ventes !
                        </h1>
                    </Row>
                    <Button primary>
                        <h6>
                            Acheter un ticket maintenant 
                        </h6>
                        <FontAwesomeIcon icon={faArrowRight} size={"xl"} />
                    </Button>
                </Column> */}

                <Column style={{padding: "0"}}>
                    <h2 style={{ lineHeight: "42px", color: "white" }}>
                        Bienvenue dans le premier jeu décentralisé <br />
                        qui vous récompense pour 
                        <span style={{ fontFamily: "Praise", fontSize: "4.5rem", color: "#FFBD3F" }}>explorer</span>
                    </h2>
                    <Row style={{ gap: "1.5rem" }}>
                        <Button>
                            <Tooltip>Coming soon !</Tooltip>
                            <h6>En savoir plus</h6>
                        </Button>
                        <Button primary>
                            <Tooltip>Coming soon !</Tooltip>
                            <h6>Partir à l'aventure</h6>
                            <FontAwesomeIcon icon={faRocket} size={"xl"} />
                        </Button>
                    </Row>
                </Column>

            </MainColumn>
        </Panel>
    );
}

export default StartExplore;