import React from 'react'
import Panel from './Panel'
import styled, { css } from "styled-components";


const Overlay = styled.div`
    background-color : black;
    opacity : 50%;
    width : 100vw;
    height : 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index : -1;
`;

export const BackgroundImage = ({ image }) => {
    return (
        <div >
            <Overlay />
            <img src={image} style={{ position: "absolute", top: 0, left: 0, width: '100vw', height: '100vh', objectFit: "cover", zIndex: -2 }} />
        </div>
    )



}