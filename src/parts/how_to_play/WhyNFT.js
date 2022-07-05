import { Box } from "../../components/Box"
import Column from "../../components/Column"
import { Text } from "../../components/Titles"

export const WhyNFT = () => {
    return (
        <Column style={{ backgroundColor: "#FFF" }}>
            <h2>Des NFT, mais pourquoi ?</h2>
            <Column style={{ width: "100%" }}>
                <div style={{ width: "100%", rowGap: "1rem", columnGap: "1rem", display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1" }}>
                    <Box style={{ justifyContent: "center" }}>
                        <Text>
                            Chez X’PLORE, nous utilisons la blockchain comme une boite à outils.
                        </Text>
                    </Box>
                    <Box style={{ justifyContent: "center" }}>
                        <Text>Le NFT (token non fongible) est l’un d’entre eux. </Text>
                    </Box>
                    <Box style={{ justifyContent: "center" }}>
                        <Text>
                            Il nous permet de valider la progression de chaque utilisateur et donc de vous récompenser à chaque étape de votre aventure.
                        </Text>
                    </Box>
                    <Box style={{ justifyContent: "center" }}>
                        <Text>De plus, vous pourrez connaître l’avancée de tous les participants en temps réel grâce à la transparance qu’offre la blockchain.</Text>
                    </Box>
                </div>
            </Column>
        </Column>
    )
}