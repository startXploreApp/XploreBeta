import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const Icon = styled(FontAwesomeIcon)`
    transition: color 0.2s ease-in-out;
    color: ${props => props.active ? props.theme.colors.primary : props.lightMode ? "#000" : "#FFF"};
    &:hover {
        cursor: pointer;
        color: #19a544;
    }
`;