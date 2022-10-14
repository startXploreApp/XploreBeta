import Panel from "../../components/Panel";
import Column from "../../components/Column";
import styled from "styled-components";
import Row from "../../components/Row";

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
                {/* <VideoPlayer
                    style={{ borderRadius: "1rem" }}
                    width="50%"
                    height="80%"
                    src="https://www.youtube.com/embed/tVKWiseNGUU"
                    title="Jacques Brel - Vesoul"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </VideoPlayer> */}
                <Row>
                    <img style={{ width: "55%", padding: "2rem", objectFit: "contain" }} src={require("../../assets/voyages_xplore.png")} alt="voyages" />
                    <Column style={{ width: "60%" }}>
                        <h2>Une équipe de voyageurs</h2>
                        <p>
                            lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                            lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                            lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                            lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                            lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                            lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                            lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                            lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                            lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                            lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                            lorem ipsum lorem ipsum
                        </p>
                    </Column>
                </Row>
            </Column>
        </Panel>
    );
}

export default VideoPresentation;
