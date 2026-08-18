import CardFlat from "../components/cardflat/CardFlat";
import flats from "../data/dataFlats";
import "./Flats.css";

function Flats() {
    return (
        <section className="flatsPage">
            <h1 className="flatsPageTitle">Pisos disponibles</h1>

            <div className="flatsPageGrid">
                {flats.map((flat) => (
                    <CardFlat
                        key={flat.id}
                        image={flat.image}
                        price={flat.price}
                        title={flat.title}
                        distance={flat.distance}
                        services={flat.services}
                    />
                ))}
            </div>
        </section>
    );
}

export default Flats;