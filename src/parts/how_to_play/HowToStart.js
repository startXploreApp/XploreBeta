import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "../../components/Button";
import Column from "../../components/Column";
import Panel from "../../components/Panel";
import Row from "../../components/Row";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Step = ({ text1, text2, button = false }) => {
    return (<div style={{ display: "flex", flexDirection: "row", position: "relative" }}>
        <img src={require("../../assets/arrow_1.svg").default} style={{ height: "18vh", paddingTop: 5, marginRight: 30 }} />
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
        <Panel backgroundColor={"#1F2B3A"} style={{ color: "white" }}>
            <img src={require("../../assets/pexels-anna-shvets-5257268.jpg")} style={{ height: '100vh', objectFit: "contains" }} />
            <Column style={{ width: "100%" }}>
                <h2 style={{ lineHeight: "42px", marginBottom: "5vh" }}>
                    Comment démarrer l’aventure ?
                </h2>
                <div>
                    <Step text1="Créer un portefeuille Maiar" text2="Acheter le jeton EGLD" button="text1" />
                    <img src={require("../../assets/arrow_2.svg").default} style={{ height: "17vh", marginLeft: "50%", marginTop: "-3%", marginBottom: "-5%" }} />
                    <Step text1="Se connecter à l’application avec son portefeuille" text2="Échanger des jetons EGLD contre un ticket" button="text2" />
                    <img src={require("../../assets/arrow_3.svg").default} style={{ height: "13vh", marginLeft: "55%", marginTop: "3%", marginBottom: "-5%" }} />
                    <p style={{ marginLeft: "70px" }}>Partir en quête du monde !</p>
                </div>
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


