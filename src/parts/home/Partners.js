import styled from "styled-components";
import Panel from "../../components/Panel";
import Column from "../../components/Column";
import Row from "../../components/Row";

const Partners = (props) => {
    return(
        <Panel style={{ height: "auto", alignItems: "flex-start", backgroundColor: "#FFF" }}>
            <Column style={{ width: "100%", height: "100%" }}>
                <h3>Partenaires</h3>
                <div style={{ width: "100%", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(12.5rem, 1fr))", gap: "1.5rem"}}>
                    {props.partners.map((element, index) => (
                        <PartnerImage src={element} alt={index} key={index} />
                    ))}
                </div>
            </Column>
        </Panel>
    );
}

const PartnerImage = styled.img`
    width: 12.5rem;
    height: 12.5rem;
    object-fit: cover;
    justify-self: center;
`;

export default Partners;