import styled, { css, keyframes } from 'styled-components';
import { useEffect, useState } from 'react';
import Panel from '../../components/Panel';
import Column from '../../components/Column';
import Button from '../../components/Button';
import Row from '../../components/Row';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NFTImage from '../../components/NFTImage';

const NFTCarousel = (props) => {
    const [carouselItems, setCarouselItems] = useState(false);

    useEffect(() => {
        let tmpArray = [];
        props.images.forEach((element, index) => {
            let tmpElt = [element, `carousel-item-${index}`];
            tmpArray.push(tmpElt);
        });
        setCarouselItems(tmpArray);
    }, [props.images]);

    useEffect(() => {
        if (carouselItems) {
            const timer = setInterval(() => {
                let tmp = [...carouselItems];
                let firstValue = tmp.shift();
                let promise = new Promise((resolve, reject) => {  
                    document.getElementById(firstValue[1]).animate(
                        [
                            {
                                transform: 'scale(1)',
                                opacity: 1,
                            },
                            {
                                transform: 'scale(0.01)',
                                opacity: 0.0,
                            }
                        ],
                        {
                            duration: 450,
                            // fill: 'forwards'
                        }
                    );
                });
                promise.then(setTimeout(() => {
                    document.getElementById("carousel").animate(
                        [
                            {transform: 'translate(0)', offset: 0, width: "100%"},
                            {transform: 'translate(-20%)', offset: 0.2, width: "100%"},
                            {transform: 'translate(-20%)', offset: 1, width: "100%"}
                        ],
                        {
                            duration: 250
                        }
                    )
                    setTimeout(() => {
                        tmp.push(firstValue);
                        setCarouselItems(tmp);
                        document.getAnimations().forEach((element, index) => {
                            element.cancel();
                        })
                    }, 260)
                }, 415));
            }, 5000);
            return () => clearInterval(timer);
        }
    }, [carouselItems]);

    return (
        <Panel style={{ height: "auto", alignItems: "flex-start", backgroundColor: "#FFF"}}>
            <Column style={{ width: "100%"}}>

                <h3 style={{ fontSize: "1.75rem" }}>
                    Plus de 7000 personnages exclusifs
                </h3>

                <Column style={{ width: "100%", padding: "0", alignContent: "center", alignItems: "center"}}>
                    <CarouselContent id="carousel">
                        {
                            carouselItems ?
                            carouselItems.map( (item, index) => (
                                <CarouselItem
                                    key={item[1]}
                                    id={item[1]}
                                    src={item[0]}
                                    alt={item[1]} />
                            )) : null
                        }
                    </CarouselContent>

                    <h3>
                        Un personnage, c'est un ticket qui vous permet de participer à l'aventure
                    </h3>

                    <Row style={{ width: "100%", justifyContent: "flex-end", padding: "0 3.75rem" }}>
                        <Button secondary>
                            <p style={{ fontFamily: "Poppins", fontSize: "1rem", fontWeight: "500" }}>
                                Comment jouer ?
                            </p>
                        </Button>

                        <Button primary>
                            <p style={{ fontFamily: "Poppins", fontSize: "1rem", fontWeight: "500" }}>
                                Acheter un ticket maintenant
                            </p>

                            <FontAwesomeIcon icon={faArrowRight} size={"xl"} />
                        </Button>
                    </Row>
                </Column>
            </Column>
        </Panel>
    );
}

const CarouselContent = styled.div`
    width: 100%;
    display: grid;
    overflow: hidden;
    transition: all 250ms linear;
    -ms-overflow-style: none;
    scrollbar-width: none;
    grid-auto-flow: column;
    gap: 1rem;
`;

const CarouselItem = styled(NFTImage)`
    justify-self: center;
    height: 25rem;
`;

export default NFTCarousel;