import Column from '../../components/Column';
import Row from '../../components/Row';
import Button from '../../components/Button';
import { GreenLine } from '../../components/GreenTitle';
import Panel from '../../components/Panel';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

const WhatIsXplore = () => {
    return (
        <Panel firstPage style={{ height: "auto" }}>
            <div style={{ width: "100%", height: "100%", display: "grid", gridTemplateColumns: "40% 60%"}}>
                <Column style={{ height: "100%", justifyContent: "space-evenly" }}>
                    <Column style={{width: "100%", padding: "0"}}>
                        <GreenLine style={{ margin: "0", width: "calc(100% + 3.75rem)" }} />
                        <h1 
                            style={{
                                color: "#1FCE55", 
                                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}>
                            X'plore c'est quoi ?
                        </h1>
                        <GreenLine style={{ width: "calc(100% + 3.75rem)" }} position="right" />
                    </Column>
                    <Column style={{ padding: "0" }}>
                        <h5>
                            Une chasse au trésor à la découverte du monde <br/>
                            Une aventure unique et récompensée <br />
                            L'éducation à la blockchain <br/>
                            Une équipe de passionés <br/>                            
                        </h5>
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
                <img
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    src={require("../../assets/pexels-fauxels-3184360.jpg")}
                    alt="litepaper"/>
            </div>
        </Panel>
    );
}

export default WhatIsXplore;