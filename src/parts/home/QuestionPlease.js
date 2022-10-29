import styled from "styled-components";
import CollapsibleCard from "../../components/CollapsibleCard";
import Column from "../../components/Column";
import NFTImage from "../../components/NFTImage";
import Panel from "../../components/Panel";

const questions = [
    {
        "title": "Quel est le but du jeu ?",
        "response": "X'Plore est une chasse au trésor, le but du jeu est simple, trouver le trésor ! \
            Pour cela vous devrez chercher les points d'intérêt et leur QR code associé et cela, à travers toute la France."
    },
    {
        "title": "Comment va se dérouler la chasse au trésor ?",
        "response": "La chasse au trésor commencera par la vente des 7350 tickets d'entrées. \
            Une fois ces tickets vendus, une date de départ sera communiquée. \
            Chaque propriétaire de ticket recevra la première énigme le jour du lancement et l'aventure \
            commencera. L'énigme sera considérée comme résolue une fois que l'utilisateur aura trouvé \
            son QR code associé. Il pourra alors le scanner pour achever l’énigme et ainsi récupérer la \
            suivante. D'une énigme à l'autre, le joueur sera amené à visiter sa ville, sa région et son \
            pays"
    },
    {
        "title": "Quels sont les trésors mis en jeu ?",
        "response": "X'Plore propose un système de récompense graduel. \
            Toutes les 5 énigmes l'utilisateur arrive à la fin de ce qu'on appelle une phase. \
            Si le joueur fait parti des 10% les plus rapides à avoir achevé une phase, \
            il recevra alors un ticket sous forme de NFT lui permettant de poursuivre ainsi qu'une récompense en jetons EGLD. \
            Concernant le trésor final, la personne qui le gagnera obtiendra un ticket NFT spécial ainsi \
            qu'une énorme récompense en jetons EGLD."
    },
    {
        "title": "Comment fonctionne les énigmes ?",
        "response": "Les énigmes sont conçues pour faire voyager les joueurs. \
            Chaque énigme vous amènera vers un point d'intérêt proche duquel sera caché un QR code. \
            C'est grâce à ce QR code que vous pourrez avancer dans le jeu."
    },
    {
        "title": "Quel matériel est nécessaire ?",
        "response": "Aucun matériel particulier n'est nécessaire, \
            un simple téléphone avec un wallet (portefeuille) Maiar d'installé suffira pour jouer, \
            à terme nous aurons notre propre application mobile."
    },
    {
        "title": "Comment puis-je participer ?",
        "response": "Il vous suffit de suivre le projet pour savoir quand la vente des tickets commencera. \
            Il vous faudra ensuite acheter un ticket et attendre le départ"
    },
    {
        "title": "Quand débutera le jeu ?",
        "response": "Le jeu débutera suite à la vente des tickets. \
            Un sondage sera mis en place auprès de l'ensemble des propriétaires de tickets. \
            La date ayant le plus de voix sera choisie comme date de départ."
    },
    {
        "title": "Est-ce que je peux jouer en équipe ?",
        "response": "Oui, nous incitons même à ce que des équipes se forment autour d'un seul ticket, \
            afin que vous puissiez partager cette expérience unique avec vos amis, \
            votre famille ou même avec d'autres X'plorers."
    },
    {
        "title": "Comment fonctionne le système de Snapshot ?",
        "response": "Un snapshot aura lieu avant le début des ventes. \
            Un snapshot est une sauvegarde de l'état d'un système à un instant donné. \
            Cela nous permettra de connaître le prix précis du ticket en jetons EGLD. \
            Ce dernier aura une valeur équivalente à 100 euros au moment du snapshot. \
            Par exemple, si 1 EGLD vaut 200 euros au moment du snapshot le ticket d'entrée vaudra 0.5 jetons EGLD."
    },
    {
        "title": "Pourquoi l'écosystème Elrond ?",
        "response": "Nous avons choisi l'écosystème Elrond pour ses valeurs à savoir la transparence et la communication. \
            Pour créer de la confiance, il est indispensable de communiquer ouvertement sur le succès \
            mais aussi sur les échecs et c'est ce qu'à réaliser Elrond à travers ces deux dernières années. \
            Nous partageons également avec Elrond la volonté de démocratiser et de simplifier la technologie Blockchain. \
            De note côté, nous utilisons cette dernière comme un outil pour proposer une expérience unique à notre public."
    }
]

const QuestionCardNFT = styled(NFTImage)`
    justify-self: center;
    @media (max-width: ${({theme}) => theme.screen.medium}) {
        display: none;
    }
`;

const QuestionCardWrapper = styled.div`
    display: grid;
    width: 100%;
    /* grid-template-columns: 80% 20%; */
    grid-template-columns: 100%;
    align-items: flex-start;
    grid-gap: 1.5rem;
`;

const QuestionPlease = (props) => {
    return(
        <Panel style={{ height: "auto", backgroundColor: "#1F2B3A", alignItems: "flex-start"}}>
            <Column style={{ width: "100%" }}>
                <h3 style={{ lineHeight: "42px", fontWeight: "700", fontFamily: "Poppins", color: "white" }}>Questions fréquentes</h3>
                <QuestionCardWrapper>
                    <Column style={{ padding: "0", gap: "0.75rem", width: "100%" }}>
                        { questions.map((item, index) => (
                            <CollapsibleCard key={index} title={item.title} content={item.response} />
                        ))}
                    </Column>
                    {/* <QuestionCardNFT src={props.image} alt="IMAGE FAQ" /> */}
                </QuestionCardWrapper>
            </Column>
        </Panel>
    );
}

export default QuestionPlease;