import styled, { keyframes } from "styled-components";
import { useState } from "react";

const CollapsibleCardWrapper = styled.div`
    width: 100%;
    padding: 1.5rem;
    color: white;
    background: linear-gradient(95.11deg, #12A04B -1.7%, #25313F 99.97%);
    border-radius: 1rem;
    display: flex;
    gap: 0.5rem;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    flex-direction: column;
    transition: height 1s ease-in;
    user-select: none; /* supported by Chrome and Opera */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */

    :hover {
        cursor: pointer;
    }
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
    transition: all 0.4s ease-in-out;

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
        <CollapsibleCardWrapper onClick={handleClick}>
            <CollapsibleCardHeader>
                <h6>{props.title}</h6>
                <ArrowDown collapse={isCollapsed}/>
            </CollapsibleCardHeader>
            <CollapsibleSection style={{ width: "100%", display: `${isCollapsed ? "none" : "block"}` }} collapse={isCollapsed}>
                <p>{props.content}</p>
            </CollapsibleSection>
        </CollapsibleCardWrapper>
    );
}

export default CollapsibleCard;