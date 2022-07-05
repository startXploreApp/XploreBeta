import Column from "../../components/Column"
import { Text } from "../../components/Titles"

export const NoResponsability = () => {
    return (<Column style={{ backgroundColor: "#FFF" }}>
        <h2>Avis de non-responsabilité</h2>
        <Text light>
            X’Plore est un jeu d’aventure proposant une chasse aux trésors. Les informations contenues dans ou fournies à partir de ou par le biais de ce site Web ne sont pas destinées à être et ne constituent pas des conseils financiers, des conseils d’investissement, ou tout autre conseil.
            Les informations de ce site Web, sont fournies à des fins informatives et de divertissement uniquement, sans aucune garantie expresse ou implicite de quelque nature que ce soit.
            Vous comprenez que vous utilisez toutes les informations disponibles sur ou via ce site à vos propres risques.
        </Text>
    </Column>)
}