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

const MapWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 60% 40%;
    justify-content: center;
    justify-items: center;
    align-items: center;

    @media (max-width: ${({theme}) => theme.screen.medium}) {
        grid-template-columns: 1fr;
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
                <MapWrapper>
                    <img style={{ width: "100%", padding: "2rem", objectFit: "contain" }} src={require("../../assets/voyages_xplore.png")} alt="voyages" />
                    <Column style={{ width: "100%" }}>
                        <h2>Une équipe de voyageurs</h2>
                        <p>
                            En Inde, au Pakistan, en Floride et au Québec, du soleil levant Japonais au soleil couchant Californien, 
                            chaque point de cette carte représente un voyage fait par l'un des membres de l'équipe X'Plore.
                            <br />
                            <br />
                            Seul ou entre amis, devenez des X'Plorer en participant à la plus grande chasse au trésor du monde et,
                            à votre tour, ajoutez un point sur la carte !
                        </p>
                    </Column>
                </MapWrapper>
            </Column>
        </Panel>
    );
}

export default VideoPresentation;
