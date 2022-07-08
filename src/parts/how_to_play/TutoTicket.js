import Column from "../../components/Column"
import Panel from "../../components/Panel"
import Row from "../../components/Row"
import { Text } from "../../components/Titles"

export const TutoTicket = () => {
    return (
        <Panel backgroundColor="#F8F9FA" style={{ height: "auto" }}>
            <Column style={{ width: "100%", color: "#111113", height: "100%" }}>
                <h2 >Tutoriel pour acheter un ticket</h2>
                <Row style={{ width: "100%", justifyContent: "space-between", alignItems: "flex-end" }}>
                    <h1 style={{ fontSize: "10rem" }}>2</h1>
                    <Column>
                        <img
                            style={{ width: "20vw", objectFit: "contain" }}
                            src={require("../../assets/tutoMaiar.png")} />
                        <Text light>
                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                        </Text>
                    </Column>
                    <Column>
                        <img
                            style={{ width: "20vw", objectFit: "contain" }}
                            src={require("../../assets/tutoMaiar.png")} />
                        <Text light>
                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                        </Text>
                    </Column>
                    <Column>
                        <img
                            style={{ width: "20vw", objectFit: "contain" }}
                            src={require("../../assets/tutoMaiar.png")} />
                        <Text light>
                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                        </Text>
                    </Column>
                </Row>
            </Column>
        </Panel>
    )
}