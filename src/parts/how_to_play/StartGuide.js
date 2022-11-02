import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../components/Button";
import Column from "../../components/Column";
import Panel from "../../components/Panel";
import Row from "../../components/Row";
import { faRocket, faDownload } from "@fortawesome/free-solid-svg-icons";
import { BackgroundImage } from "../../components/BackgroundImage";
import { SubTitle } from "../../components/Titles";
import WHITEPAPER from "../../media/whitepaper_fr.pdf";



const StartGuide = () => {
    return (
        <Panel firstPage>
            <BackgroundImage image={require("../../assets/how_to_play.jpg")} />
            <Column style={{ alignItems: "flex-start", justifyContent: "flex-end", color: "white", height: "100%" }}>
                <h1>Le guide du parfait explorateur</h1>
                <div style={{ color: "#D0D0D0" }}>
                    <SubTitle>Comment démarrer l’aventure ?</SubTitle>
                    <SubTitle>A quoi ressemble une énigme ?</SubTitle>
                    <SubTitle>Tutoriel d’utilisation Maiar</SubTitle>
                    <SubTitle>Tutoriel d’achat de ticket de participation</SubTitle>
                </div>
                <Row style={{ gap: "1.5rem" }}>
                    <Button secondary onClick={() => {
                        const element = document.getElementById("whatIsEnigma");
                        const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
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
                    <a href={WHITEPAPER} target="_blank" rel="noreferrer">
                        <Button primary>
                            <h6>Whitepaper</h6>
                            <FontAwesomeIcon icon={faDownload} size={"xl"} />
                        </Button>
                    </a>
                </Row>
            </Column>
        </Panel>
    );
}

export default StartGuide;