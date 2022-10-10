import styled from "styled-components";

const GreenCardWrapper = styled.div`
    display: flex;
    border-radius: 2rem;
    height: 12.5rem;
    justify-content: center;
    padding: 4rem 2rem;
    color: white;
    background: linear-gradient(95.11deg, #12A04B -1.7%, #25313F 99.97%);
    box-shadow: inset 0px -4px 32px rgba(0, 0, 0, 0.25);
    width: 22rem;
`;

export default GreenCardWrapper;


export const GreyCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5rem;
    gap: 1rem;
    background: #F8F9FA;

    box-shadow: inset 0px -4px 32px rgba(0, 0, 0, 0.25);
    border-radius: 1.5rem;
`;

export const GreyCardText = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.1rem;
    text-align: justify;

    color: rgba(0, 0, 0, 0.5);
`;