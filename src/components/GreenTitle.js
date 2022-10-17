import styled from "styled-components";


export const GreenLine = styled.div`
    width : 100%;
    background-color:#7CC295;
    height : 2rem;
    margin-left : ${props => props.position === "right" ? "-3.75rem" : "3.75rem"};
`;

const GreenTitle = ({ position = "right", title }) => {
    return (
        <div style={position === "right" ? { marginRight: "-3.75rem" } : { marginLeft: "-3.75rem" }}>
            <GreenLine position={position === "right" ? "left" : "right"} />
            <h1 
                style={{
                    marginRight: position === "right" ? "20rem" : "5rem", 
                    marginLeft: position === "right" ? "5rem" : "20rem", 
                    marginTop: 15, marginBottom: 15, color: "#1FCE55", 
                    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}>
                {title}
            </h1>
            <GreenLine position={position} />
        </div>
    )
}

export default GreenTitle;