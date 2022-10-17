import Column from "../../components/Column"
import Panel from "../../components/Panel"
import Row from "../../components/Row"


export const Partners = () => {
    const partners = [
        { logo: require("../../assets/Partners.png") },
        { logo: require("../../assets/Partners.png") },
        { logo: require("../../assets/Partners.png") },
        { logo: require("../../assets/Partners.png") },
        { logo: require("../../assets/Partners.png") },
    ];
    return (
        <Panel style={{ height: "min-content" }}>
            <Column style={{ width: "100%" }}>
                <h2>Partenaires</h2>
                <Row style={{ width: "100%", justifyContent: "center" }}>
                    {partners.map((partner) => {
                        return (
                            <img src={partner.logo} style={{ width: '100%', objectFit: 'contain', marginLeft: "2vw", marginRight: '2vw' }} alt="logo partner" />
                        )
                    })}
                </Row>
            </Column>
        </Panel>
    )
}