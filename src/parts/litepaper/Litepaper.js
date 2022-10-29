import Panel from "../../components/Panel";
import Column from "../../components/Column";
import Missions from "./Missions";
import WhatIsXplore from "./WhatIsXplore";
import Origin from "./Origin";
import Roadmap from "./Roadmap";
import ResourceSharing from "./ResourceSharing";
import ParallaxImage from "../../components/ParallaxImage";

const Litepaper = () => {
    return (
        <>
            <WhatIsXplore />
            <Missions />
            <Origin />
            <ParallaxImage />
            <Roadmap />
            <ResourceSharing />
        </>
    );
}

export default Litepaper;