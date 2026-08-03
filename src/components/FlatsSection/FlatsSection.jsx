import PisoCard from '../PisoCard/PisoCard';
import flats from '../../data/dataFlats';
import './FlatsSection.css';

const MAX_FLATS_DISPLAYED = 10;

function FlatsSection() {
    const displayedFlats = flats.slice(0, MAX_FLATS_DISPLAYED);

    return (
        <section>
            <h2 className="flatsSectionTitle">ESTOS PISOS TE PUEDEN INTERESAR</h2>

            <div className="flatsSectionGrid">
                {displayedFlats.map((flat) => (
                    <PisoCard key={flat.id} {...flat} />
                ))}
            </div>
        </section>
    );
}

export default FlatsSection;
