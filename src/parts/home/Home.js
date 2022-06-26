import Panel from "../../components/Panel";
import Column from "../../components/Column";
import StartExplore from "./StartExplore";
import OnHover from "./OnHover";
import VideoPresentation from "./VideoPresentation";
import GameRules from "./GameRules";

const Home = () => {
    return (
        <>
            <StartExplore />
            <OnHover />
            <VideoPresentation />
            <GameRules />
            <Panel style={{ height: "300px" }}>
                <Column style={{ padding: "0", width: "100%", height: "300px" }}>
                    <img style={{ objectPosition: "center 70%", width: "100%", height: "300px", objectFit: "cover" }} src={ require("../../assets/pexels-oziel-gómez-860562.jpg") } alt="4"/>
                </Column>
            </Panel>
        </>
    );

}

export default Home;
