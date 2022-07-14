import styled from "styled-components";
import CollapsibleCard from "../../components/CollapsibleCard";
import Column from "../../components/Column";
import NFTImage from "../../components/NFTImage";
import Panel from "../../components/Panel";

const questions = [
    {
        "title": "Quel est le but du jeu ?",
        "response": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper viverra elit, et suscipit ligula egestas vel. Suspendisse ornare quis ipsum ut pulvinar. Nulla sed posuere mi, in ultrices mauris. Nunc tempor ipsum eget viverra convallis. Mauris at lacus nec leo sodales hendrerit a quis enim. Duis pulvinar in diam vitae viverra. Curabitur et est nibh. Mauris sed efficitur quam, at congue quam. Nunc tortor orci, elementum vel urna at, dapibus cursus risus. Morbi ultricies, lorem in venenatis porta, mi risus hendrerit magna, id faucibus enim leo eget elit. Aenean posuere auctor consectetur. Sed commodo rutrum leo, efficitur consectetur mauris condimentum sit amet. Vivamus aliquam vulputate odio, ut ornare velit. Etiam finibus sapien id orci commodo congue. "
    },
    {
        "title": "Comment va se dérouler la chasse au trésor ?",
        "response": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper viverra elit, et suscipit ligula egestas vel. Suspendisse ornare quis ipsum ut pulvinar. Nulla sed posuere mi, in ultrices mauris. Nunc tempor ipsum eget viverra convallis. Mauris at lacus nec leo sodales hendrerit a quis enim. Duis pulvinar in diam vitae viverra. Curabitur et est nibh. Mauris sed efficitur quam, at congue quam. Nunc tortor orci, elementum vel urna at, dapibus cursus risus. Morbi ultricies, lorem in venenatis porta, mi risus hendrerit magna, id faucibus enim leo eget elit. Aenean posuere auctor consectetur. Sed commodo rutrum leo, efficitur consectetur mauris condimentum sit amet. Vivamus aliquam vulputate odio, ut ornare velit. Etiam finibus sapien id orci commodo congue. "
    },
    {
        "title": "Quels sont les trésors mis en jeu ?",
        "response": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper viverra elit, et suscipit ligula egestas vel. Suspendisse ornare quis ipsum ut pulvinar. Nulla sed posuere mi, in ultrices mauris. Nunc tempor ipsum eget viverra convallis. Mauris at lacus nec leo sodales hendrerit a quis enim. Duis pulvinar in diam vitae viverra. Curabitur et est nibh. Mauris sed efficitur quam, at congue quam. Nunc tortor orci, elementum vel urna at, dapibus cursus risus. Morbi ultricies, lorem in venenatis porta, mi risus hendrerit magna, id faucibus enim leo eget elit. Aenean posuere auctor consectetur. Sed commodo rutrum leo, efficitur consectetur mauris condimentum sit amet. Vivamus aliquam vulputate odio, ut ornare velit. Etiam finibus sapien id orci commodo congue. "
    },
    {
        "title": "Comment fonctionne les énigmes ?",
        "response": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper viverra elit, et suscipit ligula egestas vel. Suspendisse ornare quis ipsum ut pulvinar. Nulla sed posuere mi, in ultrices mauris. Nunc tempor ipsum eget viverra convallis. Mauris at lacus nec leo sodales hendrerit a quis enim. Duis pulvinar in diam vitae viverra. Curabitur et est nibh. Mauris sed efficitur quam, at congue quam. Nunc tortor orci, elementum vel urna at, dapibus cursus risus. Morbi ultricies, lorem in venenatis porta, mi risus hendrerit magna, id faucibus enim leo eget elit. Aenean posuere auctor consectetur. Sed commodo rutrum leo, efficitur consectetur mauris condimentum sit amet. Vivamus aliquam vulputate odio, ut ornare velit. Etiam finibus sapien id orci commodo congue. "
    },
    {
        "title": "Quel matériel est nécessaire ?",
        "response": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper viverra elit, et suscipit ligula egestas vel. Suspendisse ornare quis ipsum ut pulvinar. Nulla sed posuere mi, in ultrices mauris. Nunc tempor ipsum eget viverra convallis. Mauris at lacus nec leo sodales hendrerit a quis enim. Duis pulvinar in diam vitae viverra. Curabitur et est nibh. Mauris sed efficitur quam, at congue quam. Nunc tortor orci, elementum vel urna at, dapibus cursus risus. Morbi ultricies, lorem in venenatis porta, mi risus hendrerit magna, id faucibus enim leo eget elit. Aenean posuere auctor consectetur. Sed commodo rutrum leo, efficitur consectetur mauris condimentum sit amet. Vivamus aliquam vulputate odio, ut ornare velit. Etiam finibus sapien id orci commodo congue. "
    }
]

const QuestionPlease = (props) => {
    return(
        <Panel style={{ height: "auto", backgroundColor: "#1F2B3A", alignItems: "flex-start"}}>
            <Column style={{ width: "100%" }}>
                <h3 style={{ lineHeight: "42px", fontWeight: "700", fontFamily: "Poppins", color: "white" }}>Questions fréquentes</h3>
                <QuestionCardWrapper>
                    <Column style={{ padding: "0", gap: "0.5rem", width: "100%" }}>
                        { questions.map((item, index) => (
                            <CollapsibleCard key={index} title={item.title} content={item.response} />
                        ))}
                    </Column>
                    <QuestionCardNFT src={props.image} alt="IMAGE FAQ" />
                </QuestionCardWrapper>
            </Column>
        </Panel>
    );
}

const QuestionCardNFT = styled(NFTImage)`
    justify-self: center;

    @media (max-width: ${({theme}) => theme.screen.medium}) {
        display: none;
    }
`;

const QuestionCardWrapper = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 80% 20%;
    align-items: flex-start;
    gap: 1.5rem;

    @media (max-width: ${({theme}) => theme.screen.large}) {
        grid-template-columns: 70% 30%;
    }

    @media (max-width: ${({theme}) => theme.screen.medium}) {
        grid-template-columns: 100%;
    }
`;

export default QuestionPlease;