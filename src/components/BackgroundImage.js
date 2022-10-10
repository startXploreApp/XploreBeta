import React from 'react'
import Panel from './Panel'
import styled, { css } from "styled-components";
import { motion } from 'framer-motion';

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
            <motion.div
                layout
                style={{zIndex:-2}}
                key={ image }
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    opacity: { ease: "easeInOut", duration: 1}
                }}>
                <img src={image} style={{ ...imgStyle, position: "absolute", top: 0, left: 0, width: '100%', height: '100vh', objectFit: "cover", zIndex: -3 }} />
            </motion.div>
        </>
    )



}