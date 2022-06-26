import styled, { css } from "styled-components";

const Panel = styled.div`
    width: 100%;
    height: ${props => props.firstPage ? "calc(100vh - 10rem)" : "100vh"};
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 2px dashed blue;
`;

export default Panel;