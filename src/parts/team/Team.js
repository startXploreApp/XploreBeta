import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../components/Button";
import Column from "../../components/Column";
import Panel from "../../components/Panel";
import Row from "../../components/Row";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { TeamPresentation } from "./TeamPresentation";
import { Partners } from "./Partners";
import { ContactUs } from "./ContactUs";

const Team = () => {
    return (
        <>
            <Panel style={{ position: "relative" }} firstPage>
                <img alt="team" src={require("../../assets/team.png")} style={{ height: "100%", width: "100%", objectFit: "cover", position: "absolute" }} />
                <Column style={{ alignItems: "flex-start", justifyContent: "flex-end", color: "white", height: "100%", zIndex: 1 }}>
                    <h1>Découvrez notre équipe d’aventuriers</h1>
                    <Row style={{ gap: "1.5rem" }}>
                        <Button secondary>
                            <h6>Nous découvrir</h6>
                        </Button>
                        <Button primary>
                            <h6>Partir à l'aventure</h6>
                            <FontAwesomeIcon icon={faRocket} size={"xl"} />
                        </Button>
                    </Row>
                </Column>
            </Panel>
            <TeamPresentation />
            {/* <Partners /> */}
            <Panel style={{ height: "min-content" }}>
                <Column style={{ padding: "0", width: "100%", }}>
                    <img
                        style={{ objectPosition: "center 70%", width: "100%", height: "300px", objectFit: "cover" }}
                        src={require("../../assets/pexels-oziel-gómez-860562.jpg")}
                        alt="4" />
                </Column>
            </Panel>
            <ContactUs />
        </>
    );
}

export default Team;