import styled from "styled-components";

export const Box = styled.div`
    display: flex;
    flex-direction: ${props => props.column ? "column" : "row"};
    align-items: center;
    justify-content:${props => props.column ? "center" : "flex-start"};
    padding: 2rem;
    gap: 0.5rem;
    border: 0.25rem solid #1f2b3a;
    box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
    border-radius: ${props => props.column ? "16px" : "24px"};
    background-color : white;
    ${props => props.column ? "max-width : 30rem" : null}
    
`;