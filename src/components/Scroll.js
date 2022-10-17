import { useEffect, useRef } from "react";
import styled from "styled-components";
import Row from "./Row";


export const ScrollElementWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    box-sizing: content-box;
    padding: 2.5rem 3.75rem;
    gap: 2rem;
    user-select: none; /* supported by Chrome and Opera */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    

    img {
        transition: all 0.2s ease-in;
        :hover {
            transform: scale(1.05);
        }
    }
`;


export const ScrollableRowWrapper = styled(Row)`
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


const ScrollableRow = ({ style, children }) => {
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
        <ScrollableRowWrapper style={{...style}} ref={ref}>
            { children }
        </ScrollableRowWrapper>
    );
}

export default ScrollableRow;