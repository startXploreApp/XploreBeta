import styled from "styled-components";
import Row from "../../components/Row";
import Panel from "../../components/Panel";
import Column from "../../components/Column";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboardUser, faChartColumn, faImage, faQrcode, faChartArea, faC } from "@fortawesome/free-solid-svg-icons";
import ScrollableRow from "../../components/Scroll";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { faCloud } from "@fortawesome/free-solid-svg-icons";


const RoadmapCardWrapper = styled.div`
    color: #F8F9FA;
    width: 15rem;
    max-width: 15rem;
    min-width: 15rem;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
    gap: 0.5rem;
    justify-self: center;

    user-select: none; /* supported by Chrome and Opera */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
`;

const RoadmapPath = styled.img`
    user-select: none; /* supported by Chrome and Opera */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */

    @media (max-width: ${({theme}) => theme.screen.medium}) {
        display: none;
    }
`;

const Divider = styled.div`
    width: 12.5rem;
    height: 4px;
    background-color: ${props => props.backgroundColor};
`;

const RoadmapCardSubtitle = styled.p`
    font-family: "Inter";
    font-size: 1rem;
    font-weight: 500;
    color: #111113;
`;


const RoadmapCard = ({ month, year, headerColor="#1FCE55", dividerColor="#1F2B3A", icon, title, children }) => {

    return (
        <RoadmapCardWrapper>
            <Column style={{ padding: 0, gap: "1.5rem" }}>
                <Column style={{ padding: 0, gap: 0 }}>
                    <h4 style={{ fontSize: "1.5rem", color: headerColor }}>
                        { month }
                    </h4>
                    <h4 style={{ fontSize: "1.5rem", color: headerColor }}>
                        { year }
                    </h4>
                    <Divider backgroundColor={dividerColor}/>
                </Column>
                <Column style={{ padding: 0, gap: 0 }}>
                    <div style={{ display: "flex", flexDirection: "row", gap: "0.5rem", alignContent: "center", alignItems: "center" }}>
                        <FontAwesomeIcon style={{ color: "#1FCE55" }} icon={icon} size={"20px"} />
                        <h6 style={{ color: "#111113" }}>{ title }</h6>
                    </div>
                    { children }
                </Column>
            </Column>
        </RoadmapCardWrapper>
    );
}


const Roadmap = () => {
    return (
        <Panel backgroundColor="#fff" style={{ position: "relative", height: "auto" }}>
            <Column style={{ width: "100%" }}>
                <h3>Roadmap prévisionnelle</h3>
            
                <ScrollableRow style={{ alignItems: "flex-start", height: "30rem", position: "relative" }}>
                <RoadmapPath 
                    style={{ zIndex: "0", position: "absolute", bottom: "0" }}
                    src={require("../../assets/path.svg").default}
                    alt="path"
                    draggable={false} />
                    
                    <RoadmapCard 
                            month={"Novembre"}
                            year={"2022"}
                            icon={faChalkboardUser}
                            title={"Premier Proof Of Concept"}>
                        <RoadmapCardSubtitle>Alpha du jeu</RoadmapCardSubtitle>
                        <RoadmapCardSubtitle>Lieu: Rennes</RoadmapCardSubtitle>
                        <br/>
                        <RoadmapCardSubtitle>X'Plore uniquement pour 40 personnes</RoadmapCardSubtitle>
                    </RoadmapCard>

                    <RoadmapCard
                            month={"Février"}
                            year={"2023"}
                            headerColor={"#1F2B3A"}
                            dividerColor={"#1FCE55"}
                            icon={faChartColumn}
                            title={"Second Proof Of Concept"}>
                        <RoadmapCardSubtitle>Beta du jeu</RoadmapCardSubtitle>
                        <RoadmapCardSubtitle>Lieu: Nantes</RoadmapCardSubtitle>
                        <br/>
                        <RoadmapCardSubtitle>X'Plore uniquement pour 70 personnes</RoadmapCardSubtitle>
                    </RoadmapCard>

                    <RoadmapCard 
                            month={"Avril"}
                            year={"2023"}
                            icon={faImage}
                            title={"Finalisation des énigmes et tickets (NFT)"}>
                        <RoadmapCardSubtitle>Finalisation des énigmes et des visuels des tickets (NFT)</RoadmapCardSubtitle>
                    </RoadmapCard>
                    
                    <RoadmapCard
                            month={"Mai-Septembre"}
                            year={"2023"}
                            headerColor={"#1F2B3A"}
                            dividerColor={"#1FCE55"}
                            icon={faQrcode}
                            title={"Installation des QR Codes"}>
                        <RoadmapCardSubtitle>Installation des QR Codes sur les points d'intérêt</RoadmapCardSubtitle>
                    </RoadmapCard>

                    <RoadmapCard 
                            month={"Octobre"}
                            year={"2023"}
                            icon={faChartArea}
                            title={"Vente des tickets"}>
                        <RoadmapCardSubtitle>Ouverture des ventes privées de tickets (Whitelist)</RoadmapCardSubtitle>
                        <br/>
                        <RoadmapCardSubtitle>Suivies quelques jours après des ventes publiques</RoadmapCardSubtitle>
                    </RoadmapCard>

                    <RoadmapCard
                            month={"Décembre"}
                            year={"2023"}
                            headerColor={"#1F2B3A"}
                            dividerColor={"#1FCE55"}
                            icon={faChalkboardUser}
                            title={"Annonce de la date de départ"}>
                        <RoadmapCardSubtitle>Annonce de la date de départ (décidée par la communauté)</RoadmapCardSubtitle>
                    </RoadmapCard>
                

                    <RoadmapCard 
                            month={"Janvier ..."}
                            year={"2024"}
                            icon={faMoneyBill}
                            title={"Édition 1 de X'Plore"}>
                        <RoadmapCardSubtitle>Sortie du jeu X'Plore</RoadmapCardSubtitle>
                        <br/>
                        <RoadmapCardSubtitle>Lieu: France</RoadmapCardSubtitle>
                    </RoadmapCard>

                    <RoadmapCard
                            month={"Octobre"}
                            year={"2024"}
                            headerColor={"#1F2B3A"}
                            dividerColor={"#1FCE55"}
                            icon={faCloud}
                            title={"A venir"}>
                        <RoadmapCardSubtitle>Préparation de la suite (édition 2, emprunt de ticket, ...)</RoadmapCardSubtitle>
                    </RoadmapCard>
                </ScrollableRow>
            </Column>
        </Panel>
    );
}

export default Roadmap;