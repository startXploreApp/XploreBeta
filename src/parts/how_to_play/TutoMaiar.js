import Column from "../../components/Column"
import Panel from "../../components/Panel"
import Row from "../../components/Row"
import { Text } from "../../components/Titles"

export const TutoMaiar = () => {
    return (
        <Panel backgroundColor="#1F2B3A" style={{ height: "auto"}}>
            <Column style={{ width: "100%", color: "#D0D0D0", height: "100%"}}>
                <h2 >Tutoriel Maiar</h2>
                <Row style={{ width: "100%", justifyContent: "space-between", alignItems: "flex-end" }}>
                    <h1 style={{ fontSize: "10rem" }}>1</h1>
                    <Column>
                        <img
                            style={{ width: "20vw", objectFit: "contain" }}
                            src={require("../../assets/tutoMaiar.png")}
                        />
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