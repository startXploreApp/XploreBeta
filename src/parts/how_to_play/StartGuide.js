import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button";
import Column from "../../components/Column";
import Panel from "../../components/Panel";
import Row from "../../components/Row";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { BackgroundImage } from "../../components/BackgroundImage";



const StartGuide = () => {
    return (
        <Panel>
            <BackgroundImage image={require("../../assets/pexels-alena-darmel-7710214.jpg")} />
            <Column style={{ alignItems: "flex-start", justifyContent: "flex-end", color: "white", height: "100vh" }}>
                <h1>Le guide du parfait explorateur</h1>
                <div style={{ color: "#D0D0D0" }}>
                    <h2 style={{ marginBottom: 8, fontWeight: "700" }}>Comment démarrer l’aventure ?</h2>
                    <h2 style={{ marginBottom: 8, fontWeight: "700" }}>A quoi ressemble une énigme ?</h2>
                    <h2 style={{ marginBottom: 8, fontWeight: "700" }}>Tutoriel d’utilisation Maiar</h2>
                    <h2 style={{ marginBottom: 8, fontWeight: "700" }}>Tutoriel d’achat de ticket de participation</h2>
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