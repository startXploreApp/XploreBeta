import Panel from "../../components/Panel";
import Column from "../../components/Column";
import Button from "../../components/Button";

const Origin = () => {
    return (
        <Panel style={{height: "auto"}} backgroundColor="#F8F9FA">
            <div style={{ display: "grid", gridTemplateColumns: "50% 50%"}}>
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
                    <Button primary>
                        <h6 style={{ fontWeight: "500"}}>Litepaper</h6>
                    </Button>
                </Column>
                <img src={require("../../assets/pexels-pixabay-161853.jpg")} style={{ width: "100%", height: "100%", objectFit: "cover"}} alt="origin" />
            </div>
        </Panel>
    );
}

export default Origin;