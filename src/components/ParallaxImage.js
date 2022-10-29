import styled from "styled-components";

const gars_sac = require("../assets/gars_sac.jpg");

const ParallaxWrapper = styled.div`
    width: 100%;
    height: ${props => props.height};
    background-attachment: fixed;
    background-image: ${props => `url(${props.image})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    @media (max-width: ${({theme}) => theme.screen.small}) {
        background-attachment: scroll;
        background-position: 70%;
        background-size: cover;
        background-repeat: unset;
    }
`;

const ParallaxImage = ({ height="300px", image=gars_sac }) => {
    return (
        <ParallaxWrapper height={height} image={image} />
    );
}

export default ParallaxImage;