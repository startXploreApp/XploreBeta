import Panel from "../../components/Panel";
import Column from "../../components/Column";
import styled from "styled-components";

const VideoPlayer = styled.iframe`
    width: 50%;
    height: 80%;
    border-radius: 1rem;
    
    @media (max-width: ${({theme}) => theme.screen.large}) {
        width: 60%;
    }
    @media (max-width: ${({theme}) => theme.screen.medium}) {
        width: 90%;
        height: 60%;
    }
    @media (max-width: ${({theme}) => theme.screen.small}) {
        width: 90%;
        height: 90%;
    }
`;

const VideoPresentation = () => {
    return (
        <Panel style={{ height: "75vh", backgroundColor: "#E5E5E5" }}>
            <Column style={{ width: "100vw", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                <VideoPlayer
                    style={{ borderRadius: "1rem" }}
                    width="50%"
                    height="80%"
                    src="https://www.youtube.com/embed/tVKWiseNGUU"
                    title="Jacques Brel - Vesoul"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </VideoPlayer>
            </Column>
        </Panel>
    );
}

export default VideoPresentation;
