import styled from "styled-components";
import Row from "../../components/Row";
import Panel from "../../components/Panel";
import Column from "../../components/Column";

const RoadmapQ = styled.h3`
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 1.75rem;
    line-height: 2.625rem;
    background: ${props => props.gradient ?
        "linear-gradient(95.11deg, #12A04B -1.7%, #25313F 99.97%)" :
        "#111113"
    };
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    justify-self: center;
    align-self: center;
`;

const RoadmapWrapper = styled(Column)`
    width: 85%;

    @media (max-width: ${({theme}) => theme.screen.small}) {
        width: 100%;
    }
`;

const RoadmapCard = styled.div`
    color: #F8F9FA;
    width: 50vw;
    z-index: 2;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 1.25rem;
    padding-bottom: 2.5rem;
    gap: 0.5rem;
    background: ${props => props.gradient ? 
        "linear-gradient(95.11deg, #12A04B -1.7%, #25313F 99.97%)" :
        "#1F2B3A"
    };
    border-radius: 2rem;
    justify-self: center;
    align-self: center;
`;

const roadmap = {
    "2022": [
        {
            "title": "Q2",
            "content": [
                "Mise en place des règles",
                "Analyse du marché",
                "Mise en place d'un site",
                "Mise en place des visuels NFT"
            ],
            "gradient": true
        },
        {
            "title": "Q3",
            "content": [
                "Marketing & Community growth",
                "Mise en place de la Marketplace V1 (POC, achat seulement)",
                "Finaliser les designs des NFTs",
                "Installation QRCode (Rennes POC)",
                "Mise en place des énigmes (Rennes)"
            ],
            "gradient": false
        },
        {
            "title": "Q4",
            "content": [
                "Proof of concept Rennes",
                "Marketplace V2 (Revente)",
                "Lancement de l'application web",
                "Finalisation des énigmes Edition 1"
            ],
            "gradient": false
        }
    ],
    "2023": [
        {
            "title": "Q1",
            "content": [
                "Audit des smart-contracts",
                "Génération des NFT",
                "Marketing V2 & hyper growth",
                "Présentation des partenaires",
                "Installation des QR Codes",
                "Début de la vente des tickets"
            ],
            "gradient": false
        },
        {
            "title": "Q2",
            "content": [
                "Final push des ventes",
                "Préparation au lancement du jeu",
                "Annonce de la date de départ"
            ]
        }
    ]
}

const Roadmap = () => {
    return (
        <Panel backgroundColor="#fff" style={{ position: "relative", height: "auto" }}>
            <img 
                style={{ zIndex: "0", position: "absolute", top: "0", right: "4%" }}
                src={require("../../assets/red_path.svg").default}
                alt="red_path" />
            <img 
                style={{ zIndex: "1", position: "absolute", top: "0", right: "4%" }}
                src={require("../../assets/green_path.svg").default}
                alt="green_path" />
            <RoadmapWrapper>
                <h3>Roadmap</h3>
                <Column style={{ width: "100% ", padding: "0"}}>
                    <h2>2022</h2>
                    <div style={{ width: "100%", display: "grid", gridTemplateColumns: "1fr 4fr", gridTemplateRows: "repeat(3, 1fr)" }}>
                        { roadmap["2022"].map(roadmap_element => (
                            <>
                            <Row style={{ justifyContent: "center" }}>
                                <img 
                                    src={roadmap_element.gradient ?
                                        require("../../assets/green_cross.svg").default :
                                        require("../../assets/black_cross.svg").default
                                    } 
                                    alt="cross" />
                                <RoadmapQ gradient={roadmap_element.gradient}>
                                    {roadmap_element.title}
                                </RoadmapQ>
                            </Row>
                            <RoadmapCard gradient={roadmap_element.gradient}>
                                <h6>
                                {roadmap_element.content.map(roadmap_subtitle => (
                                    [roadmap_subtitle, <br/>]
                                ))}
                                </h6>
                            </RoadmapCard>
                            </>
                        ))}
                    </div>
                    <h2>2023</h2>
                    <div style={{ width: "100%", display: "grid", gridTemplateColumns: "1fr 4fr", gridTemplateRows: "repeat(2, 1fr)" }}>
                        { roadmap["2023"].map(roadmap_element => (
                            <>
                            <Row style={{ justifyContent: "center" }}>
                                <img 
                                    src={roadmap_element.gradient ?
                                        require("../../assets/green_cross.svg").default :
                                        require("../../assets/black_cross.svg").default
                                    } 
                                    alt="cross" />
                                <RoadmapQ gradient={roadmap_element.gradient}>
                                    {roadmap_element.title}
                                </RoadmapQ>
                            </Row>
                            <RoadmapCard gradient={roadmap_element.gradient}>
                                <h6>
                                {roadmap_element.content.map(roadmap_subtitle => (
                                    [roadmap_subtitle, <br/>]
                                ))}
                                </h6>
                            </RoadmapCard>
                            </>
                        ))}
                    </div>
                </Column>
            </RoadmapWrapper>
        </Panel>
    );
}

export default Roadmap;