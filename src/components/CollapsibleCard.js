import styled, { keyframes } from "styled-components";
import { useState } from "react";

const CollapsibleCardWrapper = styled.div`
    width: 100%;
    padding: 1.5rem;
    color: white;
    background: linear-gradient(95.11deg, #12A04B -1.7%, #25313F 99.97%);
    border-radius: 16px;
    display: flex;
    gap: 0.5rem;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    flex-direction: column;
    transition: height 1s ease-in;
`;

const CollapsibleCardHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
`;

const Arrow = styled.div`
    border: solid white;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    transition: all 0.7s ease-in-out;

    &:hover {
        cursor: pointer;
    }
`;

const ArrowDown = styled(Arrow)`
    transform: ${props => props.collapse ? "rotate(45deg)" : "rotate(-135deg)"};
    -webkit-transform: ${props => props.collapse ? "rotate(45deg)" : "rotate(-135deg)"};
`;

const CollapsibleSection = styled.div`
    visibility: ${props => props.collapse ? "hidden" : "visible"};
    height: auto;
    transition: visibility 2s ease-in forwards;
`;


const CollapsibleCard = (props) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const handleClick = (event) => {
        setIsCollapsed((prevState) => !prevState);
    }

    return(
        <CollapsibleCardWrapper>
            <CollapsibleCardHeader>
                <h6>{props.title}</h6>
                <ArrowDown collapse={isCollapsed} onClick={handleClick}/>
            </CollapsibleCardHeader>
            <CollapsibleSection style={{ display: `${isCollapsed ? "none" : "block"}` }} collapse={isCollapsed}>
                <p>{props.content}</p>
            </CollapsibleSection>
        </CollapsibleCardWrapper>
    );
}

export default CollapsibleCard;