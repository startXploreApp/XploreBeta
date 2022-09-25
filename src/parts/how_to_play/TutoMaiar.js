import Column from "../../components/Column";
import Panel from "../../components/Panel";
import Row from "../../components/Row";
import { Text } from "../../components/Titles";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Button from "../../components/Button";

const ScrollElement = ({ text, img }) => {
    return (
        <ScrollElementWrapper>
            <img
                alt="tuto_maiar"
                style={{ width: "15.625rem", objectFit: "contain", boxShadow: "inset 0px -4px 32px rgba(0, 0, 0, 0.25)", borderRadius: "0.5rem" }}
                src={img}
            />
            <Text light style={{ textAlign: "justify"}}>
                { text }
            </Text>
        </ScrollElementWrapper>
    );
}

const ScrollElementWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    box-sizing: content-box;
    padding: 2.5rem 3.75rem;
    gap: 2rem;
    

    img {
        transition: all 0.2s ease-in;
        :hover {
            transform: scale(1.05);
        }
    }
`;

const ScrollableRowWrapper = styled(Row)`
    width: 100%;
    justify-content: space-between;
    align-items: flex-end;
    overflow-x: scroll;
    overflow-y: hidden;
    ::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;    
    scrollbar-width: none;

    :hover {
        cursor: pointer;
    }

    .active {
        cursor: grab;
    }
`;

const ScrollableRow = ({ children }) => {
    const ref = useRef(null);


    useEffect(() => {
        const slider = ref.current;
        let startX;
        let scrollLeft;
        let isDown = false;
        
        slider.addEventListener('mousedown', (event) => {
            isDown = true;
            slider.classList.add('active');
            startX = event.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mousemove', (event) => {
            if(!isDown) return;
            event.preventDefault();
            const x = event.pageX - slider.offsetLeft;
            const walk = (x - startX) * 1.5;
            slider.scrollLeft = scrollLeft - walk;
        })
      }, []);

    return (
        <ScrollableRowWrapper ref={ref}>
            { children }
        </ScrollableRowWrapper>
    );
}

const tutorial_maiar = [
    {
        "img": require("../../assets/maiar1.png"),
        "text": "Se créer un compte: Les premières étapes"
    },
    {
        "img": require("../../assets/maiar2.png"),
        "text": "Association de votre numéro de téléphone à votre compte. Cette information sera stockée sur la blockchain mais de manière protégée et sécurisée"
    },
    {
        "img": require("../../assets/maiar3.png"),
        "text": "Création de votre code pour vous connecter sur l'application"
    },
    {
        "img": require("../../assets/maiar4.png"),
        "text": 'Cette phase est la plus importante: Cette "phrase" secrète est celle qui vous permettra de pouvoir vous connecter à l\'application Maiar depuis n\'importe quel appareil. Si vous la perdez, vous perdez vos fonds'
    },
    {
        "img": require("../../assets/maiar5.png"),
        "text": "Conservez votre phrase secrète précieusement et ne la partagez jamais ! Ensuite vous pourrez associer un pseudo à votre compte. Ce pseudo est appelé Herotag."
    },
    {
        "img": require("../../assets/maiar6.png"),
        "text": "Votre compte est désormais créé ! Il vous est alors possible d'acheter, épargner ou envoyer vos jetons via l'application. Vous voulez acheter un ticket X'PLORE ? Suivez le tutoriel suivant !"
    },
]

export const TutoMaiar = () => {
    return (
        <Panel backgroundColor="#1F2B3A" style={{ height: "auto"}}>
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