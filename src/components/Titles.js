import styled from "styled-components";

export const TitleSection = styled.h2`
    font-weight:700;
    color : ${props => props.color};
`;

export const SubTitle = styled.h2`
    margin-bottom: 0.75rem;
    font-weight: 700;
`;

export const Text = styled.p`
    font-family: Inter;
    font-weight: ${props => props.light ? 500 : 700};
    line-height: 19px
`;