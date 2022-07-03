import Panel from "../../components/Panel";
import Column from "../../components/Column";
import StartExplore from "./StartExplore";
import OnHover from "./OnHover";
import VideoPresentation from "./VideoPresentation";
import GameRules from "./GameRules";
import NFTCarousel from "./NFTCarousel";

const images = [
    require("../../assets/rocket_raccoon_0.jpg"),
    require("../../assets/rocket_raccoon_3.jpg"),
    require("../../assets/rocket_raccoon_2.jpg"),
    require("../../assets/rocket_raccoon_3.jpg"),
    require("../../assets/rocket_raccoon_0.jpg")
]

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
            <NFTCarousel images={images}/>
        </>
    );

}

export default Home;
