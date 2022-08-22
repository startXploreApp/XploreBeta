
import Column from "../../components/Column";
import { Icon } from "../../components/Icon";
import Panel from "../../components/Panel";
import Row from "../../components/Row";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCode, faDiagramProject, faImage, faPaintbrush, faProjectDiagram, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Profil = ({ image = require("../../assets/pexels-anna-shvets-5257268.jpg"), name, role, linkedin, section, lightMode = true, icon }) => {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <img style={{ width: "15vw", height: "15vw", objectFit: "cover", borderRadius: "15vw" }} src={image} alt="profil" />
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "1rem" }}>
                <Icon
                    lightMode={lightMode}
                    icon={faLinkedin}
                    style={{ fontSize: "28px", marginRight: "0.75rem" }} />
                <h5>{name}</h5>
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "1rem" }}>
                <FontAwesomeIcon icon={section === "Chief" ? faTrophy : section === "Dev" ? faCode : icon} style={{ fontSize: "28px", marginRight: "0.75rem" }} />
                <h5>{role}</h5>
            </div>
        </div>
    )
}

export const TeamPresentation = () => {
    return (
        <>
            <Column>
                <h2>L'équipe</h2>
            </Column>
            <Panel style={{ height: "min-content", width: "100%", backgroundColor: "#1F2B3A", color: "#FFF" }}>
                <Column style={{ width: "100%" }}>
                    <Row style={{ width: "100%", justifyContent: "space-around" }}>
                        <Profil lightMode={false} section="Chief" name="Alexandre Siguret" role="Chief Executive Officer" />
                        <Profil lightMode={false} section="Chief" name="Tom Orvain" role="Chief Operating Officer" />
                        <Profil lightMode={false} section="Chief" name="Pierre Le Dez" role="Chief Technical Officer" />
                    </Row>
                </Column>
            </Panel>
            <Panel style={{ height: "min-content", width: "100%", color: "#111113" }}>
                <Column style={{ width: "100%" }}>
                    <Row style={{ width: "100%", justifyContent: "space-around" }}>
                        <Profil section="Dev" name="Sarah Clauzade--Robert" role="Developer" />
                        <Profil section="Dev" name="Pierre Le Dez" role="Developer" />
                    </Row>
                </Column>
            </Panel>
            <Panel style={{ height: "min-content", width: "100%", backgroundColor: "#FFF", color: "#111113" }}>
                <Column style={{ width: "100%" }}>
                    <Row style={{ width: "100%", justifyContent: "space-around" }}>
                        <Profil name="Alexandre Siguret" role="Graphiste / Illustratrice" icon={faPaintbrush} />
                        <Profil name="Tom Orvain" role="UI/UX - Designer" icon={faImage} />
                        <Profil name="???" role="Marketing & Communication" icon={faProjectDiagram} />
                    </Row>
                </Column>
            </Panel>
        </>
    )
}