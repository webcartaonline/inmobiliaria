import CardFlat from '../cardFlat/CardFlat';
import flats from '../../data/dataFlats';
import './FlatsSection.css';

const DEFAULT_FLATS_DISPLAYED = 10;

function FlatsSection({ limit = DEFAULT_FLATS_DISPLAYED }) {
    const displayedFlats = flats.slice(0, limit);

    return (
        <section>
            <h2 className="flatsSectionTitle">ESTOS PISOS TE PUEDEN INTERESAR</h2>

            <div className="flatsSectionGrid">
                {displayedFlats.map((flat) => (
                    <CardFlat key={flat.id} {...flat} />
                ))}
            </div>
        </section>
    );
}

export default FlatsSection;