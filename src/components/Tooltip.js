import styled from "styled-components";

const Tooltip = styled.div`
    position: absolute;
    display: inline-block;
    visibility: hidden;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 0.75rem;
    padding: 5px 5px;
    position: absolute;
    z-index: 1;
    translate: -50%;
    top: -65px;
    left: 50%;
    width: 5.5rem;

    &::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: black transparent transparent transparent;
    }

`;

export default Tooltip;