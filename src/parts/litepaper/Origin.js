import Panel from "../../components/Panel";
import Column from "../../components/Column";
import Button from "../../components/Button";
import styled from "styled-components";
import WHITEPAPER from "../../media/whitepaper_fr.pdf";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OriginWrapper = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    @media (max-width: ${({theme}) => theme.screen.small}) {
        grid-template-columns: 1fr;
        
        img {
            display: none;
        }
    }
`;


const Origin = () => {
    return (
        <Panel id="our-origin" style={{height: "auto"}} backgroundColor="#F8F9FA">
            <OriginWrapper>
                <Column style={{ justifyContent: "center"}}>
                    <h3 style={{ fontSize: "1.75rem" }}>
                        Les origines
                    </h3>
                    <Column style={{ padding: "0" }}>
                        <p>
                            Nous sommes une équipe de passionés, des voyageurs, des aventuriers et explorateurs
                        </p>
                        <p>
                            Aujourd'hui, nous nous sommes posés une question: comment profiter de la vie ? Une réponse nous a parue évidente,
                            en voyageant ! Imaginez une vie dans laquelle vous seriez payés pour voyager à travers le monde et découvrir ses merveilles.
                            A moins de travailler pour le guide Michelin ou bien d'avoir une certaine notoriété, cela semble irréel.
                        </p>
                        <p>
                            Notre projet vous permet de vivre cela, vous rémunérer en voyageant.
                        </p>
                        <p>
                            Les rencontres, la découverte et l'imprévisible sont des choses que nous estimons importantes. Il nous semble essentiel
                        </p>
                    </Column>
                    <a href={WHITEPAPER} target="_blank" rel="noreferrer">
                        <Button primary>
                            <h6>Whitepaper</h6>
                                <FontAwesomeIcon icon={faDownload} size={"xl"} />
                        </Button>
                    </a>
                    {/* <Button primary>
                        <h6 style={{ fontWeight: "500"}}>Litepaper</h6>
                    </Button> */}
                </Column>
                <img src={require("../../assets/pexels-pixabay-161853.jpg")} style={{ width: "100%", height: "100%", objectFit: "cover"}} alt="origin" />
            </OriginWrapper>
        </Panel>
    );
}

export default Origin;