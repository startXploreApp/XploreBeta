import React from 'react'
import Panel from './Panel'
import styled, { css } from "styled-components";


const Overlay = styled.div`
    background-color : black;
    opacity : ${props => props.opacity};
    width : 100%;
    height : 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index : -1;
`;

export const BackgroundImage = ({ image, opacity="50%", imgStyle={} }) => {
    return (
        <>
            <Overlay opacity={opacity}/>
            <img src={image} style={{ ...imgStyle, position: "absolute", top: 0, left: 0, width: '100%', height: '100vh', objectFit: "cover", zIndex: -2 }} />
        </>
    )



}