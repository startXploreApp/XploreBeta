import styled, { css } from "styled-components";

const Panel = styled.div`
    width: 100%;
    height: ${props => props.firstPage ? "calc(100vh - 10rem)" : "100vh"};
    margin-top : ${props => props.firstPage ? "10rem" : "0px"};
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 2px dashed blue;
    background-color : ${props => props.black ? "#1F2B3A" : "none"}
`;

export default Panel;