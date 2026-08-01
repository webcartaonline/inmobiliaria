import '../cardFlats/cardFlats.css';

function PisoCard({ image, price, title, distance, services }) {
    return (
        <article className="card">
            <div className="imageWrapper">
                <img className="image" src={image} alt={title} />
                <span className="price">{price}</span>
            </div>

            <div className="info">
                <h3 className="title">{title}</h3>

                <p className="distance">
                    {distance}
                </p>

                <ul className="services">
                    {services.map((service) => (
                        <li key={service} className="service">
                            {service}
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    );
}

export default PisoCard;