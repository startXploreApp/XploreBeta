import Panel from "../../components/Panel";
import Row from "../../components/Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarth, faPeopleCarryBox} from "@fortawesome/free-solid-svg-icons";
import ExpandColumn, { ExpandColumnContentWrapper, ExpandColumnWrapper } from "../../components/ExpandColumn";

const OnHover = () => {
    return (
        <Panel style={{ height: "auto" }}>
            <Row style={{ width: "100%", height: "100%" }}>
                <ExpandColumnWrapper>

                    <ExpandColumn style={{ position: "relative" }}>
                        <div className="imgWrapper" style={{ position: "absolute", width: "100%", height: "100vh", backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))" }} >
                            <img
                                src={ require("../../assets/on_hover_1.jpg") } 
                                style={{ zIndex: "-1", position: "absolute", width: "100%", height: "100vh", top: "0", left: "0", objectFit: "cover" }} />
                        </div>

                        <ExpandColumnContentWrapper style={{ zIndex: "1"}}>
                            <FontAwesomeIcon icon={faEarth} color="#FFFFF1" size="5x" />
                            <h3>
                                Découvrez<br/>votre pays
                            </h3>
                            <p style={{ fontFamily: "Inter", fontSize: "1rem", textAlign: "center" }}>
                                Partez à la découverte de votre pays à travers des enigmes étonnantes vous faisant visiter de nouveaux lieux.
                            </p>
                        </ExpandColumnContentWrapper>
                    </ExpandColumn>

                    <ExpandColumn style={{ position: "relative" }}>
                        <div className="imgWrapper" style={{ position: "absolute", width: "100%", height: "100vh", backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))" }} >
                            <img
                                src={ require("../../assets/on_hover_2.jpg") }
                                style={{ zIndex: "-1", position: "absolute", width: "100%", height: "100vh", top: "0", left: "0", objectFit: "cover" }} />
                        </div>

                        <ExpandColumnContentWrapper style={{ zIndex: "1"}}>
                            <FontAwesomeIcon icon={faPeopleCarryBox} color="#FFFFF1" size="5x" />
                            <h3>
                                Développez vos<br />relations sociales
                            </h3>
                            <p style={{ fontFamily: "Inter", fontSize: "1rem", textAlign: "center" }}>
                                Rencontrez de nouvelles personnes lors de vos sorties et intéregissez avec elles pour résoudre les énigmes.
                            </p>
                        </ExpandColumnContentWrapper>
                    </ExpandColumn>

                    <ExpandColumn style={{ position: "relative" }}>
                        <div className="imgWrapper" style={{ position: "absolute", width: "100%", height: "100vh", backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))" }} >
                            <img
                                src={ require("../../assets/on_hover_3.jpg") } 
                                style={{ zIndex: "-1", position: "absolute", width: "100%", height: "100vh", top: "0", left: "0", objectFit: "cover" }} />
                        </div>

                        <ExpandColumnContentWrapper style={{ zIndex: "1"}}>
                            <img src={require("../../assets/treasure-chest.svg").default} alt="treasure" />
                            {/* <FontAwesomeIcon icon={faEarth} color="#FFFFF1" size="5x" /> */}
                            <h3 style={{ textAlign: "center" }}>
                                Soyez<br/>récompensé
                            </h3>
                            <p style={{ fontFamily: "Inter", fontSize: "1rem", textAlign: "center" }}>
                                Trouvez les points d’intérêts pour continuer l’aventure et remportez un prix à chaque étape, peut-être mettrez-vous la main sur le trésor final !
                            </p>
                        </ExpandColumnContentWrapper>
                    </ExpandColumn>

                </ExpandColumnWrapper>
            </Row>
        </Panel>
    );
}

export default OnHover;
