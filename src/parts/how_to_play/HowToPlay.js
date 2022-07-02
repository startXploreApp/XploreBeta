import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import HowToStart from "./HowToStart";
import StartGuide from "./StartGuide"


const HowToPlay = () => {
    return (
        <>
            <StartGuide />
            <HowToStart />
        </>
    );
}

export default HowToPlay;