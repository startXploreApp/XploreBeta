import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button";
import Column from "../../components/Column";
import Panel from "../../components/Panel";
import Row from "../../components/Row";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { BackgroundImage } from "../../components/BackgroundImage";

const Step = ({ text1, text2, button = false }) => {
    return (<div style={{ display: "flex", flexDirection: "row", position: "relative" }}>
        <img src={require("../../assets/arrow_1.svg").default} style={{ height: 110, paddingTop: 5, marginRight: 30 }} />
        <div style={{ display: "flex", justifyContent: 'space-between', flexDirection: "column" }}>
            {button === "text1" ? (<Row style={{ marginTop: '-10px' }}>
                <p>{text1}</p>
                <Button ghost>Découvrir comment</Button>
            </Row>) : (<p>{text1}</p>)}

            <div>
                {button === "text2" ? (<Row style={{ marginBottom: "-10px" }}>
                    <p>{text2}</p>
                    <Button ghost>Découvrir comment</Button>
                </Row>) : (<p>{text2}</p>)}
            </div>
        </div>
    </div>)
}



const HowToStart = () => {
    return (
        <Panel black>
            <img src={require("../../assets/pexels-anna-shvets-5257268.jpg")} style={{ height: '100%', objectFit: "contains" }} />
            <Column style={{ color: "white" }}>
                <h2 style={{ lineHeight: "42px" }}>
                    Comment démarrer l’aventure ?
                </h2>
                <div style={{ fontSize: "0.75rem" }}>
                    <Step text1="Créer un portefeuille Maiar" text2="Acheter le jeton EGLD" button="text1" />
                    <img src={require("../../assets/arrow_2.svg").default} style={{ height: 100, marginLeft: "50%", marginTop: "-3%", marginBottom: "-5%" }} />
                    <Step text1="Se connecter à l’application avec son portefeuille" text2="Échanger des jetons EGLD contre un ticket" button="text2" />
                    <img src={require("../../assets/arrow_3.svg").default} style={{ height: 100, marginLeft: "55%", marginTop: "3%", marginBottom: "-5%" }} />
                    <p style={{ marginLeft: "70px" }}>Partir en quête du monde !</p>
                </div>
            </Column>
        </Panel>
    );
}

export default HowToStart;


