import styled, { css } from "styled-components";
import Tooltip from "./Tooltip";

const Button = styled.button`
    font-size: 0.75rem;
    padding: 0.5rem 1rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: "relative";
    gap: 0.5rem;
    border: ${props => props.primary ? "1px solid " + props.theme.colors.primary : props.secondary ? "1px solid #000" : props.ghost ? "1px solid #FFF" : "none"};
    border-radius: 0.5rem;
    color: ${props => props.primary || props.secondary ? "#000" : "#fff"};
    background-color: ${props => props.primary ? props.theme.colors.primary : props.secondary ? "#fff" : props.ghost ? "transparent" : "#000"};
    transition: all 0.2s ease-out;

    &:hover {
        cursor: pointer;
        transform: scale(1.05);

        ${Tooltip} {
            visibility: visible;
        }
    }
`;

export default Button;