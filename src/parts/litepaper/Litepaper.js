import Panel from "../../components/Panel";
import Column from "../../components/Column";
import Missions from "./Missions";
import WhatIsXplore from "./WhatIsXplore";
import Origin from "./Origin";
import Roadmap from "./Roadmap";
import ResourceSharing from "./ResourceSharing";

const Litepaper = () => {
    return (
        <>
            <WhatIsXplore />
            <Missions />
            <Origin />
            <Panel style={{ height: "300px" }}>
                <Column style={{ padding: "0", width: "100%", height: "300px" }}>
                    <img 
                        style={{ objectPosition: "center 60%", width: "100%", height: "300px", objectFit: "cover" }}
                        src={ require("../../assets/pexels-oziel-gómez-860562.jpg") }
                        alt="4" />
                </Column>
            </Panel>
            <Roadmap />
            <ResourceSharing />
        </>
    );
}

export default Litepaper;