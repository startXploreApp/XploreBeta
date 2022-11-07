import Column from '../../components/Column';
import Row from '../../components/Row';
import Button from '../../components/Button';
import { GreenLine } from '../../components/GreenTitle';
import Panel from '../../components/Panel';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import styled from 'styled-components';


const WhatIsXploreWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 40% 60%;
    @media (max-width: ${({theme}) => theme.screen.large}) {
        grid-template-columns: 50% 50%;
    }
    @media (max-width: ${({theme}) => theme.screen.small}) {
        grid-template-columns: 1fr;
        h1 {
            width: max-content;
            font-size: 3rem;
        }
        img {
            display: none;
        }
    }
`;

const WhatIsXplore = () => {
    return (
        <Panel firstPage backgroundColor="#F8F9FA" >
            <WhatIsXploreWrapper>
                <Column style={{ height: "100%", justifyContent: "space-evenly" }}>
                    <Column style={{width: "100%", padding: "0"}}>
                        <GreenLine style={{ margin: "0", width: "calc(100% + 3.75rem)" }} />
                        <h1 
                            style={{
                                color: "#1FCE55", 
                                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}>
                            X'plore c'est quoi ?
                        </h1>
                        <GreenLine style={{ width: "calc(100% + 3.75rem)" }} position="right" />
                    </Column>
                    <Column style={{ padding: "0" }}>
                        <h5>
                            Une chasse au trésor à la découverte du monde <br/>
                            Une aventure unique et récompensée <br />
                            L'éducation à la blockchain <br/>
                            Une équipe de passionnés <br/>                            
                        </h5>
                        <Row style={{ gap: "1.5rem" }}>
                            <Button onClick={() => {
                                const element = document.getElementById("our-origin");
                                const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
                                let y = 0;
                                if (window.scrollY > 0) {
                                    y = element.getBoundingClientRect().top + window.pageYOffset - 5*rem;
                                } else {
                                    y = element.getBoundingClientRect().top + window.pageYOffset - 9*rem;
                                }
                                window.scrollTo({ "top": y, "behavior": "smooth" })
                            }}>
                                <h6>En savoir plus</h6>
                            </Button>
                            {/* <Button primary>
                                <h6>Partir à l'aventure</h6>
                                <FontAwesomeIcon icon={faRocket} size={"xl"} />
                            </Button> */}
                        </Row>
                    </Column>
                </Column>
                <img
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    src={require("../../assets/litepaper.jpg")}
                    alt="litepaper"/>
            </WhatIsXploreWrapper>
        </Panel>
    );
}

export default WhatIsXplore;