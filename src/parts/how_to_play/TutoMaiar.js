import Column from "../../components/Column";
import Panel from "../../components/Panel";
import Row from "../../components/Row";
import { Text } from "../../components/Titles";
import { useEffect, useRef, useState } from "react";
import styled, { css, keyframes} from "styled-components";
import Button from "../../components/Button";
import ScrollableRow, { ScrollElementWrapper, ScrollableRowWrapper} from "../../components/Scroll";


const createKeyframes = (a, b, t) => {
    let steps = "";

    steps += `
    0% {
        opacity: 1;
    }
    ${Math.round((a/t)*100)}% {
        opacity: 1;
    }
    ${Math.round(((a+b)/t)*100)}% {
        opacity: 0;
    }
    ${Math.round(100 - ((b/t)*100))}% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
    `;

    const result = keyframes`${steps}`;

    return result;
}

const createCss = (t, d, n) => {
    let styles = "";

    for (let i = 1; i <= n; i++) {
        styles += `
            img:nth-child(${i}) {
                animation-delay: ${i * d}s;
            }
        `;
    }

    return css`${styles}`;
}


const AnimatedImage = styled.div`
    position: relative;
    width: 15.625rem;

    img {
        width: 15.625rem;
        object-fit: contain;
        box-shadow: inset 0px -4px 32px rgba(0, 0, 0, 0.25);
        border-radius: 0.5rem;
        animation: ${props => css`${createKeyframes(props.a, props.b, props.t)} ease-in-out infinite ${props.t}s normal`};
    }

    ${props => createCss(props.t, props.d, props.n)}
`;


const ScrollElement = ({ text, img }) => {
    const a = 3;
    const b = 1;
    let t = (a + b) * img.length;
    let d = Math.round(t / img.length);
    return (
        <ScrollElementWrapper style={{ justifyContent: "space-between"}}>
            { img.length > 1 ?
                <AnimatedImage a={a} b={b} t={t} d={d} n={img.length}>
                    {img.map((item, index) => (
                        <img
                            key={index}
                            alt="tuto_maiar"
                            draggable={false}
                            style={{ top: "0", left: "0", position: `${index == 0 ? "initial" : "absolute" }`, zIndex: `${img.length - index}`}}
                            src={item} />
                    ))}
                </AnimatedImage>
            : <img
                alt="tuto_maiar"
                draggable={false}
                style={{ width: "15.625rem", objectFit: "contain", boxShadow: "inset 0px -4px 32px rgba(0, 0, 0, 0.25)", borderRadius: "0.5rem" }}
                src={img[0]} />
            }
            <Text light style={{ textAlign: "justify"}}>
                { text }
            </Text>
        </ScrollElementWrapper>
    );
}

const tutorial_maiar = [
    {
        "img": [
            require("../../assets/1.jpg"),
            require("../../assets/2.jpg"),
            require("../../assets/3.jpg"),
            require("../../assets/4.jpg"),
            require("../../assets/5.jpg")
        ],
        "text": "Se créer un compte: Les premières étapes"
    },
    {
        "img": [require("../../assets/6.jpg")],
        "text": "Association de votre numéro de téléphone à votre compte. Cette information sera stockée sur la blockchain mais de manière protégée et sécurisée"
    },
    {
        "img": [require("../../assets/7.jpg"), require("../../assets/8.png")],
        "text": "Création de votre code pour vous connecter sur l'application"
    },
    {
        "img": [require("../../assets/9.jpg"), require("../../assets/10.jpg"), require("../../assets/11.jpg")],
        "text": 'Cette phase est la plus importante: Cette "phrase" secrète est celle qui vous permettra de pouvoir vous connecter à l\'application Maiar depuis n\'importe quel appareil. Si vous la perdez, vous perdez vos fonds'
    },
    {
        "img": [require("../../assets/maiar5.png")],
        "text": "Conservez votre phrase secrète précieusement et ne la partagez jamais ! Ensuite vous pourrez associer un pseudo à votre compte. Ce pseudo est appelé Herotag."
    },
    {
        "img": [require("../../assets/maiar6.png")],
        "text": "Votre compte est désormais créé ! Il vous est alors possible d'acheter, épargner ou envoyer vos jetons via l'application. Vous voulez acheter un ticket X'PLORE ? Suivez le tutoriel suivant !"
    },
]

export const TutoMaiar = () => {
    return (
        <Panel id="tutorial-maiar" backgroundColor="#1F2B3A" style={{ height: "auto"}}>
            <Column style={{ width: "100%", color: "#D0D0D0", height: "100%"}}>
                <h2 >Tutoriel Maiar</h2>
                <ScrollableRow>
                    <Column style={{ gap: 0, padding: 0, height: "auto" }}>
                        <Row style={{ alignItems: "flex-start", position: "relative", paddingLeft: "2.5rem" }}>
                            <h1 style={{ position: "absolute", bottom: "0", left: "0", fontSize: "10rem" }}>1</h1>
                            {tutorial_maiar.map((item, index) => 
                                <ScrollElement text={item.text} key={index} img={item.img}/>
                            )}
                        </Row>
                        <Row style={{ gap: "0", width: "100%", justifyContent: "flex-end", padding: "0 3.75rem" }}>
                            <Button secondary style={{ width: "auto"}}>
                                <h6>Télécharger l'application Maiar</h6>
                            </Button>
                        </Row>
                    </Column>
                </ScrollableRow>
            </Column>
        </Panel>
    )
}