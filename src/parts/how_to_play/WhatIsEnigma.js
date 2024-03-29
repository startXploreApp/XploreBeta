import styled from "styled-components";
import { Box } from "../../components/Box";
import Column from "../../components/Column";
import Panel from "../../components/Panel";
import Row from "../../components/Row";
import { Text } from "../../components/Titles";
import GreenTitle, { GreenLine } from "../../components/GreenTitle";
import GreenCardWrapper, { GreyCardWrapper, GreyCardText } from "../../components/GreenCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicketAlt, faQrcode, faStar } from "@fortawesome/free-solid-svg-icons";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";

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

const NumberCard = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1rem 2rem;
    gap: 1rem;
    background: #fff;
    border: 1px solid #12A04B;
    border-radius: 32px;
    z-index: 0;

    @media (max-width: ${({theme}) => theme.screen.large}) {
        display: none;
    }
`;

const NumberCardIndex = styled.p`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 800;
    font-size: 4rem;
    line-height: 96px;
    color: #D6D6CA;
`;

const NumberCardText = styled.p`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2.25rem;
    color: rgba(0, 0, 0, 0.5);
`;

const WhatIsEnigma = () => {

    const { height, width } = useWindowDimensions();

    let leftP = "-40%";
    if (width < 1435 && width > 960) {
        leftP = "-20%";
    }

    return (
        <Panel id="whatIsEnigma" backgroundColor={"#F8F9FA"} style={{ height: "auto" }}>
            <Column style={{ width: "100%" }}>
                <h2 style={{ marginBottom: "5rem" }}>A quoi ressemble une énigme ?</h2>
                { width >= 960 ? 
                    <div style={{ width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", rowGap: "7rem" }}>

                        <div style={{ marginRight: "5%", position: "relative", justifySelf: "flex-end" }}>
                            <NumberCard style={{ zIndex: "1", position: "absolute", width: "60%", top: "-35%", left: `${leftP}` }}>
                                <NumberCardIndex>1.</NumberCardIndex>
                                <NumberCardText>Étape 1</NumberCardText>
                            </NumberCard>
                            <GreenCardWrapper style={{ height: "18.75rem", width: "30.5rem", padding: "8rem 2rem", zIndex: "2", position: "relative" }}>
                                <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                                    <FontAwesomeIcon style={{ fontSize: "4rem", marginRight: "0.75rem", transform: "rotate(-64deg)" }} icon={faTicketAlt} />
                                    <h3 style={{ textAlign: "justify" }}>Vous recevrez une énigme sous cette forme par exemple.</h3>
                                </div>
                            </GreenCardWrapper>
                        </div>

                        <GreyCardWrapper style={{ width: "30.5rem", height: "18.75rem", marginLeft: "5%", alignContent: "center", alignItems: "center", justifyContent: "center", justifySelf: "flex-start", padding: "2rem" }}>
                            <p style={{ fontFamily: "Poppins", fontStyle: "normal", fontWeight: "800", fontSize: "2rem", color: "rgba(0, 0, 0, 0.5)" }}>
                                "A 115m de haut, <br />côté nord"
                                <br />
                                48.858, 2.294"
                            </p>
                        </GreyCardWrapper>

                        <div style={{ marginRight: "5%", position: "relative", justifySelf: "flex-end" }}>
                            <NumberCard style={{ zIndex: "1", position: "absolute", width: "60%", top: "-35%", left: `${leftP}` }}>
                                <NumberCardIndex>2.</NumberCardIndex>
                                <NumberCardText>Étape 2</NumberCardText>
                            </NumberCard>
                            <GreenCardWrapper style={{ height: "18.75rem", width: "30.5rem", padding: "8rem 2rem", zIndex: "2", position: "relative" }}>
                                <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                                    <FontAwesomeIcon style={{ fontSize: "4rem", marginRight: "0.75rem" }} icon={faQrcode} />
                                    <h3 style={{ textAlign: "justify" }}>Avec les indices de l’énigme, on peut donc déduire un périmètre de recherche pour dénicher le QRcode.</h3>
                                </div>
                            </GreenCardWrapper>
                        </div>

                        <GreyCardWrapper
                            style={{
                                width: "30.5rem",
                                height: "18.75rem",
                                marginLeft: "5%",
                                alignContent: "center",
                                alignItems: "center",
                                justifyContent: "center",
                                justifySelf: "flex-start",
                                padding: "2rem" }}>
                            <img style={{ borderRadius: "1rem", width: "26rem", objectFit: "cover", height: "100%" }} src={require("../../assets/little_paris.png")} alt="paris" />
                        </GreyCardWrapper>

                        <div style={{ marginRight: "5%", position: "relative", justifySelf: "flex-end" }}>
                            <NumberCard style={{ zIndex: "1", position: "absolute", width: "60%", top: "-35%", left: `${leftP}` }}>
                                <NumberCardIndex>3.</NumberCardIndex>
                                <NumberCardText>Étape 3</NumberCardText>
                            </NumberCard>
                            <GreenCardWrapper style={{ height: "18.75rem", width: "30.5rem", padding: "8rem 2rem", zIndex: "2", position: "relative" }}>
                                <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                                    <FontAwesomeIcon style={{ fontSize: "4rem", marginRight: "0.75rem" }} icon={faStar} />
                                    <h3 style={{ textAlign: "justify" }}>
                                        Une fois trouvé, ouvrez votre application Maiar afin de scanner le QRcode.
                                        <br />
                                        <span style={{ fontSize: "0.85rem", color: "#D0D0D0" }}>Attention, avant de signer, vérifier l'origine de la transaction</span>
                                    </h3>
                                </div>
                            </GreenCardWrapper>
                        </div>

                        <GreyCardWrapper
                            style={{
                                width: "30.5rem",
                                height: "18.75rem",
                                marginLeft: "5%",
                                alignContent: "center",
                                alignItems: "center",
                                justifyContent: "center",
                                justifySelf: "flex-start",
                                padding: "2rem" }}>
                            <img style={{ borderRadius: "1rem", width: "26rem", objectFit: "cover", height: "100%" }} src={require("../../assets/new_qr_code.jpg")} alt="qrcode" />
                        </GreyCardWrapper>
                    </div> :
                    <Column style={{ paddingTop: "0", width: "100%", alignItems: "center", justifyContent: "center", justifyItems: "center", gap: "3rem" }}>
                        <GreenCardWrapper style={{ height: "18.75rem", width: "30.5rem", padding: "8rem 2rem", zIndex: "2", position: "relative" }}>
                            <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                                <FontAwesomeIcon style={{ fontSize: "4rem", marginRight: "0.75rem", transform: "rotate(-64deg)" }} icon={faTicketAlt} />
                                <h3 style={{ textAlign: "justify" }}>Vous recevrez une énigme sous cette forme par exemple.</h3>
                            </div>
                        </GreenCardWrapper> 
                        <GreyCardWrapper style={{ width: "30.5rem", height: "18.75rem", alignContent: "center", alignItems: "center", justifyContent: "center", justifySelf: "flex-start", padding: "2rem" }}>
                            <p style={{ fontFamily: "Poppins", fontStyle: "normal", fontWeight: "800", fontSize: "2rem", color: "rgba(0, 0, 0, 0.5)" }}>
                                "A 115m de haut, <br />côté nord"
                                <br />
                                48.858, 2.294"
                            </p>
                        </GreyCardWrapper>
                        <GreenCardWrapper style={{ height: "18.75rem", width: "30.5rem", padding: "8rem 2rem", zIndex: "2", position: "relative" }}>
                            <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                                <FontAwesomeIcon style={{ fontSize: "4rem", marginRight: "0.75rem" }} icon={faQrcode} />
                                <h3 style={{ textAlign: "justify" }}>Avec les indices de l’énigme, on peut donc déduire un périmètre de recherche pour dénicher le QRcode.</h3>
                            </div>
                        </GreenCardWrapper>
                        <GreyCardWrapper
                            style={{
                                width: "30.5rem",
                                height: "18.75rem",
                                alignContent: "center",
                                alignItems: "center",
                                justifyContent: "center",
                                justifySelf: "flex-start",
                                padding: "2rem" }}>
                            <img style={{ borderRadius: "1rem", width: "26rem", objectFit: "cover", height: "100%" }} src={require("../../assets/little_paris.png")} alt="paris" />
                        </GreyCardWrapper>
                        <GreenCardWrapper style={{ height: "18.75rem", width: "30.5rem", padding: "8rem 2rem", zIndex: "2", position: "relative" }}>
                            <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                                <FontAwesomeIcon style={{ fontSize: "4rem", marginRight: "0.75rem" }} icon={faStar} />
                                <h3 style={{ textAlign: "justify" }}>
                                    Une fois trouvé, ouvrez votre application Maiar afin de scanner le QRcode.
                                    <br />
                                    <span style={{ fontSize: "0.85rem", color: "#D0D0D0" }}>Attention, avant de signer, vérifier l'origine de la transaction</span>
                                </h3>
                            </div>
                        </GreenCardWrapper>
                        <GreyCardWrapper
                            style={{
                                width: "30.5rem",
                                height: "18.75rem",
                                alignContent: "center",
                                alignItems: "center",
                                justifyContent: "center",
                                justifySelf: "flex-start",
                                padding: "2rem" }}>
                            <img style={{ borderRadius: "1rem", width: "26rem", objectFit: "cover", height: "100%" }} src={require("../../assets/new_qr_code.jpg")} alt="qrcode" />
                        </GreyCardWrapper>
                    </Column>
                }
            </Column>
        </Panel>
    );
}


export default WhatIsEnigma;


