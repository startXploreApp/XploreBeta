import Column from "../../components/Column"
import Panel from "../../components/Panel"
import styled from "styled-components";
import Button from "../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Input = styled.input`
    border-radius : 5px;
    padding : 0.5rem;
    width : 100%;
    border : 1px solid #6C757D;
    font-size: 1rem;
    font-family: "Inter";
`;

const TriangleWrapper = styled.div`
    margin-left: "auto";
    margin-right: 0; 
    position: 'relative';
    z-index: -1;

    @media (max-width: ${({theme}) => theme.screen.medium}) {
        display: none;
    }
`;

const ContactUsWrapper = styled(Column)`
    width: 50%;

    @media (max-width: ${({theme}) => theme.screen.medium}) {
        width: 100%;
    }

`;

export const ContactUs = () => {
    return (
        <Panel style={{ height: "auto", width: "100%", position: "relative", alignItems: "flex-start" }}>
            <ContactUsWrapper>
                <h2>Nous contacter</h2>
                <Input placeholder="Nom" />
                <Input type="email" placeholder="Mail" />
                <textarea rows={4} style={{ width: "100%", borderRadius: "5px", padding: "0.5rem", border: "1px solid #6D757D", fontSize: "1rem", fontFamily: "Inter" }} placeholder="Message" />
                <Button style={{ zIndex: "2", display: "flex", justifyContent: "center", alignItems: "center", alignContent: "center" }}>
                    <h6>Envoyer</h6>
                    <FontAwesomeIcon icon={faPaperPlane} size={"xl"} />
                </Button>
            </ContactUsWrapper>
            <TriangleWrapper>
                <svg preserveAspectRatio="xMidYMin meet" style={{ position: 'absolute', top: 0, right: 0 }} width="100vw" height="200vh" viewBox="0 0 683 423" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M683 423V0L0 423H683Z" fill="#1F2B3A" />
                </svg>
                <svg preserveAspectRatio="xMidYMin meet" style={{ position: 'absolute', top: 0, right: 0 }} width="30vw" height="100vh" viewBox="0 0 423 420" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.3" d="M423 0H0L423 420V0Z" fill="black" />
                </svg>
            </TriangleWrapper>
        </Panel>
    )
}