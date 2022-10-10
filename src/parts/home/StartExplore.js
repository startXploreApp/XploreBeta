import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import Panel from "../../components/Panel";
import Column from "../../components/Column";
import Row from "../../components/Row";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { BackgroundImage } from "../../components/BackgroundImage";
import useLongPress from "../../hooks/useLongPress";
import whitepaper from '../../media/whitepaper.pdf';

const background_images = [
    [require("../../assets/pexels-tobias-aeppli-1125272.jpg"), "-1"],
    [require("../../assets/background_2.png"), "-1"],
    [require("../../assets/background_3.png"), "-1"],
    [require("../../assets/background_4.png"), "-1"],
    [require("../../assets/background_5.png"), "-1"],
    [require("../../assets/background_6.png"), "-1"]
]

const StartExplore = () => {

    const [currentBackground, setCurrentBackground] = useState(0)

    const changeBackground = () => {
        console.log("change background now");
        if (currentBackground < (background_images.length - 1)) {
            setCurrentBackground(currentBackground+1)
        } else {
            setCurrentBackground(0)
        }
    }

    const clickLongPress = useLongPress(changeBackground, 2000);

    return (
        <Panel
            {...clickLongPress}
            firstPage>
            <BackgroundImage
                opacity="20%"
                image={background_images[currentBackground][0]}
                imgStyle={{ transform: `scaleX(${background_images[currentBackground][1]})`}}/>

                <a href={whitepaper} target="_blank" rel="noreferrer"> 
                    <Button primary style={{ padding: "1.5rem", position: "absolute", top: "40%", left: "50%", transform: "translate(-50%, 0)"}}>
                        <h5 style={{ fontSize: "2rem"}}>
                            Whitepaper
                        </h5>
                    </Button>
                </a>

                <h2 style={{ position: "absolute", bottom: "5%", left: "2%", lineHeight: "42px", color: "white" }}>
                    Bienvenue dans le premier jeu décentralisé <br />
                    qui vous récompense pour 
                    <span style={{ fontFamily: "Praise", fontSize: "4.5rem", color: "#FFBD3F" }}>voyager</span>
                </h2>

                <h6 style={{ position: "absolute", bottom: "5%", right: "5%", color: "white", transform: "rotate(-10.67deg)", opacity: "0.8"}}>
                    Maintien le clic enfoncé pour <br />changer d'environnement
                </h6>
        </Panel>
    );
}

export default StartExplore;