
import HowToStart from "./HowToStart";
import { NoResponsability } from "./NoResponsability";
import StartGuide from "./StartGuide"
import { TutoMaiar } from "./TutoMaiar";
import { TutoTicket } from "./TutoTicket";
import WhatIsEnigma from "./WhatIsEnigma";
import { WhyNFT } from "./WhyNFT";


const HowToPlay = () => {
    return (
        <>
            <StartGuide />
            <HowToStart />
            <WhatIsEnigma />
            <WhyNFT />
            <TutoMaiar />
            <TutoTicket />
            <NoResponsability />
        </>
    );
}

export default HowToPlay;