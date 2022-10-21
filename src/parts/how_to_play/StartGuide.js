import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../components/Button";
import Column from "../../components/Column";
import Panel from "../../components/Panel";
import Row from "../../components/Row";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { BackgroundImage } from "../../components/BackgroundImage";
import { SubTitle } from "../../components/Titles";



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
                    <Button secondary>
                        <h6>En savoir plus</h6>
                    </Button>
                    <Button primary>
                        <h6>Partir à l'aventure</h6>
                        <FontAwesomeIcon icon={faRocket} size={"xl"} />
                    </Button>
                </Row>
            </Column>
        </Panel>
    );
}

export default StartGuide;