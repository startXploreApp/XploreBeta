import styled from "styled-components";

const Panel = styled.div`
    width: 100%;
    height: ${props => props.firstPage ? "calc(100vh - 10rem)" : "100vh"};
    display: flex;
    overflow : hidden;
    flex-direction: row;
    align-items: center;
    background-color : ${props => props.backgroundColor ? props.backgroundColor : "none"};

    @media (max-width: ${({theme}) => theme.screen.medium}) {
        height: auto;
        align-items: flex-start;
    }
`;

export default Panel;