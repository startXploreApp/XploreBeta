import Panel from "../../components/Panel";
import Column from "../../components/Column";

const VideoPresentation = () => {
    return (
        <Panel style={{ height: "75vh" }}>
            <Column style={{ width: "100vw", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                <iframe
                    style={{ borderRadius: "1rem" }}
                    width="50%"
                    height="80%"
                    src="https://www.youtube.com/embed/tVKWiseNGUU"
                    title="Jacques Brel - Vesoul"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
            </Column>
        </Panel>
    );
}

export default VideoPresentation;
