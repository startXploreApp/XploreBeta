import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../components/Button";
import Column from "../../components/Column";
import Panel from "../../components/Panel";
import Row from "../../components/Row";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { TeamPresentation } from "./TeamPresentation";
import { Partners } from "./Partners";
import { ContactUs } from "./ContactUs";
import ParallaxImage from "../../components/ParallaxImage";

const Team = () => {
    return (
        <>
            <Panel style={{ position: "relative" }} firstPage>
                <img alt="team" src={require("../../assets/team.png")} style={{ height: "100%", width: "100%", objectFit: "cover", position: "absolute" }} />
                <Column style={{ alignItems: "flex-start", justifyContent: "flex-end", color: "white", height: "100%", zIndex: 1 }}>
                    <h1>Découvrez notre équipe d’aventuriers</h1>
                    <Row style={{ gap: "1.5rem" }}>
                        <Button secondary onClick={() => {
                            const element = document.getElementById("our-team");
                            const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
                            const y = element.getBoundingClientRect().top + window.pageYOffset - 9*rem;
                            window.scrollTo({ "top": y, "behavior": "smooth" })
                        }}>
                            <h6>Nous découvrir</h6>
                        </Button>
                        {/* <Button primary>
                            <h6>Partir à l'aventure</h6>
                            <FontAwesomeIcon icon={faRocket} size={"xl"} />
                        </Button> */}
                    </Row>
                </Column>
            </Panel>
            <TeamPresentation />
            {/* <Partners /> */}
            <ParallaxImage />
            <ContactUs />
        </>
    );
}

export default Team;