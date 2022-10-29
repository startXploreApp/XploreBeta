import Panel from "../../components/Panel";
import Column from "../../components/Column";
import StartExplore from "./StartExplore";
import OnHover from "./OnHover";
import VideoPresentation from "./VideoPresentation";
import GameRules from "./GameRules";
import NFTCarousel from "./NFTCarousel";
import QuestionPlease from "./QuestionPlease";
import Partners from "./Partners";
import NewsLetter from "../newsletter/Newsletter";
import Footer from "../footer/Footer";
import ParallaxImage from "../../components/ParallaxImage";

const gars_sac = require("../../assets/gars_sac.jpg");

const images = [
    require("../../assets/rocket_raccoon_0.jpg"),
    require("../../assets/rocket_raccoon_3.jpg"),
    require("../../assets/rocket_raccoon_2.jpg"),
    require("../../assets/rocket_raccoon_3.jpg"),
    require("../../assets/rocket_raccoon_0.jpg")
]

const partners = [
    require("../../assets/elrond_logo.png"),
    require("../../assets/elrond_logo.png"),
    require("../../assets/elrond_logo.png"),
    require("../../assets/elrond_logo.png"),
    require("../../assets/elrond_logo.png")
]

const Home = ({ setCurrentPage }) => {
    return (
        <>
            <StartExplore />
            <VideoPresentation />
            <OnHover />
            <GameRules setCurrentPage={setCurrentPage} />
            <ParallaxImage />
            {/* <NFTCarousel images={images} /> */}
            <QuestionPlease image={require("../../assets/rocket_raccoon_0.jpg")}/>
            {/* <Partners partners={partners} /> */}
        </>
    );

}

export default Home;
