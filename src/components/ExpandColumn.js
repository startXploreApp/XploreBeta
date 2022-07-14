import styled from "styled-components";
import Column from "./Column";

export const ExpandColumnWrapper = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    
    @media (max-width: ${({theme}) => theme.screen.medium}) {
        display: flex;
        flex-direction: column;
        height: auto;
    }
`;

const ExpandColumn = styled(Column)`
    height: 100vh;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 2px dashed red; */
    padding: 0;
    transition: all 0.5s ease-in-out;
    transition-delay: 0.25s;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0;

    &:hover {
        flex-basis: 60%;
    }

    @media (max-width: ${({theme}) => theme.screen.medium}) {
        width: 100%;
        flex-basis: 100%;
        height: auto;
    }

`;

export const ExpandColumnImage = styled.img`
    background: ${props => props.image ? "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(" + props.image + ")" : null};
`;

export const ExpandColumnContentWrapper = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    color: white;

    p {
        max-width: 85%;
        transition: all 0.5s ease-in-out;
        transition-delay: 0.25s;
    }

    &:hover {
        p {
            max-width: 50%;
        }   
    }

    @media (max-width: ${({theme}) => theme.screen.medium}) {
        &:hover {
            p{
                max-width: 100%;
            }
        }
    }
`;

export default ExpandColumn;