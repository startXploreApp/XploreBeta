import styled from "styled-components";
import { Box } from "../../components/Box";
import Column from "../../components/Column";
import Panel from "../../components/Panel";
import Row from "../../components/Row";
import { Text } from "../../components/Titles";

const GreenLine = styled.div`
    width : 100%;
    background-color:#7CC295;
    height : 2rem;
    margin-left : ${props => props.position === "right" ? "-3.75rem" : "3.75rem"};
`;

const GreenTitle = ({ position = "right", title }) => {
    return (
        <div style={position === "right" ? { marginRight: "-3.75rem" } : { marginLeft: "-3.75rem" }}>
            <GreenLine position={position === "right" ? "left" : "right"} />
            <h1 style={{ marginRight: position === "right" ? "20rem" : "5rem", marginLeft: position === "right" ? "5rem" : "20rem", marginTop: 15, marginBottom: 15, color: "#1FCE55", textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}>{title}</h1>
            <GreenLine position={position} />
        </div>
    )
}

const Card = ({ text, image, ...props }) => {
    return (
        <Box column {...props}>
            <img
                src={image}
                style={{ width: "100%", objectFit: "cover" }} />
            <Text
                light
                style={{ marginTop: "2rem" }}
            >
                {text}
            </Text>
        </Box>
    )
}

const WhatIsEnigma = () => {
    return (
        <Panel backgroundColor={"#F8F9FA"} >
            <Column style={{ width: "100%" }}>
                <h2 style={{ marginBottom: 8 }}>A quoi ressemble une énigme ?</h2>
                <Row style={{ justifyContent: "space-between", width: "100%" }}>
                    <Card text="Vous recevrez une
énigme sous cette forme." image={require("../../assets/enigma.png")} />
                    <GreenTitle title="Étape 1" />
                </Row>
                <Row style={{ justifyContent: "space-between", width: "100%", marginTop: "-3rem" }}>
                    <GreenTitle
                        title="Étape 2"
                        position="left" />
                    <Card text="Avec les indices de l’énigme, on peut donc déduire un périmètre de recherche pour dénicher le QRcode." image={require("../../assets/paris.png")} />
                </Row>
                <Row style={{ justifyContent: "space-between", width: "100%", marginTop: "-3rem" }}>
                    <Card style={{ marginLeft: "8rem" }} text="Une fois trouvé, ouvrez votre application Maiar afin de scanner le QRcode. Attention, avant de signer, vérifiez l’origine de la transaction." image={require("../../assets/qrcode.png")} />
                    <GreenTitle title="Étape 3" />
                </Row>
            </Column>
        </Panel>
    );
}


export default WhatIsEnigma;


