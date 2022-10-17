import Column from "../../components/Column"
import Panel from "../../components/Panel"
import Row from "../../components/Row"
import { Text } from "../../components/Titles"

export const TutoTicket = () => {
    return (
        <Panel backgroundColor="#F8F9FA" style={{ height: "auto" }}>
            <Column style={{ width: "100%", color: "#111113", height: "100%" }}>
                <h2 >Tutoriel pour acheter un ticket</h2>
                <Row style={{ width: "100%", justifyContent: "center"}}>
                    <h3 style={{ fontFamily: "Praise", fontSize: "4.5rem", color: "#007BFF" }}>A venir prochainement !</h3>
                </Row>
            </Column>
        </Panel>
    )
}