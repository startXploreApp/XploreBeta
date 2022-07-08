import styled from "styled-components";
import Button from "../../components/Button";
import Column from "../../components/Column";
import Panel from "../../components/Panel";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NewsLetter = () => {
    return(
        <Panel style={{ height: "22vh", backgroundColor: "#1F2B3A", position: "relative", overflowY: "hidden" }}>
            <Ellipse width="50px" height="50px" top="12%" left="22%" />
            <Ellipse width="29px" height="29px" top="5%" left="26%" />
            <Ellipse width="85px" height="85px" top="12%" left="62%" />
            <Ellipse width="99px" height="99px" top="4%" left="94%" />
            <Ellipse width="384px" height="220px" top="43%" left="64%"/>
            <div style={{ padding: "2.5rem 3.75rem", gap: "0.625rem", display: "grid", gridTemplateColumns: "75% 25%" }}>
                <Column style={{ gap: "0.3rem", alignItems: "flex-start", padding: "0px", isolation: "isolate" }}>
                    <h2 style={{ fontFamily: "Poppins", color: "white" }}>NewsLetter</h2>
                    <p style={{ fontFamily: "Inter", color: "#D0D0D0", fontSize: "1rem", fontWeight: "500" }}>Rejoignez notre liste de diffusion pour rester au courant de nos dernières fonctionnalités, obtenir des conseils et  des astuces pour naviguer dans X’Plore.</p>
                </Column>
                <Column style={{ width: "100%", gap: "0.5rem", padding: "0" }}>
                    <Input type="text" name="newsletter" placeholder="Email" />
                    <Button style={{ zIndex: "2", display: "flex", justifyContent: "center", alignItems: "center", alignContent: "center", width: "100%" }}>
                        <h6>S'inscrire</h6>
                        <FontAwesomeIcon icon={faPaperPlane} size={"xl"} />
                    </Button>
                </Column>
            </div>
        </Panel>
    );
}

export default NewsLetter;



const Ellipse = styled.div`
    position: absolute;
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius: 50%;
    top: ${props => props.top};
    left: ${props => props.left};
    background: linear-gradient(95.11deg, #12A04B -1.7%, #25313F 99.97%);
    opacity: 0.3;
    z-index: 0;
`;

const Input = styled.input`
    width: 100%;
    font-size: 1rem;
    font-family: "Inter";
    font-weight: 500;
    line-height: 1.2rem;
    padding: 0.7rem 0.8rem;
    color: #6C757D;
    background: #FFFFFF;
    border: 1px solid #6C757D;
    border-radius: 0.5rem;
    z-index: 2;

    ::placeholder {
        font-size: 1rem;
        font-family: "Inter";
        font-weight: 500;
        line-height: 1.2rem;
        color: #d0d0d0;
        opacity: 1;
    }
`;