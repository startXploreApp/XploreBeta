import styled, { css, keyframes } from 'styled-components';
import { useEffect, useState } from 'react';
import Panel from '../../components/Panel';
import Column from '../../components/Column';

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
                console.log(tmp);
                let firstValue = tmp.shift();
                console.log(firstValue);
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
                        }
                    );
                });
                promise.then(setTimeout(() => {
                    document.getElementById(firstValue[1]).style.transform = 'scale(0.01)';
                    document.getElementById(firstValue[1]).style.opacity = 0.0
                    document.getElementById("carousel").animate(
                        [
                            {transform: 'translate(0)', offset: 0, width: "100%"},
                            {transform: 'translate(-20%)', offset: 0.2, width: "100%"},
                            {transform: 'translate(-20%)', offset: 1, width: "100%"}
                        ],
                        {
                            duration: 1000,
                        }
                    )
                    setTimeout(() => {
                        tmp.push(firstValue);
                        setCarouselItems(tmp);  
                        document.getElementById(firstValue[1]).style.transform = 'scale(1)';
                        document.getElementById(firstValue[1]).style.opacity = 1.0
                    }, 1000)
                }, 425));
            }, 5000);
            return () => clearInterval(timer);
        }
    }, [carouselItems]);

    return (
        <Panel style={{ alignItems: "flex-start" }}>
            <Column style={{ width: "100%" }}>
                <h3 style={{ fontSize: "1.75rem" }}>
                    Plus de 7000 personnages exclusifs
                </h3>
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
            </Column>
        </Panel>
    );
}

const CarouselWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 3rem 3rem;
    position: relative;
`;

const CarouselContentWrapper = styled.div`
    overflow: hidden;
    width: 100%;
    height: 100%;
`;

const CarouselContent = styled.div`
    width: 100%;
    height: 400px;
    display: grid;
    overflow: hidden;
    transition: all 250ms linear;
    -ms-overflow-style: none;
    scrollbar-width: none;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr;
    gap: 1rem;
`;

const CarouselItem = styled.img`
    width: 300px;
    height: 400px;
    object-fit: cover;
    justify-self: center;
    border-radius: 32px;
    transition: all 0.5s ease-in;
`;

export default NFTCarousel;