import styled from "styled-components";
import Button from "../../components/Button";
import Panel from "../../components/Panel";
import Column from "../../components/Column";
import Row from "../../components/Row";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { BackgroundImage } from "../../components/BackgroundImage";
import Tooltip from "../../components/Tooltip";
import WHITEPAPER_fr from "../../media/whitepaper_fr.pdf";
import WHITEPAPER_en from "../../media/whitepaper_en.pdf";

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

const BottomRow = styled(Row)`
    gap: 1.5rem;

    @media (max-width: ${({theme}) => theme.screen.small}) {
        width: 100%;
        flex-direction: column;
        align-items: flex-start;
    }
`;

const ButtonRow = styled(Row)`
    gap: 1.5rem;
    @media (max-width: ${({theme}) => theme.screen.small}) {
        padding: 0;
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
                        <span style={{ marginLeft: "0.5rem", fontFamily: "Praise", fontSize: "4.5rem", color: "#FFBD3F" }}>explorer</span>
                    </h2>
                    <BottomRow>
                        <Button onClick={() => {
                            const element = document.getElementById("game-rules");
                            let rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
                            let y = 0;
                            if (window.scrollY > 0) {
                                y = element.getBoundingClientRect().top + window.pageYOffset - 5*rem;
                            } else {
                                y = element.getBoundingClientRect().top + window.pageYOffset - 9*rem;
                            }
                            window.scrollTo({ "top": y, "behavior": "smooth" })
                        }}>
                            <h6>En savoir plus</h6>
                        </Button>
                        {/* <Button primary>
                            <h6>Partir à l'aventure</h6>
                            <FontAwesomeIcon icon={faRocket} size={"xl"} />
                        </Button> */}
                        <ButtonRow>
                            <a href={WHITEPAPER_fr} target="_blank" rel="noreferrer">
                                <Button primary>
                                    <h6>Whitepaper - FR</h6>
                                    <FontAwesomeIcon icon={faDownload} size={"xl"} />
                                </Button>
                            </a>
                            <a href={WHITEPAPER_en} target="_blank" rel="noreferrer">
                                <Button primary>
                                    <h6>Whitepaper - EN</h6>
                                    <FontAwesomeIcon icon={faDownload} size={"xl"} />
                                </Button>
                            </a>
                        </ButtonRow>
                    </BottomRow>
                </Column>

            </MainColumn>
        </Panel>
    );
}

export default StartExplore;