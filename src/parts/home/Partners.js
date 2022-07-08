import styled from "styled-components";
import Panel from "../../components/Panel";
import Column from "../../components/Column";
import Row from "../../components/Row";

const Partners = (props) => {
    return(
        <Panel style={{ height: "45vh", alignItems: "flex-start", backgroundColor: "#FFF" }}>
            <Column style={{ width: "100%", height: "100%" }}>
                <h3>Partenaires</h3>
                <div style={{ width: "100%", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem"}}>
                    {props.partners.map((element, index) => (
                        <img style={{ width: "200px", height: "200px", objectFit: "cover", justifySelf: "center" }} src={element} alt={index} key={index} />
                    ))}
                </div>
            </Column>
        </Panel>
    );
}

export default Partners;