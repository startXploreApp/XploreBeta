import styled from "styled-components";
import Button from "../../components/Button";
import Panel from "../../components/Panel";
import Column from "../../components/Column";
import Row from "../../components/Row";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

const RedDot = styled.div`
    width: 36px;
    height: 36px;
    background-color: #FF2521;
    border-radius: 50%;
    display: inline-block;
`;

const StartExplore = () => {
    return (
        <Panel firstPage>
            <Column style={{ width: "55vw"}}>

                <Column>
                    <Row>
                        <RedDot />
                        <h1>Les tickets sont en ventes !</h1>
                    </Row>
                    <Button primary>
                        <h6>Acheter un ticket maintenant </h6><FontAwesomeIcon icon={faArrowRight} size={"xl"} />
                    </Button>
                </Column>

                <Column>
                    <h2 style={{ lineHeight: "42px" }}>Bienvenue dans le premier jeu décentralisé qui vous récompense pour <span style={{ fontFamily: "Praise", fontSize: "4.5rem", color: "#FFBD3F" }}>explorer</span></h2>
                    <Row style={{ gap: "1.5rem" }}>
                        <Button>
                            <h6>En savoir plus</h6>
                        </Button>
                        <Button primary>
                            <h6>Partir à l'aventure</h6>
                            <FontAwesomeIcon icon={faRocket} size={"xl"} />
                        </Button>
                    </Row>
                </Column>

            </Column>
        </Panel>
    );
}

export default StartExplore;