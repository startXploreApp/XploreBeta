import { Box } from "../../components/Box"
import Column from "../../components/Column"
import { Text } from "../../components/Titles"
import { GreyCardText, GreyCardWrapper } from "../../components/GreenCard"

export const WhyNFT = () => {
    return (
        <Column style={{ backgroundColor: "#FFF" }}>
            <h2>Des NFT, mais pourquoi ?</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", width: "100%", columnGap: "3.5rem" }}>
                <GreyCardWrapper style={{ padding: "2rem" }}>
                    <h3>Le problème</h3>
                    <GreyCardText>
                        Certaines chasses durent depuis plus de 10 ans 
                        mais le trésor n'a jamais été trouvé, on peut alors se demander s'il y a réellement un trésor.
                        <br />
                        <br />
                        Le jeu est basé sur la confiance des joueurs envers les auteurs /organisateurs.
                    </GreyCardText>
                </GreyCardWrapper>

                <GreyCardWrapper style={{ padding: "2rem" }}>
                    <h3>Notre raisonnement</h3>
                    <GreyCardText>
                        Chez X’PLORE, nous utilisons la blockchain comme une boite à outils.
                        Le NFT (token non fongible) est l’un de ces outils. 
                        <br />
                        <br />
                        Cette technologie permet de supprimer un intermédiaire de “confiance” en automatisant le processus.
                        De cette manière, n’importe qui peut vérifier que les récompenses qui attendent les joueurs sont 
                        bien bloquées au sein de contrats intelligents, tant que les joueurs ne les ont pas récupérées. 
                    </GreyCardText>
                </GreyCardWrapper>

                <GreyCardWrapper style={{ padding: "2rem" }}>
                    <h3>La solution</h3>
                    <GreyCardText>
                        Ces NFT nous permettent alors de valider la progression 
                        de chaque utilisateur et donc de vous récompenser à chaque étape de votre aventure. 
                        <br />
                        <br />
                        De plus, vous pourrez connaître l’avancée de tous les participants en 
                        temps réel grâce à la transparence qu’offre la blockchain. 
                        Chaque action (transaction) réalisée par un participant sera notée et consultable 
                        par tous les joueurs.
                    </GreyCardText>
                </GreyCardWrapper>
            </div>
        </Column>
    )
}